import React, { useState } from 'react';
import { JungleRoute, JungleCampStep } from '../types/lol';
import { DEFAULT_JUNGLE_ROUTES } from '../data/championsData';
import { Compass, Clock, Zap, Shield, Plus, Trash2, CheckCircle2 } from 'lucide-react';

interface JungleRouteVisualizerProps {
  routes?: JungleRoute[];
  selectedRouteId?: string;
  onRouteChange?: (routeId: string) => void;
  onUpdateRoutes?: (routes: JungleRoute[]) => void;
  readOnly?: boolean;
}

export const JungleRouteVisualizer: React.FC<JungleRouteVisualizerProps> = ({
  routes = DEFAULT_JUNGLE_ROUTES,
  selectedRouteId,
  onRouteChange,
  onUpdateRoutes,
  readOnly = false
}) => {
  const currentRoutes = routes.length > 0 ? routes : DEFAULT_JUNGLE_ROUTES;
  const activeRouteId = selectedRouteId || currentRoutes[0]?.id || 'blue_side_full_clear';
  const activeRoute = currentRoutes.find(r => r.id === activeRouteId) || currentRoutes[0];

  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);

  // Available camps for user to add
  const KNOWN_CAMPS = [
    { name: '레드 덩굴정령 (Red)', id: 'red_buff', x: 62, y: 70 },
    { name: '블루 파수꾼 (Blue)', id: 'blue_buff', x: 34, y: 42 },
    { name: '심술두꺼비 (Gromp)', id: 'gromp', x: 30, y: 35 },
    { name: '어스름 늑대 (Wolves)', id: 'wolves', x: 42, y: 48 },
    { name: '칼날부리 (Raptors)', id: 'raptors', x: 55, y: 60 },
    { name: '돌거북 (Krugs)', id: 'krugs', x: 74, y: 76 },
    { name: '상단 바위게 (Top Scuttle)', id: 'scuttle_top', x: 40, y: 28 },
    { name: '하단 바위게 (Bot Scuttle)', id: 'scuttle_bot', x: 60, y: 72 },
    { name: '공허 유충 (Voidgrubs)', id: 'voidgrubs', x: 35, y: 30 },
    { name: '탑 갱킹 (Gank Top)', id: 'gank_top', x: 18, y: 18 },
    { name: '미드 갱킹 (Gank Mid)', id: 'gank_mid', x: 50, y: 50 },
    { name: '바텀 갱킹 (Gank Bot)', id: 'gank_bot', x: 82, y: 82 }
  ];

  const handleSelectRoute = (id: string) => {
    if (onRouteChange) onRouteChange(id);
    setActiveStepIndex(null);
  };

  const handleAddCampStep = (camp: typeof KNOWN_CAMPS[0]) => {
    if (readOnly || !onUpdateRoutes) return;
    const newStepNum = activeRoute.steps.length + 1;
    const newStep: JungleCampStep = {
      step: newStepNum,
      campName: camp.name,
      campId: camp.id,
      timing: `03:${(newStepNum * 15).toString().padStart(2, '0')}`,
      x: camp.x,
      y: camp.y,
      tip: `${camp.name} 정리 및 주변 라인 주도권 확인`,
      level: Math.min(4, Math.floor(newStepNum / 2) + 1),
      smiteUsed: newStepNum % 2 === 0
    };

    const updatedRoutes = currentRoutes.map(r => {
      if (r.id === activeRoute.id) {
        return {
          ...r,
          steps: [...r.steps, newStep]
        };
      }
      return r;
    });

    onUpdateRoutes(updatedRoutes);
  };

  const handleRemoveStep = (index: number) => {
    if (readOnly || !onUpdateRoutes) return;
    const newSteps = activeRoute.steps
      .filter((_, idx) => idx !== index)
      .map((s, idx) => ({ ...s, step: idx + 1 }));

    const updatedRoutes = currentRoutes.map(r => {
      if (r.id === activeRoute.id) {
        return { ...r, steps: newSteps };
      }
      return r;
    });

    onUpdateRoutes(updatedRoutes);
  };

  return (
    <div className="bg-[#0e1320] border border-slate-800 rounded-xl p-5 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              소환사의 협곡 정글 캠프 동선
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/50">
                정글러 전용
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              초반 버프 시작부터 바위게 타이밍까지의 최적 루트 시각화 및 강타 활용 팁
            </p>
          </div>
        </div>

        {/* Route Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800">
          {currentRoutes.map((route) => (
            <button
              key={route.id}
              onClick={() => handleSelectRoute(route.id)}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-all cursor-pointer ${
                activeRoute.id === route.id
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              {route.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* INTERACTIVE SUMMONER'S RIFT MAP (6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="w-full relative aspect-square max-w-[480px] bg-[#09101b] border-2 border-emerald-900/40 rounded-xl overflow-hidden shadow-2xl">
            {/* Map styling grid & river */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_70%)]" />

            {/* Diagonal River S-curve SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="riverGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#0284c7" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* River Line */}
              <path
                d="M 15 85 Q 45 55 50 50 T 85 15"
                fill="none"
                stroke="url(#riverGrad)"
                strokeWidth="12"
                strokeLinecap="round"
              />

              {/* Lanes (Top, Mid, Bot) */}
              <path d="M 10 90 L 10 10 L 90 10" fill="none" stroke="#334155" strokeWidth="2.5" strokeOpacity="0.4" />
              <path d="M 10 90 L 90 90 L 90 10" fill="none" stroke="#334155" strokeWidth="2.5" strokeOpacity="0.4" />
              <path d="M 12 88 L 88 12" fill="none" stroke="#334155" strokeWidth="2" strokeOpacity="0.3" />

              {/* Bases */}
              <circle cx="12" cy="88" r="4" fill="#3b82f6" fillOpacity="0.6" />
              <circle cx="88" cy="12" r="4" fill="#ef4444" fillOpacity="0.6" />

              {/* Jungle Route Connected Polyline */}
              {activeRoute.steps.length > 1 && (
                <path
                  d={activeRoute.steps
                    .map((step, idx) => `${idx === 0 ? 'M' : 'L'} ${step.x} ${step.y}`)
                    .join(' ')}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                  className="animate-pulse"
                />
              )}
            </svg>

            {/* Jungle Camp Nodes on Map */}
            {activeRoute.steps.map((step, idx) => {
              const isHighlighted = activeStepIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all cursor-pointer ${
                    isHighlighted ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                  }`}
                  style={{ left: `${step.x}%`, top: `${step.y}%` }}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shadow-lg border-2 ${
                      isHighlighted
                        ? 'bg-amber-400 text-slate-950 border-white'
                        : 'bg-emerald-600 text-white border-emerald-300'
                    }`}
                  >
                    {step.step}
                  </div>
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 whitespace-nowrap px-1.5 py-0.5 rounded bg-slate-950/90 text-[10px] text-slate-200 border border-slate-800 pointer-events-none">
                    {step.campName.split(' ')[0]}
                  </div>
                </div>
              );
            })}

            {/* Map Legend */}
            <div className="absolute bottom-2 left-2 bg-slate-950/80 px-2.5 py-1.5 rounded border border-slate-800 text-[10px] text-slate-300 flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" /> 블루 진영
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block" /> 레드 진영
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> 동선 순서
              </span>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 mt-2 text-center">
            맵의 번호 노드를 클릭하면 해당 캠프의 클리어 팁과 강타 사용 여부를 확인할 수 있습니다.
          </p>
        </div>

        {/* STEP-BY-STEP TIMELINE & TIPS (6 cols) */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> 예상 완료 시간: {activeRoute.estimatedTime}
              </span>
              <span className="text-xs text-slate-400 font-mono">총 {activeRoute.steps.length}단계</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{activeRoute.description}</p>
          </div>

          {/* Steps List */}
          <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
            {activeRoute.steps.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800/90 border-emerald-500 shadow-md'
                      : 'bg-slate-900/60 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-600/30 text-emerald-400 border border-emerald-500/50 flex items-center justify-center text-xs font-bold font-mono">
                        {step.step}
                      </span>
                      <span className="text-xs font-semibold text-white">{step.campName}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-950 text-slate-400 font-mono">
                        Lv.{step.level}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {step.smiteUsed && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-0.5">
                          <Zap className="w-2.5 h-2.5" /> 강타 사용
                        </span>
                      )}
                      <span className="text-[11px] font-mono text-slate-400">{step.timing}</span>
                      {!readOnly && onUpdateRoutes && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveStep(idx);
                          }}
                          className="text-slate-500 hover:text-red-400 p-0.5 transition-colors"
                          title="이 단계 삭제"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 pl-7 leading-normal">{step.tip}</p>
                </div>
              );
            })}
          </div>

          {/* Add Camp Step Quick Bar */}
          {!readOnly && onUpdateRoutes && (
            <div className="pt-2 border-t border-slate-800">
              <div className="text-[11px] font-medium text-slate-400 mb-1.5 flex items-center gap-1">
                <Plus className="w-3 h-3 text-emerald-400" /> 다음 캠프 또는 갱킹 추가:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {KNOWN_CAMPS.map((camp) => (
                  <button
                    key={camp.id}
                    onClick={() => handleAddCampStep(camp)}
                    className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 text-[11px] text-slate-300 border border-slate-800 hover:border-emerald-500/50 transition-colors cursor-pointer"
                  >
                    + {camp.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
