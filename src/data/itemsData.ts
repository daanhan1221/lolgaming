import { ItemInfo } from '../types/lol';

export const LOL_ITEMS: ItemInfo[] = [
  // Starting items
  { id: 'dorans_blade', name: '도란의 검', cost: 450, category: 'starting', description: '공격력 +10, 체력 +80, 생명력 흡수 3.5%' },
  { id: 'dorans_ring', name: '도란의 반지', cost: 400, category: 'starting', description: '주문력 +18, 체력 +90, 마나 회복' },
  { id: 'dorans_shield', name: '도란의 방패', cost: 450, category: 'starting', description: '체력 +110, 기본 체력 재생, 피해 입은 후 체력 회복' },
  { id: 'cull', name: '수확의 낫', cost: 450, category: 'starting', description: '공격력 +7, 적중 시 체력 회복, 미니언 100마리 처치 시 350골드 보너스' },
  { id: 'dark_seal', name: '암흑의 인장', cost: 350, category: 'starting', description: '주문력 +15, 체력 +50, 영광 중첩당 추가 주문력' },
  { id: 'tear_goddess', name: '여신의 눈물', cost: 400, category: 'starting', description: '마나 +240, 스킬 적중 시 최대 마나 중첩 증가' },
  { id: 'gustwalker_hatchling', name: '바람돌이 새끼', cost: 450, category: 'starting', description: '정글 펫: 수풀 통과 시 및 몬스터 처치 시 이동 속도 증가' },
  { id: 'mosstomper_seedling', name: '이끼쿵쿵이 새끼', cost: 450, category: 'starting', description: '정글 펫: 추가 보호막 및 강인함/둔화 저항 제공' },
  { id: 'scorchclaw_pup', name: '화염발톱 새끼', cost: 450, category: 'starting', description: '정글 펫: 공격 시 추가 둔화 및 광역 고정 피해' },
  { id: 'world_atlas', name: '세계 지도의 정석', cost: 400, category: 'starting', description: '서포터 퀘스트 아이템: 체력, 마나/체력 재생, 골드 획득' },
  { id: 'health_potion', name: '체력 물약', cost: 50, category: 'starting', description: '15초에 걸쳐 체력 120 회복' },
  { id: 'refillable_potion', name: '충전형 물약', cost: 150, category: 'starting', description: '우물 방문 시 2회 충전, 회복량 100' },
  { id: 'stealth_ward', name: '와드 토템', cost: 0, category: 'starting', description: '90~120초 동안 시야 제공' },

  // Boots
  { id: 'berserkers_greaves', name: '광전사의 군화', cost: 1100, category: 'boots', description: '공격 속도 +35%, 이동 속도 +45' },
  { id: 'sorcerers_shoes', name: '마법사의 신발', cost: 1100, category: 'boots', description: '마법 관통력 +18, 이동 속도 +45' },
  { id: 'plated_steelcaps', name: '판금 장화', cost: 1100, category: 'boots', description: '방어력 +20, 기본 공격 피해 12% 감소, 이동 속도 +45' },
  { id: 'mercurys_treads', name: '헤르메스의 발걸음', cost: 1100, category: 'boots', description: '마법 저항력 +25, 강인함 +30%, 이동 속도 +45' },
  { id: 'ionian_boots', name: '명석함의 아이오니아 장화', cost: 900, category: 'boots', description: '스킬 가속 +15, 소환사 주문 가속 +12, 이동 속도 +45' },
  { id: 'boots_of_swiftness', name: '신속의 장화', cost: 900, category: 'boots', description: '이동 속도 +60, 둔화 저항 +25%' },

  // Core AD / Assassin / Marksman Items
  { id: 'infinity_edge', name: '무한의 대검', cost: 3400, category: 'core', description: '공격력 +80, 치명타 확률 +25%, 치명타 피해량 +40%' },
  { id: 'collector', name: '징수의 총', cost: 3200, category: 'core', description: '공격력 +60, 치명타 확률 +25%, 물리 관통력 +12, 체력 5% 이하 처형' },
  { id: 'lord_dominiks_regards', name: '도미닉 경의 인사', cost: 3000, category: 'core', description: '공격력 +45, 방어구 관통력 +40%, 치명타 확률 +25%' },
  { id: 'bloodthirster', name: '피바라기', cost: 3400, category: 'core', description: '공격력 +80, 생명력 흡수 +18%, 추가 보호막/생존력' },
  { id: 'kraken_slayer', name: '크라켄 학살자', cost: 3100, category: 'core', description: '공격력 +50, 공격 속도 +40%, 3타마다 강력한 추가 피해' },
  { id: 'blade_of_the_ruined_king', name: '몰락한 왕의 검', cost: 3200, category: 'core', description: '공격력 +50, 공격 속도 +25%, 생명력 흡수 +10%, 현재 체력 비례 피해' },
  { id: 'trinity_force', name: '삼위일체', cost: 3333, category: 'core', description: '공격력 +45, 공속 +33%, 체력 +300, 스킬 가속 +15, 주문 검' },
  { id: 'sundered_sky', name: '갈라진 하늘', cost: 3100, category: 'core', description: '공격력 +55, 체력 +400, 스킬 가속 +15, 첫 기본 공격 치명타 및 체력 회복' },
  { id: 'black_cleaver', name: '칠흑의 양날 도끼', cost: 3000, category: 'core', description: '공격력 +55, 체력 +400, 스킬 가속 +20, 방어력 깎기' },
  { id: 'eclipse', name: '월식', cost: 2800, category: 'core', description: '공격력 +70, 스킬 가속 +15, 2회 공격 시 최대 체력 비례 피해 및 보호막' },
  { id: 'profane_hydra', name: '불경한 히드라', cost: 3300, category: 'core', description: '공격력 +60, 물리 관통력 +18, 광역 쪼개기 및 처형 액티브' },
  { id: 'youmuus_ghostblade', name: '요우무의 유령검', cost: 2700, category: 'core', description: '공격력 +60, 물리 관통력 +18, 비전투 이속 및 폭발적인 돌진 액티브' },
  { id: 'opportunity', name: '기회', cost: 2700, category: 'core', description: '공격력 +55, 물리 관통력 +18, 챔피언 처치 시 이동 속도 대폭 증가' },
  { id: 'stridebreaker', name: '발걸음 분쇄기', cost: 3300, category: 'core', description: '공격력 +50, 공속 +30%, 체력 +450, 사용 시 광역 둔화 및 이속 증가' },

  // Core AP / Mage Items
  { id: 'ludens_companion', name: '루덴의 동반자', cost: 3000, category: 'core', description: '주문력 +90, 마나 +600, 스킬 가속 +20, 사격 탄환 추가 피해' },
  { id: 'shadowflame', name: '그림자불꽃', cost: 3200, category: 'core', description: '주문력 +120, 마법 관통력 +12, 체력 35% 이하 적에게 마법 치명타 피해' },
  { id: 'stormsurge', name: '폭풍쇄도', cost: 2900, category: 'core', description: '주문력 +95, 마법 관통력 +10, 이동 속도 +5%, 폭딜 시 벼락 강타' },
  { id: 'rabadons_deathcap', name: '라바돈의 죽음모자', cost: 3600, category: 'core', description: '주문력 +140, 총 주문력 35% 증폭' },
  { id: 'void_staff', name: '공허의 지팡이', cost: 3000, category: 'core', description: '주문력 +80, 마법 관통력 +40%' },
  { id: 'zhonyas_hourglass', name: '존야의 모래시계', cost: 3250, category: 'core', description: '주문력 +120, 방어력 +50, 2.5초 무적 경직 사용' },
  { id: 'banshees_veil', name: '밴시의 장막', cost: 3100, category: 'core', description: '주문력 +120, 마법 저항력 +50, 주문 방어막' },
  { id: 'liandrys_torment', name: '리안드리의 고통', cost: 3000, category: 'core', description: '주문력 +90, 체력 +300, 최대 체력 비례 지속 퍼센트 피해 및 고통 증폭' },
  { id: 'blackfire_torch', name: '악의의 횃불', cost: 2800, category: 'core', description: '주문력 +90, 마나 +600, 스킬 가속 +25, 스킬 지속 화상 피해' },
  { id: 'malignance', name: '악의', cost: 2700, category: 'core', description: '주문력 +80, 마나 +600, 궁극기 가속 +20, 궁극기 적중 시 지면 저주 폭발' },
  { id: 'lich_bane', name: '리치베인', cost: 3100, category: 'core', description: '주문력 +100, 스킬 가속 +15, 이속 +8%, 스킬 사용 후 기본 공격 강력 마법 피해' },
  { id: 'nashors_tooth', name: '내셔의 이빨', cost: 3000, category: 'core', description: '주문력 +90, 공격 속도 +50%, 기본 공격 시 추가 마법 피해' },
  { id: 'rod_of_ages', name: '영겁의 지팡이', cost: 2600, category: 'core', description: '주문력, 체력, 마나 시간 경과 성장, 10중첩 시 1레벨 상승' },

  // Tank / Defensive / Bruiser
  { id: 'heartsteel', name: '강철심장', cost: 3000, category: 'core', description: '체력 +900, 체력 재생 +200%, 대상 공격 시 거대 강타 및 영구 최대 체력 누적' },
  { id: 'sunfire_aegis', name: '태양불꽃 방패', cost: 2700, category: 'core', description: '체력 +500, 방어력 +50, 주변 적 지속 마법 불태우기' },
  { id: 'hollow_radiance', name: '공허한 광휘', cost: 2800, category: 'core', description: '체력 +450, 마법 저항력 +50, 주변 적 불태우기 및 처치 시 폭발' },
  { id: 'thornmail', name: '가시 갑옷', cost: 2700, category: 'situational', description: '체력 +350, 방어력 +70, 피격 시 반사 마법 피해 및 고통스러운 상처(치감 40%)' },
  { id: 'randuins_omen', name: '란두인의 예언', cost: 2700, category: 'situational', description: '체력 +400, 방어력 +60, 치명타 피해 30% 감소, 액티브 광역 둔화' },
  { id: 'frozen_heart', name: '얼어붙은 심장', cost: 2400, category: 'situational', description: '방어력 +65, 마나 +400, 스킬 가속 +20, 주변 적 공속 20% 감소 오라' },
  { id: 'kaenic_rookern', name: '케이닉 루컨', cost: 2900, category: 'situational', description: '체력 +400, 마법 저항력 +80, 마법 피해 흡수 보호막 상시 제공' },
  { id: 'force_of_nature', name: '대자연의 힘', cost: 2800, category: 'situational', description: '체력 +400, 마법 저항력 +55, 이동 속도 +5%, 피격 시 마저 대폭 증가' },
  { id: 'guardian_angel', name: '수호 천사', cost: 3200, category: 'situational', description: '공격력 +55, 방어력 +45, 치명적 피해 시 4초 후 부활' },
  { id: 'steraks_gage', name: '스테락의 도전', cost: 3200, category: 'situational', description: '체력 +400, 기본 공격력 비례 추가 공격력, 폭딜 피격 시 거대 보호막 및 강인함' },
  { id: 'jaksho', name: '해신 작쇼', cost: 3200, category: 'core', description: '체력 +300, 방어력 +50, 마법 저항력 +50, 5초 교전 후 방어/마저 30% 증가' },

  // Support
  { id: 'solari', name: '강철의 솔라리 펜던트', cost: 2200, category: 'core', description: '체력 +200, 방어력 +30, 마저 +30, 아군 전체 액티브 보호막' },
  { id: 'redemption', name: '구원', cost: 2300, category: 'core', description: '체력 +200, 회복/보호막 +15%, 원거리 광역 아군 회복 및 적 고정 피해' },
  { id: 'mikaels_blessing', name: '미카엘의 축복', cost: 2300, category: 'situational', description: '마저 +50, 스킬 가속 +15, 아군 CC기 즉시 정화 및 회복' },
  { id: 'ardent_censer', name: '불타는 향로', cost: 2300, category: 'core', description: '주문력 +50, 회복/보호막 +8%, 아군 강화 시 공속 및 적중 시 추가 마법 피해' },
  { id: 'staff_of_flowing_water', name: '흐르는 물의 지팡이', cost: 2300, category: 'core', description: '주문력 +40, 회복/보호막 +8%, 아군 강화 시 주문력 및 스킬 가속 부여' },
  { id: 'knights_vow', name: '기사의 맹세', cost: 2200, category: 'situational', description: '체력 +300, 방어력 +40, 아군 딜러 지정하여 대신 피해 흡수' }
];
