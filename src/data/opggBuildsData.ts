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

// OP.GG Meta champion presets
export const OPGG_PRESETS: Record<string, Partial<Record<Lane, OpggBuildPreset>>> = {
  // 로크 (Corvin Locke)
  locke: {
    MID: {
      spells: ['점멸', '점화'],
      startingItems: ['도란의 반지', '체력 물약', '와드 토템'],
      coreItems: ['루덴의 동반자', '그림자불꽃', '라바돈의 죽음모자', '마법사의 신발'],
      situationalItems: ['존야의 모래시계', '공허의 지팡이', '악의', '밴시의 장막'],
      skillOrder: 'Q > E > W > R',
      runes: {
        primaryPath: 'domination',
        keystone: 'electrocute',
        primarySlot1: 'sudden_impact',
        primarySlot2: 'eyeball_collection',
        primarySlot3: 'ultimate_hunter',
        secondaryPath: 'sorcery',
        secondarySlot1: 'manaflow_band',
        secondarySlot2: 'scorch',
        shardOffense: 'adaptive_force_1',
        shardFlex: 'adaptive_force_2',
        shardDefense: 'scaling_health_def'
      },
      counters: [
        { championId: 'syndra', championName: '신드라', difficulty: '어려움', tip: '신드라의 적군 와해(E) 기절 사거리에 주의하고 E 빠진 타이밍에만 대못 진입을 시도하세요.' },
        { championId: 'vex', championName: '벡스', difficulty: '어려움', tip: '로크의 대못 돌진 스킬 사용 시 벡스의 패시브 공포가 즉시 발동하므로 주의가 필요합니다.' }
      ],
      playTips: [
        '1렙에 Q스킬로 원거리 미니언과 적을 동시 견제하며 마나순환 팔찌를 충전하세요.',
        '3렙에 Q로 표식을 남긴 후 E스킬로 진입해 감전과 돌발 일격을 터뜨리고 W로 빠져나오는 콤보가 핵심입니다.',
        '궁극기 의식의 사슬은 적 원딜이나 주요 딜러에게 걸어 한타 진형을 붕괴시키세요.'
      ]
    },
    TOP: {
      spells: ['점멸', '순간이동'],
      startingItems: ['도란의 방패', '체력 물약', '와드 토템'],
      coreItems: ['리안드리의 고통', '균열 생성기', '존야의 모래시계', '판금 장화'],
      situationalItems: ['모렐로노미콘', '악의', '공허의 지팡이', '심연의 가면'],
      skillOrder: 'Q > W > E > R',
      runes: {
        primaryPath: 'precision',
        keystone: 'conqueror',
        primarySlot1: 'presence_of_mind',
        primarySlot2: 'legend_haste',
        primarySlot3: 'last_stand',
        secondaryPath: 'resolve',
        secondarySlot1: 'second_wind',
        secondarySlot2: 'overgrowth',
        shardOffense: 'adaptive_force_1',
        shardFlex: 'adaptive_force_2',
        shardDefense: 'scaling_health_def'
      },
      counters: [
        { championId: 'darius', championName: '다리우스', difficulty: '어려움', tip: '유체화 킨 다리우스에게 거리를 주지 말고 거리 조절하며 Q 포킹 위주로 파밍하세요.' }
      ],
      playTips: [
        '탑 라인에서는 정복자 지속 딜링과 리안드리 퍼센트 데미지를 이용해 탱커와 브루저를 녹이세요.'
      ]
    }
  },

  // 아트록스 (Aatrox)
  aatrox: {
    TOP: {
      spells: ['점멸', '순간이동'],
      startingItems: ['도란의 검', '체력 물약', '와드 토템'],
      coreItems: ['월식', '갈라진 하늘', '칠흑의 양날 도끼', '판금 장화'],
      situationalItems: ['스테락의 도전', '죽음의 무도', '맬모셔스의 아귀', '수호 천사'],
      skillOrder: 'Q > E > W > R',
      runes: {
        primaryPath: 'precision',
        keystone: 'conqueror',
        primarySlot1: 'triumph',
        primarySlot2: 'legend_haste',
        primarySlot3: 'last_stand',
        secondaryPath: 'resolve',
        secondarySlot1: 'second_wind',
        secondarySlot2: 'revitalize',
        shardOffense: 'adaptive_force_1',
        shardFlex: 'adaptive_force_2',
        shardDefense: 'scaling_health_def'
      },
      counters: [
        { championId: 'fiora', championName: '피오라', difficulty: '어려움', tip: '피오라의 응수(W)가 Q 3타에 적중하지 않도록 엇박자로 사용하거나 캔슬 심리전을 거세요.' },
        { championId: 'irelia', championName: '이렐리아', difficulty: '어려움', tip: '미니언을 타고 들어오는 이렐리아의 근접 딜교환을 피하고 패시브 풀스택일 땐 빠지세요.' }
      ],
      playTips: [
        'Q 스킬의 끝부분(검끝 에어본)을 적중시키는 것이 아트록스의 모든 딜교환의 시작입니다.',
        'E 스킬(파멸의 돌진)을 Q 시전 도중에 사용하여 상대의 무빙을 예측해 검끝을 맞추세요.'
      ]
    }
  },

  // 아리 (Ahri)
  ahri: {
    MID: {
      spells: ['점멸', '순간이동'],
      startingItems: ['도란의 반지', '체력 물약', '와드 토템'],
      coreItems: ['악의', '지평선의 초점', '라바돈의 죽음모자', '마법사의 신발'],
      situationalItems: ['존야의 모래시계', '그림자불꽃', '공허의 지팡이', '밴시의 장막'],
      skillOrder: 'Q > W > E > R',
      runes: {
        primaryPath: 'domination',
        keystone: 'electrocute',
        primarySlot1: 'taste_of_blood',
        primarySlot2: 'eyeball_collection',
        primarySlot3: 'ultimate_hunter',
        secondaryPath: 'inspiration',
        secondarySlot1: 'biscuit_delivery',
        secondarySlot2: 'cosmic_insight',
        shardOffense: 'adaptive_force_1',
        shardFlex: 'adaptive_force_2',
        shardDefense: 'scaling_health_def'
      },
      counters: [
        { championId: 'yasuo', championName: '야스오', difficulty: '어려움', tip: '야스오의 바람 장막(W)에 아리의 매혹과 Q스킬이 모두 상쇄되므로 장막이 빠진 후 교전하세요.' },
        { championId: 'sylas', championName: '사일러스', difficulty: '어려움', tip: '사일러스가 아리의 기동력 궁극기를 훔치면 매우 까다로워지므로 거리 유지가 핵심입니다.' }
      ],
      playTips: [
        'Q 스킬이 돌아올 때의 고정 피해를 맞추기 위해 미니언 각도를 잘 노리세요.',
        '궁극기 혼령 질주(R)는 회피기이자 진입기입니다. 6렙 이후 바텀 라인 적극 로밍을 권장합니다.'
      ]
    }
  },

  // 아칼리 (Akali)
  akali: {
    MID: {
      spells: ['점멸', '점화'],
      startingItems: ['도란의 방패', '체력 물약', '와드 토템'],
      coreItems: ['폭풍쇄도', '리치베인', '그림자불꽃', '마법사의 신발'],
      situationalItems: ['존야의 모래시계', '라바돈의 죽음모자', '공허의 지팡이', '밴시의 장막'],
      skillOrder: 'Q > E > W > R',
      runes: {
        primaryPath: 'precision',
        keystone: 'fleet_footwork',
        primarySlot1: 'presence_of_mind',
        primarySlot2: 'legend_alacrity',
        primarySlot3: 'coup_de_grace',
        secondaryPath: 'resolve',
        secondarySlot1: 'second_wind',
        secondarySlot2: 'overgrowth',
        shardOffense: 'adaptive_force_1',
        shardFlex: 'adaptive_force_2',
        shardDefense: 'scaling_health_def'
      },
      counters: [
        { championId: 'galio', championName: '갈리오', difficulty: '어려움', tip: '마법 보호막과 도발을 지닌 갈리오를 상대로는 맞다이보다 라인 푸시 후 로밍을 노리세요.' }
      ],
      playTips: [
        'Q 사거리 끝에 적을 맞춘 후 원 밖으로 나가 강화 평타를 치는 리듬을 익히세요.',
        '연막(W) 안에서는 타겟팅 스킬을 받지 않으므로 스킬 쿨타임을 벌 때 활용하세요.'
      ]
    }
  },

  // 야스오 (Yasuo)
  yasuo: {
    MID: {
      spells: ['점멸', '점화'],
      startingItems: ['도란의 검', '체력 물약', '와드 토템'],
      coreItems: ['크라켄 학살자', '무한의 대검', '불멸의 철갑궁', '광전사의 군화'],
      situationalItems: ['죽음의 무도', '몰락한 왕의 검', '도미닉 경의 인사', '수호 천사'],
      skillOrder: 'Q > E > W > R',
      runes: {
        primaryPath: 'precision',
        keystone: 'conqueror',
        primarySlot1: 'triumph',
        primarySlot2: 'legend_alacrity',
        primarySlot3: 'last_stand',
        secondaryPath: 'resolve',
        secondarySlot1: 'second_wind',
        secondarySlot2: 'overgrowth',
        shardOffense: 'attack_speed',
        shardFlex: 'adaptive_force_2',
        shardDefense: 'scaling_health_def'
      },
      counters: [
        { championId: 'renekton', championName: '레넥톤', difficulty: '어려움', tip: '레넥톤의 W 스턴과 분노 Q 폭딜은 야스오의 쉴드를 뚫어버립니다. 닌자의 신발을 서둘러 올리세요.' }
      ],
      playTips: [
        'E 스킬(질풍검)을 미니언에 타고 진입해 Q 3타(회오리)를 띄운 후 빠져나오는 짧은 딜교환이 핵심입니다.',
        '바람 장막(W)은 적의 결정적인 궁극기나 투사체 CC기(아리 매혹, 애쉬 궁 등)에 아껴두세요.'
      ]
    }
  },

  // 요네 (Yone)
  yone: {
    MID: {
      spells: ['점멸', '순간이동'],
      startingItems: ['도란의 검', '체력 물약', '와드 토템'],
      coreItems: ['몰락한 왕의 검', '무한의 대검', '불멸의 철갑궁', '광전사의 군화'],
      situationalItems: ['죽음의 무도', '도미닉 경의 인사', '스테락의 도전', '수호 천사'],
      skillOrder: 'Q > E > W > R',
      runes: {
        primaryPath: 'precision',
        keystone: 'conqueror',
        primarySlot1: 'triumph',
        primarySlot2: 'legend_alacrity',
        primarySlot3: 'last_stand',
        secondaryPath: 'resolve',
        secondarySlot1: 'second_wind',
        secondarySlot2: 'overgrowth',
        shardOffense: 'attack_speed',
        shardFlex: 'adaptive_force_2',
        shardDefense: 'scaling_health_def'
      },
      counters: [
        { championId: 'pantheon', championName: '판테온', difficulty: '어려움', tip: '초반 판테온의 강화 W 콤보가 치명적이므로 뼈 방패를 챙기고 무리한 맞다이를 피하세요.' }
      ],
      playTips: [
        'E 영혼해방 상태에서는 추가 고정 피해가 누적되므로 Q 3타 장전 후 E-Q로 진입하세요.',
        '궁극기 운명봉인은 CC 연계가 들어갔을 때 사용하면 100% 적중시킬 수 있습니다.'
      ]
    }
  },

  // 리 신 (Lee Sin)
  leesin: {
    JUNGLE: {
      spells: ['강타', '점멸'],
      startingItems: ['화염발톱 새끼', '체력 물약'],
      coreItems: ['월식', '갈라진 하늘', '칠흑의 양날 도끼', '판금 장화'],
      situationalItems: ['스테락의 도전', '죽음의 무도', '맬모셔스의 아귀', '수호 천사'],
      skillOrder: 'Q > W > E > R',
      runes: {
        primaryPath: 'precision',
        keystone: 'conqueror',
        primarySlot1: 'triumph',
        primarySlot2: 'legend_haste',
        primarySlot3: 'coup_de_grace',
        secondaryPath: 'inspiration',
        secondarySlot1: 'magical_footwear',
        secondarySlot2: 'cosmic_insight',
        shardOffense: 'adaptive_force_1',
        shardFlex: 'adaptive_force_2',
        shardDefense: 'scaling_health_def'
      },
      counters: [
        { championId: 'poppy', championName: '뽀삐', difficulty: '어려움', tip: '뽀삐의 굳건한 태세(W)가 리신의 Q 진입과 방호를 모두 튕겨내므로 벽 근처 싸움을 피하세요.' }
      ],
      playTips: [
        '음파(Q)를 맞췄다고 무조건 날아가지 마세요. 상대의 CC기가 빠졌는지 확인 후 진입합니다.',
        '와드 방호(W)를 이용해 상대 뒤로 돌아간 뒤 궁극기(R)로 아군 진영에 토스하는 배달킥이 한타의 핵심입니다.'
      ]
    }
  },

  // 이즈리얼 (Ezreal)
  ezreal: {
    ADC: {
      spells: ['점멸', '회복'],
      startingItems: ['도란의 검', '체력 물약', '와드 토템'],
      coreItems: ['삼위일체', '마나무네', '세릴다의 원한', '명석함의 아이오니아 장화'],
      situationalItems: ['몰락한 왕의 검', '멜모셔스의 아귀', '얼어붙은 심장', '수호 천사'],
      skillOrder: 'Q > E > W > R',
      runes: {
        primaryPath: 'precision',
        keystone: 'press_the_attack',
        primarySlot1: 'presence_of_mind',
        primarySlot2: 'legend_bloodline',
        primarySlot3: 'coup_de_grace',
        secondaryPath: 'inspiration',
        secondarySlot1: 'magical_footwear',
        secondarySlot2: 'biscuit_delivery',
        shardOffense: 'attack_speed',
        shardFlex: 'adaptive_force_2',
        shardDefense: 'scaling_health_def'
      },
      counters: [
        { championId: 'draven', championName: '드레이븐', difficulty: '어려움', tip: '초반 드레이븐의 맞딜은 이길 수 없으므로 Q 파밍으로 후반을 도모하세요.' }
      ],
      playTips: [
        '비전 이동(E)을 공격용으로 앞비전할 때는 반드시 상대 정글러 위치와 주요 CC기가 빠졌는지 확인해야 합니다.',
        'W 스킬을 챔피언이나 포탑에 묻히고 Q나 평타를 쳐서 폭발시키면 폭발적인 데미지가 들어갑니다.'
      ]
    }
  },

  // 카이사 (Kai'Sa)
  kaisa: {
    ADC: {
      spells: ['점멸', '정화'],
      startingItems: ['도란의 검', '체력 물약', '와드 토템'],
      coreItems: ['크라켄 학살자', '나보리 명멸검', '무한의 대검', '광전사의 군화'],
      situationalItems: ['도미닉 경의 인사', '피바라기', '존야의 모래시계', '수호 천사'],
      skillOrder: 'Q > E > W > R',
      runes: {
        primaryPath: 'precision',
        keystone: 'press_the_attack',
        primarySlot1: 'presence_of_mind',
        primarySlot2: 'legend_bloodline',
        primarySlot3: 'coup_de_grace',
        secondaryPath: 'inspiration',
        secondarySlot1: 'biscuit_delivery',
        secondarySlot2: 'magical_footwear',
        shardOffense: 'attack_speed',
        shardFlex: 'adaptive_force_2',
        shardDefense: 'scaling_health_def'
      },
      counters: [
        { championId: 'lucian', championName: '루시안', difficulty: '어려움', tip: '초반 라인전에서 루시안의 짧은 폭딜 교환을 피하고 Q진화 시점까지 사리세요.' }
      ],
      playTips: [
        'Q 진화를 최우선으로 완성(공격력 100 달성)하여 고립된 적에게 전탄 적중을 노리세요.',
        '아군 CC기가 적에게 걸리면 카이사 궁극기(R)로 사거리 밖에서 즉시 날아가 암살할 수 있습니다.'
      ]
    }
  },

  // 진 (Jhin)
  jhin: {
    ADC: {
      spells: ['점멸', '회복'],
      startingItems: ['도란의 검', '체력 물약', '와드 토템'],
      coreItems: ['징수의 총', '무한의 대검', '고속 연사포', '신속의 장화'],
      situationalItems: ['도미닉 경의 인사', '피바라기', '수호 천사', '밤의 끝자락'],
      skillOrder: 'Q > W > E > R',
      runes: {
        primaryPath: 'precision',
        keystone: 'fleet_footwork',
        primarySlot1: 'presence_of_mind',
        primarySlot2: 'legend_bloodline',
        primarySlot3: 'coup_de_grace',
        secondaryPath: 'sorcery',
        secondarySlot1: 'celerity',
        secondarySlot2: 'gathering_storm',
        shardOffense: 'adaptive_force_1',
        shardFlex: 'adaptive_force_2',
        shardDefense: 'scaling_health_def'
      },
      counters: [
        { championId: 'nautilus', championName: '노틸러스', difficulty: '어려움', tip: '이동기가 없는 진에게 노틸러스 닻줄과 궁극기는 치명적입니다. 정화나 수은을 준비하세요.' }
      ],
      playTips: [
        '4번째 총탄은 잃은 체력 비례 100% 치명타이므로 적의 체력이 낮을 때 점사하세요.',
        '아군이 교전 중일 때 멀리서 W(살상연희)로 속박을 지원하고 궁극기로 잔당을 소탕하세요.'
      ]
    }
  },

  // 징크스 (Jinx)
  jinx: {
    ADC: {
      spells: ['점멸', '회복'],
      startingItems: ['도란의 검', '체력 물약', '와드 토템'],
      coreItems: ['크라켄 학살자', '무한의 대검', '루난의 허리케인', '광전사의 군화'],
      situationalItems: ['도미닉 경의 인사', '피바라기', '수호 천사', '불멸의 철갑궁'],
      skillOrder: 'Q > W > E > R',
      runes: {
        primaryPath: 'precision',
        keystone: 'lethal_tempo',
        primarySlot1: 'presence_of_mind',
        primarySlot2: 'legend_bloodline',
        primarySlot3: 'coup_de_grace',
        secondaryPath: 'inspiration',
        secondarySlot1: 'biscuit_delivery',
        secondarySlot2: 'magical_footwear',
        shardOffense: 'attack_speed',
        shardFlex: 'adaptive_force_2',
        shardDefense: 'scaling_health_def'
      },
      counters: [
        { championId: 'blitzcrank', championName: '블리츠크랭크', difficulty: '어려움', tip: '도주기가 없는 징크스는 그랩에 끌리면 사망합니다. 미니언 뒤에 숨으세요.' }
      ],
      playTips: [
        '적 챔피언 처치 관여 시 터지는 패시브(신난다!) 이동 속도와 공속 폭증으로 한타를 정리하세요.'
      ]
    }
  },

  // 블리츠크랭크 (Blitzcrank)
  blitzcrank: {
    SUPPORT: {
      spells: ['점멸', '점화'],
      startingItems: ['세계 지도의 정석', '체력 물약', '체력 물약'],
      coreItems: ['개척자', '강철의 솔라리 펜던트', '기사의 맹세', '신속의 장화'],
      situationalItems: ['지크의 융합', '가시 갑옷', '얼어붙은 심장', '심연의 가면'],
      skillOrder: 'Q > W > E > R',
      runes: {
        primaryPath: 'resolve',
        keystone: 'aftershock',
        primarySlot1: 'font_of_life',
        primarySlot2: 'bone_plating',
        primarySlot3: 'unflinching',
        secondaryPath: 'inspiration',
        secondarySlot1: 'biscuit_delivery',
        secondarySlot2: 'cosmic_insight',
        shardOffense: 'ability_haste',
        shardFlex: 'move_speed',
        shardDefense: 'scaling_health_def'
      },
      counters: [
        { championId: 'morgana', championName: '모르가나', difficulty: '어려움', tip: '모르가나의 칠흑의 방패(블랙실드)는 그랩을 완전히 무효화시킵니다.' },
        { championId: 'sivir', championName: '시비르', difficulty: '어려움', tip: '주문 방어막으로 그랩을 씹으므로 쉴드가 빠진 타이밍을 노려야 합니다.' }
      ],
      playTips: [
        '그랩(Q)을 함부로 난사하지 마세요. 그랩을 쥐고 있는 것 자체가 상대에게 엄청난 심리적 압박입니다.',
        'W 스킬로 빠르게 달려가 E(강철 주먹) 에어본을 먼저 넣고 도망칠 때 Q로 당기는 콤보가 더 안전합니다.'
      ]
    }
  },

  // 럭스 (Lux)
  lux: {
    SUPPORT: {
      spells: ['점멸', '점화'],
      startingItems: ['세계 지도의 정석', '체력 물약', '체력 물약'],
      coreItems: ['루덴의 동반자', '지평선의 초점', '그림자불꽃', '마법사의 신발'],
      situationalItems: ['존야의 모래시계', '라바돈의 죽음모자', '모렐로노미콘', '밴시의 장막'],
      skillOrder: 'E > Q > W > R',
      runes: {
        primaryPath: 'sorcery',
        keystone: 'arcane_comet',
        primarySlot1: 'manaflow_band',
        primarySlot2: 'transcendence',
        primarySlot3: 'scorch',
        secondaryPath: 'domination',
        secondarySlot1: 'cheap_shot',
        secondarySlot2: 'ultimate_hunter',
        shardOffense: 'adaptive_force_1',
        shardFlex: 'adaptive_force_2',
        shardDefense: 'scaling_health_def'
      },
      counters: [
        { championId: 'pyke', championName: '파이크', difficulty: '어려움', tip: '몸이 약한 럭스는 파이크의 은신-그랩-스턴 연계에 원콤나기 쉽습니다.' }
      ],
      playTips: [
        'E 스킬의 슬로우와 시야 확보 능력을 적극 활용해 부쉬를 체크하세요.',
        'Q(빛의 속박)가 적중하면 즉시 E-R을 퍼부어 적 딜러를 삭제할 수 있습니다.'
      ]
    },
    MID: {
      spells: ['점멸', '순간이동'],
      startingItems: ['도란의 반지', '체력 물약', '와드 토템'],
      coreItems: ['루덴의 동반자', '지평선의 초점', '라바돈의 죽음모자', '마법사의 신발'],
      situationalItems: ['존야의 모래시계', '그림자불꽃', '공허의 지팡이', '밴시의 장막'],
      skillOrder: 'E > Q > W > R',
      runes: {
        primaryPath: 'sorcery',
        keystone: 'arcane_comet',
        primarySlot1: 'manaflow_band',
        primarySlot2: 'transcendence',
        primarySlot3: 'scorch',
        secondaryPath: 'inspiration',
        secondarySlot1: 'magical_footwear',
        secondarySlot2: 'cosmic_insight',
        shardOffense: 'adaptive_force_1',
        shardFlex: 'adaptive_force_2',
        shardDefense: 'scaling_health_def'
      },
      counters: [
        { championId: 'zed', championName: '제드', difficulty: '어려움', tip: '제드의 그림자 진입에 맞춰 존야의 모래시계를 빠르게 구비하세요.' }
      ],
      playTips: [
        '라인을 E 스킬로 빠르게 밀고 긴 사거리 궁극기로 다른 라인 지원을 노리세요.'
      ]
    }
  },

  // 사일러스 (Sylas)
  sylas: {
    MID: {
      spells: ['점멸', '순간이동'],
      startingItems: ['도란의 반지', '체력 물약', '체력 물약'],
      coreItems: ['폭풍쇄도', '그림자불꽃', '존야의 모래시계', '마법사의 신발'],
      situationalItems: ['라바돈의 죽음모자', '리안드리의 고통', '공허의 지팡이', '우주의 추진력'],
      skillOrder: 'W > E > Q > R',
      runes: {
        primaryPath: 'precision',
        keystone: 'conqueror',
        primarySlot1: 'presence_of_mind',
        primarySlot2: 'legend_haste',
        primarySlot3: 'last_stand',
        secondaryPath: 'inspiration',
        secondarySlot1: 'biscuit_delivery',
        secondarySlot2: 'cosmic_insight',
        shardOffense: 'adaptive_force_1',
        shardFlex: 'adaptive_force_2',
        shardDefense: 'scaling_health_def'
      },
      counters: [
        { championId: 'cassiopeia', championName: '카시오페아', difficulty: '어려움', tip: '카시오페아의 독기의 늪(W) 위에선 사일러스의 E 돌진 스킬이 봉인됩니다.' }
      ],
      playTips: [
        '체력이 낮을 때 W(국왕시해자)를 사용하면 폭발적인 회복량으로 역관광을 만들어낼 수 있습니다.',
        '적 팀에 강력한 한타형 궁극기(말파이트, 아무무, 알리스타 등)가 있으면 우선적으로 강탈하세요.'
      ]
    }
  },

  // 제드 (Zed)
  zed: {
    MID: {
      spells: ['점멸', '점화'],
      startingItems: ['도란의 검', '체력 물약', '와드 토템'],
      coreItems: ['요우무의 유령검', '세릴다의 원한', '불경한 히드라', '명석함의 아이오니아 장화'],
      situationalItems: ['밤의 끝자락', '원칙의 원형낫', '기회', '수호 천사'],
      skillOrder: 'Q > E > W > R',
      runes: {
        primaryPath: 'domination',
        keystone: 'electrocute',
        primarySlot1: 'taste_of_blood',
        primarySlot2: 'eyeball_collection',
        primarySlot3: 'ultimate_hunter',
        secondaryPath: 'sorcery',
        secondarySlot1: 'transcendence',
        secondarySlot2: 'scorch',
        shardOffense: 'adaptive_force_1',
        shardFlex: 'adaptive_force_2',
        shardDefense: 'scaling_health_def'
      },
      counters: [
        { championId: 'malzahar', championName: '말자하', difficulty: '어려움', tip: '제드의 궁극기 진입 즉시 말자하가 빨대(R)로 제압하므로 수은 장식띠를 필수 구비하세요.' }
      ],
      playTips: [
        'W 그림자를 던진 후 E-Q로 감전을 터뜨리는 딜교환이 제드의 기본기입니다.',
        '궁극기(R) 시전 후 남는 원본 그림자의 위치로 언제든 돌아갈 수 있음을 계산해 무빙하세요.'
      ]
    }
  },

  // 가렌 (Garen)
  garen: {
    TOP: {
      spells: ['점멸', '점화'],
      startingItems: ['도란의 방패', '체력 물약', '와드 토템'],
      coreItems: ['발걸음 분쇄기', '유령 무희', '망자의 갑옷', '광전사의 군화'],
      situationalItems: ['스테락의 도전', '대자연의 힘', '무한의 대검', '란두인의 예언'],
      skillOrder: 'E > Q > W > R',
      runes: {
        primaryPath: 'precision',
        keystone: 'conqueror',
        primarySlot1: 'triumph',
        primarySlot2: 'legend_alacrity',
        primarySlot3: 'last_stand',
        secondaryPath: 'resolve',
        secondarySlot1: 'second_wind',
        secondarySlot2: 'overgrowth',
        shardOffense: 'attack_speed',
        shardFlex: 'adaptive_force_2',
        shardDefense: 'scaling_health_def'
      },
      counters: [
        { championId: 'quinn', championName: '퀸', difficulty: '어려움', tip: '가렌이 Q로 달려오면 퀸이 공중제비(E)로 차내며 거리를 벌립니다. 덤불 속에 숨어 기습하세요.' }
      ],
      playTips: [
        'E 스킬(심판)은 적 챔피언 방어력을 깎으므로 E 회전 후 Q 침묵과 궁극기(R) 고정 피해로 마무리하세요.'
      ]
    }
  },

  // 다리우스 (Darius)
  darius: {
    TOP: {
      spells: ['유체화', '점멸'],
      startingItems: ['도란의 검', '체력 물약', '와드 토템'],
      coreItems: ['삼위일체', '발걸음 분쇄기', '스테락의 도전', '판금 장화'],
      situationalItems: ['망자의 갑옷', '대자연의 힘', '가시 갑옷', '란두인의 예언'],
      skillOrder: 'Q > E > W > R',
      runes: {
        primaryPath: 'precision',
        keystone: 'conqueror',
        primarySlot1: 'triumph',
        primarySlot2: 'legend_alacrity',
        primarySlot3: 'last_stand',
        secondaryPath: 'sorcery',
        secondarySlot1: 'nimbus_cloak',
        secondarySlot2: 'celerity',
        shardOffense: 'attack_speed',
        shardFlex: 'adaptive_force_2',
        shardDefense: 'scaling_health_def'
      },
      counters: [
        { championId: 'vayne', championName: '베인', difficulty: '어려움', tip: '탑 베인은 구르기와 선고로 다리우스의 접근을 완전히 차단합니다. 정글러를 호출하세요.' }
      ],
      playTips: [
        '출혈 5중첩(녹서스의 단두대 패시브)이 켜지는 순간 엄청난 공격력이 추가되므로 스택 관리가 최우선입니다.',
        'Q(학살)의 도끼날 외곽에 적을 맞추면 잃은 체력 비례 회복이 발생합니다.'
      ]
    }
  }
};
