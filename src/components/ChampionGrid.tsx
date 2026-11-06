import React, { useState, useMemo } from 'react';
import { Champion, ChampionRole, Lane, MatchFeedback } from '../types/lol';
import { Search, SlidersHorizontal, Trash2, ArrowUpRight, Sparkles, Filter, Trophy } from 'lucide-react';

interface ChampionGridProps {
  champions: Champion[];
  feedbacks: MatchFeedback[];
  selectedLaneFilter: Lane | 'ALL';
  onSelectChampion: (champion: Champion, lane?: Lane) => void;
  onOpenEditLanes: (champion: Champion) => void;
  onDeleteChampion: (championId: string) => void;
}

export const ChampionGrid: React.FC<ChampionGridProps> = ({
  champions,
  feedbacks,
  selectedLaneFilter,
  onSelectChampion,
  onOpenEditLanes,
  onDeleteChampion
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<ChampionRole | 'ALL'>('ALL');
  const [onlyCustom, setOnlyCustom] = useState(false);

  const ROLES: (ChampionRole | 'ALL')[] = ['ALL', '전사', '마법사', '암살자', '원거리 딜러', '탱커', '서포터'];

  // Map feedbacks by championId to show win rate and match count
  const statsByChamp = useMemo(() => {
    const map: Record<string, { total: number; wins: number; winRate: number }> = {};
    for (const f of feedbacks) {
      if (!map[f.championId]) {
        map[f.championId] = { total: 0, wins: 0, winRate: 0 };
      }
      map[f.championId].total += 1;
      if (f.result === 'WIN') map[f.championId].wins += 1;
    }
    for (const key of Object.keys(map)) {
      map[key].winRate = Math.round((map[key].wins / map[key].total) * 100);
    }
    return map;
  }, [feedbacks]);

  // Filter champions
  const filteredChampions = useMemo(() => {
    return champions.filter((champ) => {
      // Lane filter
      if (selectedLaneFilter !== 'ALL' && !champ.lanes.includes(selectedLaneFilter)) {
        return false;
      }
      // Role filter
      if (selectedRole !== 'ALL' && champ.role !== selectedRole) {
        return false;
      }
      // Custom filter
      if (onlyCustom && !champ.isCustom) {
        return false;
      }
      // Search
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        const matchesKo = champ.koreanName.toLowerCase().includes(query);
        const matchesEn = champ.name.toLowerCase().includes(query);
        const matchesTitle = champ.title.toLowerCase().includes(query);
        return matchesKo || matchesEn || matchesTitle;
      }
      return true;
    });
  }, [champions, selectedLaneFilter, selectedRole, onlyCustom, searchQuery]);

  const lockeChampion = champions.find(c => c.id === 'locke');

  return (
    <div className="space-y-6">
      {/* 1. HERO SPOTLIGHT FOR LATEST CHAMPION '로크' (LOCKE) */}
      {lockeChampion && (
        <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-gradient-to-r from-[#0d1322] via-[#11192e] to-[#0d1322] p-6 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="relative w-20 h-20 md:w-24 md:h-24">
                <div className="absolute inset-0 rounded-2xl bg-slate-900 flex items-center justify-center text-slate-400 font-bold text-xl">
                  {lockeChampion.koreanName}
                </div>
                <img
                  src={lockeChampion.avatarUrl}
                  alt={lockeChampion.koreanName}
                  referrerPolicy="no-referrer"
                  className="relative z-10 w-full h-full rounded-2xl object-cover border-2 border-amber-400 shadow-xl shadow-amber-500/20"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="absolute -bottom-2 -right-2 z-20 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wider">
                  NEW #173
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/40">
                    2026 최신 챔피언
                  </span>
                  <span className="text-xs text-slate-400">데마시아의 잿빛 퇴마사</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-1">
                  {lockeChampion.koreanName}{' '}
                  <span className="text-lg text-slate-400 font-normal">({lockeChampion.name})</span>
                </h2>
                <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                  은빛 대못과 유물 봉인을 활용한 폭발적인 기동력의 AP 미드 암살자. 감전 룬 및 폭풍쇄도 코어 빌드가 완벽 세팅되어 있습니다.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={() => onSelectChampion(lockeChampion, 'MID')}
                className="flex-1 md:flex-initial px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>로크 공략 및 피드백 열기</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. FILTER & SEARCH TOOLBAR */}
      <div className="bg-[#0e1320] border border-slate-800 rounded-xl p-4 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="챔피언 한글/영문 검색 (예: 로크, 아리, 리 신)..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-xs text-slate-500 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

        {/* Role Filters */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {ROLES.map((role) => {
            const isActive = selectedRole === role;
            return (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {role === 'ALL' ? '전체 역할' : role}
              </button>
            );
          })}

          {/* Custom Champions Only Toggle */}
          <button
            onClick={() => setOnlyCustom(!onlyCustom)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
              onlyCustom
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-sm font-bold'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            커스텀 챔피언만
          </button>
        </div>
      </div>

      {/* Count label */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          검색 결과: <strong className="text-white font-mono">{filteredChampions.length}</strong>개 챔피언
          {selectedLaneFilter !== 'ALL' && ` (${selectedLaneFilter} 라인)`}
        </span>
        <span className="text-[11px] text-slate-500">
          카드 내 [라인 변경]을 눌러 원하는 포지션을 언제든 재배치할 수 있습니다.
        </span>
      </div>

      {/* 3. CHAMPIONS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5">
        {filteredChampions.map((champ) => {
          const stats = statsByChamp[champ.id];
          const isLocke = champ.id === 'locke';

          return (
            <div
              key={champ.id}
              onClick={() => onSelectChampion(champ)}
              className={`group relative rounded-xl border transition-all cursor-pointer flex flex-col justify-between overflow-hidden shadow-md hover:scale-[1.02] hover:shadow-xl ${
                isLocke
                  ? 'bg-[#101728] border-amber-500/60 hover:border-amber-400'
                  : champ.isCustom
                  ? 'bg-[#0f1728] border-cyan-500/40 hover:border-cyan-400'
                  : 'bg-[#0b0f19] border-slate-800 hover:border-slate-600'
              }`}
            >
              <div>
                {/* Top Avatar Banner */}
                <div className="relative aspect-square w-full bg-slate-950 overflow-hidden">
                  {/* Fallback avatar box behind */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900 text-slate-400 text-lg font-bold pointer-events-none">
                    {champ.koreanName.substring(0, 2)}
                  </div>

                  <img
                    src={champ.avatarUrl}
                    alt={champ.koreanName}
                    referrerPolicy="no-referrer"
                    className="relative z-1 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />

                  {/* Badges Overlay */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                    {isLocke && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-black bg-amber-400 text-slate-950 uppercase">
                        LOCKE
                      </span>
                    )}
                    {champ.isCustom && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-cyan-500 text-slate-950 uppercase">
                        CUSTOM
                      </span>
                    )}
                  </div>

                  {/* Match Stats Overlay if user logged feedbacks */}
                  {stats && (
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-slate-950/90 border border-slate-700/80 text-[10px] font-mono z-10 flex items-center gap-1 shadow">
                      <Trophy className="w-2.5 h-2.5 text-amber-400" />
                      <span className={stats.winRate >= 50 ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                        {stats.winRate}%
                      </span>
                      <span className="text-slate-400 text-[9px]">({stats.total}판)</span>
                    </div>
                  )}

                  {/* Lanes pill overlay at bottom of image */}
                  <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1 z-10">
                    {champ.lanes.map((l) => (
                      <span
                        key={l}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectChampion(champ, l);
                        }}
                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded backdrop-blur-md shadow-sm transition-all ${
                          l === champ.primaryLane
                            ? 'bg-amber-500/90 text-slate-950'
                            : 'bg-slate-950/80 text-slate-300 hover:bg-slate-800'
                        }`}
                        title={`${l} 라인 공략 바로보기`}
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Champion Info */}
                <div className="p-3">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                      {champ.koreanName}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono shrink-0">
                      {champ.role}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 block truncate mb-2">
                    {champ.title}
                  </span>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-2.5 pt-0 border-t border-slate-900 flex items-center justify-between gap-1">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenEditLanes(champ);
                  }}
                  className="px-2 py-1 rounded bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-[10px] flex items-center gap-1 transition-colors cursor-pointer"
                  title="라인 변경"
                >
                  <SlidersHorizontal className="w-3 h-3 text-amber-400" />
                  <span>라인 변경</span>
                </button>

                {champ.isCustom && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm(`'${champ.koreanName}' 챔피언을 삭제하시겠습니까?`)) {
                        onDeleteChampion(champ.id);
                      }
                    }}
                    className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                    title="챔피언 삭제"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}

                <div className="text-[10px] text-amber-400/80 group-hover:text-amber-300 font-semibold flex items-center gap-0.5 ml-auto">
                  <span>공략</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
