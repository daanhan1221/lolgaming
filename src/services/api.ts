import { Champion, ChampionBuild, Lane, MatchFeedback, AppDatabase } from '../types/lol';
import { INITIAL_CHAMPIONS, generateDefaultBuild } from '../data/championsData';

const STORAGE_KEY = 'lol_tactical_playbook_db_v1';

// Determine API base path based on current location
function getApiBaseUrl(): string {
  if (typeof window !== 'undefined') {
    if (window.location.hostname.endsWith('github.io') || window.location.protocol === 'file:') {
      return '';
    }
    if (window.location.pathname.startsWith('/lolgaming')) {
      return '/lolgaming/api';
    }
  }
  return '/api';
}

// Local Storage Helper for GitHub Pages / Static Hosting fallback
function getLocalDatabase(): AppDatabase {
  if (typeof window === 'undefined') {
    return { champions: INITIAL_CHAMPIONS, builds: {}, feedbacks: [], version: 1 };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: AppDatabase = JSON.parse(raw);
      if (parsed.champions && parsed.champions.length > 0) {
        // Sync official image URLs if outdated
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

// Track whether backend server is responding
let isServerAvailable: boolean | null = null;

async function checkServerAvailability(): Promise<boolean> {
  if (isServerAvailable !== null) return isServerAvailable;

  // Immediate detection for GitHub Pages or static host
  if (typeof window !== 'undefined') {
    if (window.location.hostname.endsWith('github.io') || window.location.protocol === 'file:') {
      isServerAvailable = false;
      return false;
    }
  }

  try {
    const base = getApiBaseUrl();
    if (!base) {
      isServerAvailable = false;
      return false;
    }
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1000);
    const res = await fetch(`${base}/health`, { signal: controller.signal });
    clearTimeout(timeout);
    isServerAvailable = res.ok;
    return res.ok;
  } catch {
    isServerAvailable = false;
    return false;
  }
}

export const api = {
  isStaticMode(): boolean {
    return isServerAvailable === false;
  },

  // Fetch all champions
  async getChampions(): Promise<Champion[]> {
    const hasServer = await checkServerAvailability();
    if (hasServer) {
      try {
        const base = getApiBaseUrl();
        const res = await fetch(`${base}/champions`);
        if (res.ok) {
          const data = await res.json();
          // Update local cache
          const localDb = getLocalDatabase();
          localDb.champions = data;
          saveLocalDatabase(localDb);
          return data;
        }
      } catch (err) {
        console.warn('Backend fetch failed, using local storage', err);
      }
    }
    // Fallback: LocalStorage / Built-in
    return getLocalDatabase().champions;
  },

  // Add custom champion
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

    // Try server sync
    if (await checkServerAvailability()) {
      try {
        const base = getApiBaseUrl();
        await fetch(`${base}/champions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(champ)
        });
      } catch (e) {
        console.warn('Server sync failed, saved locally', e);
      }
    }

    return newChamp;
  },

  // Update champion lanes
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

    // Try server sync
    if (await checkServerAvailability()) {
      try {
        const base = getApiBaseUrl();
        await fetch(`${base}/champions/${championId}/lanes`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ lanes, primaryLane })
        });
      } catch (e) {
        console.warn('Server sync failed', e);
      }
    }

    return champ || { id: championId, name: championId, koreanName: championId, title: '', role: '전사', lanes, primaryLane: primaryLane || lanes[0], difficulty: '보통', avatarUrl: '' };
  },

  // Delete custom champion
  async deleteChampion(championId: string): Promise<void> {
    const localDb = getLocalDatabase();
    localDb.champions = localDb.champions.filter(c => c.id !== championId);
    saveLocalDatabase(localDb);

    if (await checkServerAvailability()) {
      try {
        const base = getApiBaseUrl();
        await fetch(`${base}/champions/${championId}`, { method: 'DELETE' });
      } catch (e) {
        console.warn('Server delete failed', e);
      }
    }
  },

  // Get build
  async getBuild(championId: string, lane: Lane): Promise<ChampionBuild> {
    const upperLane = lane.toUpperCase() as Lane;
    const key = `${championId}_${upperLane}`;

    if (await checkServerAvailability()) {
      try {
        const base = getApiBaseUrl();
        const res = await fetch(`${base}/builds/${championId}/${upperLane}`);
        if (res.ok) {
          const data = await res.json();
          const localDb = getLocalDatabase();
          localDb.builds[key] = data;
          saveLocalDatabase(localDb);
          return data;
        }
      } catch (e) {
        console.warn('Server build fetch failed, checking local', e);
      }
    }

    const localDb = getLocalDatabase();
    if (localDb.builds[key]) {
      return localDb.builds[key];
    }

    const champ = localDb.champions.find(c => c.id === championId);
    if (champ) {
      const generated = generateDefaultBuild(champ, upperLane);
      localDb.builds[key] = generated;
      saveLocalDatabase(localDb);
      return generated;
    }

    throw new Error('빌드를 찾을 수 없습니다.');
  },

  // Save build
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

    if (await checkServerAvailability()) {
      try {
        const base = getApiBaseUrl();
        await fetch(`${base}/builds/${build.championId}/${build.lane}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updated)
        });
      } catch (e) {
        console.warn('Server sync failed, saved locally', e);
      }
    }

    return updated;
  },

  // Get feedbacks
  async getFeedbacks(championId?: string): Promise<MatchFeedback[]> {
    if (await checkServerAvailability()) {
      try {
        const base = getApiBaseUrl();
        const url = championId ? `${base}/feedbacks?championId=${championId}` : `${base}/feedbacks`;
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          const localDb = getLocalDatabase();
          localDb.feedbacks = data;
          saveLocalDatabase(localDb);
          return data;
        }
      } catch (e) {
        console.warn('Server feedback fetch failed', e);
      }
    }

    const localDb = getLocalDatabase();
    if (championId) {
      return localDb.feedbacks.filter(f => f.championId === championId);
    }
    return localDb.feedbacks;
  },

  // Create feedback
  async createFeedback(feedback: Omit<MatchFeedback, 'id' | 'createdAt'>): Promise<MatchFeedback> {
    const newFeedback: MatchFeedback = {
      ...feedback,
      id: `fb_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      createdAt: Date.now()
    };

    const localDb = getLocalDatabase();
    localDb.feedbacks.unshift(newFeedback);
    saveLocalDatabase(localDb);

    if (await checkServerAvailability()) {
      try {
        const base = getApiBaseUrl();
        await fetch(`${base}/feedbacks`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(feedback)
        });
      } catch (e) {
        console.warn('Server sync failed, saved locally', e);
      }
    }

    return newFeedback;
  },

  // Delete feedback
  async deleteFeedback(id: string): Promise<void> {
    const localDb = getLocalDatabase();
    localDb.feedbacks = localDb.feedbacks.filter(f => f.id !== id);
    saveLocalDatabase(localDb);

    if (await checkServerAvailability()) {
      try {
        const base = getApiBaseUrl();
        await fetch(`${base}/feedbacks/${id}`, { method: 'DELETE' });
      } catch (e) {
        console.warn('Server delete failed', e);
      }
    }
  },

  // Reset all
  async resetToDefaults(): Promise<void> {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    if (await checkServerAvailability()) {
      try {
        const base = getApiBaseUrl();
        await fetch(`${base}/reset`, { method: 'POST' });
      } catch (e) {
        console.warn(e);
      }
    }
  },

  // Export full JSON database for backup
  exportDatabaseJson(): string {
    const db = getLocalDatabase();
    return JSON.stringify(db, null, 2);
  },

  // Import JSON database
  importDatabaseJson(jsonStr: string): boolean {
    try {
      const parsed: AppDatabase = JSON.parse(jsonStr);
      if (parsed.champions && Array.isArray(parsed.champions)) {
        saveLocalDatabase(parsed);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }
};
