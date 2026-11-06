import React, { useState, useEffect } from 'react';
import { Champion, ChampionBuild, Lane, MatchFeedback } from '../types/lol';
import { BuildEditor } from './BuildEditor';
import { RuneBuilder } from './RuneBuilder';
import { JungleRouteVisualizer } from './JungleRouteVisualizer';
import { CounterManager } from './CounterManager';
import { FeedbackJournal } from './FeedbackJournal';
import { ArrowLeft, Save, SlidersHorizontal, Cloud, Check, Compass, Sparkles, BookOpen, ShieldAlert } from 'lucide-react';

interface ChampionDetailViewProps {
  champion: Champion;
  initialLane?: Lane;
  onBack: () => void;
  onOpenEditLanes: (champion: Champion) => void;
  onSaveBuild: (build: ChampionBuild) => Promise<void>;
  feedbacks: MatchFeedback[];
  onAddFeedback: (feedback: Omit<MatchFeedback, 'id' | 'createdAt'>) => Promise<void>;
  onDeleteFeedback: (id: string) => Promise<void>;
  buildData?: ChampionBuild;
}

export const ChampionDetailView: React.FC<ChampionDetailViewProps> = ({
  champion,
  initialLane,
  onBack,
  onOpenEditLanes,
  onSaveBuild,
  feedbacks,
  onAddFeedback,
  onDeleteFeedback,
  buildData
}) => {
  const [currentLane, setCurrentLane] = useState<Lane>(
    initialLane && champion.lanes.includes(initialLane)
      ? initialLane
      : champion.primaryLane || champion.lanes[0] || 'MID'
  );

  const [activeTab, setActiveTab] = useState<'build' | 'runes' | 'jungle' | 'counters' | 'feedback'>(
    currentLane === 'JUNGLE' ? 'jungle' : 'runes'
  );

  const [currentBuild, setCurrentBuild] = useState<ChampionBuild | null>(buildData || null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccessNotice, setSaveSuccessNotice] = useState(false);

  // Sync currentBuild when buildData props update or lane changes
  useEffect(() => {
    if (buildData) {
      setCurrentBuild(buildData);
    }
  }, [buildData, currentLane]);

  // Handle saving the build
  const handleSave = async () => {
    if (!currentBuild) return;
    try {
      setIsSaving(true);
      await onSaveBuild(currentBuild);
      setSaveSuccessNotice(true);
      setTimeout(() => setSaveSuccessNotice(false), 2500);
    } catch (e) {
      alert('클라우드 저장에 실패했습니다.');
    } finally {
      setIsSaving(false);
    }
  };

  const isJungleLane = currentLane === 'JUNGLE';

  // Filter feedbacks for this champion and lane
  const championFeedbacks = feedbacks.filter(
    f => f.championId === champion.id && (f.lane === currentLane || champion.lanes.length === 1)
  );

  return (
    <div className="space-y-6">
      {/* 1. TOP CHAMPION PROFILE BANNER */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-gradient-to-r from-[#0a0e18] via-[#101726] to-[#0a0e18] p-5 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          {/* Back Button & Champ Identity */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
              title="챔피언 목록으로 돌아가기"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900 text-slate-300 font-bold rounded-xl border border-slate-700">
                {champion.koreanName.substring(0, 2)}
              </div>
              <img
                src={champion.avatarUrl}
                alt={champion.koreanName}
                referrerPolicy="no-referrer"
                className="relative z-10 w-full h-full rounded-xl object-cover border-2 border-amber-400/80 shadow-lg shadow-amber-500/10"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/40">
                  {champion.role}
                </span>
                <span className="text-xs text-slate-400 font-mono">난이도: {champion.difficulty}</span>
                {champion.isCustom && (
                  <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40">
                    커스텀
                  </span>
                )}
              </div>

              <h1 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
                {champion.koreanName}
                <span className="text-sm font-normal text-slate-400">({champion.name})</span>
              </h1>
              <p className="text-xs text-slate-400">{champion.title}</p>
            </div>
          </div>

          {/* Lane Switcher & Actions */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 pt-3 lg:pt-0 border-slate-800">
            {/* Lane selector tabs */}
            <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-500 px-2 font-semibold">라인:</span>
              {champion.lanes.map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setCurrentLane(l);
                    if (l === 'JUNGLE' && activeTab !== 'feedback') {
                      setActiveTab('jungle');
                    }
                  }}
                  className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                    currentLane === l
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Change Lanes Button */}
            <button
              onClick={() => onOpenEditLanes(champion)}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-600 text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
              <span>라인 변경</span>
            </button>

            {/* Save Button */}
            <button
              onClick={handleSave}
              disabled={isSaving}
              className={`px-4 py-1.5 rounded-lg font-bold text-xs transition-all shadow-md flex items-center gap-1.5 cursor-pointer ${
                saveSuccessNotice
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950'
              }`}
            >
              {saveSuccessNotice ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>클라우드 저장됨!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>{isSaving ? '저장 중...' : '클라우드에 저장'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION TABS */}
      <div className="flex items-center gap-2 border-b border-slate-800/80 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('runes')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === 'runes'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>인터랙티브 룬 페이지</span>
        </button>

        <button
          onClick={() => setActiveTab('build')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === 'build'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <span>⚔️ 아이템 빌드 & 스펠</span>
        </button>

        {isJungleLane && (
          <button
            onClick={() => setActiveTab('jungle')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'jungle'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>정글 캠프 동선 (미니맵)</span>
          </button>
        )}

        <button
          onClick={() => setActiveTab('counters')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === 'counters'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>카운터 & 상대법</span>
        </button>

        <button
          onClick={() => setActiveTab('feedback')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ml-auto ${
            activeTab === 'feedback'
              ? 'bg-cyan-600 text-white shadow-md'
              : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-cyan-800/40'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5 text-cyan-300" />
          <span>플레이 피드백 저널 ({championFeedbacks.length})</span>
        </button>
      </div>

      {/* 3. TAB VIEW CONTENTS */}
      {currentBuild ? (
        <div>
          {/* TAB 1: RUNES BUILDER */}
          {activeTab === 'runes' && (
            <div className="space-y-4">
              <RuneBuilder
                runes={currentBuild.runes}
                onChange={(updatedRunes) => {
                  setCurrentBuild({ ...currentBuild, runes: updatedRunes });
                }}
              />
            </div>
          )}

          {/* TAB 2: BUILD & ITEMS */}
          {activeTab === 'build' && (
            <BuildEditor
              build={currentBuild}
              onChange={(updatedBuild) => setCurrentBuild(updatedBuild)}
            />
          )}

          {/* TAB 3: JUNGLE ROUTES (Jungle lane) */}
          {activeTab === 'jungle' && (
            <JungleRouteVisualizer
              routes={currentBuild.jungleRoutes}
              selectedRouteId={currentBuild.selectedJungleRouteId}
              onRouteChange={(routeId) => {
                setCurrentBuild({ ...currentBuild, selectedJungleRouteId: routeId });
              }}
              onUpdateRoutes={(routes) => {
                setCurrentBuild({ ...currentBuild, jungleRoutes: routes });
              }}
            />
          )}

          {/* TAB 4: COUNTERS & TACTICS */}
          {activeTab === 'counters' && (
            <CounterManager
              counters={currentBuild.counters}
              onChange={(updatedCounters) => {
                setCurrentBuild({ ...currentBuild, counters: updatedCounters });
              }}
            />
          )}

          {/* TAB 5: MATCH FEEDBACK JOURNAL */}
          {activeTab === 'feedback' && (
            <FeedbackJournal
              champion={champion}
              lane={currentLane}
              feedbacks={championFeedbacks}
              onAddFeedback={onAddFeedback}
              onDeleteFeedback={onDeleteFeedback}
            />
          )}
        </div>
      ) : (
        <div className="py-20 text-center text-slate-500">
          빌드 데이터를 불러오는 중입니다...
        </div>
      )}
    </div>
  );
};
