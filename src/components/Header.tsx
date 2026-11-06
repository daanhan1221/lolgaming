import React from 'react';
import { Lane } from '../types/lol';
import { Cloud, Check, Plus, Shield, Sparkles } from 'lucide-react';

interface HeaderProps {
  selectedLaneFilter: Lane | 'ALL';
  onSelectLaneFilter: (lane: Lane | 'ALL') => void;
  onOpenAddModal: () => void;
  syncStatus: 'synced' | 'saving' | 'offline';
  onNavigateHome: () => void;
  currentChampionName?: string;
  onRefreshCloud?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  selectedLaneFilter,
  onSelectLaneFilter,
  onOpenAddModal,
  syncStatus,
  onNavigateHome,
  currentChampionName,
  onRefreshCloud
}) => {
  const LANE_NAV_ITEMS: { id: Lane | 'ALL'; label: string; icon?: string }[] = [
    { id: 'ALL', label: '전체 챔피언' },
    { id: 'TOP', label: '탑', icon: '🛡️' },
    { id: 'JUNGLE', label: '정글', icon: '🌲' },
    { id: 'MID', label: '미드', icon: '⚡' },
    { id: 'ADC', label: '원딜', icon: '🏹' },
    { id: 'SUPPORT', label: '서폿', icon: '💚' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#070a10]/95 backdrop-blur-md border-b border-slate-800/80 px-4 lg:px-8 py-3 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        {/* ZONE 1: BRAND TITLE WORDMARK */}
        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 fill-slate-950" />
            </div>
            <div>
              <div className="text-sm md:text-base font-extrabold tracking-tight text-white flex items-center gap-1.5 whitespace-nowrap">
                롤 전술 연구소
                <span className="text-[10px] px-1.5 py-0.2 rounded font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  v2026 로크
                </span>
              </div>
              <span className="text-[10px] text-slate-400 block whitespace-nowrap hidden sm:block">
                LoL Champion Playbook & Match Review Studio
              </span>
            </div>
          </button>

          {/* Breadcrumb if champion selected */}
          {currentChampionName && (
            <div className="hidden md:flex items-center gap-2 text-xs text-slate-500 pl-3 border-l border-slate-800">
              <span>챔피언</span>
              <span className="text-slate-600">/</span>
              <span className="text-amber-300 font-bold">{currentChampionName}</span>
            </div>
          )}
        </div>

        {/* ZONE 2: NAVIGATION LANE CONTROLS */}
        <nav className="hidden lg:flex items-center gap-1 p-1 bg-slate-950/80 rounded-lg border border-slate-800/80">
          {LANE_NAV_ITEMS.map((item) => {
            const isActive = selectedLaneFilter === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigateHome();
                  onSelectLaneFilter(item.id);
                }}
                className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {item.icon && <span className="text-xs">{item.icon}</span>}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* ZONE 3: ACTIONS & CLOUD STATUS */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Cloud Sync Status Pill */}
          <div
            className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border transition-all ${
              syncStatus === 'synced'
                ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800/60'
                : syncStatus === 'saving'
                ? 'bg-amber-950/40 text-amber-300 border-amber-800/60 animate-pulse'
                : 'bg-rose-950/40 text-rose-300 border-rose-800/60'
            }`}
            title="모든 기기(PC/스마트폰)에서 동일하게 불러올 수 있는 실시간 클라우드 DB 연동 중"
          >
            <Cloud className="w-3.5 h-3.5" />
            <span className="text-[11px] font-medium hidden sm:inline">
              {syncStatus === 'synced' && '클라우드 동기화'}
              {syncStatus === 'saving' && '동기화 중...'}
              {syncStatus === 'offline' && '오프라인'}
            </span>
            {syncStatus === 'synced' && <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />}
          </div>

          {/* Cloud Refresh Button */}
          {onRefreshCloud && (
            <button
              onClick={onRefreshCloud}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-300 hover:bg-slate-800 transition-colors cursor-pointer"
              title="다른 기기에서 저장한 최신 클라우드 데이터 즉시 불러오기"
            >
              <Cloud className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Primary Action Button */}
          <button
            onClick={onOpenAddModal}
            className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs transition-all shadow-md shadow-amber-500/20 flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>챔피언 추가</span>
          </button>
        </div>
      </div>
    </header>
  );
};
