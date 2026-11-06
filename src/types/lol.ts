export type Lane = 'TOP' | 'JUNGLE' | 'MID' | 'ADC' | 'SUPPORT';

export type ChampionRole = '전사' | '마법사' | '암살자' | '원거리 딜러' | '탱커' | '서포터';

export interface Champion {
  id: string;
  name: string;
  koreanName: string;
  title: string;
  role: ChampionRole;
  lanes: Lane[];
  primaryLane: Lane;
  difficulty: '쉬움' | '보통' | '어려움' | '매우 어려움';
  avatarUrl: string;
  isCustom?: boolean;
  notes?: string;
}

export type RunePathId = 'precision' | 'domination' | 'sorcery' | 'resolve' | 'inspiration';

export interface RuneInfo {
  id: string;
  name: string;
  englishName: string;
  description: string;
  icon: string;
}

export interface RuneSlot {
  slotIndex: number;
  runes: RuneInfo[];
}

export interface RunePath {
  id: RunePathId;
  name: string;
  englishName: string;
  color: string;
  accentColor: string;
  icon: string;
  description: string;
  keystones: RuneInfo[];
  slots: RuneSlot[];
}

export interface StatShard {
  id: string;
  name: string;
  category: 'offense' | 'flex' | 'defense';
  description: string;
  icon: string;
}

export interface RunePageSelection {
  primaryPath: RunePathId;
  keystone: string;
  primarySlot1: string;
  primarySlot2: string;
  primarySlot3: string;
  secondaryPath: RunePathId;
  secondarySlot1: string;
  secondarySlot2: string;
  shardOffense: string;
  shardFlex: string;
  shardDefense: string;
}

export interface ItemInfo {
  id: string;
  name: string;
  cost: number;
  category: 'starting' | 'boots' | 'core' | 'situational';
  description?: string;
  icon?: string;
}

export interface JungleCampStep {
  step: number;
  campName: string;
  campId: string;
  timing: string;
  x: number; // percentage on map (0-100)
  y: number; // percentage on map (0-100)
  tip: string;
  level: number;
  smiteUsed?: boolean;
}

export interface JungleRoute {
  id: string;
  name: string;
  side: 'blue' | 'red';
  strategy: '6camp' | '3camp_gank' | 'invade';
  description: string;
  estimatedTime: string;
  steps: JungleCampStep[];
}

export interface CounterChampion {
  championId: string;
  championName: string;
  difficulty: '쉬움' | '보통' | '어려움';
  tip: string;
  recommendedItem?: string;
}

export interface ChampionBuild {
  championId: string;
  lane: Lane;
  startingItems: string[];
  coreItems: string[];
  situationalItems: string[];
  spells: [string, string];
  skillOrder: string; // e.g. "Q > E > W"
  skillMaxDetail?: string[];
  runes: RunePageSelection;
  jungleRoutes?: JungleRoute[];
  selectedJungleRouteId?: string;
  counters: CounterChampion[];
  playTips: string[];
  lastUpdated: string;
}

export interface MatchFeedback {
  id: string;
  championId: string;
  championName: string;
  lane: Lane;
  date: string;
  result: 'WIN' | 'LOSS';
  kda: {
    kills: number;
    deaths: number;
    assists: number;
  };
  opponentChampion: string;
  earlyGameNote: string; // 1~14분 라인전 및 초반 실수
  midGameNote: string;   // 15~25분 오브젝트/한타 실수
  lateGameNote: string;  // 25분 이후 후반 및 마무리
  keyTakeaway: string;   // 다음 판 꼭 지킬 점
  tags: string[];
  createdAt: number;
}

export interface AppDatabase {
  champions: Champion[];
  builds: Record<string, ChampionBuild>; // key: `${champId}_${lane}`
  feedbacks: MatchFeedback[];
  version: number;
}
