import React, { useState } from 'react';
import { Champion, Lane, MatchFeedback } from '../types/lol';
import { BookOpen, Trophy, Skull, Plus, Trash2, Calendar, Target, Tag, ChevronDown, ChevronUp } from 'lucide-react';

interface FeedbackJournalProps {
  champion: Champion;
  lane: Lane;
  feedbacks: MatchFeedback[];
  onAddFeedback: (feedback: Omit<MatchFeedback, 'id' | 'createdAt'>) => Promise<void>;
  onDeleteFeedback: (id: string) => Promise<void>;
}

export const FeedbackJournal: React.FC<FeedbackJournalProps> = ({
  champion,
  lane,
  feedbacks,
  onAddFeedback,
  onDeleteFeedback
}) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(feedbacks[0]?.id || null);

  // Form State
  const [result, setResult] = useState<'WIN' | 'LOSS'>('WIN');
  const [kills, setKills] = useState<number>(5);
  const [deaths, setDeaths] = useState<number>(2);
  const [assists, setAssists] = useState<number>(7);
  const [opponentChamp, setOpponentChamp] = useState('');
  const [earlyNote, setEarlyNote] = useState('');
  const [midNote, setMidNote] = useState('');
  const [lateNote, setLateNote] = useState('');
  const [takeaway, setTakeaway] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Statistics calculation for this champion
  const totalMatches = feedbacks.length;
  const wins = feedbacks.filter(f => f.result === 'WIN').length;
  const losses = totalMatches - wins;
  const winRate = totalMatches > 0 ? Math.round((wins / totalMatches) * 100) : 0;

  const totalKills = feedbacks.reduce((acc, f) => acc + f.kda.kills, 0);
  const totalDeaths = feedbacks.reduce((acc, f) => acc + f.kda.deaths, 0);
  const totalAssists = feedbacks.reduce((acc, f) => acc + f.kda.assists, 0);

  const avgKills = totalMatches > 0 ? (totalKills / totalMatches).toFixed(1) : '0.0';
  const avgDeaths = totalMatches > 0 ? (totalDeaths / totalMatches).toFixed(1) : '0.0';
  const avgAssists = totalMatches > 0 ? (totalAssists / totalMatches).toFixed(1) : '0.0';
  const overallKdaRatio = totalDeaths > 0
    ? ((totalKills + totalAssists) / totalDeaths).toFixed(2)
    : (totalKills + totalAssists > 0 ? 'Perfect' : '0.00');

  const currentMatchKdaRatio = deaths === 0
    ? 'Perfect'
    : ((kills + assists) / Math.max(1, deaths)).toFixed(2);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      const parsedTags = tagsInput
        .split(',')
        .map(t => t.trim().replace(/^#/, ''))
        .filter(Boolean);

      await onAddFeedback({
        championId: champion.id,
        championName: champion.koreanName,
        lane,
        date: new Date().toISOString().split('T')[0],
        result,
        kda: { kills, deaths, assists },
        opponentChampion: opponentChamp.trim() || '맞라인 상대 미기입',
        earlyGameNote: earlyNote.trim() || '특이사항 없음',
        midGameNote: midNote.trim() || '특이사항 없음',
        lateGameNote: lateNote.trim() || '특이사항 없음',
        keyTakeaway: takeaway.trim() || '다음 판도 침착하게 기본기에 집중하자.',
        tags: parsedTags.length > 0 ? parsedTags : ['일반전']
      });

      // Reset
      setShowAddModal(false);
      setEarlyNote('');
      setMidNote('');
      setLateNote('');
      setTakeaway('');
      setOpponentChamp('');
      setTagsInput('');
    } catch (err) {
      alert('피드백 저장에 실패했습니다. 다시 시도해 주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. CHAMPION PERFORMANCE STATS BAR */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Win Rate */}
        <div className="bg-[#0e1320] border border-slate-800 rounded-xl p-4 shadow-xl flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold text-slate-400 block mb-0.5">승률 (Win Rate)</span>
            <div className="flex items-baseline gap-2">
              <span className={`text-2xl font-extrabold font-mono tabular-nums ${winRate >= 50 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {winRate}%
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {wins}승 {losses}패
              </span>
            </div>
          </div>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${winRate >= 50 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
            <Trophy className="w-5 h-5" />
          </div>
        </div>

        {/* Average KDA */}
        <div className="bg-[#0e1320] border border-slate-800 rounded-xl p-4 shadow-xl flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold text-slate-400 block mb-0.5">평균 KDA 평점</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-extrabold font-mono text-amber-300 tabular-nums">
                {overallKdaRatio}
              </span>
              <span className="text-xs text-slate-400">:1</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono text-slate-300 block">
              {avgKills} / <span className="text-rose-400">{avgDeaths}</span> / {avgAssists}
            </span>
            <span className="text-[10px] text-slate-500">K / D / A</span>
          </div>
        </div>

        {/* Total Matches */}
        <div className="bg-[#0e1320] border border-slate-800 rounded-xl p-4 shadow-xl flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold text-slate-400 block mb-0.5">기록된 매치</span>
            <span className="text-2xl font-extrabold font-mono text-white tabular-nums">
              {totalMatches} <span className="text-xs font-normal text-slate-400">경기</span>
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
        </div>

        {/* Action Button */}
        <div className="bg-[#0e1320] border border-slate-800 rounded-xl p-4 shadow-xl flex items-center justify-center">
          <button
            onClick={() => setShowAddModal(true)}
            className="w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" /> 새 경기 피드백 작성
          </button>
        </div>
      </div>

      {/* 2. MATCH FEEDBACK REVIEW LOG LIST */}
      <div className="bg-[#0e1320] border border-slate-800 rounded-xl p-5 shadow-2xl">
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              {champion.koreanName} 플레이 피드백 저널
              <span className="text-xs font-mono text-slate-400 font-normal">
                ({feedbacks.length}개의 오답노트)
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              초반 라인전, 중반 오브젝트 교전, 후반 한타에서의 실수와 다음 판 꼭 지킬 점을 복기하세요.
            </p>
          </div>
        </div>

        {feedbacks.length === 0 ? (
          <div className="py-12 text-center border border-dashed border-slate-800 rounded-xl">
            <BookOpen className="w-8 h-8 text-slate-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-400 mb-1">아직 작성된 플레이 피드백이 없습니다.</p>
            <p className="text-xs text-slate-500 mb-4">
              게임을 마친 후 승패, KDA와 초반/중반/후반 아쉬웠던 점을 기록해 실력을 향상시키세요!
            </p>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs cursor-pointer shadow"
            >
              첫 피드백 작성하기
            </button>
          </div>
        ) : (
          <div className="space-y-3.5">
            {feedbacks.map((item) => {
              const isWin = item.result === 'WIN';
              const isExpanded = expandedId === item.id;
              const kdaRatio = item.kda.deaths === 0
                ? 'Perfect'
                : ((item.kda.kills + item.kda.assists) / Math.max(1, item.kda.deaths)).toFixed(2);

              return (
                <div
                  key={item.id}
                  className={`rounded-xl border transition-all overflow-hidden ${
                    isWin
                      ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/50'
                      : 'bg-slate-900/60 border-slate-800 hover:border-rose-500/50'
                  }`}
                >
                  {/* Top Bar Summary */}
                  <div
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    className="p-4 flex flex-wrap items-center justify-between gap-3 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-3">
                      {/* Result Badge */}
                      <span
                        className={`px-3 py-1 rounded-md text-xs font-black tracking-wider uppercase ${
                          isWin
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                            : 'bg-rose-500/20 text-rose-300 border border-rose-500/50'
                        }`}
                      >
                        {isWin ? 'VICTORY 승리' : 'DEFEAT 패배'}
                      </span>

                      {/* Opponent & Lane */}
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 font-mono">
                          {item.lane}
                        </span>
                        <span className="text-xs font-bold text-white">
                          vs {item.opponentChampion}
                        </span>
                      </div>
                    </div>

                    {/* KDA & Ratio */}
                    <div className="flex items-center gap-4">
                      <div className="text-right font-mono">
                        <div className="text-xs font-bold text-slate-200">
                          {item.kda.kills} / <span className="text-rose-400">{item.kda.deaths}</span> / {item.kda.assists}
                        </div>
                        <div className="text-[10px] text-amber-300">
                          {kdaRatio}:1 평점
                        </div>
                      </div>

                      <div className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {item.date}
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (confirm('이 피드백을 삭제하시겠습니까?')) {
                            onDeleteFeedback(item.id);
                          }
                        }}
                        className="text-slate-500 hover:text-rose-400 p-1 transition-colors"
                        title="피드백 삭제"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="text-slate-400">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expandable Review Details */}
                  {isExpanded && (
                    <div className="p-4 pt-1 border-t border-slate-800/80 bg-slate-950/70 space-y-3">
                      {/* Key takeaway banner */}
                      {item.keyTakeaway && (
                        <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-start gap-2.5">
                          <Target className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[11px] font-bold text-amber-300 block mb-0.5">
                              다음 판 꼭 기억할 핵심 교훈 (Takeaway):
                            </span>
                            <p className="text-xs text-slate-200 font-medium leading-relaxed">
                              {item.keyTakeaway}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Phase reviews 3-split */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-[11px] font-semibold text-cyan-400 block mb-1">
                            🌱 초반 (1~14분) 라인전 복기
                          </span>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {item.earlyGameNote || '작성된 내용이 없습니다.'}
                          </p>
                        </div>

                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-[11px] font-semibold text-amber-400 block mb-1">
                            ⚔️ 중반 (15~25분) 오브젝트 & 운영
                          </span>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {item.midGameNote || '작성된 내용이 없습니다.'}
                          </p>
                        </div>

                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-[11px] font-semibold text-purple-400 block mb-1">
                            👑 후반 (25분~) 한타 & 마무리
                          </span>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {item.lateGameNote || '작성된 내용이 없습니다.'}
                          </p>
                        </div>
                      </div>

                      {/* Tags */}
                      {item.tags.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          <Tag className="w-3 h-3 text-slate-500" />
                          {item.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 3. ADD FEEDBACK MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0f172a] border border-slate-700 rounded-xl max-w-xl w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              {champion.koreanName} 경기 피드백 작성
            </h4>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Result & Opponent */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-300 block mb-1 font-medium">경기 결과</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setResult('WIN')}
                      className={`py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        result === 'WIN'
                          ? 'bg-cyan-600 text-white border-cyan-400 shadow-md'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      승리 (WIN)
                    </button>
                    <button
                      type="button"
                      onClick={() => setResult('LOSS')}
                      className={`py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        result === 'LOSS'
                          ? 'bg-rose-600 text-white border-rose-400 shadow-md'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      패배 (LOSS)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-300 block mb-1 font-medium">맞라인 상대 챔피언</label>
                  <input
                    type="text"
                    required
                    value={opponentChamp}
                    onChange={(e) => setOpponentChamp(e.target.value)}
                    placeholder="예: 신드라, 다리우스, 제드"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* KDA Inputs */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs text-slate-300 font-medium">KDA 기록</label>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    평점: {currentMatchKdaRatio}:1
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <span className="text-[10px] text-slate-400 block mb-0.5">Kills (킬)</span>
                    <input
                      type="number"
                      min="0"
                      value={kills}
                      onChange={(e) => setKills(parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-sm font-mono text-center text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block mb-0.5">Deaths (데스)</span>
                    <input
                      type="number"
                      min="0"
                      value={deaths}
                      onChange={(e) => setDeaths(parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-sm font-mono text-center text-rose-400 focus:outline-none focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block mb-0.5">Assists (어시스트)</span>
                    <input
                      type="number"
                      min="0"
                      value={assists}
                      onChange={(e) => setAssists(parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-sm font-mono text-center text-cyan-400 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
              </div>

              {/* Early, Mid, Late Reviews */}
              <div className="space-y-3 pt-2 border-t border-slate-800">
                <div>
                  <label className="text-xs text-cyan-300 block mb-1 font-semibold">
                    🌱 초반 (1~14분) 라인전 실수 & 피드백
                  </label>
                  <textarea
                    rows={2}
                    value={earlyNote}
                    onChange={(e) => setEarlyNote(e.target.value)}
                    placeholder="예: 2렙 먼저 뺏기고 무리하게 딜교해서 점멸 빠짐. 3웨이브 대포 라인에서 사렸어야 했음."
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="text-xs text-amber-300 block mb-1 font-semibold">
                    ⚔️ 중반 (15~25분) 오브젝트 & 스플릿 실수
                  </label>
                  <textarea
                    rows={2}
                    value={midNote}
                    onChange={(e) => setMidNote(e.target.value)}
                    placeholder="예: 용 30초 전 사이드에 갇혀서 먼저 잘림. 용 타이밍엔 본대와 시야를 먼저 잡자."
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-xs text-purple-300 block mb-1 font-semibold">
                    👑 후반 (25분~) 한타 포지셔닝 & 승부처
                  </label>
                  <textarea
                    rows={2}
                    value={lateNote}
                    onChange={(e) => setLateNote(e.target.value)}
                    placeholder="예: 적 원딜에게 침착하게 CC기 연계 성공. 존야 핑퐁 타이밍 아주 좋았음."
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="text-xs text-amber-400 block mb-1 font-bold">
                    🎯 다음 판 꼭 지킬 1가지 핵심 다짐 (Takeaway)
                  </label>
                  <input
                    type="text"
                    required
                    value={takeaway}
                    onChange={(e) => setTakeaway(e.target.value)}
                    placeholder="예: 상대 정글 위치 보이기 전까지 앞점멸 절대 금지!"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-amber-500/60 text-xs text-white focus:outline-none focus:border-amber-400 font-medium"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1">
                    태그 (쉼표로 구분)
                  </label>
                  <input
                    type="text"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    placeholder="예: 솔킬, 바론스틸, 뇌절방지, 역전승"
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs cursor-pointer"
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs cursor-pointer shadow-lg"
                >
                  {isSubmitting ? '클라우드 저장 중...' : '피드백 저장하기'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
