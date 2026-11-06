import React, { useState } from 'react';
import { Champion, ChampionRole, Lane } from '../types/lol';
import { UserPlus, X, Sparkles } from 'lucide-react';

interface AddChampionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddChampion: (championData: Partial<Champion>) => Promise<void>;
}

export const AddChampionModal: React.FC<AddChampionModalProps> = ({
  isOpen,
  onClose,
  onAddChampion
}) => {
  const [koreanName, setKoreanName] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [role, setRole] = useState<ChampionRole>('전사');
  const [lanes, setLanes] = useState<Lane[]>(['TOP']);
  const [primaryLane, setPrimaryLane] = useState<Lane>('TOP');
  const [difficulty, setDifficulty] = useState<'쉬움' | '보통' | '어려움' | '매우 어려움'>('보통');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const AVAILABLE_LANES: { id: Lane; label: string; icon: string }[] = [
    { id: 'TOP', label: '탑 (Top)', icon: '🛡️' },
    { id: 'JUNGLE', label: '정글 (Jungle)', icon: '🌲' },
    { id: 'MID', label: '미드 (Mid)', icon: '⚡' },
    { id: 'ADC', label: '원딜 (ADC)', icon: '🏹' },
    { id: 'SUPPORT', label: '서포터 (Support)', icon: '💚' }
  ];

  const ROLES: ChampionRole[] = ['전사', '마법사', '암살자', '원거리 딜러', '탱커', '서포터'];

  const toggleLane = (lane: Lane) => {
    if (lanes.includes(lane)) {
      if (lanes.length > 1) {
        const next = lanes.filter(l => l !== lane);
        setLanes(next);
        if (primaryLane === lane) setPrimaryLane(next[0]);
      }
    } else {
      const next = [...lanes, lane];
      setLanes(next);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!koreanName.trim() || isSubmitting) return;

    try {
      setIsSubmitting(true);
      const enName = name.trim() || koreanName.trim();
      await onAddChampion({
        koreanName: koreanName.trim(),
        name: enName,
        title: title.trim() || '소환사의 협곡 전사',
        role,
        lanes,
        primaryLane,
        difficulty,
        avatarUrl: avatarUrl.trim() || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80',
        notes: notes.trim()
      });

      onClose();
      setKoreanName('');
      setName('');
      setTitle('');
      setNotes('');
      setAvatarUrl('');
    } catch (err) {
      alert('챔피언 추가에 실패했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0f172a] border border-slate-700 rounded-xl max-w-lg w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-amber-400" />
            신규 챔피언 직접 추가
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-slate-300 block mb-1 font-medium">한글 챔피언 이름 *</label>
              <input
                type="text"
                required
                value={koreanName}
                onChange={(e) => setKoreanName(e.target.value)}
                placeholder="예: 발도르, 코빈"
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="text-xs text-slate-300 block mb-1 font-medium">영문 이름 (English)</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="예: Baldor, Corbin"
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-slate-300 block mb-1 font-medium">챔피언 칭호</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="예: 그림자의 칼날, 심연의 인도자"
              className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Role & Difficulty */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-slate-300 block mb-1 font-medium">주 역할군</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as ChampionRole)}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-500"
              >
                {ROLES.map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs text-slate-300 block mb-1 font-medium">숙련도 난이도</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as any)}
                className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-500"
              >
                <option value="쉬움">쉬움</option>
                <option value="보통">보통</option>
                <option value="어려움">어려움</option>
                <option value="매우 어려움">매우 어려움</option>
              </select>
            </div>
          </div>

          {/* Lanes Multi-Select */}
          <div>
            <label className="text-xs text-slate-300 block mb-1 font-medium">
              출전 가능 라인 (다중 선택 가능)
            </label>
            <div className="grid grid-cols-5 gap-1.5 mb-2">
              {AVAILABLE_LANES.map(l => {
                const isSelected = lanes.includes(l.id);
                return (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => toggleLane(l.id)}
                    className={`py-2 px-1 rounded text-center text-xs font-semibold border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500/20 border-amber-500 text-amber-200'
                        : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <span className="block text-sm mb-0.5">{l.icon}</span>
                    <span className="text-[10px] truncate">{l.id}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Primary Lane Selection */}
          <div>
            <label className="text-xs text-slate-300 block mb-1 font-medium">주 포지션 (Main Lane)</label>
            <div className="flex gap-2">
              {lanes.map(l => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setPrimaryLane(l)}
                  className={`px-3 py-1.5 rounded text-xs font-semibold border cursor-pointer ${
                    primaryLane === l
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Avatar URL */}
          <div>
            <label className="text-xs text-slate-300 block mb-1 font-medium">아이콘 이미지 URL (선택)</label>
            <input
              type="url"
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
              placeholder="https://... (비워둘 시 기본 전사 아이콘 적용)"
              className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="text-xs text-slate-300 block mb-1 font-medium">챔피언 배경 / 스킬 메모</label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="예: 근접 폭딜러, 3타 표식 폭발 스킬셋을 보유한 신규 챔피언"
              className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Action buttons */}
          <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs cursor-pointer"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !koreanName.trim()}
              className="px-5 py-2 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs cursor-pointer shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? '추가 중...' : '챔피언 등록하기'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
