import { Lane, RunePageSelection } from '../types/lol';

export interface OpggBuildPreset {
  spells: [string, string];
  startingItems: string[];
  coreItems: string[];
  situationalItems: string[];
  skillOrder: string;
  runes: RunePageSelection;
  counters: {
    championId: string;
    championName: string;
    difficulty: '쉬움' | '보통' | '어려움';
    tip: string;
  }[];
  playTips: string[];
}

// OP.GG KR · 에메랄드+ · 16.22 패치 최고 픽률 기준 173개 모든 챔피언 & 전 라인 정밀 메타 프리셋
export const OPGG_PRESETS: Record<string, Partial<Record<Lane, OpggBuildPreset>>> = {
  aatrox: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 방패","체력 물약"],
      coreItems: ["쇼진의 창","갈라진 하늘","죽음의 무도","판금 장화"],
      situationalItems: ["스테락의 도전","수호 천사","요우무의 유령검","맬모셔스의 아귀"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "revitalize",
        "secondarySlot2": "bone_plating",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "rengar",
                "championName": "렝가",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.1% (37게임) 매치업입니다."
        },
        {
                "championId": "quinn",
                "championName": "퀸",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.4% (52게임) 매치업입니다."
        },
        {
                "championId": "cassiopeia",
                "championName": "카시오페아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.7% (36게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 54.6%, 코어 8.9%, 룬 40.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(스테락의 도전, 수호 천사)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["벼락폭풍검","갈라진 하늘","죽음의 무도","판금 장화"],
      situationalItems: ["수호 천사","세릴다의 원한","맬모셔스의 아귀","스테락의 도전"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "lillia",
                "championName": "릴리아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 30.8% (39게임) 매치업입니다."
        },
        {
                "championId": "zyra",
                "championName": "자이라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.8% (46게임) 매치업입니다."
        },
        {
                "championId": "nocturne",
                "championName": "녹턴",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (30게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 100.0%, 코어 14.2%, 룬 54.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 세릴다의 원한)을 우선 고려하세요."
]
    },
  },
  locke: {
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["리치베인","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","폭풍 쇄도","메자이의 영혼약탈자"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "sixth_sense",
        "primarySlot3": "ultimate_hunter",
        "secondaryPath": "resolve",
        "secondarySlot1": "revitalize",
        "secondarySlot2": "bone_plating",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "katarina",
                "championName": "카타리나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.4% (490게임) 매치업입니다."
        },
        {
                "championId": "lux",
                "championName": "럭스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.2% (187게임) 매치업입니다."
        },
        {
                "championId": "yasuo",
                "championName": "야스오",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.4% (516게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 84.1%, 코어 20.0%, 룬 32.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["리치베인","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","폭풍 쇄도","메자이의 영혼약탈자"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "dark_harvest",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "sixth_sense",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "hecarim",
                "championName": "헤카림",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.8% (65게임) 매치업입니다."
        },
        {
                "championId": "khazix",
                "championName": "카직스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.9% (56게임) 매치업입니다."
        },
        {
                "championId": "masteryi",
                "championName": "마스터 이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.3% (51게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.8%, 코어 24.7%, 룬 23.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["리치베인","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","밴시의 장막","메자이의 영혼약탈자"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "sixth_sense",
        "primarySlot3": "ultimate_hunter",
        "secondaryPath": "resolve",
        "secondarySlot1": "revitalize",
        "secondarySlot2": "bone_plating",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zed",
                "championName": "상대 라이너",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 패치 기준 픽률 1위 룬과 코어 타이밍에 맞춰 교전을 설계하세요."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 84.6%, 코어 19.4%, 룬 26.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  akali: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["마법공학 총검","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","리치베인","폭풍 쇄도"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "ultimate_hunter",
        "secondaryPath": "resolve",
        "secondarySlot1": "second_wind",
        "secondarySlot2": "overgrowth",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "rengar",
                "championName": "렝가",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 28.1% (32게임) 매치업입니다."
        },
        {
                "championId": "udyr",
                "championName": "우디르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.7% (30게임) 매치업입니다."
        },
        {
                "championId": "kled",
                "championName": "클레드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.1% (105게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 84.1%, 코어 44.9%, 룬 24.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["마법공학 총검","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","메자이의 영혼약탈자","밴시의 장막"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "ultimate_hunter",
        "secondaryPath": "resolve",
        "secondarySlot1": "second_wind",
        "secondarySlot2": "overgrowth",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "akshan",
                "championName": "아크샨",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.0% (246게임) 매치업입니다."
        },
        {
                "championId": "twistedfate",
                "championName": "트위스티드 페이트",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.1% (1,607게임) 매치업입니다."
        },
        {
                "championId": "vex",
                "championName": "벡스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.3% (567게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 76.2%, 코어 44.4%, 룬 30.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  akshan: {
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["징수의 총","무한의 대검","도미닉 경의 인사","광전사의 군화"],
      situationalItems: ["고속 연사포","수호 천사","불멸의 철갑궁","마법광학 장치 C44"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "cut_down",
        "secondaryPath": "sorcery",
        "secondarySlot1": "absolute_focus",
        "secondarySlot2": "gathering_storm",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "katarina",
                "championName": "카타리나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.6% (138게임) 매치업입니다."
        },
        {
                "championId": "diana",
                "championName": "다이애나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.3% (75게임) 매치업입니다."
        },
        {
                "championId": "annie",
                "championName": "애니",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.0% (50게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 81.5%, 코어 26.0%, 룬 32.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(고속 연사포, 수호 천사)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["징수의 총","무한의 대검","도미닉 경의 인사","판금 장화"],
      situationalItems: ["고속 연사포","수호 천사","불멸의 철갑궁","폭풍갈퀴"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "cut_down",
        "secondaryPath": "sorcery",
        "secondarySlot1": "absolute_focus",
        "secondarySlot2": "gathering_storm",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "irelia",
                "championName": "이렐리아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.2% (34게임) 매치업입니다."
        },
        {
                "championId": "malphite",
                "championName": "말파이트",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.2% (44게임) 매치업입니다."
        },
        {
                "championId": "yone",
                "championName": "요네",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 52.9% (34게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 83.7%, 코어 12.4%, 룬 18.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(고속 연사포, 수호 천사)을 우선 고려하세요."
]
    },
  },
  ahri: {
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["악의","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","리치베인","메자이의 영혼약탈자"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "taste_of_blood",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "ultimate_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "transcendence",
        "secondarySlot2": "manaflow_band",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "kogmaw",
                "championName": "코그모",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.7% (68게임) 매치업입니다."
        },
        {
                "championId": "qiyana",
                "championName": "키아나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.4% (249게임) 매치업입니다."
        },
        {
                "championId": "katarina",
                "championName": "카타리나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.5% (694게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 60.2%, 코어 22.3%, 룬 45.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  ambessa: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["불경한 히드라","벼락폭풍검","죽음의 무도","헤르메스의 발걸음"],
      situationalItems: ["끝없는 갈망","수호 천사","맬모셔스의 아귀","쇼진의 창"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "masteryi",
                "championName": "마스터 이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 28.1% (32게임) 매치업입니다."
        },
        {
                "championId": "taliyah",
                "championName": "탈리야",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (66게임) 매치업입니다."
        },
        {
                "championId": "viego",
                "championName": "비에고",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.3% (70게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 100.0%, 코어 25.1%, 룬 26.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(끝없는 갈망, 수호 천사)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 방패","체력 물약"],
      coreItems: ["월식","쇼진의 창","죽음의 무도","판금 장화"],
      situationalItems: ["끝없는 갈망","수호 천사","맬모셔스의 아귀","스테락의 도전"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "shield_bash",
        "primarySlot2": "second_wind",
        "primarySlot3": "overgrowth",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "biscuit_delivery",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "warwick",
                "championName": "워윅",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.0% (206게임) 매치업입니다."
        },
        {
                "championId": "monkeyking",
                "championName": "오공",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.7% (90게임) 매치업입니다."
        },
        {
                "championId": "anivia",
                "championName": "애니비아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.3% (59게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 56.6%, 코어 25.6%, 룬 20.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(끝없는 갈망, 수호 천사)을 우선 고려하세요."
]
    },
  },
  anivia: {
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["여신의 눈물","영겁의 지팡이","대천사의 포옹","존야의 모래시계","신속의 장화"],
      situationalItems: ["리안드리의 고통","라바돈의 죽음모자","공허의 지팡이","메자이의 영혼약탈자"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "cheap_shot",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "relentless_hunter",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "coup_de_grace",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "qiyana",
                "championName": "키아나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.7% (49게임) 매치업입니다."
        },
        {
                "championId": "pantheon",
                "championName": "판테온",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.6% (47게임) 매치업입니다."
        },
        {
                "championId": "ekko",
                "championName": "에코",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.1% (123게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 79.7%, 코어 15.2%, 룬 25.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(리안드리의 고통, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["영겁의 지팡이","악의","존야의 모래시계","신속의 장화"],
      situationalItems: ["모렐로노미콘","자자크의 세계가시","리안드리의 고통","우주의 추진력"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "cheap_shot",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "relentless_hunter",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "coup_de_grace",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "xerath",
                "championName": "제라스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.0% (46게임) 매치업입니다."
        },
        {
                "championId": "rakan",
                "championName": "라칸",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.7% (73게임) 매치업입니다."
        },
        {
                "championId": "lux",
                "championName": "럭스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.0% (50게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 40.8%, 코어 6.0%, 룬 11.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(모렐로노미콘, 자자크의 세계가시)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["여신의 눈물","영겁의 지팡이","대천사의 포옹","리안드리의 고통","신속의 장화"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","핏빛 저주","모렐로노미콘"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "cut_down",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "yorick",
                "championName": "요릭",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.3% (35게임) 매치업입니다."
        },
        {
                "championId": "heimerdinger",
                "championName": "하이머딩거",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (30게임) 매치업입니다."
        },
        {
                "championId": "tryndamere",
                "championName": "트린다미어",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.6% (39게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 75.3%, 코어 13.7%, 룬 20.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
  },
  amumu: {
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["지크의 융합","강철의 솔라리 펜던트","가시 갑옷","판금 장화"],
      situationalItems: ["심연의 가면","천상의 이의","기사의 맹세","원형질 안전벨트"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "aftershock",
        "primarySlot1": "font_of_life",
        "primarySlot2": "bone_plating",
        "primarySlot3": "unflinching",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "cheap_shot",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "poppy",
                "championName": "뽀삐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.6% (44게임) 매치업입니다."
        },
        {
                "championId": "rell",
                "championName": "렐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.3% (52게임) 매치업입니다."
        },
        {
                "championId": "zilean",
                "championName": "질리언",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.4% (33게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 76.5%, 코어 8.0%, 룬 52.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(심연의 가면, 천상의 이의)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 이끼쿵쿵이","체력 물약"],
      coreItems: ["리안드리의 고통","태양불꽃 방패","가시 갑옷","판금 장화"],
      situationalItems: ["해신 작쇼","란두인의 예언","심연의 가면","얼어붙은 심장"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "cheap_shot",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "monkeyking",
                "championName": "오공",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.8% (68게임) 매치업입니다."
        },
        {
                "championId": "briar",
                "championName": "브라이어",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.1% (37게임) 매치업입니다."
        },
        {
                "championId": "jayce",
                "championName": "제이스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.5% (48게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.9%, 코어 13.3%, 룬 50.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(해신 작쇼, 란두인의 예언)을 우선 고려하세요."
]
    },
  },
  alistar: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["강철의 솔라리 펜던트","지크의 융합","기사의 맹세","신속의 장화"],
      situationalItems: ["가시 갑옷","천상의 이의","밴들파이프","원형질 안전벨트"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "aftershock",
        "primarySlot1": "font_of_life",
        "primarySlot2": "bone_plating",
        "primarySlot3": "unflinching",
        "secondaryPath": "inspiration",
        "secondarySlot1": "hextech_flashtraption",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "ability_haste",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "brand",
                "championName": "브랜드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.8% (106게임) 매치업입니다."
        },
        {
                "championId": "anivia",
                "championName": "애니비아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.7% (78게임) 매치업입니다."
        },
        {
                "championId": "sona",
                "championName": "소나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.6% (108게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 67.3%, 코어 13.9%, 룬 35.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(가시 갑옷, 천상의 이의)을 우선 고려하세요."
]
    },
  },
  blitzcrank: {
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["강철의 솔라리 펜던트","지크의 융합","밴들파이프","신속의 장화"],
      situationalItems: ["기사의 맹세","천상의 이의","가시 갑옷","얼어붙은 심장"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "inspiration",
        "keystone": "glacial_augment",
        "primarySlot1": "hextech_flashtraption",
        "primarySlot2": "biscuit_delivery",
        "primarySlot3": "cosmic_insight",
        "secondaryPath": "sorcery",
        "secondarySlot1": "celerity",
        "secondarySlot2": "nimbus_cloak",
        "shardOffense": "ability_haste",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zoe",
                "championName": "조이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.0% (114게임) 매치업입니다."
        },
        {
                "championId": "rell",
                "championName": "렐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.1% (580게임) 매치업입니다."
        },
        {
                "championId": "elise",
                "championName": "엘리스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.4% (133게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 65.1%, 코어 13.1%, 룬 41.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(기사의 맹세, 천상의 이의)을 우선 고려하세요."
]
    },
  },
  ashe: {
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["마법광학 장치 C44","유령 무희","무한의 대검","광전사의 군화"],
      situationalItems: ["도미닉 경의 인사","수호 천사","피바라기","필멸자의 운명"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "cut_down",
        "secondaryPath": "inspiration",
        "secondarySlot1": "biscuit_delivery",
        "secondarySlot2": "approach_velocity",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "swain",
                "championName": "스웨인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.7% (58게임) 매치업입니다."
        },
        {
                "championId": "yasuo",
                "championName": "야스오",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.2% (102게임) 매치업입니다."
        },
        {
                "championId": "tristana",
                "championName": "트리스타나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.8% (363게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 53.9%, 코어 43.9%, 룬 51.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["제국의 명령","악의","원칙의 원형낫","명석함의 아이오니아 장화"],
      situationalItems: ["화공 펑크 사슬검","자자크의 세계가시","폭풍 쇄도","밴들파이프"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "cheap_shot",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "xerath",
                "championName": "제라스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 30.6% (36게임) 매치업입니다."
        },
        {
                "championId": "alistar",
                "championName": "알리스타",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.5% (32게임) 매치업입니다."
        },
        {
                "championId": "karma",
                "championName": "카르마",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.8% (45게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 85.9%, 코어 11.2%, 룬 45.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(화공 펑크 사슬검, 자자크의 세계가시)을 우선 고려하세요."
]
    },
  },
  aphelios: {
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["마법광학 장치 C44","유령 무희","무한의 대검","광전사의 군화"],
      situationalItems: ["도미닉 경의 인사","수호 천사","피바라기","루난의 허리케인"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_bloodline",
        "primarySlot3": "cut_down",
        "secondaryPath": "inspiration",
        "secondarySlot1": "triple_tonic",
        "secondarySlot2": "cash_back",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "swain",
                "championName": "스웨인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.3% (154게임) 매치업입니다."
        },
        {
                "championId": "yasuo",
                "championName": "야스오",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.0% (222게임) 매치업입니다."
        },
        {
                "championId": "sivir",
                "championName": "시비르",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 47.1% (446게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 40.3%, 코어 19.4%, 룬 22.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
  },
  annie: {
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["악의","마법공학 로켓 벨트","그림자불꽃","마법사의 신발"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","공허의 지팡이","메자이의 영혼약탈자"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "cheap_shot",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "relentless_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "axiom_arcanist",
        "secondarySlot2": "absolute_focus",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "qiyana",
                "championName": "키아나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.0% (47게임) 매치업입니다."
        },
        {
                "championId": "irelia",
                "championName": "이렐리아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.8% (76게임) 매치업입니다."
        },
        {
                "championId": "aurora",
                "championName": "오로라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.4% (66게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 65.4%, 코어 13.3%, 룬 35.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["악의","폭풍 쇄도","그림자불꽃","마법사의 신발"],
      situationalItems: ["모렐로노미콘","자자크의 세계가시","메자이의 영혼약탈자","존야의 모래시계"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "cheap_shot",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "relentless_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "manaflow_band",
        "secondarySlot2": "absolute_focus",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "leona",
                "championName": "레오나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (35게임) 매치업입니다."
        },
        {
                "championId": "nautilus",
                "championName": "노틸러스",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 54.3% (46게임) 매치업입니다."
        },
        {
                "championId": "karma",
                "championName": "카르마",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 55.6% (36게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 71.4%, 코어 5.4%, 룬 13.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(모렐로노미콘, 자자크의 세계가시)을 우선 고려하세요."
]
    },
  },
  aurora: {
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["폭풍 쇄도","그림자불꽃","라바돈의 죽음모자","마법사의 신발"],
      situationalItems: ["존야의 모래시계","공허의 지팡이","메자이의 영혼약탈자","무덤꽃"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "taste_of_blood",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "ultimate_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "transcendence",
        "secondarySlot2": "manaflow_band",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "kassadin",
                "championName": "카사딘",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.7% (73게임) 매치업입니다."
        },
        {
                "championId": "akshan",
                "championName": "아크샨",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.8% (67게임) 매치업입니다."
        },
        {
                "championId": "zoe",
                "championName": "조이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.0% (212게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 54.3%, 코어 18.1%, 룬 24.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 공허의 지팡이)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["폭풍 쇄도","그림자불꽃","라바돈의 죽음모자","마법사의 신발"],
      situationalItems: ["공허의 지팡이","존야의 모래시계","메자이의 영혼약탈자","무덤꽃"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "taste_of_blood",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "ultimate_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "transcendence",
        "secondarySlot2": "manaflow_band",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "ambessa",
                "championName": "암베사",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.3% (47게임) 매치업입니다."
        },
        {
                "championId": "akali",
                "championName": "아칼리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.7% (36게임) 매치업입니다."
        },
        {
                "championId": "gnar",
                "championName": "나르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.9% (31게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 48.1%, 코어 13.1%, 룬 19.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(공허의 지팡이, 존야의 모래시계)을 우선 고려하세요."
]
    },
  },
  aurelionsol: {
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","라일라이의 수정홀","리안드리의 고통","마법사의 신발"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","그림자불꽃","공허의 지팡이"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "absolute_focus",
        "primarySlot3": "scorch",
        "secondaryPath": "resolve",
        "secondarySlot1": "overgrowth",
        "secondarySlot2": "bone_plating",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "fizz",
                "championName": "피즈",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.2% (88게임) 매치업입니다."
        },
        {
                "championId": "yone",
                "championName": "요네",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.1% (175게임) 매치업입니다."
        },
        {
                "championId": "akshan",
                "championName": "아크샨",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.9% (41게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 84.3%, 코어 18.6%, 룬 30.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
  },
  bard: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["망자의 갑옷","강철의 솔라리 펜던트","밴들파이프","신속의 장화"],
      situationalItems: ["구원","피의 노래","슈렐리아의 군가","모렐로노미콘"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "cheap_shot",
        "primarySlot2": "deep_ward",
        "primarySlot3": "relentless_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "celerity",
        "secondarySlot2": "scorch",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "tahmkench",
                "championName": "탐 켄치",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.0% (174게임) 매치업입니다."
        },
        {
                "championId": "maokai",
                "championName": "마오카이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.2% (248게임) 매치업입니다."
        },
        {
                "championId": "taric",
                "championName": "타릭",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.7% (94게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 58.7%, 코어 6.9%, 룬 15.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(구원, 피의 노래)을 우선 고려하세요."
]
    },
  },
  belveth: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["크라켄 학살자","몰락한 왕의 검","죽음의 무도","판금 장화"],
      situationalItems: ["마법사의 최후","수호 천사","경계","해신 작쇼"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "triple_tonic",
        "secondarySlot2": "cash_back",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "kayn",
                "championName": "케인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.1% (56게임) 매치업입니다."
        },
        {
                "championId": "monkeyking",
                "championName": "오공",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.2% (102게임) 매치업입니다."
        },
        {
                "championId": "hecarim",
                "championName": "헤카림",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.3% (111게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 96.0%, 코어 13.2%, 룬 26.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(마법사의 최후, 수호 천사)을 우선 고려하세요."
]
    },
  },
  brand: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["리안드리의 고통","라일라이의 수정홀","존야의 모래시계","마법사의 신발"],
      situationalItems: ["그림자불꽃","라바돈의 죽음모자","핏빛 저주","모렐로노미콘"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "cut_down",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "jarvaniv",
                "championName": "자르반 4세",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.1% (35게임) 매치업입니다."
        },
        {
                "championId": "leesin",
                "championName": "리 신",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 57.7% (71게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 94.1%, 코어 21.7%, 룬 10.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(그림자불꽃, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","라일라이의 수정홀","리안드리의 고통","마법사의 신발"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","모렐로노미콘","그림자불꽃"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "coup_de_grace",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "ahri",
                "championName": "아리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.2% (43게임) 매치업입니다."
        },
        {
                "championId": "zed",
                "championName": "제드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.9% (31게임) 매치업입니다."
        },
        {
                "championId": "twistedfate",
                "championName": "트위스티드 페이트",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 47.5% (59게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 45.3%, 코어 14.7%, 룬 27.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["라일라이의 수정홀","리안드리의 고통","존야의 모래시계","마법사의 신발"],
      situationalItems: ["모렐로노미콘","자자크의 세계가시","라바돈의 죽음모자","핏빛 저주"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "cut_down",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "soraka",
                "championName": "소라카",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.7% (60게임) 매치업입니다."
        },
        {
                "championId": "shaco",
                "championName": "샤코",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.9% (36게임) 매치업입니다."
        },
        {
                "championId": "blitzcrank",
                "championName": "블리츠크랭크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.9% (158게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 58.0%, 코어 13.2%, 룬 45.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(모렐로노미콘, 자자크의 세계가시)을 우선 고려하세요."
]
    },
  },
  braum: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["강철의 솔라리 펜던트","기사의 맹세","밴들파이프","판금 장화"],
      situationalItems: ["가시 갑옷","태양의 썰매","얼어붙은 심장","원형질 안전벨트"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "guardian",
        "primarySlot1": "font_of_life",
        "primarySlot2": "bone_plating",
        "primarySlot3": "unflinching",
        "secondaryPath": "inspiration",
        "secondarySlot1": "biscuit_delivery",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zoe",
                "championName": "조이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.3% (47게임) 매치업입니다."
        },
        {
                "championId": "zilean",
                "championName": "질리언",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.3% (104게임) 매치업입니다."
        },
        {
                "championId": "amumu",
                "championName": "아무무",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.7% (70게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 71.4%, 코어 23.9%, 룬 48.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(가시 갑옷, 태양의 썰매)을 우선 고려하세요."
]
    },
  },
  azir: {
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["내셔의 이빨","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","밴시의 장막","라일라이의 수정홀"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "cut_down",
        "secondaryPath": "resolve",
        "secondarySlot1": "overgrowth",
        "secondarySlot2": "bone_plating",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "leblanc",
                "championName": "르블랑",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.9% (168게임) 매치업입니다."
        },
        {
                "championId": "lux",
                "championName": "럭스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.0% (47게임) 매치업입니다."
        },
        {
                "championId": "xerath",
                "championName": "제라스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.0% (154게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 82.3%, 코어 25.1%, 룬 16.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  briar: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱"],
      coreItems: ["징수의 총","거대한 히드라","도미닉 경의 인사","헤르메스의 발걸음"],
      situationalItems: ["수호 천사","죽음의 무도","존야의 모래시계","무한의 대검"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "domination",
        "secondarySlot1": "treasure_hunter",
        "secondarySlot2": "sudden_impact",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "fizz",
                "championName": "피즈",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 27.8% (36게임) 매치업입니다."
        },
        {
                "championId": "shyvana",
                "championName": "쉬바나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.2% (51게임) 매치업입니다."
        },
        {
                "championId": "karthus",
                "championName": "카서스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.5% (43게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 98.1%, 코어 13.2%, 룬 30.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 죽음의 무도)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["월식","칠흑의 양날 도끼","죽음의 무도","판금 장화"],
      situationalItems: ["수호 천사","거대한 히드라","무한의 대검","정령의 형상"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "domination",
        "secondarySlot1": "treasure_hunter",
        "secondarySlot2": "sudden_impact",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "yone",
                "championName": "요네",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 51.6% (31게임) 매치업입니다."
        },
        {
                "championId": "jayce",
                "championName": "제이스",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 56.3% (32게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 75.0%, 코어 12.9%, 룬 15.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 거대한 히드라)을 우선 고려하세요."
]
    },
  },
  caitlyn: {
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["마법광학 장치 C44","무한의 대검","고속 연사포","광전사의 군화"],
      situationalItems: ["도미닉 경의 인사","수호 천사","피바라기","필멸자의 운명"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_bloodline",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "sorcery",
        "secondarySlot1": "absolute_focus",
        "secondarySlot2": "gathering_storm",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "samira",
                "championName": "사미라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.9% (275게임) 매치업입니다."
        },
        {
                "championId": "xerath",
                "championName": "제라스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.3% (140게임) 매치업입니다."
        },
        {
                "championId": "twitch",
                "championName": "트위치",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.9% (238게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 64.7%, 코어 27.4%, 룬 45.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
  },
  camille: {
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["월식","갈라진 하늘","스테락의 도전","판금 장화"],
      situationalItems: ["수호 천사","피의 노래","독사의 송곳니","벼락폭풍검"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "hail_of_blades",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "deep_ward",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "resolve",
        "secondarySlot1": "shield_bash",
        "secondarySlot2": "bone_plating",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "nami",
                "championName": "나미",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.7% (49게임) 매치업입니다."
        },
        {
                "championId": "poppy",
                "championName": "뽀삐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.1% (147게임) 매치업입니다."
        },
        {
                "championId": "zilean",
                "championName": "질리언",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.6% (41게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 95.8%, 코어 8.3%, 룬 73.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 피의 노래)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["삼위일체","굶주린 히드라","죽음의 무도","판금 장화"],
      situationalItems: ["수호 천사","스테락의 도전","맬모셔스의 아귀","쇼진의 창"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "shield_bash",
        "primarySlot2": "bone_plating",
        "primarySlot3": "unflinching",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "biscuit_delivery",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "vladimir",
                "championName": "블라디미르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.1% (73게임) 매치업입니다."
        },
        {
                "championId": "illaoi",
                "championName": "일라오이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.4% (135게임) 매치업입니다."
        },
        {
                "championId": "teemo",
                "championName": "티모",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.5% (211게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 49.8%, 코어 44.8%, 룬 27.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 스테락의 도전)을 우선 고려하세요."
]
    },
  },
  cassiopeia: {
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["여신의 눈물","영겁의 지팡이","대천사의 포옹","라일라이의 수정홀","신속의 장화"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","리안드리의 고통","핏빛 저주"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "coup_de_grace",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "kassadin",
                "championName": "카사딘",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 27.0% (37게임) 매치업입니다."
        },
        {
                "championId": "akshan",
                "championName": "아크샨",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 32.5% (77게임) 매치업입니다."
        },
        {
                "championId": "fizz",
                "championName": "피즈",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.6% (101게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 52.7%, 코어 30.7%, 룬 28.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["여신의 눈물","영겁의 지팡이","대천사의 포옹","라일라이의 수정홀","신속의 장화"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","리안드리의 고통","핏빛 저주"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "coup_de_grace",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "akali",
                "championName": "아칼리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.0% (39게임) 매치업입니다."
        },
        {
                "championId": "fiora",
                "championName": "피오라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.9% (42게임) 매치업입니다."
        },
        {
                "championId": "renekton",
                "championName": "레넥톤",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.0% (40게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 33.9%, 코어 30.2%, 룬 28.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
    ADC: {
      spells: ["점멸","유체화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","리안드리의 고통","라일라이의 수정홀","신속의 장화"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","밴시의 장막","공허의 지팡이"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "coup_de_grace",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "sivir",
                "championName": "시비르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.2% (38게임) 매치업입니다."
        },
        {
                "championId": "missfortune",
                "championName": "미스 포츈",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (65게임) 매치업입니다."
        },
        {
                "championId": "yunara",
                "championName": "유나라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.2% (84게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 42.9%, 코어 13.2%, 룬 16.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
  },
  drmundo: {
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 방패","체력 물약"],
      coreItems: ["강철심장","워모그의 갑옷","정령의 형상","신속의 장화"],
      situationalItems: ["란두인의 예언","거대한 히드라","가시 갑옷","끝없는 절망"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "demolish",
        "primarySlot2": "second_wind",
        "primarySlot3": "overgrowth",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "approach_velocity",
        "shardOffense": "attack_speed",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "lissandra",
                "championName": "리산드라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 30.8% (39게임) 매치업입니다."
        },
        {
                "championId": "vladimir",
                "championName": "블라디미르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.6% (41게임) 매치업입니다."
        },
        {
                "championId": "kled",
                "championName": "클레드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.3% (59게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 56.9%, 코어 21.0%, 룬 43.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(란두인의 예언, 거대한 히드라)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이"],
      coreItems: ["강철심장","망자의 갑옷","정령의 형상","신속의 장화"],
      situationalItems: ["가시 갑옷","해신 작쇼","란두인의 예언","워모그의 갑옷"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "fleet_footwork",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "approach_velocity",
        "shardOffense": "attack_speed",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "leesin",
                "championName": "리 신",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.4% (55게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 82.0%, 코어 18.6%, 룬 51.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(가시 갑옷, 해신 작쇼)을 우선 고려하세요."
]
    },
  },
  chogath: {
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["마법공학 로켓 벨트","균열 생성기","망자의 갑옷","판금 장화"],
      situationalItems: ["해신 작쇼","가시 갑옷","란두인의 예언","끝없는 절망"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "hail_of_blades",
        "primarySlot1": "cheap_shot",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "ultimate_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "axiom_arcanist",
        "secondarySlot2": "celerity",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "move_speed",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "poppy",
                "championName": "뽀삐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 30.0% (30게임) 매치업입니다."
        },
        {
                "championId": "singed",
                "championName": "신지드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 32.7% (52게임) 매치업입니다."
        },
        {
                "championId": "shen",
                "championName": "쉔",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.0% (40게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 65.4%, 코어 4.6%, 룬 20.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(해신 작쇼, 가시 갑옷)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["강철심장","망자의 갑옷","대자연의 힘","신속의 장화"],
      situationalItems: ["가시 갑옷","해신 작쇼","란두인의 예언","끝없는 절망"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "hail_of_blades",
        "primarySlot1": "cheap_shot",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "ultimate_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "axiom_arcanist",
        "secondarySlot2": "celerity",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "move_speed",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "maokai",
                "championName": "마오카이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.1% (56게임) 매치업입니다."
        },
        {
                "championId": "shaco",
                "championName": "샤코",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.6% (113게임) 매치업입니다."
        },
        {
                "championId": "ambessa",
                "championName": "암베사",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.3% (30게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.6%, 코어 31.7%, 룬 59.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(가시 갑옷, 해신 작쇼)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["영겁의 지팡이","균열 생성기","워모그의 갑옷","헤르메스의 발걸음"],
      situationalItems: ["망자의 갑옷","해신 작쇼","존야의 모래시계","가시 갑옷"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "hail_of_blades",
        "primarySlot1": "cheap_shot",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "ultimate_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "axiom_arcanist",
        "secondarySlot2": "celerity",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "move_speed",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "sylas",
                "championName": "사일러스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.8% (66게임) 매치업입니다."
        },
        {
                "championId": "zed",
                "championName": "제드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.9% (54게임) 매치업입니다."
        },
        {
                "championId": "yone",
                "championName": "요네",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (60게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 55.3%, 코어 6.6%, 룬 11.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(망자의 갑옷, 해신 작쇼)을 우선 고려하세요."
]
    },
  },
  ekko: {
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["황혼과 새벽","그림자불꽃","라바돈의 죽음모자","마법사의 신발"],
      situationalItems: ["존야의 모래시계","공허의 지팡이","폭풍 쇄도","메자이의 영혼약탈자"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "hail_of_blades",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "relentless_hunter",
        "secondaryPath": "precision",
        "secondarySlot1": "cut_down",
        "secondarySlot2": "legend_haste",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "vladimir",
                "championName": "블라디미르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.3% (127게임) 매치업입니다."
        },
        {
                "championId": "annie",
                "championName": "애니",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.5% (62게임) 매치업입니다."
        },
        {
                "championId": "lissandra",
                "championName": "리산드라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.9% (287게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 65.9%, 코어 14.2%, 룬 32.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 공허의 지팡이)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["황혼과 새벽","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","폭풍 쇄도","메자이의 영혼약탈자"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "dark_harvest",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zaahen",
                "championName": "자헨",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.2% (54게임) 매치업입니다."
        },
        {
                "championId": "amumu",
                "championName": "아무무",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (35게임) 매치업입니다."
        },
        {
                "championId": "skarner",
                "championName": "스카너",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.9% (44게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 100.0%, 코어 16.3%, 룬 45.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  ezreal: {
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["여신의 눈물","삼위일체","무라마나","쇼진의 창","명석함의 아이오니아 장화"],
      situationalItems: ["세릴다의 원한","끝없는 갈망","수호 천사","얼어붙은 심장"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_bloodline",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "biscuit_delivery",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "viktor",
                "championName": "빅토르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.5% (380게임) 매치업입니다."
        },
        {
                "championId": "swain",
                "championName": "스웨인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.6% (276게임) 매치업입니다."
        },
        {
                "championId": "yasuo",
                "championName": "야스오",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.7% (565게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 55.0%, 코어 53.6%, 룬 33.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(세릴다의 원한, 끝없는 갈망)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["탈진","점멸"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["여신의 눈물","삼위일체","무라마나","쇼진의 창","명석함의 아이오니아 장화"],
      situationalItems: ["세릴다의 원한","끝없는 갈망","존야의 모래시계","라바돈의 죽음모자"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_bloodline",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "biscuit_delivery",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zed",
                "championName": "상대 라이너",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 패치 기준 픽률 1위 룬과 코어 타이밍에 맞춰 교전을 설계하세요."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 26.1%, 코어 26.9%, 룬 24.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(세릴다의 원한, 끝없는 갈망)을 우선 고려하세요."
]
    },
  },
  corki: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["정수 약탈자","징수의 총","무한의 대검","판금 장화"],
      situationalItems: ["불멸의 철갑궁","수호 천사","도미닉 경의 인사","맬모셔스의 아귀"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "phase_rush",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "absolute_focus",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "cut_down",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "camille",
                "championName": "카밀",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.6% (41게임) 매치업입니다."
        },
        {
                "championId": "mordekaiser",
                "championName": "모데카이저",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.9% (36게임) 매치업입니다."
        },
        {
                "championId": "irelia",
                "championName": "이렐리아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.1% (87게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 68.1%, 코어 14.1%, 룬 47.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(불멸의 철갑궁, 수호 천사)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["정수 약탈자","징수의 총","무한의 대검","헤르메스의 발걸음"],
      situationalItems: ["도미닉 경의 인사","수호 천사","필멸자의 운명","고속 연사포"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "cut_down",
        "secondaryPath": "inspiration",
        "secondarySlot1": "triple_tonic",
        "secondarySlot2": "cash_back",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "aurora",
                "championName": "오로라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (30게임) 매치업입니다."
        },
        {
                "championId": "twistedfate",
                "championName": "트위스티드 페이트",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.3% (102게임) 매치업입니다."
        },
        {
                "championId": "taliyah",
                "championName": "탈리야",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.9% (36게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 37.1%, 코어 17.7%, 룬 16.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
    ADC: {
      spells: ["탈진","점멸"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["정수 약탈자","징수의 총","무한의 대검","판금 장화"],
      situationalItems: ["도미닉 경의 인사","수호 천사","피바라기","필멸자의 운명"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "cut_down",
        "secondaryPath": "inspiration",
        "secondarySlot1": "triple_tonic",
        "secondarySlot2": "cash_back",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "swain",
                "championName": "스웨인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.8% (76게임) 매치업입니다."
        },
        {
                "championId": "ziggs",
                "championName": "직스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.7% (76게임) 매치업입니다."
        },
        {
                "championId": "katarina",
                "championName": "카타리나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.9% (49게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 52.5%, 코어 40.4%, 룬 40.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
  },
  darius: {
    TOP: {
      spells: ["점멸","유체화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["요우무의 유령검","망자의 갑옷","죽음의 무도","판금 장화"],
      situationalItems: ["스테락의 도전","수호 천사","란두인의 예언","대자연의 힘"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "sorcery",
        "secondarySlot1": "axiom_arcanist",
        "secondarySlot2": "celerity",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "urgot",
                "championName": "우르곳",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.3% (97게임) 매치업입니다."
        },
        {
                "championId": "zac",
                "championName": "자크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.0% (50게임) 매치업입니다."
        },
        {
                "championId": "shen",
                "championName": "쉔",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.3% (161게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 86.4%, 코어 10.1%, 룬 35.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(스테락의 도전, 수호 천사)을 우선 고려하세요."
]
    },
  },
  draven: {
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["피바라기","징수의 총","무한의 대검","광전사의 군화"],
      situationalItems: ["도미닉 경의 인사","고속 연사포","수호 천사","필멸자의 운명"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "cut_down",
        "secondaryPath": "inspiration",
        "secondarySlot1": "cash_back",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "kogmaw",
                "championName": "코그모",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.1% (118게임) 매치업입니다."
        },
        {
                "championId": "ziggs",
                "championName": "직스",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 48.6% (70게임) 매치업입니다."
        },
        {
                "championId": "samira",
                "championName": "사미라",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 48.6% (74게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 52.8%, 코어 26.3%, 룬 24.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 고속 연사포)을 우선 고려하세요."
]
    },
  },
  diana: {
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["폭풍 쇄도","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","메자이의 영혼약탈자","밴시의 장막"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "resolve",
        "secondarySlot1": "shield_bash",
        "secondarySlot2": "bone_plating",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "ryze",
                "championName": "라이즈",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.0% (113게임) 매치업입니다."
        },
        {
                "championId": "lissandra",
                "championName": "리산드라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.1% (269게임) 매치업입니다."
        },
        {
                "championId": "taliyah",
                "championName": "탈리야",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.5% (144게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 78.8%, 코어 21.4%, 룬 22.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["황혼과 새벽","균열 생성기","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","그림자불꽃","메자이의 영혼약탈자"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "kindred",
                "championName": "킨드레드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 31.5% (54게임) 매치업입니다."
        },
        {
                "championId": "rengar",
                "championName": "렝가",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.1% (35게임) 매치업입니다."
        },
        {
                "championId": "taliyah",
                "championName": "탈리야",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.2% (130게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.7%, 코어 30.6%, 룬 59.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  elise: {
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["폭풍 쇄도","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["공허의 지팡이","피의 노래","라바돈의 죽음모자","모렐로노미콘"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "deep_ward",
        "primarySlot3": "relentless_hunter",
        "secondaryPath": "precision",
        "secondarySlot1": "coup_de_grace",
        "secondarySlot2": "triumph",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "galio",
                "championName": "갈리오",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 31.3% (48게임) 매치업입니다."
        },
        {
                "championId": "rell",
                "championName": "렐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.0% (100게임) 매치업입니다."
        },
        {
                "championId": "xerath",
                "championName": "제라스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.2% (43게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 95.5%, 코어 16.6%, 룬 31.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(공허의 지팡이, 피의 노래)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["리치베인","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["공허의 지팡이","라바돈의 죽음모자","폭풍 쇄도","밴시의 장막"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "dark_harvest",
        "primarySlot1": "cheap_shot",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "relentless_hunter",
        "secondaryPath": "precision",
        "secondarySlot1": "coup_de_grace",
        "secondarySlot2": "triumph",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "sejuani",
                "championName": "세주아니",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.4% (66게임) 매치업입니다."
        },
        {
                "championId": "reksai",
                "championName": "렉사이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.9% (126게임) 매치업입니다."
        },
        {
                "championId": "karthus",
                "championName": "카서스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.3% (67게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 100.0%, 코어 25.9%, 룬 32.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(공허의 지팡이, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
  },
  evelynn: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["암흑의 인장","리치베인","그림자불꽃","라바돈의 죽음모자","마법사의 신발"],
      situationalItems: ["공허의 지팡이","밴시의 장막","폭풍 쇄도","존야의 모래시계"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "relentless_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "absolute_focus",
        "secondarySlot2": "gathering_storm",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "rammus",
                "championName": "람머스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 30.3% (33게임) 매치업입니다."
        },
        {
                "championId": "rengar",
                "championName": "렝가",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (65게임) 매치업입니다."
        },
        {
                "championId": "diana",
                "championName": "다이애나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.7% (86게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.9%, 코어 10.6%, 룬 24.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(공허의 지팡이, 밴시의 장막)을 우선 고려하세요."
]
    },
  },
  fizz: {
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["리치베인","존야의 모래시계","그림자불꽃","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","폭풍 쇄도","메자이의 영혼약탈자"],
      skillOrder: 'E > W > Q > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "transcendence",
        "secondarySlot2": "scorch",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "sion",
                "championName": "사이온",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.5% (39게임) 매치업입니다."
        },
        {
                "championId": "naafiri",
                "championName": "나피리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (30게임) 매치업입니다."
        },
        {
                "championId": "anivia",
                "championName": "애니비아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.8% (122게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 98.1%, 코어 8.2%, 룬 29.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["황혼과 새벽","내셔의 이빨","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","무덤꽃","그림자불꽃","메자이의 영혼약탈자"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "hecarim",
                "championName": "헤카림",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.7% (72게임) 매치업입니다."
        },
        {
                "championId": "monkeyking",
                "championName": "오공",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.5% (82게임) 매치업입니다."
        },
        {
                "championId": "jayce",
                "championName": "제이스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.0% (75게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 98.8%, 코어 33.3%, 룬 35.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 무덤꽃)을 우선 고려하세요."
]
    },
  },
  fiddlesticks: {
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["악의","존야의 모래시계","모렐로노미콘","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","자자크의 세계가시","그림자불꽃","리안드리의 고통"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "cheap_shot",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "lux",
                "championName": "럭스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.1% (42게임) 매치업입니다."
        },
        {
                "championId": "bard",
                "championName": "바드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.3% (71게임) 매치업입니다."
        },
        {
                "championId": "pantheon",
                "championName": "판테온",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.7% (38게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 55.5%, 코어 5.0%, 룬 12.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 자자크의 세계가시)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이"],
      coreItems: ["악의","리안드리의 고통","존야의 모래시계","마법사의 신발"],
      situationalItems: ["공허의 지팡이","라바돈의 죽음모자","그림자불꽃","밴시의 장막"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "cheap_shot",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "ultimate_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "transcendence",
        "secondarySlot2": "axiom_arcanist",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "chogath",
                "championName": "초가스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.6% (57게임) 매치업입니다."
        },
        {
                "championId": "evelynn",
                "championName": "이블린",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.9% (49게임) 매치업입니다."
        },
        {
                "championId": "shaco",
                "championName": "샤코",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.2% (81게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.9%, 코어 9.6%, 룬 24.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(공허의 지팡이, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
  },
  gangplank: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["정수 약탈자","징수의 총","무한의 대검","판금 장화"],
      situationalItems: ["불멸의 철갑궁","벼락폭풍검","요우무의 유령검","도미닉 경의 인사"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "nimbus_cloak",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "cut_down",
        "secondarySlot2": "legend_haste",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "zac",
                "championName": "자크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (65게임) 매치업입니다."
        },
        {
                "championId": "monkeyking",
                "championName": "오공",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.4% (106게임) 매치업입니다."
        },
        {
                "championId": "lissandra",
                "championName": "리산드라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.8% (32게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 85.3%, 코어 19.4%, 룬 29.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(불멸의 철갑궁, 벼락폭풍검)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["정수 약탈자","징수의 총","무한의 대검","명석함의 아이오니아 장화"],
      situationalItems: ["도미닉 경의 인사","벼락폭풍검","요우무의 유령검","불멸의 철갑궁"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "nimbus_cloak",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "cut_down",
        "secondarySlot2": "legend_haste",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "galio",
                "championName": "갈리오",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 47.1% (51게임) 매치업입니다."
        },
        {
                "championId": "sylas",
                "championName": "사일러스",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 47.2% (36게임) 매치업입니다."
        },
        {
                "championId": "twistedfate",
                "championName": "트위스티드 페이트",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 50.0% (44게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 78.8%, 코어 20.6%, 룬 28.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 벼락폭풍검)을 우선 고려하세요."
]
    },
  },
  galio: {
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["마법공학 로켓 벨트","제국의 명령","존야의 모래시계","헤르메스의 발걸음"],
      situationalItems: ["라바돈의 죽음모자","가시 갑옷","메자이의 영혼약탈자","균열 생성기"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "phase_rush",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "resolve",
        "secondarySlot1": "unflinching",
        "secondarySlot2": "second_wind",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "nunu",
                "championName": "누누와 윌럼프",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.2% (102게임) 매치업입니다."
        },
        {
                "championId": "veigar",
                "championName": "베이가",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.4% (109게임) 매치업입니다."
        },
        {
                "championId": "malzahar",
                "championName": "말자하",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.5% (232게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 81.7%, 코어 19.1%, 룬 42.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 가시 갑옷)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["강철의 솔라리 펜던트","제국의 명령","가시 갑옷","판금 장화"],
      situationalItems: ["기사의 맹세","천상의 이의","얼어붙은 심장","밴들파이프"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "aftershock",
        "primarySlot1": "shield_bash",
        "primarySlot2": "bone_plating",
        "primarySlot3": "unflinching",
        "secondaryPath": "sorcery",
        "secondarySlot1": "transcendence",
        "secondarySlot2": "nimbus_cloak",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "senna",
                "championName": "세나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 30.0% (70게임) 매치업입니다."
        },
        {
                "championId": "taric",
                "championName": "타릭",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.2% (34게임) 매치업입니다."
        },
        {
                "championId": "pyke",
                "championName": "파이크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.0% (114게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 70.5%, 코어 7.4%, 룬 29.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(기사의 맹세, 천상의 이의)을 우선 고려하세요."
]
    },
  },
  fiora: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["굶주린 히드라","삼위일체","죽음의 무도","판금 장화"],
      situationalItems: ["끝없는 갈망","수호 천사","맬모셔스의 아귀","쇼진의 창"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "inspiration",
        "secondarySlot1": "jack_of_all_trades",
        "secondarySlot2": "biscuit_delivery",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "heimerdinger",
                "championName": "하이머딩거",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.6% (57게임) 매치업입니다."
        },
        {
                "championId": "corki",
                "championName": "코르키",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.9% (72게임) 매치업입니다."
        },
        {
                "championId": "anivia",
                "championName": "애니비아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (65게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 81.8%, 코어 52.4%, 룬 14.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(끝없는 갈망, 수호 천사)을 우선 고려하세요."
]
    },
  },
  garen: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 방패","체력 물약"],
      coreItems: ["발걸음 분쇄기","유령 무희","필멸자의 운명","광전사의 군화"],
      situationalItems: ["망자의 갑옷","스테락의 도전","수호 천사","쇼진의 창"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "sorcery",
        "secondarySlot1": "axiom_arcanist",
        "secondarySlot2": "celerity",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "udyr",
                "championName": "우디르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (30게임) 매치업입니다."
        },
        {
                "championId": "heimerdinger",
                "championName": "하이머딩거",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.5% (42게임) 매치업입니다."
        },
        {
                "championId": "tryndamere",
                "championName": "트린다미어",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.5% (111게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 95.0%, 코어 16.2%, 룬 51.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(망자의 갑옷, 스테락의 도전)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 방패","체력 물약"],
      coreItems: ["발걸음 분쇄기","유령 무희","필멸자의 운명","광전사의 군화"],
      situationalItems: ["망자의 갑옷","수호 천사","무한의 대검","스테락의 도전"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "sorcery",
        "secondarySlot1": "axiom_arcanist",
        "secondarySlot2": "celerity",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "katarina",
                "championName": "카타리나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.0% (50게임) 매치업입니다."
        },
        {
                "championId": "viktor",
                "championName": "빅토르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (40게임) 매치업입니다."
        },
        {
                "championId": "zed",
                "championName": "제드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.1% (51게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 80.4%, 코어 17.1%, 룬 31.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(망자의 갑옷, 수호 천사)을 우선 고려하세요."
]
    },
  },
  gnar: {
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["삼위일체","칠흑의 양날 도끼","스테락의 도전","판금 장화"],
      situationalItems: ["란두인의 예언","해신 작쇼","마법사의 최후","가시 갑옷"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "overgrowth",
        "secondarySlot2": "bone_plating",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "quinn",
                "championName": "퀸",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 26.9% (52게임) 매치업입니다."
        },
        {
                "championId": "urgot",
                "championName": "우르곳",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.1% (89게임) 매치업입니다."
        },
        {
                "championId": "ryze",
                "championName": "라이즈",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.3% (62게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 60.5%, 코어 29.6%, 룬 27.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(란두인의 예언, 해신 작쇼)을 우선 고려하세요."
]
    },
  },
  gragas: {
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["여신의 눈물","영겁의 지팡이","종말의 겨울","우주의 추진력","명석함의 아이오니아 장화"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","그림자불꽃","리치베인"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "phase_rush",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "inspiration",
        "secondarySlot1": "biscuit_delivery",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "tahmkench",
                "championName": "탐 켄치",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 32.3% (31게임) 매치업입니다."
        },
        {
                "championId": "varus",
                "championName": "바루스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.5% (31게임) 매치업입니다."
        },
        {
                "championId": "poppy",
                "championName": "뽀삐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.0% (41게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 94.1%, 코어 19.7%, 룬 36.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["루덴의 메아리","리치베인","그림자불꽃","마법사의 신발"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","폭풍 쇄도","제국의 명령"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "ultimate_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "manaflow_band",
        "secondarySlot2": "scorch",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "syndra",
                "championName": "신드라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (36게임) 매치업입니다."
        },
        {
                "championId": "zed",
                "championName": "제드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.4% (45게임) 매치업입니다."
        },
        {
                "championId": "viktor",
                "championName": "빅토르",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 48.5% (33게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 53.5%, 코어 8.5%, 룬 19.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["리치베인","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","메자이의 영혼약탈자","밴시의 장막"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "dark_harvest",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "chogath",
                "championName": "초가스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (33게임) 매치업입니다."
        },
        {
                "championId": "graves",
                "championName": "그레이브즈",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.7% (73게임) 매치업입니다."
        },
        {
                "championId": "zed",
                "championName": "제드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.5% (40게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.9%, 코어 17.8%, 룬 29.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  gwen: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["균열 생성기","내셔의 이빨","그림자불꽃","판금 장화"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","우주의 추진력","공허의 지팡이"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "unflinching",
        "secondarySlot2": "bone_plating",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "singed",
                "championName": "신지드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.8% (57게임) 매치업입니다."
        },
        {
                "championId": "darius",
                "championName": "다리우스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.0% (123게임) 매치업입니다."
        },
        {
                "championId": "maokai",
                "championName": "마오카이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.3% (61게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 44.7%, 코어 15.3%, 룬 33.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["유체화","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["황혼과 새벽","그림자불꽃","라바돈의 죽음모자","마법사의 신발"],
      situationalItems: ["존야의 모래시계","공허의 지팡이","메자이의 영혼약탈자","밴시의 장막"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "talon",
                "championName": "탈론",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.3% (30게임) 매치업입니다."
        },
        {
                "championId": "lillia",
                "championName": "릴리아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.2% (31게임) 매치업입니다."
        },
        {
                "championId": "naafiri",
                "championName": "나피리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.6% (57게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 86.2%, 코어 13.3%, 룬 38.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  graves: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["요우무의 유령검","징수의 총","도미닉 경의 인사","판금 장화"],
      situationalItems: ["불멸의 철갑궁","수호 천사","피바라기","무한의 대검"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "dark_harvest",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "precision",
        "secondarySlot1": "legend_alacrity",
        "secondarySlot2": "triumph",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "amumu",
                "championName": "아무무",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.6% (59게임) 매치업입니다."
        },
        {
                "championId": "poppy",
                "championName": "뽀삐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.5% (52게임) 매치업입니다."
        },
        {
                "championId": "udyr",
                "championName": "우디르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.1% (64게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.7%, 코어 24.8%, 룬 47.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(불멸의 철갑궁, 수호 천사)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["정수 약탈자","징수의 총","도미닉 경의 인사","판금 장화"],
      situationalItems: ["무한의 대검","불멸의 철갑궁","피바라기","필멸자의 운명"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "fleet_footwork",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zed",
                "championName": "상대 라이너",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 패치 기준 픽률 1위 룬과 코어 타이밍에 맞춰 교전을 설계하세요."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 42.8%, 코어 7.7%, 룬 25.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(무한의 대검, 불멸의 철갑궁)을 우선 고려하세요."
]
    },
  },
  hecarim: {
    JUNGLE: {
      spells: ["유체화","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["쇼진의 창","칠흑의 양날 도끼","죽음의 무도","명석함의 아이오니아 장화"],
      situationalItems: ["끝없는 갈망","수호 천사","요우무의 유령검","맬모셔스의 아귀"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "phase_rush",
        "primarySlot1": "nimbus_cloak",
        "primarySlot2": "celerity",
        "primarySlot3": "waterwalking",
        "secondaryPath": "precision",
        "secondarySlot1": "legend_haste",
        "secondarySlot2": "triumph",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zaahen",
                "championName": "자헨",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.4% (71게임) 매치업입니다."
        },
        {
                "championId": "sejuani",
                "championName": "세주아니",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.2% (112게임) 매치업입니다."
        },
        {
                "championId": "gragas",
                "championName": "그라가스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.3% (63게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 98.7%, 코어 21.9%, 룬 54.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(끝없는 갈망, 수호 천사)을 우선 고려하세요."
]
    },
  },
  jax: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["삼위일체","갈라진 하늘","존야의 모래시계","판금 장화"],
      situationalItems: ["죽음의 무도","수호 천사","스테락의 도전","마법사의 최후"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "unflinching",
        "secondarySlot2": "bone_plating",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "lissandra",
                "championName": "리산드라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.0% (82게임) 매치업입니다."
        },
        {
                "championId": "tahmkench",
                "championName": "탐 켄치",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (60게임) 매치업입니다."
        },
        {
                "championId": "quinn",
                "championName": "퀸",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.4% (89게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 56.6%, 코어 18.2%, 룬 22.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(죽음의 무도, 수호 천사)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["삼위일체","갈라진 하늘","존야의 모래시계","헤르메스의 발걸음"],
      situationalItems: ["죽음의 무도","수호 천사","스테락의 도전","마법사의 최후"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "kindred",
                "championName": "킨드레드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.4% (33게임) 매치업입니다."
        },
        {
                "championId": "khazix",
                "championName": "카직스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.0% (39게임) 매치업입니다."
        },
        {
                "championId": "nocturne",
                "championName": "녹턴",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.9% (31게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.6%, 코어 20.5%, 룬 42.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(죽음의 무도, 수호 천사)을 우선 고려하세요."
]
    },
  },
  heimerdinger: {
    SUPPORT: {
      spells: ["탈진","점멸"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["루덴의 메아리","폭풍 쇄도","공허의 지팡이","마법사의 신발"],
      situationalItems: ["모렐로노미콘","자자크의 세계가시","라바돈의 죽음모자","존야의 모래시계"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "absolute_focus",
        "primarySlot3": "scorch",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "biscuit_delivery",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "thresh",
                "championName": "쓰레쉬",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.3% (81게임) 매치업입니다."
        },
        {
                "championId": "pyke",
                "championName": "파이크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.2% (34게임) 매치업입니다."
        },
        {
                "championId": "bard",
                "championName": "바드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.4% (33게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 33.3%, 코어 5.8%, 룬 12.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(모렐로노미콘, 자자크의 세계가시)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","리안드리의 고통","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라일라이의 수정홀","라바돈의 죽음모자","그림자불꽃","공허의 지팡이"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_haste",
        "primarySlot3": "cut_down",
        "secondaryPath": "sorcery",
        "secondarySlot1": "absolute_focus",
        "secondarySlot2": "gathering_storm",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "twistedfate",
                "championName": "트위스티드 페이트",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.5% (39게임) 매치업입니다."
        },
        {
                "championId": "sylas",
                "championName": "사일러스",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 47.1% (51게임) 매치업입니다."
        },
        {
                "championId": "yone",
                "championName": "요네",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 52.9% (34게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 44.1%, 코어 15.9%, 룬 11.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라일라이의 수정홀, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","리안드리의 고통","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","라일라이의 수정홀","그림자불꽃"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_haste",
        "primarySlot3": "cut_down",
        "secondaryPath": "sorcery",
        "secondarySlot1": "absolute_focus",
        "secondarySlot2": "gathering_storm",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "akali",
                "championName": "아칼리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.0% (81게임) 매치업입니다."
        },
        {
                "championId": "malphite",
                "championName": "말파이트",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.4% (92게임) 매치업입니다."
        },
        {
                "championId": "gangplank",
                "championName": "갱플랭크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.8% (105게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 31.0%, 코어 12.3%, 룬 27.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  irelia: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["몰락한 왕의 검","선체파괴자","마법사의 최후","판금 장화"],
      situationalItems: ["죽음의 무도","수호 천사","끝없는 갈망","맬모셔스의 아귀"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "inspiration",
        "secondarySlot1": "triple_tonic",
        "secondarySlot2": "jack_of_all_trades",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "monkeyking",
                "championName": "오공",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.5% (93게임) 매치업입니다."
        },
        {
                "championId": "trundle",
                "championName": "트런들",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.1% (126게임) 매치업입니다."
        },
        {
                "championId": "malphite",
                "championName": "말파이트",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.1% (633게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 70.3%, 코어 43.7%, 룬 63.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(죽음의 무도, 수호 천사)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["몰락한 왕의 검","크라켄 학살자","죽음의 무도","헤르메스의 발걸음"],
      situationalItems: ["수호 천사","끝없는 갈망","마법사의 최후","맬모셔스의 아귀"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "inspiration",
        "secondarySlot1": "triple_tonic",
        "secondarySlot2": "jack_of_all_trades",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "vladimir",
                "championName": "블라디미르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.8% (103게임) 매치업입니다."
        },
        {
                "championId": "taliyah",
                "championName": "탈리야",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.9% (164게임) 매치업입니다."
        },
        {
                "championId": "aurora",
                "championName": "오로라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.2% (119게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 71.6%, 코어 35.6%, 룬 57.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 끝없는 갈망)을 우선 고려하세요."
]
    },
  },
  jhin: {
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 투구","체력 물약"],
      coreItems: ["오만","유령 무희","무한의 대검","신속의 장화"],
      situationalItems: ["도미닉 경의 인사","고속 연사포","수호 천사","필멸자의 운명"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "fleet_footwork",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_bloodline",
        "primarySlot3": "cut_down",
        "secondaryPath": "inspiration",
        "secondarySlot1": "jack_of_all_trades",
        "secondarySlot2": "cash_back",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "cassiopeia",
                "championName": "카시오페아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.7% (254게임) 매치업입니다."
        },
        {
                "championId": "swain",
                "championName": "스웨인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.5% (400게임) 매치업입니다."
        },
        {
                "championId": "yasuo",
                "championName": "야스오",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 47.2% (798게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 57.1%, 코어 34.5%, 룬 48.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 고속 연사포)을 우선 고려하세요."
]
    },
  },
  hwei: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","리안드리의 고통","그림자불꽃","명석함의 아이오니아 장화"],
      situationalItems: ["존야의 모래시계","자자크의 세계가시","모렐로노미콘","라바돈의 죽음모자"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "legend_haste",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "bard",
                "championName": "바드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.7% (60게임) 매치업입니다."
        },
        {
                "championId": "pyke",
                "championName": "파이크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.6% (53게임) 매치업입니다."
        },
        {
                "championId": "alistar",
                "championName": "알리스타",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.9% (70게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 85.3%, 코어 7.5%, 룬 22.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 자자크의 세계가시)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","리안드리의 고통","그림자불꽃","명석함의 아이오니아 장화"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","공허의 지팡이","무덤꽃"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "cut_down",
        "secondarySlot2": "legend_haste",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "akshan",
                "championName": "아크샨",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.8% (98게임) 매치업입니다."
        },
        {
                "championId": "naafiri",
                "championName": "나피리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.9% (41게임) 매치업입니다."
        },
        {
                "championId": "katarina",
                "championName": "카타리나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.9% (239게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 91.3%, 코어 12.3%, 룬 26.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
  },
  illaoi: {
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["칠흑의 양날 도끼","얼어붙은 건틀릿","스테락의 도전","판금 장화"],
      situationalItems: ["정령의 형상","죽음의 무도","수호 천사","란두인의 예언"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "demolish",
        "primarySlot2": "bone_plating",
        "primarySlot3": "overgrowth",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "last_stand",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "yasuo",
                "championName": "야스오",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 29.8% (57게임) 매치업입니다."
        },
        {
                "championId": "gangplank",
                "championName": "갱플랭크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.2% (148게임) 매치업입니다."
        },
        {
                "championId": "kayle",
                "championName": "케일",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.5% (62게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 59.6%, 코어 23.0%, 룬 32.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(정령의 형상, 죽음의 무도)을 우선 고려하세요."
]
    },
  },
  kaisa: {
    ADC: {
      spells: ["탈진","점멸"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["크라켄 학살자","구인수의 격노검","경계","광전사의 군화"],
      situationalItems: ["존야의 모래시계","수호 천사","라바돈의 죽음모자","유령 무희"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_bloodline",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "biscuit_delivery",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "xayah",
                "championName": "자야",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.1% (9,392게임) 매치업입니다."
        },
        {
                "championId": "varus",
                "championName": "바루스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.4% (1,210게임) 매치업입니다."
        },
        {
                "championId": "kogmaw",
                "championName": "코그모",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.8% (524게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 43.1%, 코어 54.8%, 룬 35.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 수호 천사)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["스태틱의 단검","구인수의 격노검","내셔의 이빨","광전사의 군화"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","그림자불꽃","지평선의 초점"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_bloodline",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "biscuit_delivery",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "ahri",
                "championName": "아리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (35게임) 매치업입니다."
        },
        {
                "championId": "akali",
                "championName": "아칼리",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 58.1% (31게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 26.6%, 코어 9.9%, 룬 14.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
  },
  jinx: {
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["마법광학 장치 C44","루난의 허리케인","무한의 대검","광전사의 군화"],
      situationalItems: ["도미닉 경의 인사","수호 천사","피바라기","필멸자의 운명"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_bloodline",
        "primarySlot3": "cut_down",
        "secondaryPath": "inspiration",
        "secondarySlot1": "triple_tonic",
        "secondarySlot2": "cash_back",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "viktor",
                "championName": "빅토르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.4% (139게임) 매치업입니다."
        },
        {
                "championId": "ziggs",
                "championName": "직스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.5% (121게임) 매치업입니다."
        },
        {
                "championId": "katarina",
                "championName": "카타리나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.5% (55게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 56.8%, 코어 43.2%, 룬 41.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
  },
  ivern: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이"],
      coreItems: ["구원","월석 재생기","불타는 향로","명석함의 아이오니아 장화"],
      situationalItems: ["흐르는 물의 지팡이","새벽심장","슈렐리아의 군가","메자이의 영혼약탈자"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "summon_aery",
        "primarySlot1": "nimbus_cloak",
        "primarySlot2": "transcendence",
        "primarySlot3": "waterwalking",
        "secondaryPath": "inspiration",
        "secondarySlot1": "cash_back",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "ability_haste",
        "shardFlex": "move_speed",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "briar",
                "championName": "브라이어",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.5% (32게임) 매치업입니다."
        },
        {
                "championId": "taliyah",
                "championName": "탈리야",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.3% (61게임) 매치업입니다."
        },
        {
                "championId": "xinzhao",
                "championName": "신 짜오",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.5% (43게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 95.5%, 코어 11.9%, 룬 47.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(흐르는 물의 지팡이, 새벽심장)을 우선 고려하세요."
]
    },
  },
  jarvaniv: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["불경한 히드라","벼락폭풍검","요새파괴자","판금 장화"],
      situationalItems: ["수호 천사","맬모셔스의 아귀","요우무의 유령검","밤의 끝자락"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "rammus",
                "championName": "람머스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.9% (103게임) 매치업입니다."
        },
        {
                "championId": "zaahen",
                "championName": "자헨",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.2% (129게임) 매치업입니다."
        },
        {
                "championId": "nidalee",
                "championName": "니달리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.3% (665게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 100.0%, 코어 25.0%, 룬 63.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 맬모셔스의 아귀)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["월식","불경한 히드라","벼락폭풍검","판금 장화"],
      situationalItems: ["요새파괴자","수호 천사","갈라진 하늘","원칙의 원형낫"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "inspiration",
        "keystone": "first_strike",
        "primarySlot1": "cash_back",
        "primarySlot2": "triple_tonic",
        "primarySlot3": "cosmic_insight",
        "secondaryPath": "sorcery",
        "secondarySlot1": "transcendence",
        "secondarySlot2": "manaflow_band",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "zed",
                "championName": "상대 라이너",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 패치 기준 픽률 1위 룬과 코어 타이밍에 맞춰 교전을 설계하세요."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 44.0%, 코어 7.5%, 룬 7.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(요새파괴자, 수호 천사)을 우선 고려하세요."
]
    },
  },
  janna: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["월석 재생기","구원","슈렐리아의 군가","신속의 장화"],
      situationalItems: ["새벽심장","꿈 생성기","불타는 향로","미카엘의 축복"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "summon_aery",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "celerity",
        "primarySlot3": "gathering_storm",
        "secondaryPath": "resolve",
        "secondarySlot1": "revitalize",
        "secondarySlot2": "font_of_life",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "move_speed",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "poppy",
                "championName": "뽀삐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.1% (36게임) 매치업입니다."
        },
        {
                "championId": "zilean",
                "championName": "질리언",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.0% (54게임) 매치업입니다."
        },
        {
                "championId": "milio",
                "championName": "밀리오",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.8% (67게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 85.2%, 코어 3.1%, 룬 17.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(새벽심장, 꿈 생성기)을 우선 고려하세요."
]
    },
  },
  jayce: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["벼락폭풍검","요새파괴자","밤의 끝자락","명석함의 아이오니아 장화"],
      situationalItems: ["세릴다의 원한","수호 천사","요우무의 유령검","도미닉 경의 인사"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "inspiration",
        "keystone": "first_strike",
        "primarySlot1": "cash_back",
        "primarySlot2": "triple_tonic",
        "primarySlot3": "cosmic_insight",
        "secondaryPath": "precision",
        "secondarySlot1": "cut_down",
        "secondarySlot2": "legend_haste",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "aatrox",
                "championName": "아트록스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 25.5% (47게임) 매치업입니다."
        },
        {
                "championId": "fiddlesticks",
                "championName": "피들스틱",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 30.7% (101게임) 매치업입니다."
        },
        {
                "championId": "zyra",
                "championName": "자이라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.8% (285게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 100.0%, 코어 35.3%, 룬 50.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(세릴다의 원한, 수호 천사)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["여신의 눈물","요우무의 유령검","무라마나","벼락폭풍검","명석함의 아이오니아 장화"],
      situationalItems: ["세릴다의 원한","밤의 끝자락","수호 천사","요새파괴자"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "phase_rush",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "absolute_focus",
        "primarySlot3": "gathering_storm",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "biscuit_delivery",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "illaoi",
                "championName": "일라오이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.9% (177게임) 매치업입니다."
        },
        {
                "championId": "lissandra",
                "championName": "리산드라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.2% (102게임) 매치업입니다."
        },
        {
                "championId": "tahmkench",
                "championName": "탐 켄치",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.1% (133게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 61.2%, 코어 24.1%, 룬 19.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(세릴다의 원한, 밤의 끝자락)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["여신의 눈물","요우무의 유령검","무라마나","벼락폭풍검","명석함의 아이오니아 장화"],
      situationalItems: ["세릴다의 원한","밤의 끝자락","요새파괴자","독사의 송곳니"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "phase_rush",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "absolute_focus",
        "primarySlot3": "gathering_storm",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "biscuit_delivery",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "aurelionsol",
                "championName": "아우렐리온 솔",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.4% (32게임) 매치업입니다."
        },
        {
                "championId": "zoe",
                "championName": "조이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.7% (42게임) 매치업입니다."
        },
        {
                "championId": "lissandra",
                "championName": "리산드라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.1% (72게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 56.0%, 코어 17.2%, 룬 15.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(세릴다의 원한, 밤의 끝자락)을 우선 고려하세요."
]
    },
  },
  kalista: {
    ADC: {
      spells: ["탈진","점멸"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["스태틱의 단검","구인수의 격노검","경계","탐욕의 군화"],
      situationalItems: ["해신 작쇼","수호 천사","헤르메스의 시미터","란두인의 예언"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "domination",
        "secondarySlot1": "treasure_hunter",
        "secondarySlot2": "sudden_impact",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "xerath",
                "championName": "제라스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.5% (62게임) 매치업입니다."
        },
        {
                "championId": "jinx",
                "championName": "징크스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.9% (569게임) 매치업입니다."
        },
        {
                "championId": "xayah",
                "championName": "자야",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.4% (810게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 46.7%, 코어 76.4%, 룬 57.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(해신 작쇼, 수호 천사)을 우선 고려하세요."
]
    },
  },
  karma: {
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["악의","지평선의 초점","그림자불꽃","명석함의 아이오니아 장화"],
      situationalItems: ["라바돈의 죽음모자","존야의 모래시계","무덤꽃","메자이의 영혼약탈자"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "cheap_shot",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zed",
                "championName": "상대 라이너",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 패치 기준 픽률 1위 룬과 코어 타이밍에 맞춰 교전을 설계하세요."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 58.1%, 코어 14.4%, 룬 14.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 존야의 모래시계)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["헬리아의 메아리","월석 재생기","미카엘의 축복","명석함의 아이오니아 장화"],
      situationalItems: ["슈렐리아의 군가","꿈 생성기","모렐로노미콘","구원"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "summon_aery",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "gathering_storm",
        "secondaryPath": "resolve",
        "secondarySlot1": "revitalize",
        "secondarySlot2": "font_of_life",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "maokai",
                "championName": "마오카이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.1% (283게임) 매치업입니다."
        },
        {
                "championId": "sona",
                "championName": "소나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.1% (160게임) 매치업입니다."
        },
        {
                "championId": "velkoz",
                "championName": "벨코즈",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.6% (395게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 91.0%, 코어 13.5%, 룬 32.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(슈렐리아의 군가, 꿈 생성기)을 우선 고려하세요."
]
    },
  },
  karthus: {
    ADC: {
      spells: ["탈진","점멸"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","리안드리의 고통","무덤꽃"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "axiom_arcanist",
        "primarySlot2": "absolute_focus",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "coup_de_grace",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "jhin",
                "championName": "진",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 50.0% (56게임) 매치업입니다."
        },
        {
                "championId": "ezreal",
                "championName": "이즈리얼",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 58.5% (41게임) 매치업입니다."
        },
        {
                "championId": "kaisa",
                "championName": "카이사",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 61.9% (42게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 87.0%, 코어 18.1%, 룬 19.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["탈진","점멸"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","존야의 모래시계","그림자불꽃","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","폭풍 쇄도","공허의 지팡이","모렐로노미콘"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "summon_aery",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "absolute_focus",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "coup_de_grace",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "tenacity_slow_resist"
},
      counters: [
        {
                "championId": "zed",
                "championName": "상대 라이너",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 패치 기준 픽률 1위 룬과 코어 타이밍에 맞춰 교전을 설계하세요."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 81.0%, 코어 29.4%, 룬 29.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 폭풍 쇄도)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["탈진","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["어둠불꽃 횃불","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","폭풍 쇄도","리안드리의 고통"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "dark_harvest",
        "primarySlot1": "cheap_shot",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "coup_de_grace",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "nunu",
                "championName": "누누와 윌럼프",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.2% (43게임) 매치업입니다."
        },
        {
                "championId": "graves",
                "championName": "그레이브즈",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.7% (132게임) 매치업입니다."
        },
        {
                "championId": "chogath",
                "championName": "초가스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.9% (43게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 69.5%, 코어 27.8%, 룬 26.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  kassadin: {
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["암흑의 인장","충전형 물약"],
      coreItems: ["여신의 눈물","영겁의 지팡이","대천사의 포옹","악의","마법사의 신발"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","공허의 지팡이","메자이의 영혼약탈자"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "inspiration",
        "keystone": "first_strike",
        "primarySlot1": "cash_back",
        "primarySlot2": "triple_tonic",
        "primarySlot3": "cosmic_insight",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "sudden_impact",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "akshan",
                "championName": "아크샨",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (50게임) 매치업입니다."
        },
        {
                "championId": "annie",
                "championName": "애니",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.5% (41게임) 매치업입니다."
        },
        {
                "championId": "qiyana",
                "championName": "키아나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.3% (52게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 66.0%, 코어 13.5%, 룬 22.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
  },
  katarina: {
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["암흑의 인장","충전형 물약"],
      coreItems: ["리치베인","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","폭풍 쇄도","메자이의 영혼약탈자"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "relentless_hunter",
        "secondaryPath": "precision",
        "secondarySlot1": "coup_de_grace",
        "secondarySlot2": "triumph",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "naafiri",
                "championName": "나피리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.1% (51게임) 매치업입니다."
        },
        {
                "championId": "qiyana",
                "championName": "키아나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.5% (168게임) 매치업입니다."
        },
        {
                "championId": "ekko",
                "championName": "에코",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.0% (269게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 93.5%, 코어 22.1%, 룬 31.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 투구","체력 물약"],
      coreItems: ["발걸음 분쇄기","크라켄 학살자","실험적 마공학판","탐욕의 군화"],
      situationalItems: ["경계","죽음의 무도","수호 천사","해신 작쇼"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "inspiration",
        "secondarySlot1": "cash_back",
        "secondarySlot2": "biscuit_delivery",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "zeri",
                "championName": "제리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.6% (48게임) 매치업입니다."
        },
        {
                "championId": "xayah",
                "championName": "자야",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.0% (111게임) 매치업입니다."
        },
        {
                "championId": "aphelios",
                "championName": "아펠리오스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.1% (71게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 37.7%, 코어 37.3%, 룬 38.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(경계, 죽음의 무도)을 우선 고려하세요."
]
    },
  },
  kayle: {
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["내셔의 이빨","황혼과 새벽","라바돈의 죽음모자","신속의 장화"],
      situationalItems: ["그림자불꽃","공허의 지팡이","라일라이의 수정홀","존야의 모래시계"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "absorb_life",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "sorcery",
        "secondarySlot1": "celerity",
        "secondarySlot2": "gathering_storm",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "shen",
                "championName": "쉔",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.7% (59게임) 매치업입니다."
        },
        {
                "championId": "tryndamere",
                "championName": "트린다미어",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.3% (75게임) 매치업입니다."
        },
        {
                "championId": "poppy",
                "championName": "뽀삐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.9% (31게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 66.2%, 코어 34.0%, 룬 18.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(그림자불꽃, 공허의 지팡이)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 방패","체력 물약"],
      coreItems: ["내셔의 이빨","황혼과 새벽","라바돈의 죽음모자","신속의 장화"],
      situationalItems: ["공허의 지팡이","그림자불꽃","존야의 모래시계","라일라이의 수정홀"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "sorcery",
        "secondarySlot1": "celerity",
        "secondarySlot2": "gathering_storm",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "leblanc",
                "championName": "르블랑",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.7% (35게임) 매치업입니다."
        },
        {
                "championId": "zed",
                "championName": "제드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.7% (45게임) 매치업입니다."
        },
        {
                "championId": "galio",
                "championName": "갈리오",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 49.0% (51게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 64.6%, 코어 71.2%, 룬 21.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(공허의 지팡이, 그림자불꽃)을 우선 고려하세요."
]
    },
  },
  kayn: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["벼락폭풍검","칠흑의 양날 도끼","죽음의 무도","명석함의 아이오니아 장화"],
      situationalItems: ["밤의 끝자락","수호 천사","요우무의 유령검","세릴다의 원한"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "dark_harvest",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "reksai",
                "championName": "렉사이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.2% (97게임) 매치업입니다."
        },
        {
                "championId": "ivern",
                "championName": "아이번",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.2% (45게임) 매치업입니다."
        },
        {
                "championId": "briar",
                "championName": "브라이어",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.4% (125게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 98.3%, 코어 11.0%, 룬 21.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(밤의 끝자락, 수호 천사)을 우선 고려하세요."
]
    },
  },
  kennen: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["마법공학 로켓 벨트","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","밴시의 장막","모렐로노미콘"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "taste_of_blood",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "ultimate_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "absolute_focus",
        "secondarySlot2": "scorch",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "anivia",
                "championName": "애니비아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (51게임) 매치업입니다."
        },
        {
                "championId": "poppy",
                "championName": "뽀삐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.3% (35게임) 매치업입니다."
        },
        {
                "championId": "gwen",
                "championName": "그웬",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.2% (55게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 60.3%, 코어 23.5%, 룬 37.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["마법공학 로켓 벨트","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","밴시의 장막","모렐로노미콘"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "taste_of_blood",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "ultimate_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "absolute_focus",
        "secondarySlot2": "scorch",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "sylas",
                "championName": "사일러스",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 50.0% (34게임) 매치업입니다."
        },
        {
                "championId": "ahri",
                "championName": "아리",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 51.4% (37게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 69.7%, 코어 16.9%, 룬 25.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  khazix: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["그림자 검","벼락폭풍검","요새파괴자","명석함의 아이오니아 장화"],
      situationalItems: ["밤의 끝자락","수호 천사","요우무의 유령검","세릴다의 원한"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "inspiration",
        "keystone": "first_strike",
        "primarySlot1": "cash_back",
        "primarySlot2": "triple_tonic",
        "primarySlot3": "cosmic_insight",
        "secondaryPath": "domination",
        "secondarySlot1": "treasure_hunter",
        "secondarySlot2": "sudden_impact",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "rengar",
                "championName": "렝가",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.2% (121게임) 매치업입니다."
        },
        {
                "championId": "ambessa",
                "championName": "암베사",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.4% (33게임) 매치업입니다."
        },
        {
                "championId": "reksai",
                "championName": "렉사이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.4% (111게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 97.9%, 코어 21.4%, 룬 57.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(밤의 끝자락, 수호 천사)을 우선 고려하세요."
]
    },
  },
  kogmaw: {
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["구인수의 격노검","나보리 명멸검","경계","광전사의 군화"],
      situationalItems: ["해신 작쇼","마법사의 최후","존야의 모래시계","루난의 허리케인"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_bloodline",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "conditioning",
        "secondarySlot2": "overgrowth",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "ziggs",
                "championName": "직스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.8% (38게임) 매치업입니다."
        },
        {
                "championId": "twitch",
                "championName": "트위치",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.5% (79게임) 매치업입니다."
        },
        {
                "championId": "viktor",
                "championName": "빅토르",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 47.1% (34게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 36.6%, 코어 36.3%, 룬 40.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(해신 작쇼, 마법사의 최후)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","유체화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["황혼과 새벽","그림자불꽃","라바돈의 죽음모자","마법사의 신발"],
      situationalItems: ["존야의 모래시계","공허의 지팡이","밴시의 장막","메자이의 영혼약탈자"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "phase_rush",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "absolute_focus",
        "primarySlot3": "gathering_storm",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "cut_down",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "katarina",
                "championName": "카타리나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.5% (32게임) 매치업입니다."
        },
        {
                "championId": "xerath",
                "championName": "제라스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (30게임) 매치업입니다."
        },
        {
                "championId": "yasuo",
                "championName": "야스오",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.0% (39게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 59.6%, 코어 45.6%, 룬 17.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  kindred: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["크라켄 학살자","징수의 총","도미닉 경의 인사","판금 장화"],
      situationalItems: ["무한의 대검","수호 천사","유령 무희","마법광학 장치 C44"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "domination",
        "secondarySlot1": "treasure_hunter",
        "secondarySlot2": "sudden_impact",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "shyvana",
                "championName": "쉬바나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.6% (39게임) 매치업입니다."
        },
        {
                "championId": "fiddlesticks",
                "championName": "피들스틱",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.7% (46게임) 매치업입니다."
        },
        {
                "championId": "briar",
                "championName": "브라이어",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.3% (108게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.2%, 코어 29.8%, 룬 27.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(무한의 대검, 수호 천사)을 우선 고려하세요."
]
    },
  },
  ksante: {
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 투구","체력 물약"],
      coreItems: ["얼어붙은 건틀릿","끝없는 절망","해신 작쇼","판금 장화"],
      situationalItems: ["란두인의 예언","가시 갑옷","대자연의 힘","정령의 형상"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "shield_bash",
        "primarySlot2": "second_wind",
        "primarySlot3": "overgrowth",
        "secondaryPath": "precision",
        "secondarySlot1": "last_stand",
        "secondarySlot2": "triumph",
        "shardOffense": "attack_speed",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "lissandra",
                "championName": "리산드라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.8% (67게임) 매치업입니다."
        },
        {
                "championId": "masteryi",
                "championName": "마스터 이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.9% (58게임) 매치업입니다."
        },
        {
                "championId": "rengar",
                "championName": "렝가",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.6% (77게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 87.4%, 코어 7.6%, 룬 15.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(란두인의 예언, 가시 갑옷)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 투구","체력 물약"],
      coreItems: ["케이닉 루컨","얼어붙은 건틀릿","해신 작쇼","판금 장화"],
      situationalItems: ["끝없는 절망","얼어붙은 심장","란두인의 예언","가시 갑옷"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "aftershock",
        "primarySlot1": "shield_bash",
        "primarySlot2": "second_wind",
        "primarySlot3": "overgrowth",
        "secondaryPath": "inspiration",
        "secondarySlot1": "biscuit_delivery",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zed",
                "championName": "제드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.9% (44게임) 매치업입니다."
        },
        {
                "championId": "sylas",
                "championName": "사일러스",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 61.3% (31게임) 매치업입니다."
        },
        {
                "championId": "galio",
                "championName": "갈리오",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 70.0% (30게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 76.0%, 코어 8.1%, 룬 13.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(끝없는 절망, 얼어붙은 심장)을 우선 고려하세요."
]
    },
  },
  kled: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["거대한 히드라","칠흑의 양날 도끼","지배자의 피갑옷","판금 장화"],
      situationalItems: ["스테락의 도전","수호 천사","죽음의 무도","선체파괴자"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "demolish",
        "secondarySlot2": "bone_plating",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "urgot",
                "championName": "우르곳",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.5% (31게임) 매치업입니다."
        },
        {
                "championId": "riven",
                "championName": "리븐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.3% (52게임) 매치업입니다."
        },
        {
                "championId": "fiora",
                "championName": "피오라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.2% (176게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 57.5%, 코어 17.2%, 룬 29.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(스테락의 도전, 수호 천사)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["거대한 히드라","칠흑의 양날 도끼","선체파괴자","헤르메스의 발걸음"],
      situationalItems: ["지배자의 피갑옷","수호 천사","스테락의 도전","징수의 총"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "demolish",
        "secondarySlot2": "bone_plating",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "akali",
                "championName": "아칼리",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 50.0% (38게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 81.5%, 코어 13.7%, 룬 13.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(지배자의 피갑옷, 수호 천사)을 우선 고려하세요."
]
    },
  },
  leblanc: {
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["루덴의 메아리","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","메자이의 영혼약탈자","밴시의 장막"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "relentless_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "transcendence",
        "secondarySlot2": "gathering_storm",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "kogmaw",
                "championName": "코그모",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.0% (61게임) 매치업입니다."
        },
        {
                "championId": "naafiri",
                "championName": "나피리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.1% (116게임) 매치업입니다."
        },
        {
                "championId": "velkoz",
                "championName": "벨코즈",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.7% (38게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 89.7%, 코어 18.7%, 룬 38.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["루덴의 메아리","폭풍 쇄도","그림자불꽃","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","자자크의 세계가시","존야의 모래시계","밴시의 장막"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "relentless_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "transcendence",
        "secondarySlot2": "gathering_storm",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "poppy",
                "championName": "뽀삐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.5% (40게임) 매치업입니다."
        },
        {
                "championId": "maokai",
                "championName": "마오카이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.8% (49게임) 매치업입니다."
        },
        {
                "championId": "rell",
                "championName": "렐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.4% (52게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 95.6%, 코어 11.3%, 룬 37.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 자자크의 세계가시)을 우선 고려하세요."
]
    },
  },
  leesin: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["월식","칠흑의 양날 도끼","죽음의 무도","헤르메스의 발걸음"],
      situationalItems: ["수호 천사","맬모셔스의 아귀","요우무의 유령검","스테락의 도전"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "nunu",
                "championName": "누누와 윌럼프",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.5% (634게임) 매치업입니다."
        },
        {
                "championId": "reksai",
                "championName": "렉사이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.1% (1,103게임) 매치업입니다."
        },
        {
                "championId": "udyr",
                "championName": "우디르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.8% (225게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 100.0%, 코어 37.5%, 룬 69.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 맬모셔스의 아귀)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["월식","칠흑의 양날 도끼","죽음의 무도","판금 장화"],
      situationalItems: ["수호 천사","맬모셔스의 아귀","끝없는 갈망","란두인의 예언"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "domination",
        "secondarySlot1": "treasure_hunter",
        "secondarySlot2": "sudden_impact",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zed",
                "championName": "상대 라이너",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 패치 기준 픽률 1위 룬과 코어 타이밍에 맞춰 교전을 설계하세요."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 76.7%, 코어 10.9%, 룬 10.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 맬모셔스의 아귀)을 우선 고려하세요."
]
    },
  },
  lillia: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["리안드리의 고통","균열 생성기","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라일라이의 수정홀","라바돈의 죽음모자","우주의 추진력","메자이의 영혼약탈자"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "ivern",
                "championName": "아이번",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.5% (41게임) 매치업입니다."
        },
        {
                "championId": "quinn",
                "championName": "퀸",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.7% (47게임) 매치업입니다."
        },
        {
                "championId": "nidalee",
                "championName": "니달리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.0% (369게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 100.0%, 코어 44.8%, 룬 62.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라일라이의 수정홀, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","리안드리의 고통","라일라이의 수정홀","신속의 장화"],
      situationalItems: ["존야의 모래시계","대자연의 힘","모렐로노미콘","망자의 갑옷"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "sorcery",
        "secondarySlot1": "waterwalking",
        "secondarySlot2": "celerity",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zed",
                "championName": "상대 라이너",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 패치 기준 픽률 1위 룬과 코어 타이밍에 맞춰 교전을 설계하세요."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 54.0%, 코어 11.4%, 룬 13.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 대자연의 힘)을 우선 고려하세요."
]
    },
  },
  lissandra: {
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["악의","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","무덤꽃","모렐로노미콘"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "cheap_shot",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "corki",
                "championName": "코르키",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.9% (44게임) 매치업입니다."
        },
        {
                "championId": "pantheon",
                "championName": "판테온",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.2% (83게임) 매치업입니다."
        },
        {
                "championId": "annie",
                "championName": "애니",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.3% (97게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 81.7%, 코어 17.8%, 룬 26.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","제국의 명령","존야의 모래시계","명석함의 아이오니아 장화"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","그림자불꽃","모렐로노미콘"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "cheap_shot",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "sion",
                "championName": "사이온",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.5% (42게임) 매치업입니다."
        },
        {
                "championId": "gnar",
                "championName": "나르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.3% (30게임) 매치업입니다."
        },
        {
                "championId": "renekton",
                "championName": "레넥톤",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.6% (55게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 70.4%, 코어 18.6%, 룬 29.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  leona: {
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["강철의 솔라리 펜던트","기사의 맹세","밴들파이프","판금 장화"],
      situationalItems: ["가시 갑옷","천상의 이의","원형질 안전벨트","케이닉 루컨"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "aftershock",
        "primarySlot1": "font_of_life",
        "primarySlot2": "bone_plating",
        "primarySlot3": "unflinching",
        "secondaryPath": "inspiration",
        "secondarySlot1": "biscuit_delivery",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "ability_haste",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "taric",
                "championName": "타릭",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.4% (144게임) 매치업입니다."
        },
        {
                "championId": "renata",
                "championName": "레나타 글라스크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.6% (241게임) 매치업입니다."
        },
        {
                "championId": "fiddlesticks",
                "championName": "피들스틱",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.8% (72게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 53.4%, 코어 18.2%, 룬 26.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(가시 갑옷, 천상의 이의)을 우선 고려하세요."
]
    },
  },
  lulu: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["불타는 향로","미카엘의 축복","월석 재생기","명석함의 아이오니아 장화"],
      situationalItems: ["슈렐리아의 군가","꿈 생성기","강철의 솔라리 펜던트","구원"],
      skillOrder: 'E > W > Q > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "summon_aery",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "resolve",
        "secondarySlot1": "revitalize",
        "secondarySlot2": "bone_plating",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "elise",
                "championName": "엘리스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.9% (207게임) 매치업입니다."
        },
        {
                "championId": "fiddlesticks",
                "championName": "피들스틱",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.0% (131게임) 매치업입니다."
        },
        {
                "championId": "blitzcrank",
                "championName": "블리츠크랭크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.1% (2,323게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 92.7%, 코어 10.9%, 룬 38.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(슈렐리아의 군가, 꿈 생성기)을 우선 고려하세요."
]
    },
  },
  lucian: {
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["정수 약탈자","나보리 명멸검","무한의 대검","탐욕의 군화"],
      situationalItems: ["도미닉 경의 인사","수호 천사","피바라기","필멸자의 운명"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_bloodline",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "biscuit_delivery",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "draven",
                "championName": "드레이븐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.7% (394게임) 매치업입니다."
        },
        {
                "championId": "swain",
                "championName": "스웨인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.2% (119게임) 매치업입니다."
        },
        {
                "championId": "samira",
                "championName": "사미라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.3% (326게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 50.7%, 코어 53.5%, 룬 36.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["정수 약탈자","나보리 명멸검","무한의 대검","명석함의 아이오니아 장화"],
      situationalItems: ["도미닉 경의 인사","수호 천사","필멸자의 운명","맬모셔스의 아귀"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_bloodline",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "biscuit_delivery",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "katarina",
                "championName": "카타리나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 22.7% (44게임) 매치업입니다."
        },
        {
                "championId": "twistedfate",
                "championName": "트위스티드 페이트",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 30.4% (69게임) 매치업입니다."
        },
        {
                "championId": "akali",
                "championName": "아칼리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 31.4% (70게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 40.6%, 코어 32.2%, 룬 22.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
  },
  malphite: {
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["태양불꽃 방패","가시 갑옷","얼어붙은 심장","판금 장화"],
      situationalItems: ["해신 작쇼","란두인의 예언","망자의 갑옷","케이닉 루컨"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "resolve",
        "secondarySlot1": "second_wind",
        "secondarySlot2": "overgrowth",
        "shardOffense": "attack_speed",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "swain",
                "championName": "스웨인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 32.0% (75게임) 매치업입니다."
        },
        {
                "championId": "singed",
                "championName": "신지드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.2% (123게임) 매치업입니다."
        },
        {
                "championId": "monkeyking",
                "championName": "오공",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.2% (68게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 79.9%, 코어 6.9%, 룬 39.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(해신 작쇼, 란두인의 예언)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["악의","폭풍 쇄도","그림자불꽃","명석함의 아이오니아 장화"],
      situationalItems: ["존야의 모래시계","자자크의 세계가시","라바돈의 죽음모자","기사의 맹세"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "inspiration",
        "secondarySlot1": "biscuit_delivery",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "thresh",
                "championName": "쓰레쉬",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (30게임) 매치업입니다."
        },
        {
                "championId": "leona",
                "championName": "레오나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.7% (30게임) 매치업입니다."
        },
        {
                "championId": "lulu",
                "championName": "룰루",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.7% (30게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 76.0%, 코어 13.3%, 룬 14.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 자자크의 세계가시)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["악의","폭풍 쇄도","그림자불꽃","판금 장화"],
      situationalItems: ["란두인의 예언","존야의 모래시계","얼어붙은 심장","케이닉 루컨"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "resolve",
        "secondarySlot1": "second_wind",
        "secondarySlot2": "overgrowth",
        "shardOffense": "attack_speed",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "galio",
                "championName": "갈리오",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.5% (43게임) 매치업입니다."
        },
        {
                "championId": "viktor",
                "championName": "빅토르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.2% (51게임) 매치업입니다."
        },
        {
                "championId": "yone",
                "championName": "요네",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.5% (118게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 64.8%, 코어 9.7%, 룬 37.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(란두인의 예언, 존야의 모래시계)을 우선 고려하세요."
]
    },
  },
  lux: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["루덴의 메아리","폭풍 쇄도","그림자불꽃","마법사의 신발"],
      situationalItems: ["모렐로노미콘","공허의 지팡이","자자크의 세계가시","라바돈의 죽음모자"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "cheap_shot",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "poppy",
                "championName": "뽀삐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.6% (106게임) 매치업입니다."
        },
        {
                "championId": "leblanc",
                "championName": "르블랑",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.7% (89게임) 매치업입니다."
        },
        {
                "championId": "janna",
                "championName": "잔나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.0% (93게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 76.0%, 코어 12.0%, 룬 47.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(모렐로노미콘, 공허의 지팡이)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["루덴의 메아리","폭풍 쇄도","그림자불꽃","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","존야의 모래시계","메자이의 영혼약탈자","공허의 지팡이"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "cheap_shot",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "vladimir",
                "championName": "블라디미르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 32.0% (50게임) 매치업입니다."
        },
        {
                "championId": "aurelionsol",
                "championName": "아우렐리온 솔",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.1% (44게임) 매치업입니다."
        },
        {
                "championId": "anivia",
                "championName": "애니비아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.2% (78게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 47.3%, 코어 20.3%, 룬 35.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 존야의 모래시계)을 우선 고려하세요."
]
    },
  },
  missfortune: {
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["피바라기","징수의 총","무한의 대검","신속의 장화"],
      situationalItems: ["도미닉 경의 인사","수호 천사","밤의 끝자락","필멸자의 운명"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_bloodline",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "biscuit_delivery",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "katarina",
                "championName": "카타리나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.3% (46게임) 매치업입니다."
        },
        {
                "championId": "swain",
                "championName": "스웨인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.2% (81게임) 매치업입니다."
        },
        {
                "championId": "kogmaw",
                "championName": "코그모",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.8% (181게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 66.1%, 코어 41.1%, 룬 27.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","리안드리의 고통","라일라이의 수정홀","명석함의 아이오니아 장화"],
      situationalItems: ["모렐로노미콘","자자크의 세계가시","라바돈의 죽음모자","존야의 모래시계"],
      skillOrder: 'E > W > Q > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "cheap_shot",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "yuumi",
                "championName": "유미",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 23.7% (38게임) 매치업입니다."
        },
        {
                "championId": "seraphine",
                "championName": "세라핀",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 25.5% (47게임) 매치업입니다."
        },
        {
                "championId": "pantheon",
                "championName": "판테온",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 26.7% (30게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 74.2%, 코어 12.6%, 룬 9.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(모렐로노미콘, 자자크의 세계가시)을 우선 고려하세요."
]
    },
  },
  malzahar: {
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","라일라이의 수정홀","리안드리의 고통","마법사의 신발"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","그림자불꽃","공허의 지팡이"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "aurelionsol",
                "championName": "아우렐리온 솔",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.0% (75게임) 매치업입니다."
        },
        {
                "championId": "lux",
                "championName": "럭스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.3% (75게임) 매치업입니다."
        },
        {
                "championId": "sion",
                "championName": "사이온",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.5% (144게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 84.9%, 코어 30.0%, 룬 29.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
  },
  maokai: {
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 방패","체력 물약"],
      coreItems: ["여신의 눈물","끝없는 절망","종말의 겨울","정령의 형상","판금 장화"],
      situationalItems: ["가시 갑옷","란두인의 예언","해신 작쇼","얼어붙은 심장"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "demolish",
        "primarySlot2": "second_wind",
        "primarySlot3": "overgrowth",
        "secondaryPath": "sorcery",
        "secondarySlot1": "transcendence",
        "secondarySlot2": "manaflow_band",
        "shardOffense": "attack_speed",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "irelia",
                "championName": "이렐리아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.1% (83게임) 매치업입니다."
        },
        {
                "championId": "olaf",
                "championName": "올라프",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.2% (110게임) 매치업입니다."
        },
        {
                "championId": "ornn",
                "championName": "오른",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.6% (53게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 80.1%, 코어 10.6%, 룬 31.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(가시 갑옷, 란두인의 예언)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["강철의 솔라리 펜던트","밴들파이프","기사의 맹세","신속의 장화"],
      situationalItems: ["가시 갑옷","태양의 썰매","원형질 안전벨트","정령의 형상"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "aftershock",
        "primarySlot1": "font_of_life",
        "primarySlot2": "bone_plating",
        "primarySlot3": "unflinching",
        "secondaryPath": "inspiration",
        "secondarySlot1": "biscuit_delivery",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zilean",
                "championName": "질리언",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.0% (78게임) 매치업입니다."
        },
        {
                "championId": "galio",
                "championName": "갈리오",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.5% (65게임) 매치업입니다."
        },
        {
                "championId": "braum",
                "championName": "브라움",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.0% (235게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 54.4%, 코어 10.2%, 룬 25.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(가시 갑옷, 태양의 썰매)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["리안드리의 고통","제국의 명령","핏빛 저주","명석함의 아이오니아 장화"],
      situationalItems: ["정령의 형상","원형질 안전벨트","모렐로노미콘","끝없는 절망"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "inspiration",
        "keystone": "first_strike",
        "primarySlot1": "magical_footwear",
        "primarySlot2": "triple_tonic",
        "primarySlot3": "cosmic_insight",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "cheap_shot",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "briar",
                "championName": "브라이어",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (42게임) 매치업입니다."
        },
        {
                "championId": "kindred",
                "championName": "킨드레드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.4% (33게임) 매치업입니다."
        },
        {
                "championId": "lillia",
                "championName": "릴리아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.3% (92게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 100.0%, 코어 27.7%, 룬 44.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(정령의 형상, 원형질 안전벨트)을 우선 고려하세요."
]
    },
  },
  masteryi: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이"],
      coreItems: ["크라켄 학살자","징수의 총","도미닉 경의 인사","광전사의 군화"],
      situationalItems: ["죽음의 무도","수호 천사","실험적 마공학판","무한의 대검"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "hail_of_blades",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "precision",
        "secondarySlot1": "legend_alacrity",
        "secondarySlot2": "triumph",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "sejuani",
                "championName": "세주아니",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.5% (88게임) 매치업입니다."
        },
        {
                "championId": "warwick",
                "championName": "워윅",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.7% (131게임) 매치업입니다."
        },
        {
                "championId": "reksai",
                "championName": "렉사이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.1% (137게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 98.8%, 코어 23.5%, 룬 30.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(죽음의 무도, 수호 천사)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["거대한 히드라","징수의 총","불멸의 철갑궁","광전사의 군화"],
      situationalItems: ["도미닉 경의 인사","수호 천사","무한의 대검","죽음의 무도"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "hail_of_blades",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "precision",
        "secondarySlot1": "legend_alacrity",
        "secondarySlot2": "triumph",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zaahen",
                "championName": "자헨",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 18.4% (38게임) 매치업입니다."
        },
        {
                "championId": "sett",
                "championName": "세트",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 31.7% (41게임) 매치업입니다."
        },
        {
                "championId": "fiora",
                "championName": "피오라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.5% (42게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 79.1%, 코어 21.6%, 룬 25.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
  },
  mel: {
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["루덴의 메아리","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","무덤꽃","메자이의 영혼약탈자"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "coup_de_grace",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "aurora",
                "championName": "오로라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 18.8% (32게임) 매치업입니다."
        },
        {
                "championId": "fizz",
                "championName": "피즈",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 31.3% (32게임) 매치업입니다."
        },
        {
                "championId": "hwei",
                "championName": "흐웨이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.3% (34게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 84.6%, 코어 20.6%, 룬 47.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["루덴의 메아리","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","자자크의 세계가시","모렐로노미콘","리안드리의 고통"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "coup_de_grace",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "braum",
                "championName": "브라움",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 26.7% (30게임) 매치업입니다."
        },
        {
                "championId": "bard",
                "championName": "바드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (54게임) 매치업입니다."
        },
        {
                "championId": "alistar",
                "championName": "알리스타",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.8% (66게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 86.0%, 코어 17.8%, 룬 44.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 자자크의 세계가시)을 우선 고려하세요."
]
    },
  },
  mordekaiser: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["라일라이의 수정홀","균열 생성기","리안드리의 고통","판금 장화"],
      situationalItems: ["존야의 모래시계","정령의 형상","우주의 추진력","가시 갑옷"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "revitalize",
        "secondarySlot2": "bone_plating",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "anivia",
                "championName": "애니비아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.5% (31게임) 매치업입니다."
        },
        {
                "championId": "warwick",
                "championName": "워윅",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.0% (82게임) 매치업입니다."
        },
        {
                "championId": "tryndamere",
                "championName": "트린다미어",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.8% (98게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 61.2%, 코어 9.0%, 룬 32.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 정령의 형상)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["라일라이의 수정홀","황혼과 새벽","균열 생성기","판금 장화"],
      situationalItems: ["가시 갑옷","존야의 모래시계","정령의 형상","해신 작쇼"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "leesin",
                "championName": "리 신",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.9% (36게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 78.8%, 코어 8.5%, 룬 10.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(가시 갑옷, 존야의 모래시계)을 우선 고려하세요."
]
    },
  },
  monkeyking: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["삼위일체","칠흑의 양날 도끼","죽음의 무도","헤르메스의 발걸음"],
      situationalItems: ["수호 천사","스테락의 도전","맬모셔스의 아귀","갈라진 하늘"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zaahen",
                "championName": "자헨",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.6% (93게임) 매치업입니다."
        },
        {
                "championId": "gragas",
                "championName": "그라가스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.3% (75게임) 매치업입니다."
        },
        {
                "championId": "maokai",
                "championName": "마오카이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.9% (132게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.9%, 코어 49.9%, 룬 74.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 스테락의 도전)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["삼위일체","칠흑의 양날 도끼","죽음의 무도","판금 장화"],
      situationalItems: ["수호 천사","밤의 끝자락","맬모셔스의 아귀","스테락의 도전"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "unflinching",
        "secondarySlot2": "bone_plating",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "sion",
                "championName": "사이온",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.0% (47게임) 매치업입니다."
        },
        {
                "championId": "ornn",
                "championName": "오른",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.3% (34게임) 매치업입니다."
        },
        {
                "championId": "renekton",
                "championName": "레넥톤",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.2% (81게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 76.6%, 코어 13.9%, 룬 24.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 밤의 끝자락)을 우선 고려하세요."
]
    },
  },
  milio: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["헬리아의 메아리","월석 재생기","불타는 향로","명석함의 아이오니아 장화"],
      situationalItems: ["슈렐리아의 군가","꿈 생성기","구원","미카엘의 축복"],
      skillOrder: 'E > W > Q > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "summon_aery",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "resolve",
        "secondarySlot1": "revitalize",
        "secondarySlot2": "bone_plating",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "brand",
                "championName": "브랜드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.5% (56게임) 매치업입니다."
        },
        {
                "championId": "sona",
                "championName": "소나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.1% (64게임) 매치업입니다."
        },
        {
                "championId": "fiddlesticks",
                "championName": "피들스틱",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.5% (43게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 95.5%, 코어 16.5%, 룬 49.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(슈렐리아의 군가, 꿈 생성기)을 우선 고려하세요."
]
    },
  },
  morgana: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["리안드리의 고통","존야의 모래시계","라일라이의 수정홀","명석함의 아이오니아 장화"],
      situationalItems: ["모렐로노미콘","자자크의 세계가시","제국의 명령","라바돈의 죽음모자"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "cheap_shot",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "amumu",
                "championName": "아무무",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 32.0% (50게임) 매치업입니다."
        },
        {
                "championId": "zyra",
                "championName": "자이라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.5% (107게임) 매치업입니다."
        },
        {
                "championId": "renata",
                "championName": "레나타 글라스크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.6% (41게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 52.7%, 코어 12.2%, 룬 40.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(모렐로노미콘, 자자크의 세계가시)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","리안드리의 고통","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라일라이의 수정홀","라바돈의 죽음모자","모렐로노미콘","그림자불꽃"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "cheap_shot",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "yone",
                "championName": "요네",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.0% (46게임) 매치업입니다."
        },
        {
                "championId": "leblanc",
                "championName": "르블랑",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.5% (42게임) 매치업입니다."
        },
        {
                "championId": "sylas",
                "championName": "사일러스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.9% (35게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 58.3%, 코어 16.5%, 룬 25.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라일라이의 수정홀, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["리안드리의 고통","라일라이의 수정홀","존야의 모래시계","마법사의 신발"],
      situationalItems: ["모렐로노미콘","라바돈의 죽음모자","그림자불꽃","핏빛 저주"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "dark_harvest",
        "primarySlot1": "cheap_shot",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "leesin",
                "championName": "리 신",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.9% (81게임) 매치업입니다."
        },
        {
                "championId": "jarvaniv",
                "championName": "자르반 4세",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 50.0% (34게임) 매치업입니다."
        },
        {
                "championId": "qiyana",
                "championName": "키아나",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 52.8% (36게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.4%, 코어 16.4%, 룬 21.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(모렐로노미콘, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
  },
  naafiri: {
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["벼락폭풍검","원칙의 원형낫","세릴다의 원한","명석함의 아이오니아 장화"],
      situationalItems: ["밤의 끝자락","수호 천사","독사의 송곳니","죽음의 무도"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "cut_down",
        "secondarySlot2": "legend_haste",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "kassadin",
                "championName": "카사딘",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 32.3% (31게임) 매치업입니다."
        },
        {
                "championId": "vex",
                "championName": "벡스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 32.5% (40게임) 매치업입니다."
        },
        {
                "championId": "akali",
                "championName": "아칼리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.7% (86게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 89.8%, 코어 15.1%, 룬 24.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(밤의 끝자락, 수호 천사)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["벼락폭풍검","칠흑의 양날 도끼","죽음의 무도","명석함의 아이오니아 장화"],
      situationalItems: ["수호 천사","밤의 끝자락","요우무의 유령검","독사의 송곳니"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "reksai",
                "championName": "렉사이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.4% (216게임) 매치업입니다."
        },
        {
                "championId": "lillia",
                "championName": "릴리아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.9% (604게임) 매치업입니다."
        },
        {
                "championId": "ivern",
                "championName": "아이번",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.0% (79게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.7%, 코어 41.6%, 룬 58.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 밤의 끝자락)을 우선 고려하세요."
]
    },
  },
  nami: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["헬리아의 메아리","월석 재생기","불타는 향로","명석함의 아이오니아 장화"],
      situationalItems: ["모렐로노미콘","꿈 생성기","미카엘의 축복","슈렐리아의 군가"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "summon_aery",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "resolve",
        "secondarySlot1": "revitalize",
        "secondarySlot2": "bone_plating",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "amumu",
                "championName": "아무무",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.1% (35게임) 매치업입니다."
        },
        {
                "championId": "swain",
                "championName": "스웨인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.6% (69게임) 매치업입니다."
        },
        {
                "championId": "renata",
                "championName": "레나타 글라스크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.0% (61게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 92.8%, 코어 13.0%, 룬 47.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(모렐로노미콘, 꿈 생성기)을 우선 고려하세요."
]
    },
  },
  nautilus: {
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["강철의 솔라리 펜던트","기사의 맹세","밴들파이프","판금 장화"],
      situationalItems: ["가시 갑옷","천상의 이의","원형질 안전벨트","케이닉 루컨"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "aftershock",
        "primarySlot1": "shield_bash",
        "primarySlot2": "bone_plating",
        "primarySlot3": "unflinching",
        "secondaryPath": "inspiration",
        "secondarySlot1": "biscuit_delivery",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "ability_haste",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "taric",
                "championName": "타릭",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.2% (239게임) 매치업입니다."
        },
        {
                "championId": "rell",
                "championName": "렐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.9% (1,670게임) 매치업입니다."
        },
        {
                "championId": "rakan",
                "championName": "라칸",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.3% (1,571게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 46.1%, 코어 20.7%, 룬 35.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(가시 갑옷, 천상의 이의)을 우선 고려하세요."
]
    },
  },
  nasus: {
    TOP: {
      spells: ["유체화","순간이동"],
      startingItems: ["도란의 방패","체력 물약"],
      coreItems: ["삼위일체","얼어붙은 심장","정령의 형상","명석함의 아이오니아 장화"],
      situationalItems: ["해신 작쇼","란두인의 예언","망자의 갑옷","가시 갑옷"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "fleet_footwork",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "unflinching",
        "secondarySlot2": "second_wind",
        "shardOffense": "ability_haste",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "kled",
                "championName": "클레드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.9% (63게임) 매치업입니다."
        },
        {
                "championId": "sylas",
                "championName": "사일러스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.9% (64게임) 매치업입니다."
        },
        {
                "championId": "trundle",
                "championName": "트런들",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.5% (40게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 52.6%, 코어 16.6%, 룬 40.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(해신 작쇼, 란두인의 예언)을 우선 고려하세요."
]
    },
  },
  neeko: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["마법공학 로켓 벨트","존야의 모래시계","모렐로노미콘","명석함의 아이오니아 장화"],
      situationalItems: ["제국의 명령","천상의 이의","얼어붙은 심장","그림자불꽃"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "inspiration",
        "secondarySlot1": "biscuit_delivery",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "anivia",
                "championName": "애니비아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 31.0% (42게임) 매치업입니다."
        },
        {
                "championId": "elise",
                "championName": "엘리스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (57게임) 매치업입니다."
        },
        {
                "championId": "zoe",
                "championName": "조이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.1% (37게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 71.9%, 코어 13.6%, 룬 31.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(제국의 명령, 천상의 이의)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["마법공학 로켓 벨트","존야의 모래시계","제국의 명령","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","경계","모렐로노미콘","악의"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "taste_of_blood",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "manaflow_band",
        "secondarySlot2": "scorch",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zed",
                "championName": "상대 라이너",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 패치 기준 픽률 1위 룬과 코어 타이밍에 맞춰 교전을 설계하세요."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 34.7%, 코어 5.2%, 룬 7.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 경계)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["마법공학 로켓 벨트","폭풍 쇄도","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","그림자불꽃","메자이의 영혼약탈자"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "inspiration",
        "secondarySlot1": "biscuit_delivery",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "akali",
                "championName": "아칼리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.9% (44게임) 매치업입니다."
        },
        {
                "championId": "galio",
                "championName": "갈리오",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.1% (38게임) 매치업입니다."
        },
        {
                "championId": "sylas",
                "championName": "사일러스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.6% (54게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 59.7%, 코어 19.4%, 룬 22.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  nilah: {
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["징수의 총","무한의 대검","도미닉 경의 인사","탐욕의 군화"],
      situationalItems: ["불멸의 철갑궁","죽음의 무도","필멸자의 운명","윤 탈 야생화살"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "inspiration",
        "secondarySlot1": "cash_back",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "xayah",
                "championName": "자야",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.4% (48게임) 매치업입니다."
        },
        {
                "championId": "yunara",
                "championName": "유나라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.1% (65게임) 매치업입니다."
        },
        {
                "championId": "zeri",
                "championName": "제리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.7% (38게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 39.7%, 코어 40.5%, 룬 29.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(불멸의 철갑궁, 죽음의 무도)을 우선 고려하세요."
]
    },
  },
  nidalee: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["리치베인","마법공학 로켓 벨트","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","밴시의 장막","메자이의 영혼약탈자"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "dark_harvest",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "transcendence",
        "secondarySlot2": "waterwalking",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "sejuani",
                "championName": "세주아니",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.2% (114게임) 매치업입니다."
        },
        {
                "championId": "ivern",
                "championName": "아이번",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.0% (69게임) 매치업입니다."
        },
        {
                "championId": "poppy",
                "championName": "뽀삐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.2% (37게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.9%, 코어 20.4%, 룬 33.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  nocturne: {
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["티아맷","실험적 마공학판","발걸음 분쇄기","악마사냥꾼의 화살","헤르메스의 발걸음"],
      situationalItems: ["수호 천사","독사의 송곳니","칠흑의 양날 도끼","도미닉 경의 인사"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "taste_of_blood",
        "shardOffense": "attack_speed",
        "shardFlex": "move_speed",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "zed",
                "championName": "상대 라이너",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 패치 기준 픽률 1위 룬과 코어 타이밍에 맞춰 교전을 설계하세요."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 51.4%, 코어 8.0%, 룬 12.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 독사의 송곳니)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["불경한 히드라","원칙의 원형낫","벼락폭풍검","판금 장화"],
      situationalItems: ["수호 천사","죽음의 무도","무한의 대검","도미닉 경의 인사"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "eerie_souvenir",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "shyvana",
                "championName": "쉬바나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.8% (53게임) 매치업입니다."
        },
        {
                "championId": "kindred",
                "championName": "킨드레드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.0% (114게임) 매치업입니다."
        },
        {
                "championId": "trundle",
                "championName": "트런들",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.8% (38게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.1%, 코어 13.9%, 룬 32.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 죽음의 무도)을 우선 고려하세요."
]
    },
  },
  olaf: {
    TOP: {
      spells: ["점멸","유체화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["발걸음 분쇄기","실험적 마공학판","죽음의 무도","판금 장화"],
      situationalItems: ["맬모셔스의 아귀","란두인의 예언","유령 무희","스테락의 도전"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "inspiration",
        "secondarySlot1": "biscuit_delivery",
        "secondarySlot2": "approach_velocity",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "rengar",
                "championName": "렝가",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (39게임) 매치업입니다."
        },
        {
                "championId": "cassiopeia",
                "championName": "카시오페아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.5% (42게임) 매치업입니다."
        },
        {
                "championId": "lissandra",
                "championName": "리산드라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.5% (94게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 56.5%, 코어 26.1%, 룬 35.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(맬모셔스의 아귀, 란두인의 예언)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["발걸음 분쇄기","실험적 마공학판","죽음의 무도","판금 장화"],
      situationalItems: ["맬모셔스의 아귀","무한의 대검","스테락의 도전","도미닉 경의 인사"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "approach_velocity",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "jarvaniv",
                "championName": "자르반 4세",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.9% (42게임) 매치업입니다."
        },
        {
                "championId": "leesin",
                "championName": "리 신",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.8% (109게임) 매치업입니다."
        },
        {
                "championId": "naafiri",
                "championName": "나피리",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 50.0% (32게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 56.7%, 코어 16.3%, 룬 36.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(맬모셔스의 아귀, 무한의 대검)을 우선 고려하세요."
]
    },
  },
  orianna: {
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["루덴의 메아리","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","메자이의 영혼약탈자","무덤꽃"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "summon_aery",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "coup_de_grace",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "nunu",
                "championName": "누누와 윌럼프",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.0% (100게임) 매치업입니다."
        },
        {
                "championId": "aurelionsol",
                "championName": "아우렐리온 솔",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.4% (203게임) 매치업입니다."
        },
        {
                "championId": "zoe",
                "championName": "조이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.5% (375게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 88.7%, 코어 10.3%, 룬 19.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  ornn: {
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 방패","체력 물약"],
      coreItems: ["태양불꽃 방패","가시 갑옷","해신 작쇼","판금 장화"],
      situationalItems: ["란두인의 예언","얼어붙은 심장","케이닉 루컨","끝없는 절망"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "demolish",
        "primarySlot2": "bone_plating",
        "primarySlot3": "overgrowth",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "biscuit_delivery",
        "shardOffense": "attack_speed",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zac",
                "championName": "자크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.4% (33게임) 매치업입니다."
        },
        {
                "championId": "vladimir",
                "championName": "블라디미르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.4% (33게임) 매치업입니다."
        },
        {
                "championId": "singed",
                "championName": "신지드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (70게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 92.3%, 코어 6.4%, 룬 27.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(란두인의 예언, 얼어붙은 심장)을 우선 고려하세요."
]
    },
  },
  pantheon: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["톱날 단검","요새파괴자","벼락폭풍검","도미닉 경의 인사","판금 장화"],
      situationalItems: ["밤의 끝자락","수호 천사","요우무의 유령검","독사의 송곳니"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "phase_rush",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "cut_down",
        "secondarySlot2": "triumph",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "monkeyking",
                "championName": "오공",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 28.6% (49게임) 매치업입니다."
        },
        {
                "championId": "poppy",
                "championName": "뽀삐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.4% (61게임) 매치업입니다."
        },
        {
                "championId": "lissandra",
                "championName": "리산드라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.7% (62게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 91.8%, 코어 16.1%, 룬 28.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(밤의 끝자락, 수호 천사)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["그림자 검","월식","칠흑의 양날 도끼","판금 장화"],
      situationalItems: ["수호 천사","요우무의 유령검","피의 노래","독사의 송곳니"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "domination",
        "secondarySlot1": "relentless_hunter",
        "secondarySlot2": "cheap_shot",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "elise",
                "championName": "엘리스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.1% (63게임) 매치업입니다."
        },
        {
                "championId": "hwei",
                "championName": "흐웨이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.4% (33게임) 매치업입니다."
        },
        {
                "championId": "maokai",
                "championName": "마오카이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.6% (144게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 90.6%, 코어 7.6%, 룬 28.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 요우무의 유령검)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["요우무의 유령검","벼락폭풍검","밤의 끝자락","헤르메스의 발걸음"],
      situationalItems: ["독사의 송곳니","수호 천사","요새파괴자","죽음의 무도"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "phase_rush",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "cut_down",
        "secondarySlot2": "triumph",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "zoe",
                "championName": "조이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.5% (43게임) 매치업입니다."
        },
        {
                "championId": "xerath",
                "championName": "제라스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.6% (53게임) 매치업입니다."
        },
        {
                "championId": "cassiopeia",
                "championName": "카시오페아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.5% (37게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 93.0%, 코어 8.2%, 룬 21.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(독사의 송곳니, 수호 천사)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["칠흑의 양날 도끼","죽음의 무도","수호 천사","판금 장화"],
      situationalItems: ["맬모셔스의 아귀","독사의 송곳니","요우무의 유령검","밤의 끝자락"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "warwick",
                "championName": "워윅",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.0% (50게임) 매치업입니다."
        },
        {
                "championId": "xinzhao",
                "championName": "신 짜오",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.4% (115게임) 매치업입니다."
        },
        {
                "championId": "nidalee",
                "championName": "니달리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.8% (119게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.4%, 코어 11.6%, 룬 43.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(맬모셔스의 아귀, 독사의 송곳니)을 우선 고려하세요."
]
    },
  },
  nunu: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이"],
      coreItems: ["리안드리의 고통","망자의 갑옷","정령의 형상","헤르메스의 발걸음"],
      situationalItems: ["존야의 모래시계","메자이의 영혼약탈자","가시 갑옷","그림자불꽃"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "phase_rush",
        "primarySlot1": "nimbus_cloak",
        "primarySlot2": "celerity",
        "primarySlot3": "waterwalking",
        "secondaryPath": "precision",
        "secondarySlot1": "legend_haste",
        "secondarySlot2": "triumph",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "kayn",
                "championName": "케인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.3% (77게임) 매치업입니다."
        },
        {
                "championId": "elise",
                "championName": "엘리스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.7% (103게임) 매치업입니다."
        },
        {
                "championId": "evelynn",
                "championName": "이블린",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.4% (85게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 98.8%, 코어 6.0%, 룬 25.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 메자이의 영혼약탈자)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["암흑의 인장","폭풍 쇄도","마법공학 로켓 벨트","메자이의 영혼약탈자","신속의 장화"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","그림자불꽃","밴시의 장막"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "cheap_shot",
        "primarySlot2": "sixth_sense",
        "primarySlot3": "relentless_hunter",
        "secondaryPath": "inspiration",
        "secondarySlot1": "hextech_flashtraption",
        "secondarySlot2": "triple_tonic",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "ekko",
                "championName": "에코",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 30.0% (30게임) 매치업입니다."
        },
        {
                "championId": "anivia",
                "championName": "애니비아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.4% (44게임) 매치업입니다."
        },
        {
                "championId": "diana",
                "championName": "다이애나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.5% (43게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 92.5%, 코어 14.2%, 룬 50.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
  },
  poppy: {
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 방패","체력 물약"],
      coreItems: ["여신의 눈물","갈라진 하늘","종말의 겨울","가시 갑옷","판금 장화"],
      situationalItems: ["정령의 형상","해신 작쇼","란두인의 예언","끝없는 절망"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "shield_bash",
        "primarySlot2": "second_wind",
        "primarySlot3": "overgrowth",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "last_stand",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "warwick",
                "championName": "워윅",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (33게임) 매치업입니다."
        },
        {
                "championId": "sion",
                "championName": "사이온",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.6% (57게임) 매치업입니다."
        },
        {
                "championId": "nasus",
                "championName": "나서스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.9% (49게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 82.2%, 코어 12.8%, 룬 42.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(정령의 형상, 해신 작쇼)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["망자의 갑옷","강철의 솔라리 펜던트","가시 갑옷","신속의 장화"],
      situationalItems: ["원형질 안전벨트","천상의 이의","밴들파이프","기사의 맹세"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "aftershock",
        "primarySlot1": "font_of_life",
        "primarySlot2": "bone_plating",
        "primarySlot3": "unflinching",
        "secondaryPath": "inspiration",
        "secondarySlot1": "hextech_flashtraption",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "maokai",
                "championName": "마오카이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.4% (125게임) 매치업입니다."
        },
        {
                "championId": "taric",
                "championName": "타릭",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.1% (58게임) 매치업입니다."
        },
        {
                "championId": "soraka",
                "championName": "소라카",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.6% (55게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 47.8%, 코어 10.4%, 룬 40.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(원형질 안전벨트, 천상의 이의)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["갈라진 하늘","망자의 갑옷","대자연의 힘","헤르메스의 발걸음"],
      situationalItems: ["가시 갑옷","란두인의 예언","해신 작쇼","얼어붙은 심장"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "phase_rush",
        "primarySlot1": "nimbus_cloak",
        "primarySlot2": "celerity",
        "primarySlot3": "waterwalking",
        "secondaryPath": "inspiration",
        "secondarySlot1": "hextech_flashtraption",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zac",
                "championName": "자크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (33게임) 매치업입니다."
        },
        {
                "championId": "talon",
                "championName": "탈론",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.5% (43게임) 매치업입니다."
        },
        {
                "championId": "naafiri",
                "championName": "나피리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.2% (51게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.7%, 코어 10.4%, 룬 30.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(가시 갑옷, 란두인의 예언)을 우선 고려하세요."
]
    },
  },
  pyke: {
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["그림자 검","요우무의 유령검","밤의 끝자락","신속의 장화"],
      situationalItems: ["수호 천사","천상의 이의","원칙의 원형낫","벼락폭풍검"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "hail_of_blades",
        "primarySlot1": "cheap_shot",
        "primarySlot2": "sixth_sense",
        "primarySlot3": "ultimate_hunter",
        "secondaryPath": "resolve",
        "secondarySlot1": "unflinching",
        "secondarySlot2": "bone_plating",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "leblanc",
                "championName": "르블랑",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.6% (101게임) 매치업입니다."
        },
        {
                "championId": "nami",
                "championName": "나미",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.8% (160게임) 매치업입니다."
        },
        {
                "championId": "fiddlesticks",
                "championName": "피들스틱",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.8% (64게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 92.3%, 코어 22.4%, 룬 41.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 천상의 이의)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 방패","체력 물약"],
      coreItems: ["불경한 히드라","요우무의 유령검","밤의 끝자락","명석함의 아이오니아 장화"],
      situationalItems: ["벼락폭풍검","수호 천사","원칙의 원형낫","맬모셔스의 아귀"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "hail_of_blades",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "sixth_sense",
        "primarySlot3": "ultimate_hunter",
        "secondaryPath": "resolve",
        "secondarySlot1": "unflinching",
        "secondarySlot2": "second_wind",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "zed",
                "championName": "상대 라이너",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 패치 기준 픽률 1위 룬과 코어 타이밍에 맞춰 교전을 설계하세요."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 43.8%, 코어 22.2%, 룬 37.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(벼락폭풍검, 수호 천사)을 우선 고려하세요."
]
    },
  },
  qiyana: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["벼락폭풍검","요새파괴자","밤의 끝자락","명석함의 아이오니아 장화"],
      situationalItems: ["도미닉 경의 인사","수호 천사","요우무의 유령검","세릴다의 원한"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "inspiration",
        "keystone": "first_strike",
        "primarySlot1": "magical_footwear",
        "primarySlot2": "triple_tonic",
        "primarySlot3": "cosmic_insight",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "sudden_impact",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "skarner",
                "championName": "스카너",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.4% (171게임) 매치업입니다."
        },
        {
                "championId": "reksai",
                "championName": "렉사이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.2% (267게임) 매치업입니다."
        },
        {
                "championId": "evelynn",
                "championName": "이블린",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.3% (378게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 100.0%, 코어 42.1%, 룬 36.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["벼락폭풍검","요새파괴자","세릴다의 원한","명석함의 아이오니아 장화"],
      situationalItems: ["밤의 끝자락","수호 천사","요우무의 유령검","독사의 송곳니"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "last_stand",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "diana",
                "championName": "다이애나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.5% (94게임) 매치업입니다."
        },
        {
                "championId": "zoe",
                "championName": "조이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.8% (89게임) 매치업입니다."
        },
        {
                "championId": "aurelionsol",
                "championName": "아우렐리온 솔",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.7% (38게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 97.5%, 코어 7.6%, 룬 24.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(밤의 끝자락, 수호 천사)을 우선 고려하세요."
]
    },
  },
  quinn: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["불경한 히드라","징수의 총","도미닉 경의 인사","신속의 장화"],
      situationalItems: ["무한의 대검","수호 천사","요우무의 유령검","밤의 끝자락"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "absolute_focus",
        "secondarySlot2": "gathering_storm",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "nocturne",
                "championName": "녹턴",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.1% (37게임) 매치업입니다."
        },
        {
                "championId": "hecarim",
                "championName": "헤카림",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.7% (59게임) 매치업입니다."
        },
        {
                "championId": "jarvaniv",
                "championName": "자르반 4세",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.5% (73게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.4%, 코어 16.3%, 룬 30.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(무한의 대검, 수호 천사)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["불경한 히드라","징수의 총","밤의 끝자락","광전사의 군화"],
      situationalItems: ["무한의 대검","수호 천사","도미닉 경의 인사","필멸자의 운명"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "absolute_focus",
        "secondarySlot2": "gathering_storm",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "rumble",
                "championName": "럼블",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.8% (38게임) 매치업입니다."
        },
        {
                "championId": "teemo",
                "championName": "티모",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (40게임) 매치업입니다."
        },
        {
                "championId": "garen",
                "championName": "가렌",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.3% (30게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 89.2%, 코어 13.0%, 룬 25.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(무한의 대검, 수호 천사)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["불경한 히드라","징수의 총","밤의 끝자락","신속의 장화"],
      situationalItems: ["도미닉 경의 인사","무한의 대검","필멸자의 운명","수호 천사"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "absolute_focus",
        "secondarySlot2": "gathering_storm",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "twistedfate",
                "championName": "트위스티드 페이트",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 51.6% (31게임) 매치업입니다."
        },
        {
                "championId": "akali",
                "championName": "아칼리",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 58.8% (34게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 94.1%, 코어 18.2%, 룬 23.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 무한의 대검)을 우선 고려하세요."
]
    },
  },
  rakan: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["지크의 융합","강철의 솔라리 펜던트","기사의 맹세","명석함의 아이오니아 장화"],
      situationalItems: ["밴들파이프","천상의 이의","구원","슈렐리아의 군가"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "guardian",
        "primarySlot1": "font_of_life",
        "primarySlot2": "bone_plating",
        "primarySlot3": "unflinching",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "sixth_sense",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "fiddlesticks",
                "championName": "피들스틱",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.5% (62게임) 매치업입니다."
        },
        {
                "championId": "shaco",
                "championName": "샤코",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.6% (149게임) 매치업입니다."
        },
        {
                "championId": "velkoz",
                "championName": "벨코즈",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.6% (186게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 76.4%, 코어 20.2%, 룬 29.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(밴들파이프, 천상의 이의)을 우선 고려하세요."
]
    },
  },
  rammus: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["가시 갑옷","태양불꽃 방패","해신 작쇼","판금 장화"],
      situationalItems: ["원형질 안전벨트","란두인의 예언","망자의 갑옷","케이닉 루컨"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "aftershock",
        "primarySlot1": "font_of_life",
        "primarySlot2": "conditioning",
        "primarySlot3": "unflinching",
        "secondaryPath": "precision",
        "secondarySlot1": "legend_alacrity",
        "secondarySlot2": "triumph",
        "shardOffense": "attack_speed",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "kayn",
                "championName": "케인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 28.8% (52게임) 매치업입니다."
        },
        {
                "championId": "ekko",
                "championName": "에코",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.1% (63게임) 매치업입니다."
        },
        {
                "championId": "nocturne",
                "championName": "녹턴",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (55게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 78.3%, 코어 16.1%, 룬 63.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(원형질 안전벨트, 란두인의 예언)을 우선 고려하세요."
]
    },
  },
  reksai: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["발걸음 분쇄기","쇼진의 창","스테락의 도전","판금 장화"],
      situationalItems: ["수호 천사","죽음의 무도","정령의 형상","란두인의 예언"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zyra",
                "championName": "자이라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.5% (87게임) 매치업입니다."
        },
        {
                "championId": "belveth",
                "championName": "벨베스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.0% (50게임) 매치업입니다."
        },
        {
                "championId": "fiddlesticks",
                "championName": "피들스틱",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.0% (50게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 100.0%, 코어 27.3%, 룬 57.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 죽음의 무도)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 방패","체력 물약"],
      coreItems: ["거대한 히드라","쇼진의 창","스테락의 도전","판금 장화"],
      situationalItems: ["죽음의 무도","정령의 형상","갈라진 하늘","칠흑의 양날 도끼"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "demolish",
        "primarySlot2": "second_wind",
        "primarySlot3": "revitalize",
        "secondaryPath": "precision",
        "secondarySlot1": "coup_de_grace",
        "secondarySlot2": "legend_haste",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zed",
                "championName": "상대 라이너",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 패치 기준 픽률 1위 룬과 코어 타이밍에 맞춰 교전을 설계하세요."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 54.5%, 코어 11.1%, 룬 9.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(죽음의 무도, 정령의 형상)을 우선 고려하세요."
]
    },
  },
  rell: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["지크의 융합","강철의 솔라리 펜던트","기사의 맹세","명석함의 아이오니아 장화"],
      situationalItems: ["가시 갑옷","천상의 이의","밴들파이프","원형질 안전벨트"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "aftershock",
        "primarySlot1": "shield_bash",
        "primarySlot2": "bone_plating",
        "primarySlot3": "unflinching",
        "secondaryPath": "inspiration",
        "secondarySlot1": "hextech_flashtraption",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "ability_haste",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "nami",
                "championName": "나미",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.6% (118게임) 매치업입니다."
        },
        {
                "championId": "hwei",
                "championName": "흐웨이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.7% (45게임) 매치업입니다."
        },
        {
                "championId": "renata",
                "championName": "레나타 글라스크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.9% (147게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 58.6%, 코어 20.1%, 룬 34.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(가시 갑옷, 천상의 이의)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 이끼쿵쿵이","체력 물약"],
      coreItems: ["지크의 융합","가시 갑옷","밴들파이프","판금 장화"],
      situationalItems: ["강철의 솔라리 펜던트","원형질 안전벨트","태양불꽃 방패","강철심장"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "aftershock",
        "primarySlot1": "shield_bash",
        "primarySlot2": "bone_plating",
        "primarySlot3": "unflinching",
        "secondaryPath": "inspiration",
        "secondarySlot1": "hextech_flashtraption",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "ability_haste",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zed",
                "championName": "상대 라이너",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 패치 기준 픽률 1위 룬과 코어 타이밍에 맞춰 교전을 설계하세요."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 100.0%, 코어 20.0%, 룬 15.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(강철의 솔라리 펜던트, 원형질 안전벨트)을 우선 고려하세요."
]
    },
  },
  renekton: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["월식","칠흑의 양날 도끼","죽음의 무도","판금 장화"],
      situationalItems: ["스테락의 도전","수호 천사","정령의 형상","맬모셔스의 아귀"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "unflinching",
        "secondarySlot2": "bone_plating",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "masteryi",
                "championName": "마스터 이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.5% (55게임) 매치업입니다."
        },
        {
                "championId": "singed",
                "championName": "신지드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.5% (158게임) 매치업입니다."
        },
        {
                "championId": "poppy",
                "championName": "뽀삐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.6% (96게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 72.7%, 코어 19.3%, 룬 36.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(스테락의 도전, 수호 천사)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["월식","칠흑의 양날 도끼","죽음의 무도","판금 장화"],
      situationalItems: ["스테락의 도전","수호 천사","쇼진의 창","맬모셔스의 아귀"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "unflinching",
        "secondarySlot2": "bone_plating",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "sylas",
                "championName": "사일러스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.0% (73게임) 매치업입니다."
        },
        {
                "championId": "zed",
                "championName": "제드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.8% (47게임) 매치업입니다."
        },
        {
                "championId": "galio",
                "championName": "갈리오",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 49.2% (59게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 82.5%, 코어 23.5%, 룬 26.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(스테락의 도전, 수호 천사)을 우선 고려하세요."
]
    },
  },
  renata: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["강철의 솔라리 펜던트","슈렐리아의 군가","기사의 맹세","명석함의 아이오니아 장화"],
      situationalItems: ["구원","천상의 이의","밴들파이프","제국의 명령"],
      skillOrder: 'E > W > Q > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "guardian",
        "primarySlot1": "shield_bash",
        "primarySlot2": "bone_plating",
        "primarySlot3": "unflinching",
        "secondaryPath": "domination",
        "secondarySlot1": "relentless_hunter",
        "secondarySlot2": "sixth_sense",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "swain",
                "championName": "스웨인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.1% (70게임) 매치업입니다."
        },
        {
                "championId": "janna",
                "championName": "잔나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.4% (33게임) 매치업입니다."
        },
        {
                "championId": "seraphine",
                "championName": "세라핀",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.3% (201게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 90.5%, 코어 13.4%, 룬 29.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(구원, 천상의 이의)을 우선 고려하세요."
]
    },
  },
  rumble: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["리안드리의 고통","핏빛 저주","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","모렐로노미콘","그림자불꽃","공허의 지팡이"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "nimbus_cloak",
        "primarySlot2": "absolute_focus",
        "primarySlot3": "scorch",
        "secondaryPath": "resolve",
        "secondarySlot1": "unflinching",
        "secondarySlot2": "bone_plating",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "tryndamere",
                "championName": "트린다미어",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.4% (115게임) 매치업입니다."
        },
        {
                "championId": "shen",
                "championName": "쉔",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.8% (85게임) 매치업입니다."
        },
        {
                "championId": "akali",
                "championName": "아칼리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.0% (182게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 70.0%, 코어 28.3%, 룬 29.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 모렐로노미콘)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["리안드리의 고통","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["핏빛 저주","라바돈의 죽음모자","모렐로노미콘","폭풍 쇄도"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "nimbus_cloak",
        "primarySlot2": "absolute_focus",
        "primarySlot3": "scorch",
        "secondaryPath": "resolve",
        "secondarySlot1": "unflinching",
        "secondarySlot2": "bone_plating",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "yone",
                "championName": "요네",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.3% (30게임) 매치업입니다."
        },
        {
                "championId": "viktor",
                "championName": "빅토르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.4% (36게임) 매치업입니다."
        },
        {
                "championId": "ahri",
                "championName": "아리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.2% (31게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 75.9%, 코어 14.5%, 룬 20.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(핏빛 저주, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
  },
  rengar: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["그림자 검","밤의 끝자락","도미닉 경의 인사","명석함의 아이오니아 장화"],
      situationalItems: ["불경한 히드라","수호 천사","요우무의 유령검","무한의 대검"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "fleet_footwork",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "cut_down",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "sudden_impact",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "masteryi",
                "championName": "마스터 이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.8% (74게임) 매치업입니다."
        },
        {
                "championId": "monkeyking",
                "championName": "오공",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.5% (169게임) 매치업입니다."
        },
        {
                "championId": "fiddlesticks",
                "championName": "피들스틱",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.5% (32게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.2%, 코어 18.0%, 룬 44.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(불경한 히드라, 수호 천사)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["굶주린 히드라","벼락폭풍검","도미닉 경의 인사","판금 장화"],
      situationalItems: ["무한의 대검","수호 천사","요우무의 유령검","밤의 끝자락"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "fleet_footwork",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "cut_down",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "sudden_impact",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "irelia",
                "championName": "이렐리아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.0% (50게임) 매치업입니다."
        },
        {
                "championId": "pantheon",
                "championName": "판테온",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.1% (37게임) 매치업입니다."
        },
        {
                "championId": "darius",
                "championName": "다리우스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.8% (49게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 66.0%, 코어 6.7%, 룬 16.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(무한의 대검, 수호 천사)을 우선 고려하세요."
]
    },
  },
  riven: {
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["원칙의 원형낫","끝없는 갈망","죽음의 무도","명석함의 아이오니아 장화"],
      situationalItems: ["도미닉 경의 인사","수호 천사","맬모셔스의 아귀","세릴다의 원한"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "inspiration",
        "secondarySlot1": "jack_of_all_trades",
        "secondarySlot2": "cash_back",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "yone",
                "championName": "요네",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 50.0% (34게임) 매치업입니다."
        },
        {
                "championId": "yasuo",
                "championName": "야스오",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 61.3% (31게임) 매치업입니다."
        },
        {
                "championId": "sylas",
                "championName": "사일러스",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 65.6% (32게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 87.3%, 코어 9.9%, 룬 42.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["죽음의 무도","끝없는 갈망","도미닉 경의 인사","명석함의 아이오니아 장화"],
      situationalItems: ["맬모셔스의 아귀","수호 천사","갈라진 하늘","요우무의 유령검"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "inspiration",
        "secondarySlot1": "jack_of_all_trades",
        "secondarySlot2": "cash_back",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "shen",
                "championName": "쉔",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.9% (65게임) 매치업입니다."
        },
        {
                "championId": "maokai",
                "championName": "마오카이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.2% (43게임) 매치업입니다."
        },
        {
                "championId": "singed",
                "championName": "신지드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.0% (61게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 92.5%, 코어 6.8%, 룬 38.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(맬모셔스의 아귀, 수호 천사)을 우선 고려하세요."
]
    },
  },
  ryze: {
    MID: {
      spells: ["점멸","유체화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["여신의 눈물","영겁의 지팡이","대천사의 포옹","실체화 장비","헤르메스의 발걸음"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","얼어붙은 심장","공허의 지팡이"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "celerity",
        "primarySlot3": "scorch",
        "secondaryPath": "resolve",
        "secondarySlot1": "overgrowth",
        "secondarySlot2": "bone_plating",
        "shardOffense": "attack_speed",
        "shardFlex": "move_speed",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "zoe",
                "championName": "조이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 30.3% (109게임) 매치업입니다."
        },
        {
                "championId": "hwei",
                "championName": "흐웨이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.4% (195게임) 매치업입니다."
        },
        {
                "championId": "aurelionsol",
                "championName": "아우렐리온 솔",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (60게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 51.0%, 코어 77.8%, 룬 19.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["여신의 눈물","영겁의 지팡이","대천사의 포옹","실체화 장비","명석함의 아이오니아 장화"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","공허의 지팡이","얼어붙은 심장"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "phase_rush",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "gathering_storm",
        "secondaryPath": "resolve",
        "secondarySlot1": "overgrowth",
        "secondarySlot2": "bone_plating",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "shen",
                "championName": "쉔",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.5% (39게임) 매치업입니다."
        },
        {
                "championId": "sett",
                "championName": "세트",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.9% (36게임) 매치업입니다."
        },
        {
                "championId": "drmundo",
                "championName": "문도 박사",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.5% (43게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 57.2%, 코어 66.0%, 룬 13.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
  },
  samira: {
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["징수의 총","무한의 대검","도미닉 경의 인사","탐욕의 군화"],
      situationalItems: ["불멸의 철갑궁","수호 천사","피바라기","필멸자의 운명"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_bloodline",
        "primarySlot3": "last_stand",
        "secondaryPath": "domination",
        "secondarySlot1": "treasure_hunter",
        "secondarySlot2": "taste_of_blood",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "swain",
                "championName": "스웨인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.8% (37게임) 매치업입니다."
        },
        {
                "championId": "xerath",
                "championName": "제라스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.2% (34게임) 매치업입니다."
        },
        {
                "championId": "viktor",
                "championName": "빅토르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.9% (31게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 54.6%, 코어 42.3%, 룬 50.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(불멸의 철갑궁, 수호 천사)을 우선 고려하세요."
]
    },
  },
  senna: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["칠흑의 양날 도끼","스태틱의 단검","고속 연사포","신속의 장화"],
      situationalItems: ["화공 펑크 사슬검","유령 무희","피의 노래","무한의 대검"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "celerity",
        "primarySlot3": "gathering_storm",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "jack_of_all_trades",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "hwei",
                "championName": "흐웨이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.6% (41게임) 매치업입니다."
        },
        {
                "championId": "zyra",
                "championName": "자이라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.4% (146게임) 매치업입니다."
        },
        {
                "championId": "amumu",
                "championName": "아무무",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.7% (48게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 90.7%, 코어 26.1%, 룬 35.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(화공 펑크 사슬검, 유령 무희)을 우선 고려하세요."
]
    },
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 투구","체력 물약"],
      coreItems: ["스태틱의 단검","칠흑의 양날 도끼","마법광학 장치 C44","신속의 장화"],
      situationalItems: ["무한의 대검","고속 연사포","수호 천사","유령 무희"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "celerity",
        "primarySlot3": "gathering_storm",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "jack_of_all_trades",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "yunara",
                "championName": "유나라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.5% (37게임) 매치업입니다."
        },
        {
                "championId": "jinx",
                "championName": "징크스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.7% (30게임) 매치업입니다."
        },
        {
                "championId": "jhin",
                "championName": "진",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 47.8% (90게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 58.0%, 코어 30.9%, 룬 20.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(무한의 대검, 고속 연사포)을 우선 고려하세요."
]
    },
  },
  seraphine: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["여신의 눈물","헬리아의 메아리","악곡의 왕관","월석 재생기","명석함의 아이오니아 장화"],
      situationalItems: ["모렐로노미콘","꿈 생성기","라일라이의 수정홀","구원"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "summon_aery",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "gathering_storm",
        "secondaryPath": "resolve",
        "secondarySlot1": "revitalize",
        "secondarySlot2": "font_of_life",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "elise",
                "championName": "엘리스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.3% (67게임) 매치업입니다."
        },
        {
                "championId": "tahmkench",
                "championName": "탐 켄치",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.2% (154게임) 매치업입니다."
        },
        {
                "championId": "zyra",
                "championName": "자이라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.3% (272게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 92.8%, 코어 18.1%, 룬 42.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(모렐로노미콘, 꿈 생성기)을 우선 고려하세요."
]
    },
    ADC: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["여신의 눈물","어둠불꽃 횃불","대천사의 포옹","라일라이의 수정홀","명석함의 아이오니아 장화"],
      situationalItems: ["라바돈의 죽음모자","존야의 모래시계","무덤꽃","그림자불꽃"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "inspiration",
        "secondarySlot1": "biscuit_delivery",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "jhin",
                "championName": "진",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.4% (59게임) 매치업입니다."
        },
        {
                "championId": "ezreal",
                "championName": "이즈리얼",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.6% (47게임) 매치업입니다."
        },
        {
                "championId": "kaisa",
                "championName": "카이사",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.5% (62게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 70.9%, 코어 18.5%, 룬 14.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 존야의 모래시계)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["여신의 눈물","어둠불꽃 횃불","대천사의 포옹","라일라이의 수정홀","마법사의 신발"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","제국의 명령","공허의 지팡이"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "taste_of_blood",
        "primarySlot2": "sixth_sense",
        "primarySlot3": "ultimate_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "manaflow_band",
        "secondarySlot2": "gathering_storm",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "zed",
                "championName": "상대 라이너",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 패치 기준 픽률 1위 룬과 코어 타이밍에 맞춰 교전을 설계하세요."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 85.0%, 코어 10.0%, 룬 10.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
  },
  sejuani: {
    TOP: {
      spells: ["순간이동","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["황혼과 새벽","망자의 갑옷","대자연의 힘","판금 장화"],
      situationalItems: ["끝없는 절망","케이닉 루컨","가시 갑옷","란두인의 예언"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "resolve",
        "secondarySlot1": "second_wind",
        "secondarySlot2": "demolish",
        "shardOffense": "ability_haste",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zaahen",
                "championName": "자헨",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.7% (31게임) 매치업입니다."
        },
        {
                "championId": "gangplank",
                "championName": "갱플랭크",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 47.6% (42게임) 매치업입니다."
        },
        {
                "championId": "jax",
                "championName": "잭스",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 47.8% (46게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 63.6%, 코어 3.4%, 룬 7.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(끝없는 절망, 케이닉 루컨)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 이끼쿵쿵이","체력 물약"],
      coreItems: ["강철심장","끝없는 절망","가시 갑옷","판금 장화"],
      situationalItems: ["해신 작쇼","란두인의 예언","케이닉 루컨","얼어붙은 심장"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "aftershock",
        "primarySlot1": "font_of_life",
        "primarySlot2": "conditioning",
        "primarySlot3": "overgrowth",
        "secondaryPath": "precision",
        "secondarySlot1": "legend_alacrity",
        "secondarySlot2": "triumph",
        "shardOffense": "attack_speed",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "nunu",
                "championName": "누누와 윌럼프",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.2% (43게임) 매치업입니다."
        },
        {
                "championId": "lillia",
                "championName": "릴리아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.4% (151게임) 매치업입니다."
        },
        {
                "championId": "kayn",
                "championName": "케인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.4% (70게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.4%, 코어 16.0%, 룬 68.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(해신 작쇼, 란두인의 예언)을 우선 고려하세요."
]
    },
  },
  sett: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["발걸음 분쇄기","지배자의 피갑옷","워모그의 갑옷","판금 장화"],
      situationalItems: ["스테락의 도전","쇼진의 창","망자의 갑옷","선체파괴자"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "shield_bash",
        "secondarySlot2": "second_wind",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "tahmkench",
                "championName": "탐 켄치",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.1% (37게임) 매치업입니다."
        },
        {
                "championId": "malphite",
                "championName": "말파이트",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.5% (211게임) 매치업입니다."
        },
        {
                "championId": "kennen",
                "championName": "케넨",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.0% (131게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 73.3%, 코어 28.4%, 룬 25.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(스테락의 도전, 쇼진의 창)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 방패","체력 물약"],
      coreItems: ["발걸음 분쇄기","지배자의 피갑옷","스테락의 도전","신속의 장화"],
      situationalItems: ["워모그의 갑옷","선체파괴자","쇼진의 창","칠흑의 양날 도끼"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "shield_bash",
        "secondarySlot2": "second_wind",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "yone",
                "championName": "요네",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.6% (57게임) 매치업입니다."
        },
        {
                "championId": "akali",
                "championName": "아칼리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.7% (30게임) 매치업입니다."
        },
        {
                "championId": "sylas",
                "championName": "사일러스",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 55.6% (45게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 60.2%, 코어 27.7%, 룬 19.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(워모그의 갑옷, 선체파괴자)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["발걸음 분쇄기","지배자의 피갑옷","스테락의 도전","신속의 장화"],
      situationalItems: ["가시 갑옷","천상의 이의","쇼진의 창","워모그의 갑옷"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "unflinching",
        "secondarySlot2": "second_wind",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "lulu",
                "championName": "룰루",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (35게임) 매치업입니다."
        },
        {
                "championId": "leona",
                "championName": "레오나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.5% (42게임) 매치업입니다."
        },
        {
                "championId": "nautilus",
                "championName": "노틸러스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.8% (76게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 61.5%, 코어 18.3%, 룬 8.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(가시 갑옷, 천상의 이의)을 우선 고려하세요."
]
    },
  },
  shaco: {
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","제국의 명령","리안드리의 고통","명석함의 아이오니아 장화"],
      situationalItems: ["모렐로노미콘","요우무의 유령검","자자크의 세계가시","무한의 대검"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "hail_of_blades",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "relentless_hunter",
        "secondaryPath": "precision",
        "secondarySlot1": "coup_de_grace",
        "secondarySlot2": "legend_alacrity",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "camille",
                "championName": "카밀",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 25.7% (35게임) 매치업입니다."
        },
        {
                "championId": "renata",
                "championName": "레나타 글라스크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.2% (43게임) 매치업입니다."
        },
        {
                "championId": "nami",
                "championName": "나미",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.3% (61게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 63.0%, 코어 8.4%, 룬 16.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(모렐로노미콘, 요우무의 유령검)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["강타","점화"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["벼락폭풍검","징수의 총","무한의 대검","신속의 장화"],
      situationalItems: ["도미닉 경의 인사","수호 천사","요우무의 유령검","무덤꽃"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "hail_of_blades",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "relentless_hunter",
        "secondaryPath": "precision",
        "secondarySlot1": "coup_de_grace",
        "secondarySlot2": "legend_alacrity",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "pantheon",
                "championName": "판테온",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.4% (77게임) 매치업입니다."
        },
        {
                "championId": "rengar",
                "championName": "렝가",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.4% (73게임) 매치업입니다."
        },
        {
                "championId": "karthus",
                "championName": "카서스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.5% (65게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 90.7%, 코어 6.8%, 룬 25.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
  },
  sion: {
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 방패","체력 물약"],
      coreItems: ["공허한 광휘","끝없는 절망","해신 작쇼","판금 장화"],
      situationalItems: ["가시 갑옷","란두인의 예언","케이닉 루컨","거대한 히드라"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "demolish",
        "primarySlot2": "conditioning",
        "primarySlot3": "overgrowth",
        "secondaryPath": "inspiration",
        "secondarySlot1": "cash_back",
        "secondarySlot2": "approach_velocity",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "swain",
                "championName": "스웨인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.0% (41게임) 매치업입니다."
        },
        {
                "championId": "gragas",
                "championName": "그라가스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.9% (110게임) 매치업입니다."
        },
        {
                "championId": "udyr",
                "championName": "우디르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.2% (34게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 89.4%, 코어 7.4%, 룬 36.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(가시 갑옷, 란두인의 예언)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 방패","체력 물약"],
      coreItems: ["공허한 광휘","끝없는 절망","해신 작쇼","헤르메스의 발걸음"],
      situationalItems: ["가시 갑옷","란두인의 예언","지배자의 피갑옷","거대한 히드라"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "demolish",
        "primarySlot2": "conditioning",
        "primarySlot3": "overgrowth",
        "secondaryPath": "inspiration",
        "secondarySlot1": "cash_back",
        "secondarySlot2": "approach_velocity",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "aurora",
                "championName": "오로라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 31.3% (32게임) 매치업입니다."
        },
        {
                "championId": "ekko",
                "championName": "에코",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 31.7% (41게임) 매치업입니다."
        },
        {
                "championId": "lissandra",
                "championName": "리산드라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.9% (54게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 86.6%, 코어 11.1%, 룬 33.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(가시 갑옷, 란두인의 예언)을 우선 고려하세요."
]
    },
  },
  shen: {
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 방패","체력 물약"],
      coreItems: ["거대한 히드라","황혼과 새벽","가시 갑옷","판금 장화"],
      situationalItems: ["케이닉 루컨","란두인의 예언","밴들파이프","끝없는 절망"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "shield_bash",
        "primarySlot2": "second_wind",
        "primarySlot3": "overgrowth",
        "secondaryPath": "inspiration",
        "secondarySlot1": "biscuit_delivery",
        "secondarySlot2": "approach_velocity",
        "shardOffense": "attack_speed",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "poppy",
                "championName": "뽀삐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.9% (43게임) 매치업입니다."
        },
        {
                "championId": "gnar",
                "championName": "나르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.2% (154게임) 매치업입니다."
        },
        {
                "championId": "olaf",
                "championName": "올라프",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.9% (171게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 54.0%, 코어 13.2%, 룬 39.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(케이닉 루컨, 란두인의 예언)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["강철의 솔라리 펜던트","원형질 안전벨트","지크의 융합","판금 장화"],
      situationalItems: ["가시 갑옷","천상의 이의","기사의 맹세","밴들파이프"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "aftershock",
        "primarySlot1": "shield_bash",
        "primarySlot2": "second_wind",
        "primarySlot3": "revitalize",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "cheap_shot",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "senna",
                "championName": "세나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (33게임) 매치업입니다."
        },
        {
                "championId": "lux",
                "championName": "럭스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.4% (52게임) 매치업입니다."
        },
        {
                "championId": "soraka",
                "championName": "소라카",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.9% (31게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 60.4%, 코어 6.0%, 룬 31.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(가시 갑옷, 천상의 이의)을 우선 고려하세요."
]
    },
  },
  singed: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["리안드리의 고통","라일라이의 수정홀","원형질 안전벨트","신속의 장화"],
      situationalItems: ["해신 작쇼","균열 생성기","망자의 갑옷","존야의 모래시계"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "nimbus_cloak",
        "primarySlot2": "celerity",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "last_stand",
        "secondarySlot2": "triumph",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "gangplank",
                "championName": "갱플랭크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.7% (212게임) 매치업입니다."
        },
        {
                "championId": "kennen",
                "championName": "케넨",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.9% (93게임) 매치업입니다."
        },
        {
                "championId": "fiora",
                "championName": "피오라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.0% (166게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 57.0%, 코어 12.6%, 룬 28.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(해신 작쇼, 균열 생성기)을 우선 고려하세요."
]
    },
  },
  shyvana: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["크라켄 학살자","황혼과 새벽","죽음의 무도","헤르메스의 발걸음"],
      situationalItems: ["해신 작쇼","스테락의 도전","란두인의 예언","쇼진의 창"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "sylas",
                "championName": "사일러스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.1% (121게임) 매치업입니다."
        },
        {
                "championId": "kayn",
                "championName": "케인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.2% (55게임) 매치업입니다."
        },
        {
                "championId": "zac",
                "championName": "자크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.3% (56게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 97.2%, 코어 26.9%, 룬 45.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(해신 작쇼, 스테락의 도전)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 투구","체력 물약"],
      coreItems: ["거대한 히드라","황혼과 새벽","죽음의 무도","판금 장화"],
      situationalItems: ["스테락의 도전","란두인의 예언","가시 갑옷","맬모셔스의 아귀"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "shield_bash",
        "primarySlot2": "conditioning",
        "primarySlot3": "overgrowth",
        "secondaryPath": "inspiration",
        "secondarySlot1": "jack_of_all_trades",
        "secondarySlot2": "cash_back",
        "shardOffense": "ability_haste",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "tenacity_slow_resist"
},
      counters: [
        {
                "championId": "zed",
                "championName": "상대 라이너",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 패치 기준 픽률 1위 룬과 코어 타이밍에 맞춰 교전을 설계하세요."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 48.5%, 코어 5.0%, 룬 5.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(스테락의 도전, 란두인의 예언)을 우선 고려하세요."
]
    },
  },
  skarner: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["강철심장","끝없는 절망","정령의 형상","헤르메스의 발걸음"],
      situationalItems: ["가시 갑옷","해신 작쇼","란두인의 예언","원형질 안전벨트"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "shield_bash",
        "primarySlot2": "conditioning",
        "primarySlot3": "overgrowth",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "approach_velocity",
        "shardOffense": "ability_haste",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zac",
                "championName": "자크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.6% (52게임) 매치업입니다."
        },
        {
                "championId": "zyra",
                "championName": "자이라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.9% (36게임) 매치업입니다."
        },
        {
                "championId": "monkeyking",
                "championName": "오공",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.2% (97게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.9%, 코어 27.7%, 룬 56.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(가시 갑옷, 해신 작쇼)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 방패","체력 물약"],
      coreItems: ["여신의 눈물","태양불꽃 방패","종말의 겨울","강철심장","판금 장화"],
      situationalItems: ["가시 갑옷","해신 작쇼","란두인의 예언","정령의 형상"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "shield_bash",
        "primarySlot2": "second_wind",
        "primarySlot3": "overgrowth",
        "secondaryPath": "sorcery",
        "secondarySlot1": "transcendence",
        "secondarySlot2": "manaflow_band",
        "shardOffense": "attack_speed",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "yone",
                "championName": "요네",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.0% (40게임) 매치업입니다."
        },
        {
                "championId": "jayce",
                "championName": "제이스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.2% (37게임) 매치업입니다."
        },
        {
                "championId": "irelia",
                "championName": "이렐리아",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 48.4% (31게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 83.6%, 코어 7.3%, 룬 14.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(가시 갑옷, 해신 작쇼)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["거대한 히드라","망자의 갑옷","원형질 안전벨트","신속의 장화"],
      situationalItems: ["밴들파이프","피의 노래","강철의 솔라리 펜던트","지크의 융합"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "hail_of_blades",
        "primarySlot1": "cheap_shot",
        "primarySlot2": "deep_ward",
        "primarySlot3": "relentless_hunter",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "jack_of_all_trades",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "braum",
                "championName": "브라움",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 28.3% (46게임) 매치업입니다."
        },
        {
                "championId": "alistar",
                "championName": "알리스타",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.6% (90게임) 매치업입니다."
        },
        {
                "championId": "bard",
                "championName": "바드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.4% (52게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 55.6%, 코어 9.7%, 룬 10.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(밴들파이프, 피의 노래)을 우선 고려하세요."
]
    },
  },
  sivir: {
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["윤 탈 야생화살","나보리 명멸검","무한의 대검","광전사의 군화"],
      situationalItems: ["도미닉 경의 인사","수호 천사","피바라기","필멸자의 운명"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_bloodline",
        "primarySlot3": "cut_down",
        "secondaryPath": "inspiration",
        "secondarySlot1": "triple_tonic",
        "secondarySlot2": "cash_back",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "viktor",
                "championName": "빅토르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.3% (85게임) 매치업입니다."
        },
        {
                "championId": "samira",
                "championName": "사미라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.2% (117게임) 매치업입니다."
        },
        {
                "championId": "katarina",
                "championName": "카타리나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.9% (35게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 61.5%, 코어 33.7%, 룬 43.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
  },
  smolder: {
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["정수 약탈자","칠흑의 양날 도끼","쇼진의 창","명석함의 아이오니아 장화"],
      situationalItems: ["무한의 대검","수호 천사","고속 연사포","도미닉 경의 인사"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "nimbus_cloak",
        "primarySlot2": "celerity",
        "primarySlot3": "gathering_storm",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "jack_of_all_trades",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "move_speed",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "twistedfate",
                "championName": "트위스티드 페이트",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 26.5% (34게임) 매치업입니다."
        },
        {
                "championId": "syndra",
                "championName": "신드라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 30.3% (33게임) 매치업입니다."
        },
        {
                "championId": "akali",
                "championName": "아칼리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (30게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 66.2%, 코어 20.7%, 룬 34.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(무한의 대검, 수호 천사)을 우선 고려하세요."
]
    },
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 투구","체력 물약"],
      coreItems: ["정수 약탈자","칠흑의 양날 도끼","쇼진의 창","탐욕의 군화"],
      situationalItems: ["고속 연사포","수호 천사","피바라기","무한의 대검"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "nimbus_cloak",
        "primarySlot2": "celerity",
        "primarySlot3": "gathering_storm",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "jack_of_all_trades",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "move_speed",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "xerath",
                "championName": "제라스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (33게임) 매치업입니다."
        },
        {
                "championId": "swain",
                "championName": "스웨인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.3% (30게임) 매치업입니다."
        },
        {
                "championId": "aphelios",
                "championName": "아펠리오스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.0% (327게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 63.3%, 코어 32.2%, 룬 47.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(고속 연사포, 수호 천사)을 우선 고려하세요."
]
    },
  },
  swain: {
    ADC: {
      spells: ["점멸","유체화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["악의","라일라이의 수정홀","존야의 모래시계","판금 장화"],
      situationalItems: ["리안드리의 고통","정령의 형상","모렐로노미콘","균열 생성기"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "sorcery",
        "secondarySlot1": "transcendence",
        "secondarySlot2": "axiom_arcanist",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "kalista",
                "championName": "칼리스타",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 48.0% (75게임) 매치업입니다."
        },
        {
                "championId": "zeri",
                "championName": "제리",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 48.4% (93게임) 매치업입니다."
        },
        {
                "championId": "caitlyn",
                "championName": "케이틀린",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 48.6% (107게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 58.2%, 코어 34.2%, 룬 33.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(리안드리의 고통, 정령의 형상)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["라일라이의 수정홀","존야의 모래시계","정령의 형상","판금 장화"],
      situationalItems: ["모렐로노미콘","자자크의 세계가시","끝없는 절망","리안드리의 고통"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "conditioning",
        "secondarySlot2": "overgrowth",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "tahmkench",
                "championName": "탐 켄치",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.6% (90게임) 매치업입니다."
        },
        {
                "championId": "zilean",
                "championName": "질리언",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.1% (84게임) 매치업입니다."
        },
        {
                "championId": "shaco",
                "championName": "샤코",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.6% (53게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 54.4%, 코어 10.2%, 룬 24.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(모렐로노미콘, 자자크의 세계가시)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","유체화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","라일라이의 수정홀","존야의 모래시계","헤르메스의 발걸음"],
      situationalItems: ["리안드리의 고통","정령의 형상","균열 생성기","메자이의 영혼약탈자"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "conditioning",
        "secondarySlot2": "overgrowth",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "leblanc",
                "championName": "르블랑",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.3% (67게임) 매치업입니다."
        },
        {
                "championId": "malzahar",
                "championName": "말자하",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.2% (34게임) 매치업입니다."
        },
        {
                "championId": "syndra",
                "championName": "신드라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.2% (114게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 54.3%, 코어 12.1%, 룬 8.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(리안드리의 고통, 정령의 형상)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","유체화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["라일라이의 수정홀","리안드리의 고통","존야의 모래시계","판금 장화"],
      situationalItems: ["정령의 형상","모렐로노미콘","얼어붙은 심장","균열 생성기"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "conditioning",
        "secondarySlot2": "overgrowth",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "tryndamere",
                "championName": "트린다미어",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (30게임) 매치업입니다."
        },
        {
                "championId": "jax",
                "championName": "잭스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.5% (42게임) 매치업입니다."
        },
        {
                "championId": "jayce",
                "championName": "제이스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.4% (66게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 36.4%, 코어 9.6%, 룬 24.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(정령의 형상, 모렐로노미콘)을 우선 고려하세요."
]
    },
  },
  sylas: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["마법공학 로켓 벨트","균열 생성기","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","우주의 추진력","그림자불꽃"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "jax",
                "championName": "잭스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.2% (64게임) 매치업입니다."
        },
        {
                "championId": "quinn",
                "championName": "퀸",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.5% (69게임) 매치업입니다."
        },
        {
                "championId": "lillia",
                "championName": "릴리아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.9% (675게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.9%, 코어 42.5%, 룬 63.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["마법공학 로켓 벨트","균열 생성기","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","메자이의 영혼약탈자","그림자불꽃","핏빛 저주"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "unflinching",
        "secondarySlot2": "second_wind",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "sion",
                "championName": "사이온",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.2% (119게임) 매치업입니다."
        },
        {
                "championId": "hwei",
                "championName": "흐웨이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.2% (474게임) 매치업입니다."
        },
        {
                "championId": "talon",
                "championName": "탈론",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.3% (462게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 53.7%, 코어 32.4%, 룬 28.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 메자이의 영혼약탈자)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["마법공학 로켓 벨트","균열 생성기","존야의 모래시계","명석함의 아이오니아 장화"],
      situationalItems: ["라바돈의 죽음모자","그림자불꽃","핏빛 저주","우주의 추진력"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "unflinching",
        "secondarySlot2": "second_wind",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "warwick",
                "championName": "워윅",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 31.3% (32게임) 매치업입니다."
        },
        {
                "championId": "riven",
                "championName": "리븐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 31.7% (41게임) 매치업입니다."
        },
        {
                "championId": "tryndamere",
                "championName": "트린다미어",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 32.6% (46게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 53.8%, 코어 31.6%, 룬 37.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 그림자불꽃)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["마법공학 로켓 벨트","존야의 모래시계","그림자불꽃","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","자자크의 세계가시","모렐로노미콘","메자이의 영혼약탈자"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "relentless_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "transcendence",
        "secondarySlot2": "scorch",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "camille",
                "championName": "카밀",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.6% (45게임) 매치업입니다."
        },
        {
                "championId": "janna",
                "championName": "잔나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.1% (36게임) 매치업입니다."
        },
        {
                "championId": "leblanc",
                "championName": "르블랑",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.4% (33게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 92.1%, 코어 12.2%, 룬 38.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 자자크의 세계가시)을 우선 고려하세요."
]
    },
  },
  soraka: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["월석 재생기","구원","새벽심장","명석함의 아이오니아 장화"],
      situationalItems: ["강철의 솔라리 펜던트","꿈 생성기","불타는 향로","미카엘의 축복"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "summon_aery",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "resolve",
        "secondarySlot1": "revitalize",
        "secondarySlot2": "bone_plating",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zyra",
                "championName": "자이라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.5% (135게임) 매치업입니다."
        },
        {
                "championId": "maokai",
                "championName": "마오카이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.4% (104게임) 매치업입니다."
        },
        {
                "championId": "amumu",
                "championName": "아무무",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.2% (34게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 89.0%, 코어 10.8%, 룬 30.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(강철의 솔라리 펜던트, 꿈 생성기)을 우선 고려하세요."
]
    },
  },
  talon: {
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["오만","칠흑의 양날 도끼","죽음의 무도","헤르메스의 발걸음"],
      situationalItems: ["밤의 끝자락","수호 천사","요우무의 유령검","독사의 송곳니"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "domination",
        "secondarySlot1": "treasure_hunter",
        "secondarySlot2": "sudden_impact",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "swain",
                "championName": "스웨인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.9% (39게임) 매치업입니다."
        },
        {
                "championId": "velkoz",
                "championName": "벨코즈",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.5% (32게임) 매치업입니다."
        },
        {
                "championId": "aurelionsol",
                "championName": "아우렐리온 솔",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.9% (72게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 97.4%, 코어 14.6%, 룬 37.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(밤의 끝자락, 수호 천사)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["그림자 검","벼락폭풍검","밤의 끝자락","명석함의 아이오니아 장화"],
      situationalItems: ["세릴다의 원한","수호 천사","요우무의 유령검","도미닉 경의 인사"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "inspiration",
        "keystone": "first_strike",
        "primarySlot1": "cash_back",
        "primarySlot2": "triple_tonic",
        "primarySlot3": "cosmic_insight",
        "secondaryPath": "domination",
        "secondarySlot1": "treasure_hunter",
        "secondarySlot2": "sudden_impact",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "reksai",
                "championName": "렉사이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.2% (186게임) 매치업입니다."
        },
        {
                "championId": "udyr",
                "championName": "우디르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.8% (48게임) 매치업입니다."
        },
        {
                "championId": "belveth",
                "championName": "벨베스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.1% (93게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.7%, 코어 10.9%, 룬 28.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(세릴다의 원한, 수호 천사)을 우선 고려하세요."
]
    },
  },
  sona: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["여신의 눈물","헬리아의 메아리","악곡의 왕관","월석 재생기","신속의 장화"],
      situationalItems: ["새벽심장","꿈 생성기","흐르는 물의 지팡이","모렐로노미콘"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "summon_aery",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "gathering_storm",
        "secondaryPath": "resolve",
        "secondarySlot1": "conditioning",
        "secondarySlot2": "revitalize",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "rell",
                "championName": "렐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.4% (55게임) 매치업입니다."
        },
        {
                "championId": "braum",
                "championName": "브라움",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.6% (64게임) 매치업입니다."
        },
        {
                "championId": "soraka",
                "championName": "소라카",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.0% (81게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 82.6%, 코어 18.7%, 룬 16.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(새벽심장, 꿈 생성기)을 우선 고려하세요."
]
    },
  },
  syndra: {
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["루덴의 메아리","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","우주의 추진력","무덤꽃"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "inspiration",
        "secondarySlot1": "triple_tonic",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "malphite",
                "championName": "말파이트",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.1% (57게임) 매치업입니다."
        },
        {
                "championId": "talon",
                "championName": "탈론",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.3% (427게임) 매치업입니다."
        },
        {
                "championId": "pantheon",
                "championName": "판테온",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.6% (172게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 83.7%, 코어 13.0%, 룬 36.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  tahmkench: {
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["강철심장","가시 갑옷","정령의 형상","판금 장화"],
      situationalItems: ["끝없는 절망","천상의 이의","원형질 안전벨트","강철의 솔라리 펜던트"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "shield_bash",
        "primarySlot2": "second_wind",
        "primarySlot3": "unflinching",
        "secondaryPath": "precision",
        "secondarySlot1": "legend_alacrity",
        "secondarySlot2": "triumph",
        "shardOffense": "attack_speed",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "senna",
                "championName": "세나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.6% (110게임) 매치업입니다."
        },
        {
                "championId": "nami",
                "championName": "나미",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.2% (68게임) 매치업입니다."
        },
        {
                "championId": "rakan",
                "championName": "라칸",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.0% (223게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 44.1%, 코어 10.7%, 룬 34.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(끝없는 절망, 천상의 이의)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 방패","체력 물약"],
      coreItems: ["강철심장","황혼과 새벽","정령의 형상","판금 장화"],
      situationalItems: ["끝없는 절망","가시 갑옷","란두인의 예언","해신 작쇼"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "shield_bash",
        "primarySlot2": "second_wind",
        "primarySlot3": "unflinching",
        "secondaryPath": "precision",
        "secondarySlot1": "legend_alacrity",
        "secondarySlot2": "triumph",
        "shardOffense": "attack_speed",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "volibear",
                "championName": "볼리베어",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 31.1% (45게임) 매치업입니다."
        },
        {
                "championId": "zaahen",
                "championName": "자헨",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 32.7% (52게임) 매치업입니다."
        },
        {
                "championId": "darius",
                "championName": "다리우스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (60게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 43.8%, 코어 7.9%, 룬 48.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(끝없는 절망, 가시 갑옷)을 우선 고려하세요."
]
    },
  },
  taliyah: {
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","라일라이의 수정홀","존야의 모래시계","명석함의 아이오니아 장화"],
      situationalItems: ["라바돈의 죽음모자","무덤꽃","메자이의 영혼약탈자","그림자불꽃"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "legend_haste",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "katarina",
                "championName": "카타리나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.6% (219게임) 매치업입니다."
        },
        {
                "championId": "cassiopeia",
                "championName": "카시오페아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.4% (132게임) 매치업입니다."
        },
        {
                "championId": "veigar",
                "championName": "베이가",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.4% (47게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 65.4%, 코어 16.7%, 룬 14.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 무덤꽃)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["루덴의 메아리","라일라이의 수정홀","그림자불꽃","명석함의 아이오니아 장화"],
      situationalItems: ["존야의 모래시계","자자크의 세계가시","모렐로노미콘","라바돈의 죽음모자"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "legend_haste",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "leona",
                "championName": "레오나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.4% (33게임) 매치업입니다."
        },
        {
                "championId": "lulu",
                "championName": "룰루",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.9% (49게임) 매치업입니다."
        },
        {
                "championId": "thresh",
                "championName": "쓰레쉬",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 51.1% (47게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 63.8%, 코어 4.6%, 룬 17.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 자자크의 세계가시)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["어둠불꽃 횃불","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","밴시의 장막","우주의 추진력","공허의 지팡이"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "dark_harvest",
        "primarySlot1": "cheap_shot",
        "primarySlot2": "sixth_sense",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "precision",
        "secondarySlot1": "coup_de_grace",
        "secondarySlot2": "legend_haste",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "jax",
                "championName": "잭스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.0% (41게임) 매치업입니다."
        },
        {
                "championId": "fizz",
                "championName": "피즈",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.4% (66게임) 매치업입니다."
        },
        {
                "championId": "locke",
                "championName": "로크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.9% (62게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 100.0%, 코어 32.4%, 룬 37.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 밴시의 장막)을 우선 고려하세요."
]
    },
  },
  twistedfate: {
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["영겁의 지팡이","리치베인","고속 연사포","신속의 장화"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","메자이의 영혼약탈자","마법공학 로켓 벨트"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "celerity",
        "primarySlot3": "scorch",
        "secondaryPath": "resolve",
        "secondarySlot1": "unflinching",
        "secondarySlot2": "bone_plating",
        "shardOffense": "attack_speed",
        "shardFlex": "move_speed",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "annie",
                "championName": "애니",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.1% (204게임) 매치업입니다."
        },
        {
                "championId": "cassiopeia",
                "championName": "카시오페아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.6% (274게임) 매치업입니다."
        },
        {
                "championId": "irelia",
                "championName": "이렐리아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.0% (443게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 65.6%, 코어 46.4%, 룬 42.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
    ADC: {
      spells: ["점멸","유체화"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["크라켄 학살자","구인수의 격노검","경계","광전사의 군화"],
      situationalItems: ["무한의 대검","고속 연사포","존야의 모래시계","도미닉 경의 인사"],
      skillOrder: 'E > W > Q > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "cut_down",
        "secondaryPath": "inspiration",
        "secondarySlot1": "cash_back",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "jhin",
                "championName": "진",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.2% (34게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 43.7%, 코어 8.5%, 룬 10.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(무한의 대검, 고속 연사포)을 우선 고려하세요."
]
    },
  },
  taric: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["여신의 눈물","강철의 솔라리 펜던트","종말의 겨울","기사의 맹세","명석함의 아이오니아 장화"],
      situationalItems: ["밴들파이프","꿈 생성기","얼어붙은 심장","지크의 융합"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "inspiration",
        "keystone": "glacial_augment",
        "primarySlot1": "magical_footwear",
        "primarySlot2": "biscuit_delivery",
        "primarySlot3": "cosmic_insight",
        "secondaryPath": "resolve",
        "secondarySlot1": "conditioning",
        "secondarySlot2": "revitalize",
        "shardOffense": "attack_speed",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "senna",
                "championName": "세나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.1% (42게임) 매치업입니다."
        },
        {
                "championId": "rell",
                "championName": "렐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.2% (82게임) 매치업입니다."
        },
        {
                "championId": "seraphine",
                "championName": "세라핀",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.0% (78게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 57.7%, 코어 19.0%, 룬 21.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(밴들파이프, 꿈 생성기)을 우선 고려하세요."
]
    },
  },
  thresh: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["강철의 솔라리 펜던트","기사의 맹세","지크의 융합","신속의 장화"],
      situationalItems: ["밴들파이프","천상의 이의","가시 갑옷","얼어붙은 심장"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "aftershock",
        "primarySlot1": "font_of_life",
        "primarySlot2": "bone_plating",
        "primarySlot3": "unflinching",
        "secondaryPath": "inspiration",
        "secondarySlot1": "biscuit_delivery",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "renata",
                "championName": "레나타 글라스크",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 47.1% (431게임) 매치업입니다."
        },
        {
                "championId": "rakan",
                "championName": "라칸",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 48.4% (1,626게임) 매치업입니다."
        },
        {
                "championId": "blitzcrank",
                "championName": "블리츠크랭크",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 48.9% (2,977게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 45.9%, 코어 18.3%, 룬 39.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(밴들파이프, 천상의 이의)을 우선 고려하세요."
]
    },
  },
  tristana: {
    ADC: {
      spells: ["탈진","점멸"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["윤 탈 야생화살","나보리 명멸검","무한의 대검","광전사의 군화"],
      situationalItems: ["도미닉 경의 인사","수호 천사","피바라기","필멸자의 운명"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_bloodline",
        "primarySlot3": "cut_down",
        "secondaryPath": "inspiration",
        "secondarySlot1": "cash_back",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "draven",
                "championName": "드레이븐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.4% (121게임) 매치업입니다."
        },
        {
                "championId": "kogmaw",
                "championName": "코그모",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (115게임) 매치업입니다."
        },
        {
                "championId": "corki",
                "championName": "코르키",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.3% (612게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 42.3%, 코어 27.5%, 룬 20.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["윤 탈 야생화살","나보리 명멸검","무한의 대검","광전사의 군화"],
      situationalItems: ["도미닉 경의 인사","수호 천사","불멸의 철갑궁","필멸자의 운명"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "cut_down",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "biscuit_delivery",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "yone",
                "championName": "요네",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 28.8% (73게임) 매치업입니다."
        },
        {
                "championId": "zoe",
                "championName": "조이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 30.0% (30게임) 매치업입니다."
        },
        {
                "championId": "katarina",
                "championName": "카타리나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.0% (46게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 31.5%, 코어 15.9%, 룬 13.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
  },
  teemo: {
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["악의","리안드리의 고통","그림자불꽃","마법사의 신발"],
      situationalItems: ["모렐로노미콘","라바돈의 죽음모자","자자크의 세계가시","공허의 지팡이"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "dark_harvest",
        "primarySlot1": "cheap_shot",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "ultimate_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "transcendence",
        "secondarySlot2": "gathering_storm",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "lux",
                "championName": "럭스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 31.3% (32게임) 매치업입니다."
        },
        {
                "championId": "rakan",
                "championName": "라칸",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 32.4% (34게임) 매치업입니다."
        },
        {
                "championId": "nautilus",
                "championName": "노틸러스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.1% (57게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 76.8%, 코어 24.2%, 룬 28.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(모렐로노미콘, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["스태틱의 단검","리안드리의 고통","악의","신속의 장화"],
      situationalItems: ["그림자불꽃","라바돈의 죽음모자","존야의 모래시계","공허의 지팡이"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "overgrowth",
        "secondarySlot2": "bone_plating",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "monkeyking",
                "championName": "오공",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (30게임) 매치업입니다."
        },
        {
                "championId": "sett",
                "championName": "세트",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.3% (121게임) 매치업입니다."
        },
        {
                "championId": "sion",
                "championName": "사이온",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.4% (325게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 92.5%, 코어 58.1%, 룬 35.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(그림자불꽃, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
  },
  trundle: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["굶주린 히드라","삼위일체","선체파괴자","판금 장화"],
      situationalItems: ["죽음의 무도","정령의 형상","란두인의 예언","가시 갑옷"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "demolish",
        "secondarySlot2": "bone_plating",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "sett",
                "championName": "세트",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.3% (56게임) 매치업입니다."
        },
        {
                "championId": "shen",
                "championName": "쉔",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.6% (32게임) 매치업입니다."
        },
        {
                "championId": "gnar",
                "championName": "나르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.0% (39게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 59.7%, 코어 23.6%, 룬 47.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(죽음의 무도, 정령의 형상)을 우선 고려하세요."
]
    },
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["삼위일체","망자의 갑옷","정령의 형상","헤르메스의 발걸음"],
      situationalItems: ["란두인의 예언","가시 갑옷","해신 작쇼","수호 천사"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "approach_velocity",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "masteryi",
                "championName": "마스터 이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.8% (38게임) 매치업입니다."
        },
        {
                "championId": "hecarim",
                "championName": "헤카림",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.5% (52게임) 매치업입니다."
        },
        {
                "championId": "chogath",
                "championName": "초가스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.1% (56게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 98.7%, 코어 26.9%, 룬 48.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(란두인의 예언, 가시 갑옷)을 우선 고려하세요."
]
    },
  },
  tryndamere: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["굶주린 히드라","유령 무희","무한의 대검","광전사의 군화"],
      situationalItems: ["도미닉 경의 인사","헤르메스의 시미터","요우무의 유령검","끝없는 갈망"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "hail_of_blades",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "precision",
        "secondarySlot1": "last_stand",
        "secondarySlot2": "legend_alacrity",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "urgot",
                "championName": "우르곳",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.3% (34게임) 매치업입니다."
        },
        {
                "championId": "kled",
                "championName": "클레드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.7% (60게임) 매치업입니다."
        },
        {
                "championId": "vladimir",
                "championName": "블라디미르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.8% (38게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 76.6%, 코어 14.8%, 룬 31.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 헤르메스의 시미터)을 우선 고려하세요."
]
    },
  },
  twitch: {
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["징수의 총","악마사냥꾼의 화살","무한의 대검","광전사의 군화"],
      situationalItems: ["도미닉 경의 인사","수호 천사","피바라기","루난의 허리케인"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "cut_down",
        "secondaryPath": "sorcery",
        "secondarySlot1": "axiom_arcanist",
        "secondarySlot2": "gathering_storm",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "yasuo",
                "championName": "야스오",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.5% (46게임) 매치업입니다."
        },
        {
                "championId": "zeri",
                "championName": "제리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.2% (190게임) 매치업입니다."
        },
        {
                "championId": "lucian",
                "championName": "루시안",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.4% (277게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 55.2%, 코어 43.1%, 룬 42.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["징수의 총","악마사냥꾼의 화살","무한의 대검","광전사의 군화"],
      situationalItems: ["도미닉 경의 인사","몰락한 왕의 검","피의 노래","루난의 허리케인"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "hail_of_blades",
        "primarySlot1": "sudden_impact",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "precision",
        "secondarySlot1": "coup_de_grace",
        "secondarySlot2": "legend_alacrity",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "nautilus",
                "championName": "노틸러스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (63게임) 매치업입니다."
        },
        {
                "championId": "thresh",
                "championName": "쓰레쉬",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.8% (66게임) 매치업입니다."
        },
        {
                "championId": "yuumi",
                "championName": "유미",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.5% (31게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 66.4%, 코어 28.3%, 룬 9.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 몰락한 왕의 검)을 우선 고려하세요."
]
    },
  },
  varus: {
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["스태틱의 단검","구인수의 격노검","경계","탐욕의 군화"],
      situationalItems: ["해신 작쇼","존야의 모래시계","수호 천사","세릴다의 원한"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "absorb_life",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "cut_down",
        "secondaryPath": "inspiration",
        "secondarySlot1": "biscuit_delivery",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "vayne",
                "championName": "베인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 32.4% (37게임) 매치업입니다."
        },
        {
                "championId": "swain",
                "championName": "스웨인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.1% (36게임) 매치업입니다."
        },
        {
                "championId": "sivir",
                "championName": "시비르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.6% (183게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 48.4%, 코어 46.1%, 룬 21.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(해신 작쇼, 존야의 모래시계)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["황혼과 새벽","공허의 지팡이","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","밴시의 장막","그림자불꽃","해신 작쇼"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "unflinching",
        "secondarySlot2": "bone_plating",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "orianna",
                "championName": "오리아나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.5% (31게임) 매치업입니다."
        },
        {
                "championId": "galio",
                "championName": "갈리오",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (30게임) 매치업입니다."
        },
        {
                "championId": "locke",
                "championName": "로크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.2% (34게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 60.2%, 코어 17.0%, 룬 13.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 밴시의 장막)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["탈진","점멸"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["실험적 마공학판","황혼과 새벽","균열 생성기","판금 장화"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","해신 작쇼","밴시의 장막"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "overgrowth",
        "secondarySlot2": "bone_plating",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "teemo",
                "championName": "티모",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (42게임) 매치업입니다."
        },
        {
                "championId": "olaf",
                "championName": "올라프",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.9% (103게임) 매치업입니다."
        },
        {
                "championId": "ornn",
                "championName": "오른",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.5% (40게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 51.6%, 코어 10.8%, 룬 27.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
  },
  udyr: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이"],
      coreItems: ["쇼진의 창","실험적 마공학판","죽음의 무도","신속의 장화"],
      situationalItems: ["망자의 갑옷","스테락의 도전","정령의 형상","란두인의 예언"],
      skillOrder: 'Q > E > W > R > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "approach_velocity",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zac",
                "championName": "자크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 30.6% (36게임) 매치업입니다."
        },
        {
                "championId": "hecarim",
                "championName": "헤카림",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.4% (53게임) 매치업입니다."
        },
        {
                "championId": "ekko",
                "championName": "에코",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.2% (39게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 91.1%, 코어 10.8%, 룬 11.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(망자의 갑옷, 스테락의 도전)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["발걸음 분쇄기","실험적 마공학판","선체파괴자","판금 장화"],
      situationalItems: ["정령의 형상","해신 작쇼","존야의 모래시계","란두인의 예언"],
      skillOrder: 'R > W > E > Q > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "shield_bash",
        "primarySlot2": "second_wind",
        "primarySlot3": "revitalize",
        "secondaryPath": "inspiration",
        "secondarySlot1": "biscuit_delivery",
        "secondarySlot2": "approach_velocity",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "renekton",
                "championName": "레넥톤",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.9% (58게임) 매치업입니다."
        },
        {
                "championId": "gangplank",
                "championName": "갱플랭크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.7% (78게임) 매치업입니다."
        },
        {
                "championId": "volibear",
                "championName": "볼리베어",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.9% (49게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 43.8%, 코어 5.7%, 룬 22.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(정령의 형상, 해신 작쇼)을 우선 고려하세요."
]
    },
  },
  viego: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["크라켄 학살자","징수의 총","불멸의 철갑궁","판금 장화"],
      situationalItems: ["도미닉 경의 인사","수호 천사","죽음의 무도","무한의 대검"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "quinn",
                "championName": "퀸",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.4% (48게임) 매치업입니다."
        },
        {
                "championId": "skarner",
                "championName": "스카너",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.2% (69게임) 매치업입니다."
        },
        {
                "championId": "zaahen",
                "championName": "자헨",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.8% (90게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 100.0%, 코어 53.3%, 룬 60.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["탈진","점멸"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["크라켄 학살자","징수의 총","불멸의 철갑궁","헤르메스의 발걸음"],
      situationalItems: ["무한의 대검","수호 천사","도미닉 경의 인사","죽음의 무도"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "second_wind",
        "secondarySlot2": "overgrowth",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "twistedfate",
                "championName": "트위스티드 페이트",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.9% (39게임) 매치업입니다."
        },
        {
                "championId": "sylas",
                "championName": "사일러스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.1% (38게임) 매치업입니다."
        },
        {
                "championId": "yone",
                "championName": "요네",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.7% (46게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 41.6%, 코어 16.0%, 룬 10.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(무한의 대검, 수호 천사)을 우선 고려하세요."
]
    },
  },
  urgot: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["칠흑의 양날 도끼","스테락의 도전","해신 작쇼","판금 장화"],
      situationalItems: ["란두인의 예언","지배자의 피갑옷","가시 갑옷","수호 천사"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "press_the_attack",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "overgrowth",
        "secondarySlot2": "bone_plating",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "yorick",
                "championName": "요릭",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.5% (48게임) 매치업입니다."
        },
        {
                "championId": "gwen",
                "championName": "그웬",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.0% (30게임) 매치업입니다."
        },
        {
                "championId": "volibear",
                "championName": "볼리베어",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.0% (69게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 70.5%, 코어 15.3%, 룬 20.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(란두인의 예언, 지배자의 피갑옷)을 우선 고려하세요."
]
    },
  },
  vayne: {
    TOP: {
      spells: ["점멸","유체화"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["몰락한 왕의 검","구인수의 격노검","경계","광전사의 군화"],
      situationalItems: ["해신 작쇼","수호 천사","무한의 대검","헤르메스의 시미터"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "resolve",
        "secondarySlot1": "conditioning",
        "secondarySlot2": "overgrowth",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "gangplank",
                "championName": "갱플랭크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 32.0% (75게임) 매치업입니다."
        },
        {
                "championId": "malphite",
                "championName": "말파이트",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.0% (259게임) 매치업입니다."
        },
        {
                "championId": "varus",
                "championName": "바루스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.9% (43게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 59.2%, 코어 16.7%, 룬 33.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(해신 작쇼, 수호 천사)을 우선 고려하세요."
]
    },
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["몰락한 왕의 검","구인수의 격노검","경계","광전사의 군화"],
      situationalItems: ["해신 작쇼","실험적 마공학판","수호 천사","무한의 대검"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "resolve",
        "secondarySlot1": "conditioning",
        "secondarySlot2": "overgrowth",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "smolder",
                "championName": "스몰더",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (33게임) 매치업입니다."
        },
        {
                "championId": "yasuo",
                "championName": "야스오",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.1% (36게임) 매치업입니다."
        },
        {
                "championId": "ashe",
                "championName": "애쉬",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.1% (64게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 44.4%, 코어 33.1%, 룬 39.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(해신 작쇼, 실험적 마공학판)을 우선 고려하세요."
]
    },
  },
  vladimir: {
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["우주의 추진력","균열 생성기","라바돈의 죽음모자","명석함의 아이오니아 장화"],
      situationalItems: ["존야의 모래시계","공허의 지팡이","메자이의 영혼약탈자","그림자불꽃"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "nimbus_cloak",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "cut_down",
        "secondarySlot2": "legend_haste",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "akali",
                "championName": "아칼리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 32.1% (53게임) 매치업입니다."
        },
        {
                "championId": "nasus",
                "championName": "나서스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.8% (92게임) 매치업입니다."
        },
        {
                "championId": "yorick",
                "championName": "요릭",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.8% (38게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 50.6%, 코어 5.5%, 룬 21.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 공허의 지팡이)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","유체화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["폭풍 쇄도","라바돈의 죽음모자","균열 생성기","마법사의 신발"],
      situationalItems: ["존야의 모래시계","공허의 지팡이","메자이의 영혼약탈자","그림자불꽃"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "phase_rush",
        "primarySlot1": "nimbus_cloak",
        "primarySlot2": "transcendence",
        "primarySlot3": "gathering_storm",
        "secondaryPath": "precision",
        "secondarySlot1": "last_stand",
        "secondarySlot2": "legend_haste",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zoe",
                "championName": "조이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.2% (109게임) 매치업입니다."
        },
        {
                "championId": "orianna",
                "championName": "오리아나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.5% (254게임) 매치업입니다."
        },
        {
                "championId": "malzahar",
                "championName": "말자하",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.0% (135게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 64.5%, 코어 9.6%, 룬 33.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  veigar: {
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["여신의 눈물","영겁의 지팡이","대천사의 포옹","라바돈의 죽음모자","마법사의 신발"],
      situationalItems: ["존야의 모래시계","밴시의 장막","공허의 지팡이","그림자불꽃"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "inspiration",
        "keystone": "first_strike",
        "primarySlot1": "magical_footwear",
        "primarySlot2": "biscuit_delivery",
        "primarySlot3": "cosmic_insight",
        "secondaryPath": "sorcery",
        "secondarySlot1": "transcendence",
        "secondarySlot2": "manaflow_band",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "aurora",
                "championName": "오로라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.6% (47게임) 매치업입니다."
        },
        {
                "championId": "katarina",
                "championName": "카타리나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.9% (91게임) 매치업입니다."
        },
        {
                "championId": "vladimir",
                "championName": "블라디미르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.5% (46게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 83.3%, 코어 15.9%, 룬 22.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 밴시의 장막)을 우선 고려하세요."
]
    },
    ADC: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["루덴의 메아리","폭풍 쇄도","라바돈의 죽음모자","마법사의 신발"],
      situationalItems: ["존야의 모래시계","밴시의 장막","공허의 지팡이","무덤꽃"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "inspiration",
        "keystone": "first_strike",
        "primarySlot1": "magical_footwear",
        "primarySlot2": "biscuit_delivery",
        "primarySlot3": "cosmic_insight",
        "secondaryPath": "sorcery",
        "secondarySlot1": "transcendence",
        "secondarySlot2": "manaflow_band",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zeri",
                "championName": "제리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.8% (32게임) 매치업입니다."
        },
        {
                "championId": "yunara",
                "championName": "유나라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.2% (52게임) 매치업입니다."
        },
        {
                "championId": "xayah",
                "championName": "자야",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.9% (49게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 83.3%, 코어 19.2%, 룬 24.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 밴시의 장막)을 우선 고려하세요."
]
    },
  },
  velkoz: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["루덴의 메아리","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["모렐로노미콘","자자크의 세계가시","라바돈의 죽음모자","밴시의 장막"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "domination",
        "secondarySlot1": "ultimate_hunter",
        "secondarySlot2": "cheap_shot",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "tahmkench",
                "championName": "탐 켄치",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.7% (59게임) 매치업입니다."
        },
        {
                "championId": "sona",
                "championName": "소나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.1% (56게임) 매치업입니다."
        },
        {
                "championId": "janna",
                "championName": "잔나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.5% (40게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 78.6%, 코어 6.0%, 룬 28.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(모렐로노미콘, 자자크의 세계가시)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["루덴의 메아리","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","밴시의 장막","지평선의 초점","메자이의 영혼약탈자"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "cut_down",
        "secondarySlot2": "legend_haste",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "malzahar",
                "championName": "말자하",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.4% (32게임) 매치업입니다."
        },
        {
                "championId": "xerath",
                "championName": "제라스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.5% (38게임) 매치업입니다."
        },
        {
                "championId": "locke",
                "championName": "로크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.7% (58게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 47.2%, 코어 14.2%, 룬 21.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 밴시의 장막)을 우선 고려하세요."
]
    },
  },
  vi: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["삼위일체","칠흑의 양날 도끼","죽음의 무도","판금 장화"],
      situationalItems: ["수호 천사","스테락의 도전","맬모셔스의 아귀","무한의 대검"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "kindred",
                "championName": "킨드레드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.4% (255게임) 매치업입니다."
        },
        {
                "championId": "shyvana",
                "championName": "쉬바나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.7% (103게임) 매치업입니다."
        },
        {
                "championId": "nunu",
                "championName": "누누와 윌럼프",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.2% (147게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.9%, 코어 34.5%, 룬 53.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 스테락의 도전)을 우선 고려하세요."
]
    },
  },
  viktor: {
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","리치베인","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","그림자불꽃","메자이의 영혼약탈자"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "resolve",
        "secondarySlot1": "shield_bash",
        "secondarySlot2": "bone_plating",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "kogmaw",
                "championName": "코그모",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (90게임) 매치업입니다."
        },
        {
                "championId": "aurelionsol",
                "championName": "아우렐리온 솔",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.3% (239게임) 매치업입니다."
        },
        {
                "championId": "nunu",
                "championName": "누누와 윌럼프",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.7% (131게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 77.6%, 코어 17.1%, 룬 44.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
    ADC: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","리치베인","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","그림자불꽃","무덤꽃"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "deathfire_touch",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "resolve",
        "secondarySlot1": "shield_bash",
        "secondarySlot2": "bone_plating",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "draven",
                "championName": "드레이븐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.8% (49게임) 매치업입니다."
        },
        {
                "championId": "tristana",
                "championName": "트리스타나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.0% (82게임) 매치업입니다."
        },
        {
                "championId": "kalista",
                "championName": "칼리스타",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.8% (83게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 72.7%, 코어 18.2%, 룬 39.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  vex: {
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["루덴의 메아리","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","폭풍 쇄도","메자이의 영혼약탈자"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "taste_of_blood",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "ultimate_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "transcendence",
        "secondarySlot2": "manaflow_band",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zoe",
                "championName": "조이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.5% (131게임) 매치업입니다."
        },
        {
                "championId": "cassiopeia",
                "championName": "카시오페아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.9% (66게임) 매치업입니다."
        },
        {
                "championId": "nunu",
                "championName": "누누와 윌럼프",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.9% (41게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 69.3%, 코어 37.6%, 룬 53.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  yone: {
    TOP: {
      spells: ["탈진","점멸"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["몰락한 왕의 검","불멸의 철갑궁","무한의 대검","광전사의 군화"],
      situationalItems: ["죽음의 무도","수호 천사","유령 무희","마법사의 최후"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "absorb_life",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "second_wind",
        "secondarySlot2": "overgrowth",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "trundle",
                "championName": "트런들",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.0% (122게임) 매치업입니다."
        },
        {
                "championId": "monkeyking",
                "championName": "오공",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.0% (122게임) 매치업입니다."
        },
        {
                "championId": "tryndamere",
                "championName": "트린다미어",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.4% (377게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 65.1%, 코어 45.9%, 룬 33.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(죽음의 무도, 수호 천사)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["탈진","점멸"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["몰락한 왕의 검","불멸의 철갑궁","무한의 대검","광전사의 군화"],
      situationalItems: ["죽음의 무도","수호 천사","유령 무희","필멸자의 운명"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "absorb_life",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "second_wind",
        "secondarySlot2": "overgrowth",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "annie",
                "championName": "애니",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.9% (167게임) 매치업입니다."
        },
        {
                "championId": "pantheon",
                "championName": "판테온",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.3% (253게임) 매치업입니다."
        },
        {
                "championId": "katarina",
                "championName": "카타리나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.3% (594게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 52.6%, 코어 32.5%, 룬 32.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(죽음의 무도, 수호 천사)을 우선 고려하세요."
]
    },
  },
  warwick: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이"],
      coreItems: ["발걸음 분쇄기","몰락한 왕의 검","가시 갑옷","헤르메스의 발걸음"],
      situationalItems: ["정령의 형상","죽음의 무도","해신 작쇼","스테락의 도전"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "sorcery",
        "secondarySlot1": "waterwalking",
        "secondarySlot2": "celerity",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "sejuani",
                "championName": "세주아니",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.4% (52게임) 매치업입니다."
        },
        {
                "championId": "nidalee",
                "championName": "니달리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.7% (139게임) 매치업입니다."
        },
        {
                "championId": "rammus",
                "championName": "람머스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.9% (43게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 98.2%, 코어 8.1%, 룬 48.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(정령의 형상, 죽음의 무도)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["크라켄 학살자","실험적 마공학판","스테락의 도전","판금 장화"],
      situationalItems: ["정령의 형상","죽음의 무도","존야의 모래시계","란두인의 예언"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "second_wind",
        "secondarySlot2": "revitalize",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "zaahen",
                "championName": "자헨",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.3% (106게임) 매치업입니다."
        },
        {
                "championId": "urgot",
                "championName": "우르곳",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.4% (36게임) 매치업입니다."
        },
        {
                "championId": "gragas",
                "championName": "그라가스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.9% (69게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 95.6%, 코어 17.9%, 룬 31.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(정령의 형상, 죽음의 무도)을 우선 고려하세요."
]
    },
  },
  volibear: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이"],
      coreItems: ["황혼과 새벽","나보리 명멸검","정령의 형상","헤르메스의 발걸음"],
      situationalItems: ["가시 갑옷","해신 작쇼","란두인의 예언","망자의 갑옷"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "jack_of_all_trades",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "naafiri",
                "championName": "나피리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.2% (34게임) 매치업입니다."
        },
        {
                "championId": "qiyana",
                "championName": "키아나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.8% (47게임) 매치업입니다."
        },
        {
                "championId": "leesin",
                "championName": "리 신",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 48.1% (160게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 96.4%, 코어 24.2%, 룬 26.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(가시 갑옷, 해신 작쇼)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["스태틱의 단검","지크의 융합","죽음의 무도","판금 장화"],
      situationalItems: ["정령의 형상","존야의 모래시계","망자의 갑옷","란두인의 예언"],
      skillOrder: 'W > Q > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "demolish",
        "secondarySlot2": "revitalize",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "anivia",
                "championName": "애니비아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 28.6% (35게임) 매치업입니다."
        },
        {
                "championId": "heimerdinger",
                "championName": "하이머딩거",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.7% (49게임) 매치업입니다."
        },
        {
                "championId": "shen",
                "championName": "쉔",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.4% (104게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 61.6%, 코어 17.0%, 룬 12.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(정령의 형상, 존야의 모래시계)을 우선 고려하세요."
]
    },
  },
  xayah: {
    ADC: {
      spells: ["탈진","점멸"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["윤 탈 야생화살","나보리 명멸검","무한의 대검","광전사의 군화"],
      situationalItems: ["도미닉 경의 인사","수호 천사","피바라기","필멸자의 운명"],
      skillOrder: 'E > W > Q > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "presence_of_mind",
        "primarySlot2": "legend_bloodline",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "biscuit_delivery",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "swain",
                "championName": "스웨인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.4% (184게임) 매치업입니다."
        },
        {
                "championId": "viktor",
                "championName": "빅토르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.7% (245게임) 매치업입니다."
        },
        {
                "championId": "ziggs",
                "championName": "직스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.8% (203게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 42.1%, 코어 47.8%, 룬 28.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
  },
  xerath: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["루덴의 메아리","지평선의 초점","그림자불꽃","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","존야의 모래시계","자자크의 세계가시","모렐로노미콘"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "coup_de_grace",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "amumu",
                "championName": "아무무",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 31.9% (47게임) 매치업입니다."
        },
        {
                "championId": "tahmkench",
                "championName": "탐 켄치",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.2% (76게임) 매치업입니다."
        },
        {
                "championId": "renata",
                "championName": "레나타 글라스크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.5% (81게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 87.2%, 코어 15.7%, 룬 49.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 존야의 모래시계)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["루덴의 메아리","그림자불꽃","라바돈의 죽음모자","마법사의 신발"],
      situationalItems: ["공허의 지팡이","존야의 모래시계","폭풍 쇄도","메자이의 영혼약탈자"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "coup_de_grace",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "sion",
                "championName": "사이온",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 30.0% (30게임) 매치업입니다."
        },
        {
                "championId": "talon",
                "championName": "탈론",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.4% (128게임) 매치업입니다."
        },
        {
                "championId": "qiyana",
                "championName": "키아나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.0% (69게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 80.5%, 코어 13.0%, 룬 44.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(공허의 지팡이, 존야의 모래시계)을 우선 고려하세요."
]
    },
    ADC: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","지평선의 초점","그림자불꽃","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","공허의 지팡이","라일라이의 수정홀","존야의 모래시계"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "coup_de_grace",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "viktor",
                "championName": "빅토르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.3% (30게임) 매치업입니다."
        },
        {
                "championId": "missfortune",
                "championName": "미스 포츈",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.5% (85게임) 매치업입니다."
        },
        {
                "championId": "xayah",
                "championName": "자야",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.5% (124게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 89.7%, 코어 17.3%, 룬 24.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  xinzhao: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["거대한 히드라","칠흑의 양날 도끼","죽음의 무도","판금 장화"],
      situationalItems: ["수호 천사","스테락의 도전","맬모셔스의 아귀","정령의 형상"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zaahen",
                "championName": "자헨",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.1% (63게임) 매치업입니다."
        },
        {
                "championId": "skarner",
                "championName": "스카너",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.8% (67게임) 매치업입니다."
        },
        {
                "championId": "taliyah",
                "championName": "탈리야",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.4% (356게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.9%, 코어 45.2%, 룬 64.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 스테락의 도전)을 우선 고려하세요."
]
    },
  },
  yasuo: {
    TOP: {
      spells: ["탈진","점멸"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["몰락한 왕의 검","불멸의 철갑궁","무한의 대검","광전사의 군화"],
      situationalItems: ["죽음의 무도","수호 천사","유령 무희","헤르메스의 시미터"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "absorb_life",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "second_wind",
        "secondarySlot2": "overgrowth",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "lissandra",
                "championName": "리산드라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 29.4% (34게임) 매치업입니다."
        },
        {
                "championId": "chogath",
                "championName": "초가스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.7% (42게임) 매치업입니다."
        },
        {
                "championId": "anivia",
                "championName": "애니비아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.7% (42게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 71.2%, 코어 29.0%, 룬 24.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(죽음의 무도, 수호 천사)을 우선 고려하세요."
]
    },
    ADC: {
      spells: ["탈진","점멸"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["불멸의 철갑궁","무한의 대검","죽음의 무도","광전사의 군화"],
      situationalItems: ["수호 천사","도미닉 경의 인사","피바라기","마법사의 최후"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "absorb_life",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "second_wind",
        "secondarySlot2": "overgrowth",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "corki",
                "championName": "코르키",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.6% (160게임) 매치업입니다."
        },
        {
                "championId": "ziggs",
                "championName": "직스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.5% (41게임) 매치업입니다."
        },
        {
                "championId": "xayah",
                "championName": "자야",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.8% (313게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 84.1%, 코어 25.7%, 룬 36.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 도미닉 경의 인사)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["탈진","점멸"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["불멸의 철갑궁","무한의 대검","죽음의 무도","광전사의 군화"],
      situationalItems: ["수호 천사","헤르메스의 시미터","도미닉 경의 인사","마법사의 최후"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "absorb_life",
        "primarySlot2": "legend_alacrity",
        "primarySlot3": "last_stand",
        "secondaryPath": "resolve",
        "secondarySlot1": "second_wind",
        "secondarySlot2": "overgrowth",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "nunu",
                "championName": "누누와 윌럼프",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 32.8% (61게임) 매치업입니다."
        },
        {
                "championId": "sion",
                "championName": "사이온",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.3% (60게임) 매치업입니다."
        },
        {
                "championId": "aurora",
                "championName": "오로라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.6% (227게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 57.1%, 코어 30.9%, 룬 28.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(수호 천사, 헤르메스의 시미터)을 우선 고려하세요."
]
    },
  },
  yorick: {
    TOP: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 방패","체력 물약"],
      coreItems: ["삼위일체","쇼진의 창","세릴다의 원한","판금 장화"],
      situationalItems: ["스테락의 도전","화공 펑크 사슬검","망자의 갑옷","선체파괴자"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "demolish",
        "primarySlot2": "bone_plating",
        "primarySlot3": "overgrowth",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "legend_bloodline",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "kled",
                "championName": "클레드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.9% (65게임) 매치업입니다."
        },
        {
                "championId": "tryndamere",
                "championName": "트린다미어",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.9% (111게임) 매치업입니다."
        },
        {
                "championId": "warwick",
                "championName": "워윅",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.3% (67게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 56.2%, 코어 4.4%, 룬 14.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(스테락의 도전, 화공 펑크 사슬검)을 우선 고려하세요."
]
    },
  },
  zaahen: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 바람돌이","체력 물약"],
      coreItems: ["삼위일체","발걸음 분쇄기","죽음의 무도","판금 장화"],
      situationalItems: ["끝없는 갈망","수호 천사","맬모셔스의 아귀","정령의 형상"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "coup_de_grace",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "graves",
                "championName": "그레이브즈",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.9% (63게임) 매치업입니다."
        },
        {
                "championId": "chogath",
                "championName": "초가스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.4% (45게임) 매치업입니다."
        },
        {
                "championId": "kayn",
                "championName": "케인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.4% (45게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 98.3%, 코어 35.4%, 룬 43.6%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(끝없는 갈망, 수호 천사)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["삼위일체","발걸음 분쇄기","죽음의 무도","판금 장화"],
      situationalItems: ["끝없는 갈망","수호 천사","맬모셔스의 아귀","스테락의 도전"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "demolish",
        "primarySlot2": "second_wind",
        "primarySlot3": "revitalize",
        "secondaryPath": "inspiration",
        "secondarySlot1": "biscuit_delivery",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "lissandra",
                "championName": "리산드라",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 30.3% (33게임) 매치업입니다."
        },
        {
                "championId": "poppy",
                "championName": "뽀삐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.7% (54게임) 매치업입니다."
        },
        {
                "championId": "heimerdinger",
                "championName": "하이머딩거",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.9% (44게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 47.6%, 코어 41.7%, 룬 19.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(끝없는 갈망, 수호 천사)을 우선 고려하세요."
]
    },
  },
  yuumi: {
    SUPPORT: {
      spells: ["탈진","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["미카엘의 축복","불타는 향로","월석 재생기","명석함의 아이오니아 장화"],
      situationalItems: ["기사의 맹세","새벽심장","꿈 생성기","구원"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "summon_aery",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "resolve",
        "secondarySlot1": "revitalize",
        "secondarySlot2": "font_of_life",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "taric",
                "championName": "타릭",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 32.4% (71게임) 매치업입니다."
        },
        {
                "championId": "anivia",
                "championName": "애니비아",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.3% (56게임) 매치업입니다."
        },
        {
                "championId": "skarner",
                "championName": "스카너",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.1% (73게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 90.9%, 코어 11.5%, 룬 45.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(기사의 맹세, 새벽심장)을 우선 고려하세요."
]
    },
  },
  yunara: {
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["크라켄 학살자","루난의 허리케인","무한의 대검","탐욕의 군화"],
      situationalItems: ["도미닉 경의 인사","수호 천사","피바라기","필멸자의 운명"],
      skillOrder: 'Q > W > E > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_bloodline",
        "primarySlot3": "cut_down",
        "secondaryPath": "inspiration",
        "secondarySlot1": "cash_back",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "ashe",
                "championName": "애쉬",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.6% (945게임) 매치업입니다."
        },
        {
                "championId": "viktor",
                "championName": "빅토르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.8% (192게임) 매치업입니다."
        },
        {
                "championId": "ziggs",
                "championName": "직스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.2% (171게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 41.8%, 코어 49.3%, 룬 30.5%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
  },
  zac: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱"],
      coreItems: ["마법공학 로켓 벨트","태양불꽃 방패","정령의 형상","명석함의 아이오니아 장화"],
      situationalItems: ["가시 갑옷","란두인의 예언","해신 작쇼","메자이의 영혼약탈자"],
      skillOrder: 'E > W > Q > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "conqueror",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_haste",
        "primarySlot3": "last_stand",
        "secondaryPath": "inspiration",
        "secondarySlot1": "magical_footwear",
        "secondarySlot2": "cosmic_insight",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zaahen",
                "championName": "자헨",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.0% (40게임) 매치업입니다."
        },
        {
                "championId": "jax",
                "championName": "잭스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.2% (34게임) 매치업입니다."
        },
        {
                "championId": "fizz",
                "championName": "피즈",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.9% (31게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 100.0%, 코어 24.1%, 룬 56.2%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(가시 갑옷, 란두인의 예언)을 우선 고려하세요."
]
    },
    TOP: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 방패","체력 물약"],
      coreItems: ["덤불 조끼","태양불꽃 방패","가시 갑옷","정령의 형상","판금 장화"],
      situationalItems: ["란두인의 예언","해신 작쇼","끝없는 절망","마법공학 로켓 벨트"],
      skillOrder: 'W > E > Q > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "grasp_of_the_undying",
        "primarySlot1": "demolish",
        "primarySlot2": "second_wind",
        "primarySlot3": "revitalize",
        "secondaryPath": "precision",
        "secondarySlot1": "last_stand",
        "secondarySlot2": "legend_haste",
        "shardOffense": "attack_speed",
        "shardFlex": "scaling_health_flex",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "mordekaiser",
                "championName": "모데카이저",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 32.7% (52게임) 매치업입니다."
        },
        {
                "championId": "sett",
                "championName": "세트",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.5% (40게임) 매치업입니다."
        },
        {
                "championId": "malphite",
                "championName": "말파이트",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.4% (63게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 56.4%, 코어 6.0%, 룬 45.9%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(란두인의 예언, 해신 작쇼)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["태양불꽃 방패","정령의 형상","가시 갑옷","판금 장화"],
      situationalItems: ["란두인의 예언","천상의 이의","지크의 융합","원형질 안전벨트"],
      skillOrder: 'E > W > Q > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "aftershock",
        "primarySlot1": "font_of_life",
        "primarySlot2": "conditioning",
        "primarySlot3": "revitalize",
        "secondaryPath": "precision",
        "secondarySlot1": "legend_haste",
        "secondarySlot2": "triumph",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "braum",
                "championName": "브라움",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 25.0% (32게임) 매치업입니다."
        },
        {
                "championId": "bard",
                "championName": "바드",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 33.3% (36게임) 매치업입니다."
        },
        {
                "championId": "thresh",
                "championName": "쓰레쉬",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.2% (94게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 73.9%, 코어 6.2%, 룬 30.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(란두인의 예언, 천상의 이의)을 우선 고려하세요."
]
    },
  },
  zeri: {
    ADC: {
      spells: ["점멸","방어막"],
      startingItems: ["도란의 활","체력 물약","체력 물약"],
      coreItems: ["윤 탈 야생화살","루난의 허리케인","무한의 대검","탐욕의 군화"],
      situationalItems: ["도미닉 경의 인사","수호 천사","피바라기","불멸의 철갑궁"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "precision",
        "keystone": "lethal_tempo",
        "primarySlot1": "triumph",
        "primarySlot2": "legend_bloodline",
        "primarySlot3": "cut_down",
        "secondaryPath": "inspiration",
        "secondarySlot1": "triple_tonic",
        "secondarySlot2": "cash_back",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "kogmaw",
                "championName": "코그모",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 46.3% (147게임) 매치업입니다."
        },
        {
                "championId": "draven",
                "championName": "드레이븐",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 48.4% (190게임) 매치업입니다."
        },
        {
                "championId": "cassiopeia",
                "championName": "카시오페아",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 49.0% (51게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 52.4%, 코어 33.0%, 룬 34.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(도미닉 경의 인사, 수호 천사)을 우선 고려하세요."
]
    },
  },
  zed: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["벼락폭풍검","요새파괴자","밤의 끝자락","명석함의 아이오니아 장화"],
      situationalItems: ["세릴다의 원한","수호 천사","요우무의 유령검","도미닉 경의 인사"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "inspiration",
        "keystone": "first_strike",
        "primarySlot1": "cash_back",
        "primarySlot2": "triple_tonic",
        "primarySlot3": "cosmic_insight",
        "secondaryPath": "domination",
        "secondarySlot1": "treasure_hunter",
        "secondarySlot2": "sudden_impact",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "warwick",
                "championName": "워윅",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 36.4% (77게임) 매치업입니다."
        },
        {
                "championId": "nocturne",
                "championName": "녹턴",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.1% (132게임) 매치업입니다."
        },
        {
                "championId": "masteryi",
                "championName": "마스터 이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.4% (177게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.7%, 코어 18.5%, 룬 58.7%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(세릴다의 원한, 수호 천사)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 검","체력 물약"],
      coreItems: ["벼락폭풍검","요새파괴자","도미닉 경의 인사","명석함의 아이오니아 장화"],
      situationalItems: ["밤의 끝자락","원칙의 원형낫","요우무의 유령검","세릴다의 원한"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "inspiration",
        "keystone": "first_strike",
        "primarySlot1": "cash_back",
        "primarySlot2": "triple_tonic",
        "primarySlot3": "jack_of_all_trades",
        "secondaryPath": "precision",
        "secondarySlot1": "cut_down",
        "secondarySlot2": "legend_haste",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "kogmaw",
                "championName": "코그모",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.0% (50게임) 매치업입니다."
        },
        {
                "championId": "akshan",
                "championName": "아크샨",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.1% (152게임) 매치업입니다."
        },
        {
                "championId": "zoe",
                "championName": "조이",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.5% (435게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 81.2%, 코어 16.0%, 룬 24.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(밤의 끝자락, 원칙의 원형낫)을 우선 고려하세요."
]
    },
  },
  ziggs: {
    ADC: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["루덴의 메아리","그림자불꽃","라바돈의 죽음모자","마법사의 신발"],
      situationalItems: ["존야의 모래시계","공허의 지팡이","모렐로노미콘","메자이의 영혼약탈자"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "coup_de_grace",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "sivir",
                "championName": "시비르",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.9% (110게임) 매치업입니다."
        },
        {
                "championId": "xerath",
                "championName": "제라스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.9% (37게임) 매치업입니다."
        },
        {
                "championId": "lucian",
                "championName": "루시안",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 48.0% (173게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 95.6%, 코어 21.6%, 룬 38.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 공허의 지팡이)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["루덴의 메아리","그림자불꽃","라바돈의 죽음모자","마법사의 신발"],
      situationalItems: ["존야의 모래시계","공허의 지팡이","무덤꽃","모렐로노미콘"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "precision",
        "secondarySlot1": "presence_of_mind",
        "secondarySlot2": "coup_de_grace",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "leblanc",
                "championName": "르블랑",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 35.9% (39게임) 매치업입니다."
        },
        {
                "championId": "twistedfate",
                "championName": "트위스티드 페이트",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 38.8% (67게임) 매치업입니다."
        },
        {
                "championId": "ahri",
                "championName": "아리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 45.8% (59게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 75.6%, 코어 16.0%, 룬 25.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  zyra: {
    JUNGLE: {
      spells: ["점멸","강타"],
      startingItems: ["새끼 화염발톱","체력 물약"],
      coreItems: ["리안드리의 고통","그림자불꽃","존야의 모래시계","마법사의 신발"],
      situationalItems: ["라바돈의 죽음모자","모렐로노미콘","폭풍 쇄도","라일라이의 수정홀"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "cheap_shot",
        "primarySlot2": "sixth_sense",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "precision",
        "secondarySlot1": "cut_down",
        "secondarySlot2": "legend_haste",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "nunu",
                "championName": "누누와 윌럼프",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.5% (80게임) 매치업입니다."
        },
        {
                "championId": "locke",
                "championName": "로크",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.2% (51게임) 매치업입니다."
        },
        {
                "championId": "rammus",
                "championName": "람머스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 41.5% (41게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 99.9%, 코어 31.2%, 룬 39.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(라바돈의 죽음모자, 모렐로노미콘)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["리안드리의 고통","라일라이의 수정홀","존야의 모래시계","마법사의 신발"],
      situationalItems: ["모렐로노미콘","자자크의 세계가시","제국의 명령","라바돈의 죽음모자"],
      skillOrder: 'E > Q > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "domination",
        "secondarySlot1": "relentless_hunter",
        "secondarySlot2": "taste_of_blood",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "sylas",
                "championName": "사일러스",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.4% (52게임) 매치업입니다."
        },
        {
                "championId": "taric",
                "championName": "타릭",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.6% (32게임) 매치업입니다."
        },
        {
                "championId": "zilean",
                "championName": "질리언",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.7% (91게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 49.6%, 코어 18.8%, 룬 36.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(모렐로노미콘, 자자크의 세계가시)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["어둠불꽃 횃불","리안드리의 고통","라일라이의 수정홀","마법사의 신발"],
      situationalItems: ["존야의 모래시계","공허의 지팡이","라바돈의 죽음모자","모렐로노미콘"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "domination",
        "secondarySlot1": "relentless_hunter",
        "secondarySlot2": "taste_of_blood",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "zed",
                "championName": "상대 라이너",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 패치 기준 픽률 1위 룬과 코어 타이밍에 맞춰 교전을 설계하세요."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 69.8%, 코어 19.8%, 룬 11.3%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 공허의 지팡이)을 우선 고려하세요."
]
    },
  },
  zoe: {
    MID: {
      spells: ["점멸","점화"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["루덴의 메아리","리치베인","그림자불꽃","마법사의 신발"],
      situationalItems: ["존야의 모래시계","라바돈의 죽음모자","메자이의 영혼약탈자","공허의 지팡이"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "taste_of_blood",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "relentless_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "scorch",
        "secondarySlot2": "nimbus_cloak",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "aurelionsol",
                "championName": "아우렐리온 솔",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.7% (58게임) 매치업입니다."
        },
        {
                "championId": "swain",
                "championName": "스웨인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.6% (32게임) 매치업입니다."
        },
        {
                "championId": "ekko",
                "championName": "에코",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.9% (156게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 96.9%, 코어 20.3%, 룬 30.1%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 라바돈의 죽음모자)을 우선 고려하세요."
]
    },
    SUPPORT: {
      spells: ["점멸","점화"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["제국의 명령","지평선의 초점","슈렐리아의 군가","명석함의 아이오니아 장화"],
      situationalItems: ["존야의 모래시계","자자크의 세계가시","모렐로노미콘","라바돈의 죽음모자"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "domination",
        "keystone": "electrocute",
        "primarySlot1": "taste_of_blood",
        "primarySlot2": "eerie_souvenir",
        "primarySlot3": "treasure_hunter",
        "secondaryPath": "sorcery",
        "secondarySlot1": "manaflow_band",
        "secondarySlot2": "scorch",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "tahmkench",
                "championName": "탐 켄치",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 26.7% (30게임) 매치업입니다."
        },
        {
                "championId": "rell",
                "championName": "렐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 34.7% (49게임) 매치업입니다."
        },
        {
                "championId": "alistar",
                "championName": "알리스타",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.8% (98게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 79.4%, 코어 6.5%, 룬 14.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(존야의 모래시계, 자자크의 세계가시)을 우선 고려하세요."
]
    },
  },
  zilean: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["슈렐리아의 군가","제국의 명령","밴들파이프","명석함의 아이오니아 장화"],
      situationalItems: ["강철의 솔라리 펜던트","태양의 썰매","모렐로노미콘","우주의 추진력"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "summon_aery",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "waterwalking",
        "secondaryPath": "domination",
        "secondarySlot1": "relentless_hunter",
        "secondarySlot2": "cheap_shot",
        "shardOffense": "ability_haste",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "rell",
                "championName": "렐",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.6% (133게임) 매치업입니다."
        },
        {
                "championId": "taric",
                "championName": "타릭",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 42.9% (42게임) 매치업입니다."
        },
        {
                "championId": "velkoz",
                "championName": "벨코즈",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 43.2% (95게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 69.4%, 코어 10.6%, 룬 21.4%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(강철의 솔라리 펜던트, 태양의 썰매)을 우선 고려하세요."
]
    },
    MID: {
      spells: ["점멸","순간이동"],
      startingItems: ["도란의 반지","체력 물약","체력 물약"],
      coreItems: ["대천사의 포옹","슈렐리아의 군가","제국의 명령","명석함의 아이오니아 장화"],
      situationalItems: ["우주의 추진력","모렐로노미콘","무덤꽃","미카엘의 축복"],
      skillOrder: 'Q > E > W > R',
      runes: {
        "primaryPath": "sorcery",
        "keystone": "arcane_comet",
        "primarySlot1": "manaflow_band",
        "primarySlot2": "transcendence",
        "primarySlot3": "scorch",
        "secondaryPath": "inspiration",
        "secondarySlot1": "triple_tonic",
        "secondarySlot2": "jack_of_all_trades",
        "shardOffense": "adaptive_force_1",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "flat_health"
},
      counters: [
        {
                "championId": "akali",
                "championName": "아칼리",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 44.1% (34게임) 매치업입니다."
        },
        {
                "championId": "ahri",
                "championName": "아리",
                "difficulty": "보통",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 50.0% (38게임) 매치업입니다."
        },
        {
                "championId": "yone",
                "championName": "요네",
                "difficulty": "쉬움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 53.1% (32게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 90.1%, 코어 7.3%, 룬 6.8%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(우주의 추진력, 모렐로노미콘)을 우선 고려하세요."
]
    },
  },
  renataglasc: {
    SUPPORT: {
      spells: ["점멸","회복"],
      startingItems: ["세계 지도집","체력 물약","체력 물약"],
      coreItems: ["강철의 솔라리 펜던트","슈렐리아의 군가","기사의 맹세","명석함의 아이오니아 장화"],
      situationalItems: ["구원","천상의 이의","밴들파이프","제국의 명령"],
      skillOrder: 'E > W > Q > R',
      runes: {
        "primaryPath": "resolve",
        "keystone": "guardian",
        "primarySlot1": "shield_bash",
        "primarySlot2": "bone_plating",
        "primarySlot3": "unflinching",
        "secondaryPath": "domination",
        "secondarySlot1": "relentless_hunter",
        "secondarySlot2": "sixth_sense",
        "shardOffense": "attack_speed",
        "shardFlex": "adaptive_force_2",
        "shardDefense": "scaling_health_def"
},
      counters: [
        {
                "championId": "swain",
                "championName": "스웨인",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 37.1% (70게임) 매치업입니다."
        },
        {
                "championId": "janna",
                "championName": "잔나",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 39.4% (33게임) 매치업입니다."
        },
        {
                "championId": "seraphine",
                "championName": "세라핀",
                "difficulty": "어려움",
                "tip": "KR 에메랄드+ 16.22 기준 상대 승률 40.3% (201게임) 매치업입니다."
        }
],
      playTips: [
        "OP.GG KR · 에메랄드+ · 16.22 패치 픽률 1위 메타 빌드 (스펠 90.5%, 코어 13.4%, 룬 29.0%)",
        "4코어 이후 중복 아이템을 제외한 차순위 최고 픽률 아이템(구원, 천상의 이의)을 우선 고려하세요."
]
    },
  },
};
