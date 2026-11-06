import React, { useState } from 'react';
import { CounterChampion } from '../types/lol';
import { ShieldAlert, Plus, Trash2, HelpCircle } from 'lucide-react';

interface CounterManagerProps {
  counters: CounterChampion[];
  onChange: (counters: CounterChampion[]) => void;
  readOnly?: boolean;
}

export const CounterManager: React.FC<CounterManagerProps> = ({
  counters,
  onChange,
  readOnly = false
}) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [champName, setChampName] = useState('');
  const [difficulty, setDifficulty] = useState<'쉬움' | '보통' | '어려움'>('어려움');
  const [tip, setTip] = useState('');
  const [recommendedItem, setRecommendedItem] = useState('');

  const handleAddCounter = () => {
    if (!champName.trim() || !tip.trim()) return;

    const newCounter: CounterChampion = {
      championId: champName.trim().toLowerCase().replace(/\s+/g, '_'),
      championName: champName.trim(),
      difficulty,
      tip: tip.trim(),
      recommendedItem: recommendedItem.trim() || undefined
    };

    onChange([...counters, newCounter]);
    setChampName('');
    setTip('');
    setRecommendedItem('');
    setShowAddModal(false);
  };

  const handleRemoveCounter = (index: number) => {
    if (readOnly) return;
    onChange(counters.filter((_, idx) => idx !== index));
  };

  return (
    <div className="bg-[#0e1320] border border-slate-800 rounded-xl p-5 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              카운터 챔피언 및 맞라인 상대법
            </h3>
            <p className="text-xs text-slate-400">
              상대하기 까다로운 챔피언과 파훼법, 추천 카운터 아이템을 정리하세요.
            </p>
          </div>
        </div>

        {!readOnly && (
          <button
            onClick={() => setShowAddModal(true)}
            className="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-300 border border-red-500/40 hover:bg-red-500/30 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" /> 카운터 팁 추가
          </button>
        )}
      </div>

      {/* Counters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {counters.length === 0 ? (
          <div className="col-span-full py-8 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-lg">
            등록된 카운터 상대법이 없습니다. 상단 '카운터 팁 추가'를 눌러 등록해보세요.
          </div>
        ) : (
          counters.map((c, idx) => {
            const isHard = c.difficulty === '어려움';
            const isMedium = c.difficulty === '보통';

            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">{c.championName}</span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${
                          isHard
                            ? 'bg-red-950/80 text-red-400 border-red-800/60'
                            : isMedium
                            ? 'bg-amber-950/80 text-amber-400 border-amber-800/60'
                            : 'bg-emerald-950/80 text-emerald-400 border-emerald-800/60'
                        }`}
                      >
                        {c.difficulty}
                      </span>
                    </div>

                    {!readOnly && (
                      <button
                        onClick={() => handleRemoveCounter(idx)}
                        className="text-slate-500 hover:text-red-400 p-1 transition-colors"
                        title="삭제"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">{c.tip}</p>
                </div>

                {c.recommendedItem && (
                  <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">추천 대처 아이템:</span>
                    <span className="font-semibold text-amber-300">{c.recommendedItem}</span>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Add Counter Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-5 max-w-md w-full shadow-2xl">
            <h4 className="text-base font-bold text-white mb-4">새 카운터 챔피언 상대법 추가</h4>

            <div className="space-y-3.5 mb-5">
              <div>
                <label className="text-xs text-slate-300 block mb-1">상대 챔피언 이름</label>
                <input
                  type="text"
                  value={champName}
                  onChange={(e) => setChampName(e.target.value)}
                  placeholder="예: 신드라, 다리우스, 제드"
                  className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">상대 난이도</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['쉬움', '보통', '어려움'] as const).map((diff) => (
                    <button
                      key={diff}
                      type="button"
                      onClick={() => setDifficulty(diff)}
                      className={`py-1.5 rounded text-xs font-semibold border transition-all cursor-pointer ${
                        difficulty === diff
                          ? diff === '어려움'
                            ? 'bg-red-900/60 border-red-500 text-red-200'
                            : diff === '보통'
                            ? 'bg-amber-900/60 border-amber-500 text-amber-200'
                            : 'bg-emerald-900/60 border-emerald-500 text-emerald-200'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      {diff}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">상대법 & 딜교환 팁</label>
                <textarea
                  rows={3}
                  value={tip}
                  onChange={(e) => setTip(e.target.value)}
                  placeholder="예: 상대 주요 CC기가 빠졌을 때만 진입. 1렙에 사리며 3렙 풀콤보로 역관광 노릴 것."
                  className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">추천 대응 아이템 (선택)</label>
                <input
                  type="text"
                  value={recommendedItem}
                  onChange={(e) => setRecommendedItem(e.target.value)}
                  placeholder="예: 존야의 모래시계, 헤르메스의 발걸음, 덤불 조끼"
                  className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-3.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs cursor-pointer"
              >
                취소
              </button>
              <button
                onClick={handleAddCounter}
                disabled={!champName.trim() || !tip.trim()}
                className="px-4 py-1.5 rounded bg-red-600 hover:bg-red-500 text-white font-semibold text-xs disabled:opacity-50 cursor-pointer"
              >
                추가하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
