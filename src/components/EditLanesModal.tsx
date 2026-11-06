import React, { useState } from 'react';
import { Champion, Lane } from '../types/lol';
import { SlidersHorizontal, X, Check } from 'lucide-react';

interface EditLanesModalProps {
  champion: Champion;
  isOpen: boolean;
  onClose: () => void;
  onSaveLanes: (championId: string, lanes: Lane[], primaryLane: Lane) => Promise<void>;
}

export const EditLanesModal: React.FC<EditLanesModalProps> = ({
  champion,
  isOpen,
  onClose,
  onSaveLanes
}) => {
  const [selectedLanes, setSelectedLanes] = useState<Lane[]>(champion.lanes || [champion.primaryLane]);
  const [primaryLane, setPrimaryLane] = useState<Lane>(champion.primaryLane || champion.lanes[0] || 'MID');
  const [isSaving, setIsSaving] = useState(false);

  if (!isOpen) return null;

  const ALL_LANES: { id: Lane; name: string; desc: string; icon: string }[] = [
    { id: 'TOP', name: '탑 (Top)', desc: '사이드 라인, 탱커 및 브루저 고립 라인전', icon: '🛡️' },
    { id: 'JUNGLE', name: '정글 (Jungle)', desc: '협곡 몬스터 사냥, 갱킹 및 오브젝트 컨트롤', icon: '🌲' },
    { id: 'MID', name: '미드 (Mid)', desc: '중앙 라인, 빠른 레벨링과 전 맵 로밍 영향력', icon: '⚡' },
    { id: 'ADC', name: '원거리 딜러 (ADC)', desc: '바텀 라인, 후반 폭발적인 원거리 지속 화력', icon: '🏹' },
    { id: 'SUPPORT', name: '서포터 (Support)', desc: '바텀 라인, 아군 보호, 시야 장악 및 이니시에이팅', icon: '💚' }
  ];

  const handleToggleLane = (lane: Lane) => {
    if (selectedLanes.includes(lane)) {
      if (selectedLanes.length <= 1) {
        alert('최소 1개 이상의 라인을 선택해야 합니다.');
        return;
      }
      const next = selectedLanes.filter(l => l !== lane);
      setSelectedLanes(next);
      if (primaryLane === lane) {
        setPrimaryLane(next[0]);
      }
    } else {
      const next = [...selectedLanes, lane];
      setSelectedLanes(next);
    }
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      await onSaveLanes(champion.id, selectedLanes, primaryLane);
      onClose();
    } catch (err) {
      alert('라인 변경 저장에 실패했습니다.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0f172a] border border-slate-700 rounded-xl max-w-md w-full p-6 shadow-2xl">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-base font-bold text-white">
                {champion.koreanName} 라인(포지션) 변경
              </h3>
              <span className="text-[11px] text-slate-400">{champion.title}</span>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-300 mb-4">
          해당 챔피언이 플레이할 라인을 자유롭게 설정하세요. 각 라인별로 독립된 아이템 빌드, 룬 및 공략이 자동으로 관리됩니다.
        </p>

        {/* Lanes List with checkboxes */}
        <div className="space-y-2 mb-5">
          {ALL_LANES.map(lane => {
            const isSelected = selectedLanes.includes(lane.id);
            const isPrimary = primaryLane === lane.id;

            return (
              <div
                key={lane.id}
                onClick={() => handleToggleLane(lane.id)}
                className={`p-3 rounded-lg border flex items-center justify-between transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-amber-500/60 shadow-sm'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900 text-slate-500'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold border ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 border-amber-400'
                        : 'border-slate-700 bg-slate-900'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm">{lane.icon}</span>
                      <span className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-400'}`}>
                        {lane.name}
                      </span>
                      {isPrimary && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 font-semibold border border-cyan-800">
                          메인 포지션
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-500 block">{lane.desc}</span>
                  </div>
                </div>

                {isSelected && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPrimaryLane(lane.id);
                    }}
                    className={`text-[10px] px-2 py-1 rounded transition-colors cursor-pointer ${
                      isPrimary
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-bold'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {isPrimary ? '주 라인' : '주 라인 설정'}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs cursor-pointer"
          >
            취소
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className="px-5 py-2 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs cursor-pointer shadow-lg"
          >
            {isSaving ? '클라우드 저장 중...' : '라인 변경 저장'}
          </button>
        </div>
      </div>
    </div>
  );
};
