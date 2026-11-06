import { Champion, ChampionBuild, Lane, MatchFeedback, AppDatabase } from '../types/lol';
import { INITIAL_CHAMPIONS, generateDefaultBuild } from '../data/championsData';
import { db } from './firebase';
import { collection, doc, getDoc, getDocs, setDoc, deleteDoc } from 'firebase/firestore';

const STORAGE_KEY = 'lol_tactical_playbook_db_v1';

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: null,
      email: null,
      emailVerified: null,
      isAnonymous: true,
      tenantId: null,
      providerInfo: []
    },
    operationType,
    path
  };
  console.warn('Firestore Operation Notice:', JSON.stringify(errInfo));
}

// Local Storage Helper for instant cache and offline resilience
function getLocalDatabase(): AppDatabase {
  if (typeof window === 'undefined') {
    return { champions: INITIAL_CHAMPIONS, builds: {}, feedbacks: [], version: 1 };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: AppDatabase = JSON.parse(raw);
      if (parsed.champions && parsed.champions.length > 0) {
        const officialMap = new Map(INITIAL_CHAMPIONS.map(c => [c.id, c]));
        parsed.champions = parsed.champions.map(c => {
          if (c.isCustom) return c;
          const official = officialMap.get(c.id);
          return official ? { ...official, lanes: c.lanes || official.lanes, primaryLane: c.primaryLane || official.primaryLane } : c;
        });

        for (const official of INITIAL_CHAMPIONS) {
          if (!parsed.champions.some(c => c.id === official.id)) {
            parsed.champions.push(official);
          }
        }
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Failed to parse localStorage db', e);
  }

  // Initial Seed
  const initialBuilds: Record<string, ChampionBuild> = {};
  for (const champ of INITIAL_CHAMPIONS) {
    for (const lane of champ.lanes) {
      initialBuilds[`${champ.id}_${lane}`] = generateDefaultBuild(champ, lane);
    }
  }

  const initialDb: AppDatabase = {
    champions: INITIAL_CHAMPIONS,
    builds: initialBuilds,
    feedbacks: [
      {
        id: 'fb_1',
        championId: 'locke',
        championName: '로크',
        lane: 'MID',
        date: new Date().toISOString().split('T')[0],
        result: 'WIN',
        kda: { kills: 14, deaths: 3, assists: 9 },
        opponentChampion: '신드라',
        earlyGameNote: '1렙 Q 견제 후 3렙에 대못 표식 맞추고 E로 진입해서 첫 솔킬 달성. 신드라 E 빠지는 타이밍을 잘 노렸음.',
        midGameNote: '바텀 6렙 로밍 성공 후 용 한타에서 적 원딜에게 궁극기 봉인 걸어 한타 대승.',
        lateGameNote: '존야의 모래시계로 적 집중 포화를 흡수하고 패시브 은빛 말뚝 평타로 적 브루저 정리.',
        keyTakeaway: '로크는 감전 쿨타임과 돌발 일격 유지 시간에만 치고 빠지는 게 핵심.',
        tags: ['신챔 로크', '솔킬', '로밍', 'MVP'],
        createdAt: Date.now() - 86400000
      }
    ],
    version: 1
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialDb));
  } catch (e) {
    console.error(e);
  }

  return initialDb;
}

function saveLocalDatabase(db: AppDatabase) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  } catch (e) {
    console.error('Failed to save to localStorage', e);
  }
}

let isCloudSynced = false;

export const api = {
  isCloudActive(): boolean {
    return isCloudSynced;
  },

  // Fetch all champions from Cloud Firestore and merge with official roster
  async getChampions(): Promise<Champion[]> {
    const localDb = getLocalDatabase();
    try {
      const championsColl = collection(db, 'champions');
      const snapshot = await getDocs(championsColl);

      if (!snapshot.empty) {
        isCloudSynced = true;
        const cloudChamps: Champion[] = [];
        snapshot.forEach(docSnap => {
          cloudChamps.push(docSnap.data() as Champion);
        });

        // Merge cloud custom champions & lane overrides with official champions
        const officialMap = new Map(INITIAL_CHAMPIONS.map(c => [c.id, { ...c }]));
        const customChamps: Champion[] = [];

        for (const item of cloudChamps) {
          if (item.isCustom) {
            customChamps.push(item);
          } else if (officialMap.has(item.id)) {
            // Apply lane overrides or notes
            const official = officialMap.get(item.id)!;
            official.lanes = item.lanes || official.lanes;
            official.primaryLane = item.primaryLane || official.primaryLane;
            if (item.notes) official.notes = item.notes;
          }
        }

        const merged = [...customChamps, ...Array.from(officialMap.values())];
        localDb.champions = merged;
        saveLocalDatabase(localDb);
        return merged;
      }
    } catch (err) {
      handleFirestoreError(err, OperationType.LIST, 'champions');
    }

    return localDb.champions;
  },

  // Add custom champion to Cloud Firestore
  async addChampion(champ: Partial<Champion>): Promise<Champion> {
    const localDb = getLocalDatabase();
    const id = champ.name?.toLowerCase().replace(/[^a-z0-9]/g, '_') || `champ_${Date.now()}`;
    const newChamp: Champion = {
      id,
      name: champ.name || champ.koreanName || 'Champion',
      koreanName: champ.koreanName || '챔피언',
      title: champ.title || '소환사의 협곡 전사',
      role: champ.role || '전사',
      lanes: champ.lanes && champ.lanes.length > 0 ? champ.lanes : ['MID'],
      primaryLane: champ.primaryLane || champ.lanes?.[0] || 'MID',
      difficulty: champ.difficulty || '보통',
      avatarUrl: champ.avatarUrl || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80',
      isCustom: true,
      notes: champ.notes || ''
    };

    localDb.champions.unshift(newChamp);
    for (const lane of newChamp.lanes) {
      const key = `${id}_${lane}`;
      if (!localDb.builds[key]) {
        localDb.builds[key] = generateDefaultBuild(newChamp, lane);
      }
    }
    saveLocalDatabase(localDb);

    // Save to Firestore cloud
    try {
      await setDoc(doc(db, 'champions', id), newChamp);
      for (const lane of newChamp.lanes) {
        const key = `${id}_${lane}`;
        const defaultBuild = localDb.builds[key] || generateDefaultBuild(newChamp, lane);
        await setDoc(doc(db, 'builds', key), defaultBuild);
      }
      isCloudSynced = true;
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, `champions/${id}`);
    }

    return newChamp;
  },

  // Update champion lanes in Cloud Firestore
  async updateChampionLanes(championId: string, lanes: Lane[], primaryLane?: Lane): Promise<Champion> {
    const localDb = getLocalDatabase();
    const champ = localDb.champions.find(c => c.id === championId);
    if (champ) {
      champ.lanes = lanes;
      champ.primaryLane = primaryLane && lanes.includes(primaryLane) ? primaryLane : lanes[0];
      for (const lane of lanes) {
        const key = `${championId}_${lane}`;
        if (!localDb.builds[key]) {
          localDb.builds[key] = generateDefaultBuild(champ, lane);
        }
      }
      saveLocalDatabase(localDb);
    }

    // Save lane changes to Firestore cloud
    try {
      await setDoc(
        doc(db, 'champions', championId),
        {
          id: championId,
          lanes,
          primaryLane: primaryLane && lanes.includes(primaryLane) ? primaryLane : lanes[0]
        },
        { merge: true }
      );
      isCloudSynced = true;
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `champions/${championId}`);
    }

    return champ || { id: championId, name: championId, koreanName: championId, title: '', role: '전사', lanes, primaryLane: primaryLane || lanes[0], difficulty: '보통', avatarUrl: '' };
  },

  // Delete custom champion from Cloud Firestore
  async deleteChampion(championId: string): Promise<void> {
    const localDb = getLocalDatabase();
    localDb.champions = localDb.champions.filter(c => c.id !== championId);
    saveLocalDatabase(localDb);

    try {
      await deleteDoc(doc(db, 'champions', championId));
      isCloudSynced = true;
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `champions/${championId}`);
    }
  },

  // Get build from Cloud Firestore
  async getBuild(championId: string, lane: Lane): Promise<ChampionBuild> {
    const upperLane = lane.toUpperCase() as Lane;
    const key = `${championId}_${upperLane}`;

    // Check Cloud Firestore first
    try {
      const buildDoc = await getDoc(doc(db, 'builds', key));
      if (buildDoc.exists()) {
        isCloudSynced = true;
        const data = buildDoc.data() as ChampionBuild;
        const localDb = getLocalDatabase();
        localDb.builds[key] = data;
        saveLocalDatabase(localDb);
        return data;
      }
    } catch (err) {
      handleFirestoreError(err, OperationType.GET, `builds/${key}`);
    }

    // Fallback: Local database or generate default
    const localDb = getLocalDatabase();
    if (localDb.builds[key]) {
      return localDb.builds[key];
    }

    const champ = localDb.champions.find(c => c.id === championId);
    if (champ) {
      const generated = generateDefaultBuild(champ, upperLane);
      localDb.builds[key] = generated;
      saveLocalDatabase(localDb);

      // Save seed to Firestore in background
      setDoc(doc(db, 'builds', key), generated).catch(e => {
        handleFirestoreError(e, OperationType.CREATE, `builds/${key}`);
      });

      return generated;
    }

    throw new Error('빌드를 찾을 수 없습니다.');
  },

  // Save build to Cloud Firestore
  async saveBuild(build: ChampionBuild): Promise<ChampionBuild> {
    const key = `${build.championId}_${build.lane.toUpperCase()}`;
    const updated = {
      ...build,
      lane: build.lane.toUpperCase() as Lane,
      lastUpdated: new Date().toISOString()
    };

    const localDb = getLocalDatabase();
    localDb.builds[key] = updated;
    saveLocalDatabase(localDb);

    // Save to Cloud Firestore
    try {
      await setDoc(doc(db, 'builds', key), updated);
      isCloudSynced = true;
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, `builds/${key}`);
    }

    return updated;
  },

  // Get feedbacks from Cloud Firestore
  async getFeedbacks(championId?: string): Promise<MatchFeedback[]> {
    try {
      const feedbacksColl = collection(db, 'feedbacks');
      const snapshot = await getDocs(feedbacksColl);

      if (!snapshot.empty) {
        isCloudSynced = true;
        const cloudFeedbacks: MatchFeedback[] = [];
        snapshot.forEach(docSnap => {
          cloudFeedbacks.push(docSnap.data() as MatchFeedback);
        });

        // Sort by createdAt descending
        cloudFeedbacks.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

        const localDb = getLocalDatabase();
        localDb.feedbacks = cloudFeedbacks;
        saveLocalDatabase(localDb);

        if (championId) {
          return cloudFeedbacks.filter(f => f.championId === championId);
        }
        return cloudFeedbacks;
      } else {
        // First run on clean Firestore: seed the sample Locke match feedback
        const localDb = getLocalDatabase();
        if (localDb.feedbacks.length > 0) {
          for (const fb of localDb.feedbacks) {
            await setDoc(doc(db, 'feedbacks', fb.id), fb);
          }
        }
      }
    } catch (err) {
      handleFirestoreError(err, OperationType.LIST, 'feedbacks');
    }

    const localDb = getLocalDatabase();
    if (championId) {
      return localDb.feedbacks.filter(f => f.championId === championId);
    }
    return localDb.feedbacks;
  },

  // Create feedback in Cloud Firestore
  async createFeedback(feedback: Omit<MatchFeedback, 'id' | 'createdAt'>): Promise<MatchFeedback> {
    const id = `fb_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    const newFeedback: MatchFeedback = {
      ...feedback,
      id,
      createdAt: Date.now()
    };

    const localDb = getLocalDatabase();
    localDb.feedbacks.unshift(newFeedback);
    saveLocalDatabase(localDb);

    // Save to Cloud Firestore
    try {
      await setDoc(doc(db, 'feedbacks', id), newFeedback);
      isCloudSynced = true;
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, `feedbacks/${id}`);
    }

    return newFeedback;
  },

  // Delete feedback from Cloud Firestore
  async deleteFeedback(id: string): Promise<void> {
    const localDb = getLocalDatabase();
    localDb.feedbacks = localDb.feedbacks.filter(f => f.id !== id);
    saveLocalDatabase(localDb);

    try {
      await deleteDoc(doc(db, 'feedbacks', id));
      isCloudSynced = true;
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `feedbacks/${id}`);
    }
  },

  // Reset to defaults
  async resetToDefaults(): Promise<void> {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    // Re-seed local state
    getLocalDatabase();
  },

  // Export full JSON database for backup
  exportDatabaseJson(): string {
    const dbData = getLocalDatabase();
    return JSON.stringify(dbData, null, 2);
  },

  // Import JSON database
  importDatabaseJson(jsonStr: string): boolean {
    try {
      const parsed: AppDatabase = JSON.parse(jsonStr);
      if (parsed.champions && Array.isArray(parsed.champions)) {
        saveLocalDatabase(parsed);
        // Also sync imported data into Cloud Firestore
        for (const champ of parsed.champions) {
          if (champ.isCustom) {
            setDoc(doc(db, 'champions', champ.id), champ).catch(console.warn);
          }
        }
        if (parsed.builds) {
          for (const [key, b] of Object.entries(parsed.builds)) {
            setDoc(doc(db, 'builds', key), b).catch(console.warn);
          }
        }
        if (parsed.feedbacks) {
          for (const fb of parsed.feedbacks) {
            setDoc(doc(db, 'feedbacks', fb.id), fb).catch(console.warn);
          }
        }
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }
};
