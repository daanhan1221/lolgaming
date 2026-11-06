import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { INITIAL_CHAMPIONS, generateDefaultBuild } from './src/data/championsData.ts';
import { AppDatabase, Champion, ChampionBuild, Lane, MatchFeedback } from './src/types/lol.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'lol_companion_db.json');

// Ensure database file exists with initial seeds
function initDatabase(): AppDatabase {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (fs.existsSync(DB_FILE)) {
    try {
      const content = fs.readFileSync(DB_FILE, 'utf-8');
      const parsed: AppDatabase = JSON.parse(content);
      if (parsed.champions && parsed.champions.length > 0) {
        // Sync official champion avatar URLs and details with latest Riot DataDragon
        const officialMap = new Map(INITIAL_CHAMPIONS.map(c => [c.id, c]));
        parsed.champions = parsed.champions.map(c => {
          if (c.isCustom) return c;
          const official = officialMap.get(c.id);
          if (official) {
            return {
              ...official,
              lanes: c.lanes || official.lanes,
              primaryLane: c.primaryLane || official.primaryLane
            };
          }
          return c;
        });

        // Ensure all 173 official champions are present
        for (const official of INITIAL_CHAMPIONS) {
          if (!parsed.champions.some(c => c.id === official.id)) {
            parsed.champions.push(official);
          }
        }

        fs.writeFileSync(DB_FILE, JSON.stringify(parsed, null, 2), 'utf-8');
        return parsed;
      }
    } catch (e) {
      console.error('Failed to parse database file, reinitializing', e);
    }
  }

  // Initial Seed
  const initialBuilds: Record<string, ChampionBuild> = {};
  for (const champ of INITIAL_CHAMPIONS) {
    for (const lane of champ.lanes) {
      const key = `${champ.id}_${lane}`;
      initialBuilds[key] = generateDefaultBuild(champ, lane);
    }
  }

  // Pre-seed a few realistic feedback match reviews
  const initialFeedbacks: MatchFeedback[] = [
    {
      id: 'fb_1',
      championId: 'locke',
      championName: '로크',
      lane: 'MID',
      date: '2026-11-03',
      result: 'WIN',
      kda: { kills: 14, deaths: 3, assists: 9 },
      opponentChampion: '신드라',
      earlyGameNote: '1렙 Q 견제 후 3렙에 대못 표식 맞추고 E로 진입해서 첫 솔킬 달성. 신드라 E 빠지는 타이밍을 잘 노렸음.',
      midGameNote: '바텀 6렙 로밍 성공 후 용 한타에서 적 원딜에게 궁극기 봉인 걸어 한타 대승.',
      lateGameNote: '존야의 모래시계로 적 집중 포화를 흡수하고 패시브 은빛 말뚝 평타로 적 브루저 정리.',
      keyTakeaway: '로크는 감전 쿨타임과 돌발 일격 유지 시간에만 치고 빠지는 게 핵심.',
      tags: ['신챔 로크', '솔킬', '로밍', 'MVP'],
      createdAt: Date.now() - 86400000
    },
    {
      id: 'fb_2',
      championId: 'lee_sin',
      championName: '리 신',
      lane: 'JUNGLE',
      date: '2026-11-02',
      result: 'WIN',
      kda: { kills: 8, deaths: 2, assists: 11 },
      opponentChampion: '자르반 4세',
      earlyGameNote: '3캠프 후 미드 찌르고 바로 바텀 갱킹 플래시 유도 성공. 상대 정글 카정으로 블루 스틸.',
      midGameNote: '전령 앞 한타에서 음파-방호 배달로 적 오리아나 토스 성공.',
      lateGameNote: '바론 시야 장악 확실히 하고 낚시 킬 캐치로 게임 마무리.',
      keyTakeaway: '음파를 맞췄다고 무조건 들어가지 말고 적 서포터 CC기 빠진 후 진입할 것.',
      tags: ['배달킥', '오브젝트 장악', '정글차이'],
      createdAt: Date.now() - 172800000
    }
  ];

  const db: AppDatabase = {
    champions: INITIAL_CHAMPIONS,
    builds: initialBuilds,
    feedbacks: initialFeedbacks,
    version: 1
  };

  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf-8');
  return db;
}

let db = initDatabase();

function saveDatabase() {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to save database to disk:', err);
  }
}

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  const isProd = process.env.NODE_ENV === 'production';

  app.use(express.json({ limit: '10mb' }));

  // Support both /api and /lolgaming/api prefixes
  app.use((req, _res, next) => {
    if (req.url.startsWith('/lolgaming/api')) {
      req.url = req.url.replace(/^\/lolgaming\/api/, '/api');
    }
    next();
  });

  // --- REST API Endpoints ---

  // Health check
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      status: 'ok',
      championsCount: db.champions.length,
      buildsCount: Object.keys(db.builds).length,
      feedbacksCount: db.feedbacks.length,
      timestamp: new Date().toISOString()
    });
  });

  // Get all champions
  app.get('/api/champions', (_req: Request, res: Response) => {
    res.json(db.champions);
  });

  // Add custom champion
  app.post('/api/champions', (req: Request, res: Response) => {
    const { name, koreanName, title, role, lanes, primaryLane, difficulty, avatarUrl, notes } = req.body;

    if (!koreanName || !name) {
      return res.status(400).json({ error: '챔피언 영문/한글 이름이 필요합니다.' });
    }

    const id = name.toLowerCase().replace(/[^a-z0-9]/g, '_') || `champ_${Date.now()}`;
    const existing = db.champions.find(c => c.id === id);
    if (existing) {
      return res.status(400).json({ error: '이미 존재하는 챔피언 ID입니다.' });
    }

    const championLanes: Lane[] = Array.isArray(lanes) && lanes.length > 0 ? lanes : ['MID'];
    const champPrimary: Lane = primaryLane || championLanes[0];

    const newChamp: Champion = {
      id,
      name,
      koreanName,
      title: title || '신규 전사',
      role: role || '전사',
      lanes: championLanes,
      primaryLane: champPrimary,
      difficulty: difficulty || '보통',
      avatarUrl: avatarUrl || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80',
      isCustom: true,
      notes: notes || '사용자 생성 커스텀 챔피언'
    };

    db.champions.unshift(newChamp);

    // Generate default builds for lanes
    for (const lane of championLanes) {
      const key = `${id}_${lane}`;
      if (!db.builds[key]) {
        db.builds[key] = generateDefaultBuild(newChamp, lane);
      }
    }

    saveDatabase();
    res.status(201).json(newChamp);
  });

  // Update champion lanes & details
  app.put('/api/champions/:id/lanes', (req: Request, res: Response) => {
    const { id } = req.params;
    const { lanes, primaryLane } = req.body;

    const champ = db.champions.find(c => c.id === id);
    if (!champ) {
      return res.status(404).json({ error: '챔피언을 찾을 수 없습니다.' });
    }

    if (Array.isArray(lanes) && lanes.length > 0) {
      champ.lanes = lanes;
      champ.primaryLane = primaryLane && lanes.includes(primaryLane) ? primaryLane : lanes[0];

      // Ensure build exists for all updated lanes
      for (const lane of champ.lanes) {
        const key = `${id}_${lane}`;
        if (!db.builds[key]) {
          db.builds[key] = generateDefaultBuild(champ, lane);
        }
      }

      saveDatabase();
    }

    res.json(champ);
  });

  // Delete custom champion
  app.delete('/api/champions/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const index = db.champions.findIndex(c => c.id === id);
    if (index === -1) {
      return res.status(404).json({ error: '챔피언을 찾을 수 없습니다.' });
    }

    if (!db.champions[index].isCustom) {
      return res.status(403).json({ error: '공식 챔피언은 삭제할 수 없습니다.' });
    }

    db.champions.splice(index, 1);
    saveDatabase();
    res.json({ success: true, message: '챔피언이 삭제되었습니다.' });
  });

  // Get build for champion & lane
  app.get('/api/builds/:champId/:lane', (req: Request, res: Response) => {
    const { champId, lane } = req.params;
    const upperLane = lane.toUpperCase() as Lane;
    const key = `${champId}_${upperLane}`;

    if (db.builds[key]) {
      return res.json(db.builds[key]);
    }

    // If not found, look up champ and auto-generate default build
    const champ = db.champions.find(c => c.id === champId);
    if (champ) {
      const defaultBuild = generateDefaultBuild(champ, upperLane);
      db.builds[key] = defaultBuild;
      saveDatabase();
      return res.json(defaultBuild);
    }

    res.status(404).json({ error: '해당 챔피언 또는 라인의 빌드를 찾을 수 없습니다.' });
  });

  // Update build for champion & lane
  app.put('/api/builds/:champId/:lane', (req: Request, res: Response) => {
    const { champId, lane } = req.params;
    const upperLane = lane.toUpperCase() as Lane;
    const key = `${champId}_${upperLane}`;

    const updatedBuildData = req.body;
    db.builds[key] = {
      ...updatedBuildData,
      championId: champId,
      lane: upperLane,
      lastUpdated: new Date().toISOString()
    };

    saveDatabase();
    res.json(db.builds[key]);
  });

  // Get feedbacks (all or filtered by championId)
  app.get('/api/feedbacks', (req: Request, res: Response) => {
    const { championId } = req.query;
    if (championId && typeof championId === 'string') {
      const filtered = db.feedbacks.filter(f => f.championId === championId);
      return res.json(filtered);
    }
    res.json(db.feedbacks);
  });

  // Create match feedback
  app.post('/api/feedbacks', (req: Request, res: Response) => {
    const {
      championId,
      championName,
      lane,
      date,
      result,
      kda,
      opponentChampion,
      earlyGameNote,
      midGameNote,
      lateGameNote,
      keyTakeaway,
      tags
    } = req.body;

    if (!championId || !result || !kda) {
      return res.status(400).json({ error: '필수 피드백 정보(챔피언, 결과, KDA)가 누락되었습니다.' });
    }

    const newFeedback: MatchFeedback = {
      id: `fb_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      championId,
      championName: championName || championId,
      lane: lane || 'MID',
      date: date || new Date().toISOString().split('T')[0],
      result: result === 'WIN' ? 'WIN' : 'LOSS',
      kda: {
        kills: Number(kda.kills) || 0,
        deaths: Number(kda.deaths) || 0,
        assists: Number(kda.assists) || 0
      },
      opponentChampion: opponentChampion || '불명',
      earlyGameNote: earlyGameNote || '',
      midGameNote: midGameNote || '',
      lateGameNote: lateGameNote || '',
      keyTakeaway: keyTakeaway || '',
      tags: Array.isArray(tags) ? tags : [],
      createdAt: Date.now()
    };

    db.feedbacks.unshift(newFeedback);
    saveDatabase();
    res.status(201).json(newFeedback);
  });

  // Delete match feedback
  app.delete('/api/feedbacks/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const index = db.feedbacks.findIndex(f => f.id === id);
    if (index === -1) {
      return res.status(404).json({ error: '해당 피드백을 찾을 수 없습니다.' });
    }

    db.feedbacks.splice(index, 1);
    saveDatabase();
    res.json({ success: true, message: '피드백이 삭제되었습니다.' });
  });

  // Reset database to initial seeds
  app.post('/api/reset', (_req: Request, res: Response) => {
    if (fs.existsSync(DB_FILE)) {
      try {
        fs.unlinkSync(DB_FILE);
      } catch (e) {
        console.error(e);
      }
    }
    db = initDatabase();
    res.json({ success: true, message: '기본 데이터로 초기화되었습니다.' });
  });

  // Frontend integration
  if (!isProd) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.use('/lolgaming', express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`LoL Companion Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
