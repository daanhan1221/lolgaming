# 리그 오브 레전드 챔피언 플레이북 & 개인 플레이 피드백 스튜디오 (LoL Champion Playbook & Feedback Studio)

리그 오브 레전드의 모든 챔피언(최신 173번째 챔피언 '로크(Locke)' 포함)을 포괄하고, 신규 챔피언 추가, 라인 변경, 시작/코어 아이템 빌드, 인게임과 동일한 인터랙티브 룬 페이지 빌더, 정글 캠프 동선 시각화, 카운터 상대법, 그리고 경기별 나의 플레이 피드백을 기록하여 클라우드에 영구 저장하는 종합 전술 연구소입니다.

## User Review & Critical Decisions

> [!IMPORTANT]
> 사전 질의응답을 통해 확정된 아키텍처 및 핵심 요구사항 요약입니다:
> - **클라우드 데이터 저장 방식**: 복잡한 소셜 로그인 없이도 누구나 즉시 영구 저장 및 실시간 동기화되는 전용 Full-stack 클라우드 백엔드 API (Express + 영구 스토리지) 채택. 언제 접속해도 데이터가 손실되지 않고 불러와집니다.
> - **기본 공략 데이터 제공**: 모든 챔피언(173명 + '로크')에 대해 라인별 기본 추천 빌드와 룬 트리가 사전 탑재되어 즉시 확인 가능하며, 사용자가 원하는 대로 자유롭게 수정/저장할 수 있습니다.
> - **개인 플레이 피드백**: 승/패, KDA, 맞라인 매치업 챔피언, 초반/중반/후반 플레이 실수 및 깨달은 점, 다음 경기 개선 사항을 기록하고 챔피언별 승률과 통계를 즉각 확인할 수 있는 피드백 저널 제공.

---

## 1. Overview & Core Concept

- **What It Does**:
  1. **완벽한 챔피언 카탈로그 & 커스텀 등록**: 173번째 챔피언 '로크(코빈 로크, 잿빛 퇴마사)'를 포함한 전 챔피언 목록 제공, 포지션 필터(탑, 정글, 미드, 원딜, 서포터) 및 검색, 신규 커스텀 챔피언 직접 추가 및 라인 재할당 기능.
  2. **상세 전술 빌드 편집기**:
     - 시작 아이템 (도란 시리즈, 서폿템, 정글펫 등)
     - 핵심 아이템 빌드 (1~3코어 및 상황별 신발/방어구 아이템)
     - 실제 LoL 클라이언트 스타일 룬 빌더 (정밀, 지배, 마법, 결의, 영감 5개 경로, 핵심 룬, 3티어 일반 룬, 보조 룬 2개, 3단계 능력치 파편 완벽 선택)
     - 소환사 주문(스펠) & 스킬 마스터 순서
  3. **정글 캠프 동선 시각화 (정글러 전용)**:
     - 소환사의 협곡 미니맵 기반 정글 캠프 동선(레드 풀캠, 블루 3캠 갱킹, 카정 등) 스텝별 시각 경로 및 타이밍 팁.
  4. **카운터 챔피언 & 맞라인 상대법 노트**:
     - 유리한 매치업 / 불리한 하드 카운터 목록 및 라인전 딜교환 핵심 팁.
  5. **나의 플레이 피드백 & 오답노트 (Match Review Journal)**:
     - 챔피언별 경기 기록: 승리/패배, KDA, 상대 챔피언, 라인전 양상, 초반/중반/후반 복기 메모 및 다음 판 다짐.
  6. **클라우드 백엔드 영구 저장**:
     - Express 서버 기반 RESTful API 엔드포인트 (`/api/champions`, `/api/builds`, `/api/feedbacks`)를 통해 모든 변경 사항이 클라우드 디스크에 즉시 자동 저장되고 언제든지 복원됩니다.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **메인 대시보드 & 챔피언 선택**:
   - 상단에서 탑/정글/미드/원딜/서폿 포지션 탭 및 검색창으로 챔피언을 빠르게 탐색.
   - 우측 상단 '챔피언 직접 추가' 버튼으로 신규 챔피언 등록 가능.
   - 각 챔피언 카드에는 기본 포지션, 역할군(암살자/마법사/전사/탱커 등), 등록된 공략 수, 최근 내 플레이 승률이 한눈에 표시됨.
2. **챔피언 상세 전술 페이지**:
   - 선택한 챔피언의 라인을 드롭다운으로 즉시 변경/추가 가능 (예: 사일러스 미드 -> 정글 / 탑).
   - 좌측: 시작 아이템, 코어 아이템 빌드, 추천 스펠, 스킬 마스터 순서, 카운터 팁.
   - 중앙: 롤 클라이언트 인터페이스를 재현한 대형 룬 세팅 페이지 (직접 클릭하여 메인/보조/파편 선택).
   - 우측/하단 (정글 포지션 시): 정글 캠프 루트 선택 및 단계별 동선 가이드 인터랙티브 맵.
3. **피드백 기록 & 통계 탭**:
   - 해당 챔피언으로 플레이한 뒤 [새 피드백 작성] 클릭.
   - 승패, KDA, 상대 맞라인 챔피언, 초반(1~14분)/중반(15~25분)/후반(25분 이후) 실수 및 잘한 점 기록.
   - 챔피언별 누적 승률, 평균 KDA, 가장 어려웠던 상대 챔피언 통계 요약 제공.
4. **실시간 클라우드 자동 저장**:
   - 편집하거나 피드백을 추가하는 즉시 우측 상단에 "클라우드 저장됨 (Cloud Synced)" 표시와 함께 백엔드에 안전하게 보존.

### Visual Identity & Theme
- **리그 오브 레전드 헥스테크(Hextech) 다크 럭셔리 감성**:
  - 배경: 짙은 흑요석 및 심해 네이비 (`#0B0E14`, `#101726`)
  - 포인트 액센트: 룬 골드 & 헥스테크 시안 (`#C8AA6E`, `#0AC8B9`)
  - 룬 카테고리 고유 컬러: 정밀(금빛), 지배(루비 레드), 마법(사파이어 블루), 결의(에메랄드 그린), 영감(청록 아쿠아)
  - 폰트: 제목 `Outfit` / `Cinzel` 스타일의 위엄 있는 서체, 본문 `Plus Jakarta Sans`, 데이터 및 수치 `JetBrains Mono tabular-nums`.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Full-stack Express Cloud Storage vs Client LocalStorage**
  - *선택*: Express 서버를 통한 클라우드 영구 저장소 구축 (`/api/*` 엔드포인트 + 서버 측 JSON 영구 데이터 저장소).
  - *이유*: 클라이언트 로컬 스토리지에만 저장하면 브라우저 캐시 삭제 시 소중한 피드백이 유실되거나 기기 간 이동 시 불러올 수 없습니다. 사용자가 요구한 "클라우드에 저장되어 언제든지 불러올 수 있게"를 100% 충족합니다.
- **Decision 2: 173번째 신규 챔피언 '로크(Locke)' 완벽 반영**
  - *선택*: 2026 최신 챔피언인 데마시아 출신 AP 미드 암살자 '잿빛 퇴마사 코빈 로크(Locke)'의 프로필, 패시브(은빛 말뚝) 및 스킬셋, 미드/탑 추천 빌드, 지배-감전 룬 페이지를 완벽 기본 데이터로 탑재.
- **Decision 3: 인게임 클라이언트 수준의 정밀 룬 빌더 구현**
  - *선택*: 단순 텍스트 입력창 대신, 사용자가 롤 인게임 클라이언트처럼 5대 룬 경로를 클릭하고, 핵심 룬 3~4개 중 1개 선택, 하위 3개 슬롯에서 각 1개 선택, 보조 룬 경로에서 2개 선택, 능력치 파편 3개를 직접 클릭하여 고르는 완벽한 대화형 인터랙티브 룬 빌더 구축.
- **Decision 4: 정글 캠프 동선 시각화 엔진**
  - *선택*: 정글 포지션 활성화 시 미니맵 캔버스 위에 레드/블루/두꺼비/늑대/칼날부리/골렘/바위게 캠프 번호가 연결된 경로 시각화 및 타임라인 설명 지원.

---

## 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                       Frontend (React)                      │
│                                                             │
│  ┌───────────────────────┐       ┌────────────────────────┐ │
│  │   Champion Catalog    │       │     Tactical Editor    │ │
│  │ (173 + Custom Champs) │       │ (Builds, Runes, Items) │ │
│  └───────────┬───────────┘       └───────────┬────────────┘ │
│              │                               │              │
│  ┌───────────┴───────────┐       ┌───────────┴────────────┐ │
│  │   Interactive Runes   │       │   Jungle Camp Router   │ │
│  │  (Precision, Dom...)  │       │  (Minimap Canvas/SVG)  │ │
│  └───────────┬───────────┘       └───────────┬────────────┘ │
│              │                               │              │
│  ┌───────────┴───────────────────────────────┴────────────┐ │
│  │            Match Feedback & Review Journal             │ │
│  │          (Win/Loss, KDA, Phase Notes, Stats)           │ │
│  └───────────────────────────┬────────────────────────────┘ │
└──────────────────────────────┼──────────────────────────────┘
                               │ REST API (/api/...)
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 Full-Stack Cloud Backend                    │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Express REST Router:                                  │  │
│  │   GET/POST/PUT /api/champions                         │  │
│  │   GET/POST/PUT /api/champions/:id/builds              │  │
│  │   GET/POST/DELETE /api/champions/:id/feedbacks        │  │
│  │   POST /api/reset-defaults (복원 기능)                │  │
│  └───────────────────────────┬───────────────────────────┘  │
│                              │                              │
│  ┌───────────────────────────┴───────────────────────────┐  │
│  │ Persistent Cloud Storage (data/lol_companion_db.json) │  │
│  │ Real-time file sync with atomic disk writes           │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Data Models
- **Champion**: `id`, `name`, `koreanName`, `title`, `primaryRole`, `lanes: ('TOP'|'JUNGLE'|'MID'|'ADC'|'SUPPORT')[]`, `difficulty`, `iconUrl`, `isCustom`
- **ChampionBuild**: `championId`, `lane`, `startingItems: string[]`, `coreItems: string[]`, `situationalItems: string[]`, `spells: [string, string]`, `skillOrder: string[]`, `runes: RunePage`, `jungleRoute?: JunglePath`, `counters: CounterEntry[]`, `customNotes: string`
- **RunePage**: `primaryPath` (Precision/Domination/Sorcery/Resolve/Inspiration), `keystone`, `primarySlots: [string, string, string]`, `secondaryPath`, `secondarySlots: [string, string]`, `shards: [string, string, string]`
- **FeedbackEntry**: `id`, `championId`, `lane`, `date`, `result: 'WIN'|'LOSS'`, `kda: { kills, deaths, assists }`, `opponentChamp`, `earlyGameNote`, `midGameNote`, `lateGameNote`, `keyLearnings`, `tags: string[]`

---

## 5. Implementation Steps
1. **Server Setup**: Express 서버 (`server.ts`) 구성 및 클라우드 영구 저장소 엔드포인트 구현, `package.json`의 dev/start 스크립트 연결.
2. **Champions & Runes Master Data**: 최신 챔피언 '로크'를 포함한 173개 챔피언 정보 및 롤 룬 시스템 전체 데이터베이스 구조화.
3. **Interactive Rune Builder Component**: 롤 인게임 클라이언트와 직관적인 인터랙티브 룬 트리 선택 UI 제작.
4. **Build & Item Editor Component**: 시작 아이템, 코어 빌드, 소환사 주문, 카운터 챔피언 및 상대법 관리 UI 제작.
5. **Jungle Route Simulator Component**: 미니맵 기반 6캠프/3캠프 동선 시각화 맵 제작.
6. **Match Feedback Journal Component**: 챔피언별 승패, KDA, 단계별 반성 일지 및 승률 통계 대시보드 제작.
7. **Custom Champion & Lane Management**: 챔피언 추가 모달 및 포지션 자유 변경 기능 완성.
8. **Cloud Persistence Integration**: 자동 저장(Auto-save debounced) 및 클라우드 동기화 상태 인디케이터 연결.
9. **Build & Verification**: TypeScript 컴파일 및 린트 검증.
