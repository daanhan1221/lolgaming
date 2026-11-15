import { ItemInfo } from '../types/lol';

/**
 * 나무위키 리그 오브 레전드 아이템(전설/시작/장화) 전체 최신 목록
 * https://namu.wiki/w/%EB%A6%AC%EA%B7%B8%20%EC%98%A4%EB%B8%8C%20%EB%A0%88%EC%A0%84%EB%93%9C/%EC%95%84%EC%9D%B4%ED%85%9C/%EC%A0%84%EC%84%A4
 */
export const LOL_ITEMS: ItemInfo[] = [
  // ==========================================
  // 1. 시작 아이템 & 소모품 (Starting Items)
  // ==========================================
  { id: 'dorans_blade', name: '도란의 검', cost: 450, category: 'starting', description: '공격력 +10, 체력 +80, 생명력 흡수 3.5%' },
  { id: 'dorans_ring', name: '도란의 반지', cost: 400, category: 'starting', description: '주문력 +18, 체력 +90, 마나 회복 및 평타 미니언 추가 피해' },
  { id: 'dorans_shield', name: '도란의 방패', cost: 450, category: 'starting', description: '체력 +110, 기본 체력 재생, 적 챔피언 공격 피격 후 체력 지속 회복' },
  { id: 'cull', name: '수확의 낫', cost: 450, category: 'starting', description: '공격력 +7, 적중 시 체력 3 회복, 미니언 100마리 처치 시 350골드 보너스' },
  { id: 'dark_seal', name: '암흑의 인장', cost: 350, category: 'starting', description: '주문력 +15, 체력 +50, 영광 중첩당 추가 주문력' },
  { id: 'tear_goddess', name: '여신의 눈물', cost: 400, category: 'starting', description: '마나 +240, 스킬 적중 시 최대 마나 누적 증가' },
  { id: 'gustwalker_hatchling', name: '새끼 바람돌이', cost: 450, category: 'starting', description: '정글 펫: 수풀 통과 시 및 대형 몬스터 처치 시 이동 속도 증가' },
  { id: 'mosstomper_seedling', name: '새끼 이끼쿵쿵이', cost: 450, category: 'starting', description: '정글 펫: 보호막 및 강인함/둔화 저항 획득' },
  { id: 'scorchclaw_pup', name: '새끼 화염발톱', cost: 450, category: 'starting', description: '정글 펫: 적 챔피언 공격 시 추가 둔화 및 광역 고정 피해' },
  { id: 'world_atlas', name: '세계 지도집', cost: 400, category: 'starting', description: '서포터 퀘스트 시작 아이템: 체력, 마나/체력 재생, 골드 획득' },
  { id: 'dorans_bow', name: '도란의 활', cost: 400, category: 'starting', description: '공격력 +7, 공격 속도 +15%, 모든 피해 흡혈 +1.5%' },
  { id: 'dorans_helm', name: '도란의 투구', cost: 450, category: 'starting', description: '체력 +150, 방어력 +8, 마법 저항력 +8, 기본 공격 시 미니언 추가 피해 +5' },
  { id: 'runic_compass', name: '룬 나침반', cost: 400, category: 'starting', description: '서포터 퀘스트 2단계 업그레이드' },
  { id: 'bounty_of_worlds', name: '세계의 결실', cost: 400, category: 'starting', description: '서포터 퀘스트 최종 완성 아이템' },
  { id: 'health_potion', name: '체력 물약', cost: 50, category: 'starting', description: '15초에 걸쳐 체력 120 회복' },
  { id: 'refillable_potion', name: '충전형 물약', cost: 150, category: 'starting', description: '우물 방문 시 2회 충전, 체력 100 회복' },
  { id: 'corrupting_potion', name: '부패 물약', cost: 500, category: 'starting', description: '3회 충전, 체력과 마나를 회복하며 공격 시 부패의 손길 피해' },
  { id: 'stealth_ward', name: '와드 토템', cost: 0, category: 'starting', description: '90~120초 동안 시야 제공' },
  { id: 'oracle_lens', name: '예언자의 렌즈', cost: 0, category: 'starting', description: '주변 투명 유닛 및 적 와드 감지 및 무력화' },
  { id: 'control_ward', name: '제어 와드', cost: 75, category: 'starting', description: '영구히 주변 시야를 밝히고 적 와드를 무력화' },

  // ==========================================
  // 2. 신발 (Boots)
  // ==========================================
  { id: 'berserkers_greaves', name: '광전사의 군화', cost: 1100, category: 'boots', description: '공격 속도 +35%, 이동 속도 +45' },
  { id: 'sorcerers_shoes', name: '마법사의 신발', cost: 1100, category: 'boots', description: '마법 관통력 +18, 이동 속도 +45' },
  { id: 'plated_steelcaps', name: '판금 장화', cost: 1100, category: 'boots', description: '방어력 +20, 기본 공격 피해 12% 감소, 이동 속도 +45' },
  { id: 'mercurys_treads', name: '헤르메스의 발걸음', cost: 1100, category: 'boots', description: '마법 저항력 +25, 강인함 +30%, 이동 속도 +45' },
  { id: 'ionian_boots', name: '명석함의 아이오니아 장화', cost: 900, category: 'boots', description: '스킬 가속 +15, 소환사 주문 가속 +12, 이동 속도 +45' },
  { id: 'boots_of_swiftness', name: '신속의 장화', cost: 900, category: 'boots', description: '이동 속도 +60, 둔화 저항 +25%' },
  { id: 'symbiotic_soles', name: '공생 신발', cost: 900, category: 'boots', description: '이동 속도 +35, 귀환 속도 강화, 150,000 유닛 이동 시 동기화 영혼으로 진화' },
  { id: 'boots_of_greed', name: '탐욕의 군화', cost: 1100, category: 'boots', description: '이동 속도 +45, 모든 피해 흡혈 +4%, 챔피언 처치 관여 시 모든 피해 흡혈 중첩 증가' },

  // ==========================================
  // 3. 전사 / 브루저 전설 아이템 (Fighter / Bruiser)
  // ==========================================
  { id: 'trinity_force', name: '삼위일체', cost: 3333, category: 'core', description: '공격력 +45, 공속 +33%, 체력 +300, 스킬 가속 +15, 주문 검 200% 기본 공격력 피해' },
  { id: 'sundered_sky', name: '갈라진 하늘', cost: 3100, category: 'core', description: '공격력 +55, 체력 +400, 스킬 가속 +15, 대상 첫 평타 175% 확정 치명타 및 잃은 체력 회복' },
  { id: 'black_cleaver', name: '칠흑의 양날 도끼', cost: 3000, category: 'core', description: '공격력 +55, 체력 +400, 스킬 가속 +20, 물리 피해 시 적 방어력 최대 30% 파쇄' },
  { id: 'stridebreaker', name: '발걸음 분쇄기', cost: 3300, category: 'core', description: '공격력 +50, 공속 +30%, 체력 +450, 사용 시 주변 적 광역 둔화 및 추가 이동 속도' },
  { id: 'ravenous_hydra', name: '굶주린 히드라', cost: 3300, category: 'core', description: '공격력 +70, 스킬 가속 +20, 생명력 흡수 +12%, 광역 쪼개기 및 액티브 초승달 베기' },
  { id: 'titanic_hydra', name: '거대한 히드라', cost: 3300, category: 'core', description: '공격력 +50, 체력 +550, 최대 체력 비례 추가 피해 및 액티브 평타 리셋 광역 베기' },
  { id: 'spear_of_shojin', name: '쇼진의 창', cost: 3100, category: 'core', description: '공격력 +55, 체력 +300, 스킬 가속 +20, 일반 스킬 피해량 최대 12% 중첩 증폭' },
  { id: 'experimental_hexplate', name: '실험적 마공학판', cost: 3000, category: 'core', description: '공격력 +55, 공격 속도 +25%, 체력 +300, 궁극기 가속 +30 및 궁 시전 시 8초간 폭발적 공속/이속' },
  { id: 'steraks_gage', name: '스테락의 도전', cost: 3200, category: 'core', description: '체력 +400, 기본 공격력의 50% 추가 공격력, 치명적 피해 피격 시 거대 보호막 및 8초 강인함' },
  { id: 'deaths_dance', name: '죽음의 무도', cost: 3200, category: 'situational', description: '공격력 +60, 방어력 +40, 스킬 가속 +15, 입는 피해 30%를 3초간 분할 출혈로 받고 처치 관여 시 출혈 해제 및 체력 회복' },
  { id: 'maw_of_malmortius', name: '맬모셔스의 아귀', cost: 3100, category: 'situational', description: '공격력 +70, 마법 저항력 +50, 스킬 가속 +15, 마법 폭딜 피격 시 거대 마법 쉴드 및 모든 피해 흡혈' },
  { id: 'chempunk_chainsword', name: '화공 펑크 사슬검', cost: 2800, category: 'situational', description: '공격력 +55, 체력 +250, 스킬 가속 +15, 물리 피해 시 40% 치유 감소(치감)' },
  { id: 'hullbreaker', name: '선체파괴자', cost: 3000, category: 'core', description: '공격력 +65, 체력 +350, 이동 속도 +5%, 5번째 기본 공격마다 추가 물리 피해 및 대포 미니언/공성 미니언 강화' },
  { id: 'overlords_bloodmail', name: '지배자의 피갑옷', cost: 3300, category: 'core', description: '공격력 +40, 체력 +500, 추가 체력의 2% 공격력 전환 및 잃은 체력에 비례해 추가 공격력 최대 10% 증가' },

  // ==========================================
  // 4. 암살자 / 물리 관통력 아이템 (Assassin / Lethality)
  // ==========================================
  { id: 'hubris', name: '오만', cost: 3000, category: 'core', description: '공격력 +60, 물리 관통력 +18, 스킬 가속 +15, 챔피언 처치 시 조각상을 세우고 60초간 대량의 추가 공격력 획득' },
  { id: 'profane_hydra', name: '불경한 히드라', cost: 3300, category: 'core', description: '공격력 +60, 물리 관통력 +18, 스킬 가속 +20, 광역 쪼개기 및 체력 50% 이하 대상 처형급 액티브 베기' },
  { id: 'voltaic_cyclosword', name: '벼락폭풍검', cost: 2900, category: 'core', description: '공격력 +55, 물리 관통력 +18, 스킬 가속 +15, 충전 완료 공격 시 100 추가 물리 피해 및 적 99% 둔화' },
  { id: 'opportunity', name: '기회', cost: 2700, category: 'core', description: '공격력 +55, 물리 관통력 +18, 이동 속도 +5%, 비전투 추가 관통력 및 처치 관여 시 폭발적인 이동 속도 증가' },
  { id: 'youmuus_ghostblade', name: '요우무의 유령검', cost: 2700, category: 'core', description: '공격력 +60, 물리 관통력 +18, 비전투 이동 속도 +40, 사용 시 이동 속도 +25% 및 유체화' },
  { id: 'eclipse', name: '월식', cost: 2800, category: 'core', description: '공격력 +70, 스킬 가속 +15, 1.5초 내 동일 대상 2회 공격 시 최대 체력의 6% 추가 피해 및 보호막 획득' },
  { id: 'edge_of_night', name: '밤의 끝자락', cost: 2800, category: 'situational', description: '공격력 +50, 물리 관통력 +15, 체력 +250, 적 스킬 1회를 막아주는 주문 방어막 영구 재충전' },
  { id: 'serpents_fang', name: '독사의 송곳니', cost: 2500, category: 'situational', description: '공격력 +55, 물리 관통력 +15, 피해를 입히면 적이 획득하는 보호막을 50% 파괴 및 감소' },
  { id: 'seryldas_grudge', name: '세릴다의 원한', cost: 3200, category: 'core', description: '공격력 +45, 물리 관통력 +15, 스킬 가속 +15, 물리 관통력에 비례한 방어구 관통력 및 체력 50% 이하 둔화' },
  { id: 'axiom_arc', name: '원칙의 원형낫', cost: 3000, category: 'situational', description: '공격력 +55, 물리 관통력 +18, 스킬 가속 +25, 챔피언 처치 관여 시 궁극기 남은 재사용 대기시간 7% + 0.15% 환급' },
  { id: 'umbral_glaive', name: '그림자 검', cost: 2600, category: 'situational', description: '공격력 +50, 물리 관통력 +15, 스킬 가속 +15, 적 와드 감지 시 즉시 드러내며 1방에 파괴' },

  // ==========================================
  // 5. 원거리 딜러 / 치명타 / 온힛 아이템 (Marksman / On-Hit)
  // ==========================================
  { id: 'infinity_edge', name: '무한의 대검', cost: 3400, category: 'core', description: '공격력 +80, 치명타 확률 +25%, 치명타 피해량 +40%' },
  { id: 'collector', name: '징수의 총', cost: 3200, category: 'core', description: '공격력 +60, 치명타 확률 +25%, 물리 관통력 +12, 적 체력 5% 이하 시 즉시 처형 및 25골드 획득' },
  { id: 'lord_dominiks_regards', name: '도미닉 경의 인사', cost: 3000, category: 'core', description: '공격력 +45, 방어구 관통력 +40%, 치명타 확률 +25%' },
  { id: 'mortal_reminder', name: '필멸자의 운명', cost: 3000, category: 'situational', description: '공격력 +40, 방어구 관통력 +35%, 치명타 확률 +25%, 공격 시 40% 치유 감소(치감)' },
  { id: 'kraken_slayer', name: '크라켄 학살자', cost: 3100, category: 'core', description: '공격력 +50, 공격 속도 +40%, 이동 속도 +7%, 3번째 공격마다 추가 물리 피해 및 대상 체력 낮을수록 증폭' },
  { id: 'blade_of_the_ruined_king', name: '몰락한 왕의 검', cost: 3200, category: 'core', description: '공격력 +50, 공속 +25%, 생명력 흡수 +10%, 현재 체력의 10%(원거리 6%) 비례 물리 피해 및 3타 둔화' },
  { id: 'bloodthirster', name: '피바라기', cost: 3400, category: 'core', description: '공격력 +80, 생명력 흡수 +18%, 체력 70% 초과 시 초과 치유량으로 최대 400 보호막 생성' },
  { id: 'phantom_dancer', name: '유령 무희', cost: 2600, category: 'core', description: '공격 속도 +60%, 치명타 확률 +25%, 이동 속도 +12%, 유체화 효과' },
  { id: 'rapid_firecannon', name: '고속 연사포', cost: 2600, category: 'core', description: '공격력 +35, 공격 속도 +35%, 치명타 확률 +25%, 이동 속도 +7%, 충전 시 사거리 +35% 증가' },
  { id: 'statikk_shiv', name: '스태틱의 단검', cost: 2900, category: 'core', description: '공격력 +50, 공격 속도 +40%, 이동 속도 +7%, 충전 및 처치 시 연쇄 번개 피해 방출' },
  { id: 'runaans_hurricane', name: '루난의 허리케인', cost: 2600, category: 'core', description: '공격 속도 +40%, 치명타 확률 +25%, 이동 속도 +7%, 기본 공격 시 주변 2명의 적에게 유도 탄환 발사' },
  { id: 'terminus', name: '경계', cost: 3000, category: 'core', description: '공격력 +35, 공격 속도 +35%, 빛 평타 시 방어/마저 증가, 어둠 평타 시 적 방어구/마법 관통력 최대 30% 관통' },
  { id: 'guinsoos_rageblade', name: '구인수의 격노검', cost: 3000, category: 'core', description: '공격력 +35, 주문력 +35, 공속 +25%, 적중 시 추가 마법 피해 및 3번째 평타마다 온힛 효과 2회 발동' },
  { id: 'immortal_shieldbow', name: '불멸의 철갑궁', cost: 3000, category: 'situational', description: '공격력 +55, 치명타 확률 +25%, 체력이 30% 이하로 떨어지면 320~720의 거대 생명선 보호막 발동' },
  { id: 'essence_reaver', name: '정수 약탈자', cost: 3150, category: 'core', description: '공격력 +65, 치명타 확률 +25%, 스킬 가속 +15, 기본 공격 시 잃은 마나 회복' },
  { id: 'mercurial_scimitar', name: '헤르메스의 시미터', cost: 3300, category: 'situational', description: '공격력 +40, 마법 저항력 +50, 치명타 확률 +25%, 사용 시 모든 군중 제어(CC) 효과 즉시 해제 및 이동 속도' },
  { id: 'guardian_angel', name: '수호 천사', cost: 3200, category: 'situational', description: '공격력 +55, 방어력 +45, 치명적인 피해를 입었을 때 4초간 경직 후 기본 체력 50% 및 마나 30%로 부활' },

  // ==========================================
  // 6. 마법사 / AP 전설 아이템 (Mage / AP)
  // ==========================================
  { id: 'ludens_echo', name: '루덴의 메아리', cost: 2750, category: 'core', description: '주문력 +100, 마나 +600, 스킬 가속 +10, 스킬 적중 시 메아리 6개 발사하여 추가 마법 피해' },
  { id: 'shadowflame', name: '그림자불꽃', cost: 3200, category: 'core', description: '주문력 +120, 마법 관통력 +12, 적 체력이 35% 이하일 때 마법 피해 및 지속 피해가 120% 마법 치명타로 적용' },
  { id: 'stormsurge', name: '폭풍 쇄도', cost: 2800, category: 'core', description: '주문력 +90, 마법 관통력 +15, 이동 속도 +6%, 2.5초 내 챔피언 최대 체력 25% 피해 시 질풍 낙뢰' },
  { id: 'rabadons_deathcap', name: '라바돈의 죽음모자', cost: 3500, category: 'core', description: '주문력 +140, 총 주문력을 35% 영구 증폭' },
  { id: 'void_staff', name: '공허의 지팡이', cost: 3000, category: 'core', description: '주문력 +80, 마법 관통력 +40%' },
  { id: 'cryptbloom', name: '무덤꽃', cost: 2850, category: 'core', description: '주문력 +70, 마법 관통력 +30%, 스킬 가속 +15, 챔피언 처치 관여 시 치유 파동 방출하여 아군 체력 회복' },
  { id: 'zhonyas_hourglass', name: '존야의 모래시계', cost: 3250, category: 'core', description: '주문력 +120, 방어력 +50, 2.5초 동안 지정 불가 및 무적 상태(경직) 활성화' },
  { id: 'banshees_veil', name: '밴시의 장막', cost: 3100, category: 'core', description: '주문력 +120, 마법 저항력 +50, 적 스킬 1회를 막아주는 주문 방어막 제공' },
  { id: 'liandrys_torment', name: '리안드리의 고통', cost: 3000, category: 'core', description: '주문력 +90, 체력 +300, 적에게 스킬 피해 시 3초간 최대 체력 비례 마법 화상 및 교전 지속 피해 증폭' },
  { id: 'blackfire_torch', name: '어둠불꽃 횃불', cost: 2800, category: 'core', description: '주문력 +80, 마나 +600, 스킬 가속 +20, 스킬 피해 시 적을 불태우고 불탄 적 수마다 주문력 4% 증가' },
  { id: 'malignance', name: '악의', cost: 2700, category: 'core', description: '주문력 +80, 마나 +600, 궁극기 가속 +20, 궁극기로 적 챔피언 적중 시 지면에 저주의 안개를 깔아 마저 파쇄 및 피해' },
  { id: 'lich_bane', name: '리치베인', cost: 3100, category: 'core', description: '주문력 +100, 스킬 가속 +15, 이동 속도 +8%, 스킬 시전 후 다음 기본 공격이 대량의 추가 마법 피해' },
  { id: 'nashors_tooth', name: '내셔의 이빨', cost: 3000, category: 'core', description: '주문력 +90, 공격 속도 +50%, 스킬 가속 +15, 기본 공격 시 주문력 계수의 추가 마법 피해' },
  { id: 'rod_of_ages', name: '영겁의 지팡이', cost: 2600, category: 'core', description: '주문력 +50, 체력 +400, 마나 +400, 매분 스탯 성장(최대 10중첩) 및 10중첩 완료 시 1레벨 상승' },
  { id: 'archangels_staff', name: '대천사의 지팡이', cost: 2900, category: 'core', description: '주문력 +80, 마나 +1000, 스킬 가속 +20, 마나 비례 주문력 획득, 마나 충전 완료 시 대천사의 포옹으로 진화하여 거대 쉴드' },
  { id: 'seraphs_embrace', name: '대천사의 포옹', cost: 2900, category: 'core', description: '대천사의 지팡이 진화체: 주문력 +80, 마나 +1000, 스킬 가속 +20, 체력 30% 이하 시 대형 마나 보호막' },
  { id: 'hextech_rocketbelt', name: '마법공학 로켓 벨트', cost: 2600, category: 'core', description: '주문력 +60, 체력 +400, 스킬 가속 +15, 사용 시 전방으로 돌진하며 부채꼴 마법 탄환 발사 및 이동 속도 증가' },
  { id: 'riftmaker', name: '균열 생성기', cost: 3100, category: 'core', description: '주문력 +80, 체력 +350, 스킬 가속 +15, 모든 피해 흡혈 및 교전 시 추가 피해 증폭(추가 체력 비례 주문력)' },
  { id: 'cosmic_drive', name: '우주의 추진력', cost: 3000, category: 'core', description: '주문력 +80, 체력 +250, 스킬 가속 +25, 이동 속도 +5%, 스킬 적중 시 추가 이동 속도 폭발' },
  { id: 'horizon_focus', name: '지평선의 초점', cost: 2750, category: 'situational', description: '주문력 +90, 스킬 가속 +20, 장거리 스킬 적중 시 적을 6초간 드러내고 주는 피해 10% 증폭' },
  { id: 'morellonomicon', name: '모렐로노미콘', cost: 2200, category: 'situational', description: '주문력 +90, 마법 관통력 +15, 스킬 가속 +15, 마법 피해 시 40% 치유 감소(치감)' },
  { id: 'mejais_soulstealer', name: '메자이의 영혼약탈자', cost: 1500, category: 'situational', description: '주문력 +20, 체력 +100, 챔피언 처치 관여 시 영광 중첩 누적(최대 25스택 주문력 145 및 이동 속도)' },

  // ==========================================
  // 7. 탱커 / 방어구 전설 아이템 (Tank / Armor / MR)
  // ==========================================
  { id: 'heartsteel', name: '강철심장', cost: 3000, category: 'core', description: '체력 +900, 체력 재생 +200%, 대상에 3초간 집중 후 강력한 일격 및 영구 최대 체력 누적' },
  { id: 'sunfire_aegis', name: '태양불꽃 방패', cost: 2700, category: 'core', description: '체력 +500, 방어력 +50, 주변 적에게 초당 마법 불태우기 지속 피해' },
  { id: 'hollow_radiance', name: '공허한 광휘', cost: 2800, category: 'core', description: '체력 +450, 마법 저항력 +50, 체력 재생 +100%, 주변 적 마법 불태우기 및 처치 시 연쇄 폭발' },
  { id: 'jaksho', name: '해신 작쇼', cost: 3200, category: 'core', description: '체력 +300, 방어력 +50, 마법 저항력 +50, 챔피언과 교전 5초 유지 시 방어력과 마법 저항력 30% 증폭' },
  { id: 'thornmail', name: '가시 갑옷', cost: 2700, category: 'situational', description: '체력 +350, 방어력 +70, 기본 공격 피격 시 반사 마법 피해 및 공격자에게 40% 치유 감소 적용' },
  { id: 'randuins_omen', name: '란두인의 예언', cost: 2700, category: 'situational', description: '체력 +400, 방어력 +75, 받는 치명타 피해 30% 감소, 액티브 시전 시 주변 적 이동 속도 70% 둔화' },
  { id: 'frozen_heart', name: '얼어붙은 심장', cost: 2500, category: 'situational', description: '방어력 +65, 마나 +400, 스킬 가속 +20, 견고 기본 공격 피해 감소 및 주변 적 공격 속도 20% 감소' },
  { id: 'kaenic_rookern', name: '케이닉 루컨', cost: 2900, category: 'situational', description: '체력 +400, 마법 저항력 +80, 체력 재생 +150%, 비전투 12초 후 최대 체력의 18%에 달하는 마법 피해 보호막 상시 재생' },
  { id: 'force_of_nature', name: '대자연의 힘', cost: 2800, category: 'situational', description: '체력 +400, 마법 저항력 +55, 이동 속도 +5%, 마법 피해 피격 시 중첩 누적되어 최대 70 마저 및 이동 속도' },
  { id: 'unending_despair', name: '끝없는 절망', cost: 2800, category: 'core', description: '체력 +400, 방어력 +55, 스킬 가속 +10, 챔피언과 교전 중 7초마다 주변 적에게 마법 피해를 입히고 가한 피해의 250% 체력 회복' },
  { id: 'abyssal_mask', name: '심연의 가면', cost: 2650, category: 'situational', description: '체력 +300, 마법 저항력 +50, 스킬 가속 +10, 주변 적 마법 저항력 파쇄 및 파쇄한 마저를 자신에게 추가 흡수' },
  { id: 'warmogs_armor', name: '워모그의 갑옷', cost: 3100, category: 'situational', description: '체력 +1000, 이동 속도 +5%, 최대 체력 1300 초과 시 비전투 6초 후 초당 최대 체력의 5% 급속 회복' },
  { id: 'trailblazer', name: '개척자', cost: 2500, category: 'situational', description: '체력 +200, 방어력 +40, 이동 속도 +5%, 이동 시 궤적 충전되어 다음 평타로 둔화 및 아군 이동 속도 버프' },
  { id: 'winters_approach', name: '혹한의 손길', cost: 2400, category: 'core', description: '체력 +400, 마나 +500, 스킬 가속 +15, 마나 충전 완료 시 종말의 겨울로 진화하여 CC기 적중 시 거대 보호막' },
  { id: 'fimbulwinter', name: '종말의 겨울', cost: 2400, category: 'core', description: '혹한의 손길 진화체: 체력 +400, 마나 +860, 스킬 가속 +15, 적을 둔화 또는 이동 불가로 만들면 거대 쉴드 획득' },

  // ==========================================
  // 8. 서포터 / 유틸리티 전설 아이템 (Support / Utility)
  // ==========================================
  { id: 'locket_solari', name: '강철의 솔라리 펜던트', cost: 2200, category: 'core', description: '체력 +200, 방어력 +30, 마법 저항력 +30, 스킬 가속 +10, 사용 시 주변 모든 아군에게 200~360의 보호막 부여' },
  { id: 'redemption', name: '구원', cost: 2300, category: 'core', description: '체력 +200, 기본 마나 재생 +100%, 회복/보호막 +15%, 스킬 가속 +15, 원거리 지정 구역 아군 광역 체력 회복 및 적 10% 고정 피해' },
  { id: 'mikaels_blessing', name: '미카엘의 축복', cost: 2300, category: 'situational', description: '마법 저항력 +50, 기본 마나 재생 +100%, 회복/보호막 +12%, 스킬 가속 +15, 아군 1명의 모든 군중 제어(CC) 즉시 정화 및 회복' },
  { id: 'ardent_censer', name: '불타는 향로', cost: 2300, category: 'core', description: '주문력 +50, 기본 마나 재생 +125%, 회복/보호막 +8%, 이동 속도 +8%, 아군 치유/보호막 시 아군과 자신의 공격 속도 및 적중 시 추가 마법 피해' },
  { id: 'staff_of_flowing_water', name: '흐르는 물의 지팡이', cost: 2300, category: 'core', description: '주문력 +40, 기본 마나 재생 +125%, 회복/보호막 +8%, 이동 속도 +8%, 아군 치유/보호막 시 아군과 자신에게 주문력 30 및 스킬 가속 +20 부여' },
  { id: 'moonstone_renewer', name: '월석 재생기', cost: 2200, category: 'core', description: '체력 +250, 주문력 +30, 기본 마나 재생 +125%, 스킬 가속 +20, 아군 치유/보호막 시 주변 가장 가까운 아군에게 연쇄 전달' },
  { id: 'echoes_of_helia', name: '헬리아의 메아리', cost: 2200, category: 'core', description: '주문력 +40, 체력 +200, 기본 마나 재생 +125%, 스킬 가속 +20, 적 공격 시 영혼 파편을 누적하여 아군 치유 시 파편 소모로 치유 및 적 타격' },
  { id: 'knights_vow', name: '기사의 맹세', cost: 2200, category: 'situational', description: '체력 +300, 방어력 +40, 스킬 가속 +10, 아군 주요 딜러를 보호 대상으로 지정하여 아군이 받는 피해의 12%를 대신 흡수' },
  { id: 'zekes_convergence', name: '지크의 융합', cost: 2200, category: 'core', description: '체력 +300, 방어력 +30, 마법 저항력 +30, 스킬 가속 +10, 궁극기 사용 시 5초 동안 주변에 폭풍을 일으켜 적을 둔화시키고 마법 피해' },
  { id: 'shurelyas_battlesong', name: '슈렐리아의 군가', cost: 2200, category: 'core', description: '주문력 +55, 기본 마나 재생 +125%, 스킬 가속 +15, 이동 속도 +5%, 사용 시 주변 모든 아군의 이동 속도 30% 즉시 가속' },
  { id: 'vigilant_wardstone', name: '경계의 와드석', cost: 2300, category: 'situational', description: '체력 +250, 방어력 +25, 마법 저항력 +25, 스킬 가속 +20, 제어 와드 3개 보유 가능 및 맵상 와드 설치 한도 +1 증가' },
  { id: 'bloodsong', name: '피의 노래', cost: 400, category: 'core', description: '세계 지도의 정석 최종 진화체: 주문 검 추가 물리 피해 및 적을 4초간 약점 노출시켜 받는 피해 8% 증폭' },
  { id: 'solstice_sleigh', name: '태양의 썰매', cost: 400, category: 'core', description: '세계 지도의 정석 최종 진화체: 적을 둔화/이동 불가로 만들면 자신과 가장 체력이 낮은 아군에게 체력 회복 및 이동 속도 30%' },
  { id: 'zazaks_realmspike', name: '자자크의 세계가시', cost: 400, category: 'core', description: '세계 지도의 정석 최종 진화체: 스킬 피해 시 적 위치에 공허 폭발을 일으켜 최대 체력 비례 마법 피해' },
  { id: 'celestial_opposition', name: '천상의 이의', cost: 400, category: 'core', description: '세계 지도의 정석 최종 진화체: 적 챔피언 공격 피격 시 2.5초간 받는 피해 35% 감소 및 적 둔화' },
  { id: 'dream_maker', name: '꿈 생성기', cost: 400, category: 'core', description: '세계 지도의 정석 최종 진화체: 아군 치유/보호막 시 꿈 거품을 부여하여 다음 공격 피해 감소 및 추가 마법 피해' },

  // ==========================================
  // 9. 추가 필수 전설 아이템 (나무위키 전설 아이템 보강)
  // ==========================================
  { id: 'rylais_crystal_scepter', name: '라일라이의 수정홀', cost: 2600, category: 'core', description: '주문력 +75, 체력 +400, 스킬 피해를 입히면 적을 1초 동안 30% 둔화' },
  { id: 'manamune', name: '마나무네', cost: 2900, category: 'core', description: '공격력 +35, 마나 +500, 스킬 가속 +15, 최대 마나의 2.5% 추가 공격력, 마나 충전 완료 시 무라마나로 진화' },
  { id: 'muramana', name: '무라마나', cost: 2900, category: 'core', description: '마나무네 진화체: 공격력 +35, 마나 +860, 스킬 가속 +15, 충격 공격 시 대상에게 최대 마나 비례 추가 물리 피해' },
  { id: 'dead_mans_plate', name: '망자의 갑옷', cost: 2900, category: 'situational', description: '체력 +300, 방어력 +45, 이동 속도 +5%, 침몰자 이동 시 중첩을 쌓아 최대 40 이속 및 평타 둔화/추가 피해' },
  { id: 'navori_flickerblade', name: '나보리 명멸검', cost: 2600, category: 'core', description: '공격 속도 +40%, 이동 속도 +7%, 기본 공격 적중 시 비궁극기 남은 재사용 대기시간 15% 감소' },
  { id: 'iceborn_gauntlet', name: '얼어붙은 건틀릿', cost: 2600, category: 'core', description: '체력 +300, 방어력 +50, 스킬 가속 +15, 주문 검 평타 시 주변 서리 역장을 생성하여 광역 둔화 및 추가 피해' },
  { id: 'spirit_visage', name: '정령의 형상', cost: 2700, category: 'situational', description: '체력 +400, 마법 저항력 +50, 스킬 가속 +10, 기본 체력 재생 +100%, 자신이 받는 모든 치유 및 보호막 효과 25% 증폭' },
  { id: 'wits_end', name: '마법사의 최후', cost: 2800, category: 'situational', description: '공격 속도 +55%, 마법 저항력 +50, 강인함 +20%, 기본 공격 적중 시 40~80의 마법 피해' },
  { id: 'imperial_mandate', name: '제국의 명령', cost: 2400, category: 'core', description: '주문력 +60, 스킬 가속 +20, 기본 마나 재생 +100%, 적을 둔화/이동 불가로 만들면 아군 추가 폭발 피해 및 이속 증가' },
  { id: 'dawncore', name: '새벽심장', cost: 2700, category: 'situational', description: '주문력 +40, 회복/보호막 +16%, 스킬 가속 +20, 기본 마나 재생 100%당 회복 및 보호막 2%와 주문력 5 추가 획득' },

  // ==========================================
  // 10. 16.22 패치 최신 전설 및 핵심 하위 아이템
  // ==========================================
  { id: 'endless_hunger', name: '끝없는 갈망', cost: 3100, category: 'core', description: '공격력 +65, 모든 피해 흡혈 +5%, 강인함 +20%, 추가 공격력 비례 스킬 가속 및 처치 관여 시 흡혈 강화' },
  { id: 'bastion_breaker', name: '요새파괴자', cost: 3000, category: 'core', description: '공격력 +55, 물리 관통력 +18, 스킬 가속 +15, 스킬 피해 시 추가 고정 피해 및 포탑/에픽 몬스터 공성 강화' },
  { id: 'dusk_and_dawn', name: '황혼과 새벽', cost: 3100, category: 'core', description: '체력 +300, 주문력 +60, 스킬 가속 +20, 공격 속도 +20%, 주문 검 추가 마법 피해 및 적중 시 효과 1회 추가 발동' },
  { id: 'bloodletters_curse', name: '핏빛 저주', cost: 2900, category: 'core', description: '주문력 +65, 체력 +400, 스킬 가속 +15, 마법 피해 적중 시 6초간 적 마법 저항력 최대 30% 감소(4중첩)' },
  { id: 'hextech_gunblade', name: '마법공학 총검', cost: 3000, category: 'core', description: '주문력 +80, 공격력 +40, 모든 피해 흡혈 +10%, 사용 시 적 챔피언에게 마법 피해 및 1.5초 동안 25% 둔화' },
  { id: 'actualization_engine', name: '실체화 장비', cost: 2800, category: 'core', description: '주문력 +90, 마나 +300, 스킬 가속 +10, 사용 시 8초간 마나 소모 100% 증가 대신 스킬 피해·보호막·회복 및 쿨타임 가속 증폭' },
  { id: 'hexoptics_c44', name: '마법광학 장치 C44', cost: 2800, category: 'core', description: '공격력 +55, 치명타 확률 +25%, 거리에 비례해 최대 10% 피해 증가 및 처치 관여 시 8초간 사거리 +100 증가' },
  { id: 'stormrazor', name: '폭풍갈퀴', cost: 3200, category: 'core', description: '공격력 +50, 공격 속도 +25%, 치명타 확률 +25%, 충전 상태 공격 시 추가 마법 피해 및 1.5초간 이동 속도 45% 증가' },
  { id: 'yuntal_wildarrows', name: '윤 탈 야생화살', cost: 3000, category: 'core', description: '공격력 +50, 공격 속도 +45%, 공격 시 치명타 확률 최대 25% 영구 누적 및 적 공격 시 6초간 공격 속도 30% 증가' },
  { id: 'fiendhunter_bolts', name: '악마사냥꾼의 화살', cost: 2650, category: 'core', description: '공격 속도 +45%, 치명타 확률 +25%, 이동 속도 +4%, 궁극기 가속 +30 및 궁 사용 후 3회 치명타/고정피해 폭격' },
  { id: 'bandlepipe', name: '밴들파이프', cost: 2300, category: 'core', description: '체력 +200, 방어력 +20, 마법 저항력 +20, 스킬 가속 +15, 적 둔화/속박 시 자신과 주변 아군 이동/공격 속도 버프' },
  { id: 'protoplasmic_harness', name: '원형질 안전벨트', cost: 2600, category: 'situational', description: '체력 +600, 스킬 가속 +20, 체력 30% 미만 피격 시 5초간 최대 체력·회복·강인함·이동 속도 증가' },
  { id: 'diadem_of_songs', name: '악곡의 왕관', cost: 2250, category: 'core', description: '체력 +200, 마나 +1000, 기본 마나 재생 +100%, 회복/보호막 +8%, 교전 중 주변 체력 낮은 아군 지속 치유' },
  { id: 'whispering_circlet', name: '속삭이는 머리띠', cost: 2250, category: 'core', description: '체력 +200, 마나 +300, 기본 마나 재생 +75%, 회복/보호막 +8%, 마나 360 충전 시 악곡의 왕관으로 진화' },
  { id: 'serrated_dirk', name: '톱날 단검', cost: 1000, category: 'core', description: '공격력 +20, 물리 관통력 +10 (초반 핵심 하위 아이템)' },
  { id: 'tiamat', name: '티아맷', cost: 1200, category: 'core', description: '공격력 +25, 기본 공격 및 액티브 주변 광역 물리 피해 (히드라 상위 코어 하위 아이템)' },
  { id: 'bramble_vest', name: '덤불 조끼', cost: 800, category: 'situational', description: '방어력 +30, 피격 시 마법 반사 피해 및 40% 치유 감소(상처)' },
  { id: 'executioners_calling', name: '처형인의 대검', cost: 800, category: 'situational', description: '공격력 +15, 물리 피해 시 3초 동안 40% 치유 감소(상처)' },
  { id: 'oblivion_orb', name: '망각의 구', cost: 800, category: 'situational', description: '주문력 +25, 마법 피해 시 3초 동안 40% 치유 감소(상처)' },
  { id: 'quicksilver_sash', name: '수은 장식띠', cost: 1300, category: 'situational', description: '마법 저항력 +30, 사용 시 공중에 뜸을 제외한 모든 군중 제어 효과(CC) 즉시 해제' },
  { id: 'seekers_armguard', name: '추적자의 팔목 보호대', cost: 1600, category: 'situational', description: '주문력 +40, 방어력 +25, 1회성 2.5초 경직 무적 활성화' },
  { id: 'bf_sword', name: 'B.F. 대검', cost: 1300, category: 'core', description: '공격력 +40 (상위 치명타/공격력 전설 아이템 핵심 재료)' }
];

