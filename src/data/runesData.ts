import { RunePath, StatShard } from '../types/lol';

export const RUNE_PATHS: Record<string, RunePath> = {
  precision: {
    id: 'precision',
    name: '정밀',
    englishName: 'Precision',
    color: '#C8AA6E',
    accentColor: '#F0E6D2',
    icon: '⚡',
    description: '공격 강화 및 지속적인 피해',
    keystones: [
      {
        id: 'press_the_attack',
        name: '집중 공격',
        englishName: 'Press the Attack',
        description: '적 챔피언에게 연속으로 3회 기본 공격을 가하면 적에게 추가 적응형 피해를 입히고 8%의 추가 피해를 받게 합니다.',
        icon: '🎯'
      },
      {
        id: 'lethal_tempo',
        name: '치명적 속도',
        englishName: 'Lethal Tempo',
        description: '적 챔피언 공격 시 공격 속도가 중첩되어 증가하며, 최대 중첩 시 추가 공격 속도 및 적중 시 마법 피해를 입힙니다.',
        icon: '⚔️'
      },
      {
        id: 'fleet_footwork',
        name: '기민한 발놀림',
        englishName: 'Fleet Footwork',
        description: '공격 및 이동 시 에너지가 충전됩니다. 충전 완료 후 공격 시 체력을 회복하고 이동 속도가 순간 증가합니다.',
        icon: '👟'
      },
      {
        id: 'conqueror',
        name: '정복자',
        englishName: 'Conqueror',
        description: '적 챔피언에게 기본 공격 또는 개별 스킬로 피해를 입히면 적응형 능력치 중첩을 얻으며, 12중첩 시 피해량의 일부를 흡혈합니다.',
        icon: '👑'
      }
    ],
    slots: [
      {
        slotIndex: 0,
        runes: [
          {
            id: 'absorb_life',
            name: '흡수하는 생명력',
            englishName: 'Absorb Life',
            description: '대상을 처치할 때마다 대상에 따라 일정량의 체력을 회복합니다.',
            icon: '🩸'
          },
          {
            id: 'triumph',
            name: '승전보',
            englishName: 'Triumph',
            description: '챔피언 처치 관여 시 잃은 체력의 5% 및 20 골드를 추가로 획득합니다.',
            icon: '🏆'
          },
          {
            id: 'presence_of_mind',
            name: '침착',
            englishName: 'Presence of Mind',
            description: '적 챔피언에게 피해를 입히면 마나/기력 재생량이 증가하며, 처치 관여 시 최대 마나/기력의 15%를 즉시 회복합니다.',
            icon: '🧘'
          }
        ]
      },
      {
        slotIndex: 1,
        runes: [
          {
            id: 'legend_alacrity',
            name: '전설: 민첩함',
            englishName: 'Legend: Alacrity',
            description: '공격 속도가 3% 증가하며, 전설 중첩당 1.5%의 공격 속도를 추가로 얻습니다 (최대 10회 중첩).',
            icon: '🏹'
          },
          {
            id: 'legend_haste',
            name: '전설: 가속',
            englishName: 'Legend: Haste',
            description: '일반 스킬 가속을 영구히 획득하며 전설 중첩당 추가 일반 스킬 가속을 얻습니다.',
            icon: '⏱️'
          },
          {
            id: 'legend_bloodline',
            name: '전설: 핏빛 길',
            englishName: 'Legend: Bloodline',
            description: '전설 중첩당 생명력 흡수율을 획득하며 최대 중첩 시 최대 체력이 85 증가합니다.',
            icon: '💉'
          }
        ]
      },
      {
        slotIndex: 2,
        runes: [
          {
            id: 'coup_de_grace',
            name: '최후의 일격',
            englishName: 'Coup de Grace',
            description: '체력이 40% 이하인 적 챔피언에게 주는 피해량이 8% 증가합니다.',
            icon: '🗡️'
          },
          {
            id: 'cut_down',
            name: '체력차 극복',
            englishName: 'Cut Down',
            description: '최대 체력이 50%를 초과하는 적 챔피언에게 주는 피해량이 최대 8% 증가합니다.',
            icon: '⚖️'
          },
          {
            id: 'last_stand',
            name: '최후의 저항',
            englishName: 'Last Stand',
            description: '자신의 체력이 60% 이하일 때 적 챔피언에게 주는 피해량이 5~11% 증가합니다 (체력 30% 이하일 때 최대).',
            icon: '🛡️'
          }
        ]
      }
    ]
  },
  domination: {
    id: 'domination',
    name: '지배',
    englishName: 'Domination',
    color: '#DC2626',
    accentColor: '#FCA5A5',
    icon: '🔥',
    description: '강력한 순간 피해 및 대상 접근',
    keystones: [
      {
        id: 'electrocute',
        name: '감전',
        englishName: 'Electrocute',
        description: '3초 동안 동일한 챔피언에게 개별 공격이나 스킬을 3회 적중시키면 추가 적응형 폭딜을 입힙니다.',
        icon: '⚡'
      },
      {
        id: 'dark_harvest',
        name: '어둠의 수확',
        englishName: 'Dark Harvest',
        description: '체력이 50% 미만인 챔피언에게 피해를 입히면 적응형 피해를 입히고 영혼을 수확하여 영구히 피해량이 강화됩니다.',
        icon: '💀'
      },
      {
        id: 'hail_of_blades',
        name: '칼날비',
        englishName: 'Hail of Blades',
        description: '적 챔피언 공격 시 첫 3회의 기본 공격 속도가 대폭 증가하며 공속 상한선이 일시 해제됩니다.',
        icon: '🔪'
      }
    ],
    slots: [
      {
        slotIndex: 0,
        runes: [
          {
            id: 'cheap_shot',
            name: '비열한 한 방',
            englishName: 'Cheap Shot',
            description: '이동 또는 행동을 방해받은 상태인 적에게 피해를 입히면 추가 고정 피해를 입힙니다.',
            icon: '🦶'
          },
          {
            id: 'taste_of_blood',
            name: '피의 맛',
            englishName: 'Taste of Blood',
            description: '적 챔피언에게 피해를 입히면 체력을 회복합니다 (재사용 대기시간 20초).',
            icon: '🩸'
          },
          {
            id: 'sudden_impact',
            name: '돌발 일격',
            englishName: 'Sudden Impact',
            description: '돌진, 도약, 점멸, 순간이동을 사용하거나 은신에서 빠져나온 뒤 피해를 입히면 물리/마법 관통력을 얻습니다.',
            icon: '💥'
          }
        ]
      },
      {
        slotIndex: 1,
        runes: [
          {
            id: 'zombie_ward',
            name: '좀비 와드',
            englishName: 'Zombie Ward',
            description: '적 와드를 파괴하면 그 자리에 아군 좀비 와드가 생성되고 영구 적응형 능력치를 얻습니다.',
            icon: '🧟'
          },
          {
            id: 'ghost_poro',
            name: '유령 포로',
            englishName: 'Ghost Poro',
            description: '와드가 수명을 다하면 유령 포로가 남아 시야를 밝혀주며 발견 시 적응형 능력치를 얻습니다.',
            icon: '👻'
          },
          {
            id: 'eyeball_collection',
            name: '사냥의 증표',
            englishName: 'Eyeball Collection',
            description: '챔피언 처치 관여 시마다 눈알을 수집하여 영구적으로 적응형 능력치를 획득합니다.',
            icon: '👁️'
          }
        ]
      },
      {
        slotIndex: 2,
        runes: [
          {
            id: 'treasure_hunter',
            name: '보물 사냥꾼',
            englishName: 'Treasure Hunter',
            description: '현상금 사냥꾼 중첩을 획득할 때마다 처음 처치하는 챔피언당 대량의 추가 골드를 획득합니다.',
            icon: '💰'
          },
          {
            id: 'relentless_hunter',
            name: '끈질긴 사냥꾼',
            englishName: 'Relentless Hunter',
            description: '현상금 사냥꾼 중첩당 전투에서 벗어나 있을 때의 이동 속도가 영구히 증가합니다.',
            icon: '🐾'
          },
          {
            id: 'ultimate_hunter',
            name: '궁극의 사냥꾼',
            englishName: 'Ultimate Hunter',
            description: '현상금 사냥꾼 중첩당 궁극기 스킬 가속을 획득하여 궁극기 재사용 대기시간이 단축됩니다.',
            icon: '⌛'
          }
        ]
      }
    ]
  },
  sorcery: {
    id: 'sorcery',
    name: '마법',
    englishName: 'Sorcery',
    color: '#3B82F6',
    accentColor: '#93C5FD',
    icon: '🔮',
    description: '스킬 및 자원 재생 특화',
    keystones: [
      {
        id: 'summon_aery',
        name: '콩콩이 소환',
        englishName: 'Summon Aery',
        description: '적에게 기본 공격이나 스킬 공격 시 콩콩이가 날아가 추가 피해를 주며, 아군에게 이로운 효과를 주면 보호막을 씌웁니다.',
        icon: '🧚'
      },
      {
        id: 'arcane_comet',
        name: '신비로운 유성',
        englishName: 'Arcane Comet',
        description: '스킬로 챔피언에게 피해를 입히면 해당 위치에 유성을 떨어뜨려 광역 적응형 피해를 입힙니다.',
        icon: '☄️'
      },
      {
        id: 'phase_rush',
        name: '난입',
        englishName: 'Phase Rush',
        description: '4초 안에 한 챔피언에게 개별 공격 3회를 적중시키면 폭발적인 이동 속도 및 둔화 저항을 얻습니다.',
        icon: '💨'
      }
    ],
    slots: [
      {
        slotIndex: 0,
        runes: [
          {
            id: 'nullifying_orb',
            name: '무효화 구체',
            englishName: 'Nullifying Orb',
            description: '마법 피해를 받아 체력이 30% 이하로 떨어지면 마법 피해를 흡수하는 보호막을 생성합니다.',
            icon: '🔮'
          },
          {
            id: 'manaflow_band',
            name: '마나순환 팔찌',
            englishName: 'Manaflow Band',
            description: '스킬로 적 챔피언을 적중시키면 최대 마나가 25씩 영구 증가합니다 (최대 250, 달성 후 잃은 마나 재생).',
            icon: '💧'
          },
          {
            id: 'nimbus_cloak',
            name: '빛의 망토',
            englishName: 'Nimbus Cloak',
            description: '소환사 주문 시전 직후 이동 속도가 일시 증가하고 유닛을 통과할 수 있습니다.',
            icon: '🧥'
          }
        ]
      },
      {
        slotIndex: 1,
        runes: [
          {
            id: 'transcendence',
            name: '깨달음',
            englishName: 'Transcendence',
            description: '5레벨 및 8레벨 도달 시 스킬 가속을 획득하며, 11레벨 이후 챔피언 처치 관여 시 기본 스킬 재사용 대기시간이 감소합니다.',
            icon: '✨'
          },
          {
            id: 'celerity',
            name: '기민함',
            englishName: 'Celerity',
            description: '모든 추가 이동 속도 효과가 7% 증가하며 이동 속도가 1% 증가합니다.',
            icon: '🌪️'
          },
          {
            id: 'absolute_focus',
            name: '절대 집중',
            englishName: 'Absolute Focus',
            description: '자신의 체력이 70% 이상일 때 적응형 능력치를 추가로 획득합니다.',
            icon: '🎯'
          }
        ]
      },
      {
        slotIndex: 2,
        runes: [
          {
            id: 'scorch',
            name: '주문 작열',
            englishName: 'Scorch',
            description: '다음 공격 스킬이 적 챔피언에게 적중하면 불태워 1초 후 추가 마법 피해를 입힙니다 (재사용 대기시간 10초).',
            icon: '🔥'
          },
          {
            id: 'waterwalking',
            name: '물 위를 걷는 자',
            englishName: 'Waterwalking',
            description: '강에 있을 때 이동 속도가 25 증가하고 적응형 능력치를 추가로 획득합니다.',
            icon: '🌊'
          },
          {
            id: 'gathering_storm',
            name: '폭풍의 결집',
            englishName: 'Gathering Storm',
            description: '게임 시작 후 10분마다 적응형 능력치를 영구히 획득하며 후반으로 갈수록 기하급수적으로 강력해집니다.',
            icon: '⚡'
          }
        ]
      }
    ]
  },
  resolve: {
    id: 'resolve',
    name: '결의',
    englishName: 'Resolve',
    color: '#10B981',
    accentColor: '#A7F3D0',
    icon: '🛡️',
    description: '내구력 및 군중 제어 강화',
    keystones: [
      {
        id: 'grasp_of_the_undying',
        name: '착취의 손아귀',
        englishName: 'Grasp of the Undying',
        description: '전투 중 4초마다 적 챔피언에 대한 기본 공격이 강화되어 추가 마법 피해를 입히고 체력을 회복하며 영구 최대 체력을 얻습니다.',
        icon: '✊'
      },
      {
        id: 'aftershock',
        name: '여진',
        englishName: 'Aftershock',
        description: '적 챔피언을 이동 불가 상태로 만들면 2.5초 동안 방어력과 마법 저항력이 대폭 증가하며 이후 폭발하여 주변에 피해를 입힙니다.',
        icon: '💥'
      },
      {
        id: 'guardian',
        name: '수호자',
        englishName: 'Guardian',
        description: '자신 또는 보호 대상 아군 챔피언이 피해를 입으면 둘 모두에게 보호막을 부여하고 이동 속도를 높여줍니다.',
        icon: '🛡️'
      }
    ],
    slots: [
      {
        slotIndex: 0,
        runes: [
          {
            id: 'demolish',
            name: '철거',
            englishName: 'Demolish',
            description: '포탑 근처에서 3초 동안 충전 후 포탑에 강력한 일격을 날려 최대 체력에 비례한 대량의 피해를 입힙니다.',
            icon: '🔨'
          },
          {
            id: 'font_of_life',
            name: '생명의 샘',
            englishName: 'Font of Life',
            description: '적 챔피언의 이동을 방해하면 표식을 남기며, 아군이 해당 적을 공격 시 체력을 지속 회복합니다.',
            icon: '🌿'
          },
          {
            id: 'shield_bash',
            name: '보호막 강타',
            englishName: 'Shield Bash',
            description: '보호막을 얻으면 방어력/마법 저항력이 증가하고 다음 기본 공격이 추가 적응형 피해를 입힙니다.',
            icon: '🛡️'
          }
        ]
      },
      {
        slotIndex: 1,
        runes: [
          {
            id: 'conditioning',
            name: '사전 준비',
            englishName: 'Conditioning',
            description: '게임 시간 12분 후 방어력 및 마법 저항력이 +8 증가하고 총 방어력과 마법 저항력이 3% 증가합니다.',
            icon: '⏳'
          },
          {
            id: 'second_wind',
            name: '재생의 바람',
            englishName: 'Second Wind',
            description: '적 챔피언에게 피해를 입은 후 10초에 걸쳐 잃은 체력의 일부를 지속적으로 회복합니다.',
            icon: '🍃'
          },
          {
            id: 'bone_plating',
            name: '뼈 방패',
            englishName: 'Bone Plating',
            description: '적 챔피언에게 피해를 받으면 다음 3회의 스킬 및 기본 공격 피해량이 크게 감소합니다.',
            icon: '🦴'
          }
        ]
      },
      {
        slotIndex: 2,
        runes: [
          {
            id: 'overgrowth',
            name: '과잉성장',
            englishName: 'Overgrowth',
            description: '근처에서 몬스터나 적 미니언이 죽을 때마다 최대 체력이 영구히 증가합니다 (120마리마다 추가 3.5%).',
            icon: '🌱'
          },
          {
            id: 'revitalize',
            name: '소생',
            englishName: 'Revitalize',
            description: '자신이 시전하거나 받는 회복 및 보호막 효과가 5% 증가하며, 대상 체력이 40% 이하일 때 10% 추가 증가합니다.',
            icon: '✨'
          },
          {
            id: 'unflinching',
            name: '불굴의 의지',
            englishName: 'Unflinching',
            description: '이동 불가 또는 둔화 상태가 될 때 방어력과 마법 저항력이 일시 증가합니다.',
            icon: '🧗'
          }
        ]
      }
    ]
  },
  inspiration: {
    id: 'inspiration',
    name: '영감',
    englishName: 'Inspiration',
    color: '#06B6D4',
    accentColor: '#A5F3FC',
    icon: '💡',
    description: '창의적인 도구 및 규칙 비틀기',
    keystones: [
      {
        id: 'glacial_augment',
        name: '빙결 강화',
        englishName: 'Glacial Augment',
        description: '적 챔피언을 이동 불가 상태로 만들면 지면에 빙결 광선을 방출해 적의 이동 속도를 크게 늦추고 피해량을 15% 감소시킵니다.',
        icon: '❄️'
      },
      {
        id: 'unsealed_spellbook',
        name: '봉인 풀린 주문서',
        englishName: 'Unsealed Spellbook',
        description: '전투에서 벗어나 있을 때 소환사 주문을 다른 주문으로 1회 교체할 수 있습니다.',
        icon: '📖'
      },
      {
        id: 'first_strike',
        name: '선제공격',
        englishName: 'First Strike',
        description: '적 챔피언보다 먼저 선제공격을 가하면 3초 동안 적에게 7%의 추가 피해를 입히고 가한 피해량에 비례해 골드를 획득합니다.',
        icon: '⚡'
      }
    ],
    slots: [
      {
        slotIndex: 0,
        runes: [
          {
            id: 'hextech_flashtraption',
            name: '마법공학 점멸기',
            englishName: 'Hextech Flashtraption',
            description: '점멸이 재사용 대기 중일 때 2초간 정신 집중을 통해 새로운 위치로 점멸하는 마법공학 점멸로 대체됩니다.',
            icon: '⚡'
          },
          {
            id: 'magical_footwear',
            name: '마법의 신발',
            englishName: 'Magical Footwear',
            description: '12분 도달 시 약간 신비한 장화를 무료로 획득하며 (처치 관여당 45초 단축), 추가 이동 속도 +10을 제공합니다.',
            icon: '👢'
          },
          {
            id: 'cash_back',
            name: '현금 지원',
            englishName: 'Cash Back',
            description: '전설 아이템 구매 시 구매 금액의 6%를 골드로 페이백 환급받습니다.',
            icon: '🪙'
          }
        ]
      },
      {
        slotIndex: 1,
        runes: [
          {
            id: 'triple_tonic',
            name: '삼중 물약',
            englishName: 'Triple Tonic',
            description: '3레벨, 6레벨, 9레벨 도달 시 특별한 엘릭서(골드/스킬 포인트/적응형 능력치)를 무료로 획득합니다.',
            icon: '🧪'
          },
          {
            id: 'biscuit_delivery',
            name: '비스킷 배달',
            englishName: 'Biscuit Delivery',
            description: '6분까지 2분마다 무료 비스킷을 획득합니다. 사용 시 잃은 체력과 마나를 회복하고 최대 마나가 영구 증가합니다.',
            icon: '🍪'
          },
          {
            id: 'time_warp_tonic',
            name: '시간 왜곡 물약',
            englishName: 'Time Warp Tonic',
            description: '물약이나 비스킷 사용 시 회복량의 일부를 즉시 회복하며 이동 속도가 소폭 상승합니다.',
            icon: '⏳'
          }
        ]
      },
      {
        slotIndex: 2,
        runes: [
          {
            id: 'cosmic_insight',
            name: '우주적 통찰력',
            englishName: 'Cosmic Insight',
            description: '소환사 주문 가속 +18 및 아이템 가속 +10을 영구히 제공합니다.',
            icon: '🌌'
          },
          {
            id: 'approach_velocity',
            name: '쾌속 접근',
            englishName: 'Approach Velocity',
            description: '이동 방해를 받은 적 챔피언에게 다가갈 때 이동 속도가 7.5% 증가하며, 자신이 CC기를 건 대상에게는 15% 증가합니다.',
            icon: '🏃'
          },
          {
            id: 'jack_of_all_trades',
            name: '다재다능',
            englishName: 'Jack of All Trades',
            description: '아이템 구매를 통해 다양한 종류의 고유 능력치 능력치를 얻을 때마다 중첩당 스킬 가속과 적응형 능력치를 획득합니다.',
            icon: '🃏'
          }
        ]
      }
    ]
  }
};

export const STAT_SHARDS: {
  offense: StatShard[];
  flex: StatShard[];
  defense: StatShard[];
} = {
  offense: [
    {
      id: 'adaptive_force_1',
      name: '적응형 능력치',
      category: 'offense',
      description: '적응형 능력치 +9 (공격력 5.4 또는 주문력 9)',
      icon: '⚔️'
    },
    {
      id: 'attack_speed',
      name: '공격 속도',
      category: 'offense',
      description: '공격 속도 +10%',
      icon: '🏹'
    },
    {
      id: 'ability_haste',
      name: '스킬 가속',
      category: 'offense',
      description: '스킬 가속 +8',
      icon: '⏱️'
    }
  ],
  flex: [
    {
      id: 'adaptive_force_2',
      name: '적응형 능력치',
      category: 'flex',
      description: '적응형 능력치 +9 (공격력 5.4 또는 주문력 9)',
      icon: '⚔️'
    },
    {
      id: 'move_speed',
      name: '이동 속도',
      category: 'flex',
      description: '이동 속도 +2%',
      icon: '👟'
    },
    {
      id: 'scaling_health_flex',
      name: '성장형 체력',
      category: 'flex',
      description: '레벨 비례 체력 +10~180 (1~18레벨)',
      icon: '❤️'
    }
  ],
  defense: [
    {
      id: 'flat_health',
      name: '체력',
      category: 'defense',
      description: '기본 체력 +65',
      icon: '🛡️'
    },
    {
      id: 'tenacity_slow_resist',
      name: '강인함 및 둔화 저항',
      category: 'defense',
      description: '강인함 및 둔화 저항 +10%',
      icon: '🧗'
    },
    {
      id: 'scaling_health_def',
      name: '성장형 체력',
      category: 'defense',
      description: '레벨 비례 체력 +10~180 (1~18레벨)',
      icon: '❤️'
    }
  ]
};
