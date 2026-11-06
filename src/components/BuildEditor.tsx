import React, { useState } from 'react';
import { ChampionBuild, Lane } from '../types/lol';
import { LOL_ITEMS } from '../data/itemsData';
import { Package, Shield, Sword, Sparkles, Plus, Trash2, Search, X } from 'lucide-react';

interface BuildEditorProps {
  build: ChampionBuild;
  onChange: (updatedBuild: ChampionBuild) => void;
  readOnly?: boolean;
}

export const BuildEditor: React.FC<BuildEditorProps> = ({ build, onChange, readOnly = false }) => {
  const [itemPickerTarget, setItemPickerTarget] = useState<'starting' | 'core' | 'situational' | null>(null);
  const [itemSearch, setItemSearch] = useState('');
  const [newCustomItem, setNewCustomItem] = useState('');
  const [newTip, setNewTip] = useState('');

  const SPELL_OPTIONS = [
    { name: '점멸', id: 'flash', icon: '⚡' },
    { name: '점화', id: 'ignite', icon: '🔥' },
    { name: '강타', id: 'smite', icon: '🗡️' },
    { name: '순간이동', id: 'teleport', icon: '🌀' },
    { name: '유체화', id: 'ghost', icon: '💨' },
    { name: '회복', id: 'heal', icon: '💚' },
    { name: '정화', id: 'cleanse', icon: '✨' },
    { name: '탈진', id: 'exhaust', icon: '🛡️' },
    { name: '방어막', id: 'barrier', icon: '🟡' }
  ];

  // Add Item to category
  const handleAddItem = (category: 'starting' | 'core' | 'situational', itemName: string) => {
    if (readOnly || !itemName.trim()) return;

    if (category === 'starting') {
      onChange({ ...build, startingItems: [...build.startingItems, itemName.trim()] });
    } else if (category === 'core') {
      onChange({ ...build, coreItems: [...build.coreItems, itemName.trim()] });
    } else {
      onChange({ ...build, situationalItems: [...build.situationalItems, itemName.trim()] });
    }

    setItemPickerTarget(null);
    setNewCustomItem('');
    setItemSearch('');
  };

  // Remove Item
  const handleRemoveItem = (category: 'starting' | 'core' | 'situational', index: number) => {
    if (readOnly) return;
    if (category === 'starting') {
      onChange({ ...build, startingItems: build.startingItems.filter((_, idx) => idx !== index) });
    } else if (category === 'core') {
      onChange({ ...build, coreItems: build.coreItems.filter((_, idx) => idx !== index) });
    } else {
      onChange({ ...build, situationalItems: build.situationalItems.filter((_, idx) => idx !== index) });
    }
  };

  // Toggle Spell
  const handleSpellToggle = (spellName: string) => {
    if (readOnly) return;
    const currentSpells = [...build.spells];
    if (currentSpells.includes(spellName)) {
      if (currentSpells.length > 1) {
        onChange({ ...build, spells: currentSpells.filter(s => s !== spellName) as [string, string] });
      }
    } else {
      if (currentSpells.length >= 2) {
        onChange({ ...build, spells: [currentSpells[1], spellName] });
      } else {
        onChange({ ...build, spells: [...currentSpells, spellName] as [string, string] });
      }
    }
  };

  // Add Play Tip
  const handleAddTip = () => {
    if (readOnly || !newTip.trim()) return;
    onChange({ ...build, playTips: [...build.playTips, newTip.trim()] });
    setNewTip('');
  };

  // Remove Play Tip
  const handleRemoveTip = (index: number) => {
    if (readOnly) return;
    onChange({ ...build, playTips: build.playTips.filter((_, idx) => idx !== index) });
  };

  const filteredItems = LOL_ITEMS.filter(item =>
    item.name.toLowerCase().includes(itemSearch.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* 1. STARTING & SPELLS ROW */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* STARTING ITEMS (7 cols) */}
        <div className="md:col-span-7 bg-[#0e1320] border border-slate-800 rounded-xl p-5 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <Package className="w-4 h-4 text-amber-400" />
              시작 아이템 (Starting Items)
            </h4>
            {!readOnly && (
              <button
                onClick={() => setItemPickerTarget('starting')}
                className="text-xs px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3 h-3" /> 아이템 추가
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 min-h-[50px] items-center">
            {build.startingItems.length === 0 ? (
              <span className="text-xs text-slate-500">등록된 시작 아이템이 없습니다.</span>
            ) : (
              build.startingItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200 shadow-sm"
                >
                  <span className="text-amber-400">⚔️</span>
                  <span>{item}</span>
                  {!readOnly && (
                    <button
                      onClick={() => handleRemoveItem('starting', idx)}
                      className="text-slate-500 hover:text-red-400 ml-1 transition-colors"
                      title="삭제"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* SUMMONER SPELLS (5 cols) */}
        <div className="md:col-span-5 bg-[#0e1320] border border-slate-800 rounded-xl p-5 shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              소환사 주문 (2개)
            </h4>
            <div className="flex gap-1">
              {build.spells.map((s, idx) => (
                <span key={idx} className="text-xs px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 font-semibold border border-cyan-800/50">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            {SPELL_OPTIONS.map((spell) => {
              const isSelected = build.spells.includes(spell.name);
              return (
                <button
                  key={spell.id}
                  onClick={() => handleSpellToggle(spell.name)}
                  disabled={readOnly}
                  className={`p-1.5 rounded text-xs flex items-center gap-1.5 border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500/20 border-cyan-500/80 text-cyan-200 font-bold shadow'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                  }`}
                >
                  <span className="text-sm">{spell.icon}</span>
                  <span className="truncate">{spell.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. CORE ITEMS & SITUATIONAL ITEMS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* CORE BUILD */}
        <div className="bg-[#0e1320] border border-slate-800 rounded-xl p-5 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <Sword className="w-4 h-4 text-emerald-400" />
              핵심 코어 아이템 빌드 (Core Items)
            </h4>
            {!readOnly && (
              <button
                onClick={() => setItemPickerTarget('core')}
                className="text-xs px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3 h-3" /> 코어템 추가
              </button>
            )}
          </div>

          <div className="space-y-2">
            {build.coreItems.length === 0 ? (
              <span className="text-xs text-slate-500">등록된 핵심 코어 아이템이 없습니다.</span>
            ) : (
              build.coreItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/70 border border-slate-800"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-bold font-mono flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-200">{item}</span>
                  </div>
                  {!readOnly && (
                    <button
                      onClick={() => handleRemoveItem('core', idx)}
                      className="text-slate-500 hover:text-red-400 p-1 transition-colors"
                      title="삭제"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* SITUATIONAL ITEMS */}
        <div className="bg-[#0e1320] border border-slate-800 rounded-xl p-5 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-400" />
              상황별 / 후반 방어 아이템 (Situational)
            </h4>
            {!readOnly && (
              <button
                onClick={() => setItemPickerTarget('situational')}
                className="text-xs px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40 hover:bg-purple-500/30 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3 h-3" /> 상황별 템 추가
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {build.situationalItems.length === 0 ? (
              <span className="text-xs text-slate-500">등록된 상황별 아이템이 없습니다.</span>
            ) : (
              build.situationalItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200 shadow-sm"
                >
                  <span className="text-purple-400">🛡️</span>
                  <span>{item}</span>
                  {!readOnly && (
                    <button
                      onClick={() => handleRemoveItem('situational', idx)}
                      className="text-slate-500 hover:text-red-400 ml-1 transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* 3. SKILL MASTER ORDER & PLAY TIPS */}
      <div className="bg-[#0e1320] border border-slate-800 rounded-xl p-5 shadow-xl">
        <h4 className="text-sm font-bold text-slate-100 mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          스킬 마스터 순서 및 챔피언 핵심 운영 팁
        </h4>

        {/* Skill Order Input */}
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="text-xs text-slate-400 font-medium">스킬 선마 순서:</span>
          {readOnly ? (
            <span className="text-sm font-mono font-bold text-amber-300 bg-slate-950 px-3 py-1 rounded border border-slate-800">
              {build.skillOrder}
            </span>
          ) : (
            <input
              type="text"
              value={build.skillOrder}
              onChange={(e) => onChange({ ...build, skillOrder: e.target.value })}
              placeholder="예: Q > E > W > R"
              className="px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-xs font-mono font-bold text-amber-300 focus:outline-none focus:border-amber-500 w-48"
            />
          )}
        </div>

        {/* Play Tips */}
        <div className="space-y-2 mb-3">
          {build.playTips.map((tip, idx) => (
            <div
              key={idx}
              className="flex items-start justify-between gap-2 p-2.5 rounded bg-slate-950/60 border border-slate-900 text-xs text-slate-300 leading-relaxed"
            >
              <div className="flex items-start gap-2">
                <span className="text-amber-400 font-bold shrink-0 mt-0.5">•</span>
                <span>{tip}</span>
              </div>
              {!readOnly && (
                <button
                  onClick={() => handleRemoveTip(idx)}
                  className="text-slate-500 hover:text-red-400 shrink-0 p-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          ))}
        </div>

        {!readOnly && (
          <div className="flex gap-2">
            <input
              type="text"
              value={newTip}
              onChange={(e) => setNewTip(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleAddTip();
              }}
              placeholder="나만의 콤보나 핵심 플레이 팁 입력 후 엔터 (예: 3렙에 E 진입 후 감전 터뜨리고 W)"
              className="flex-1 px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
            />
            <button
              onClick={handleAddTip}
              className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 cursor-pointer"
            >
              팁 추가
            </button>
          </div>
        )}
      </div>

      {/* ITEM PICKER MODAL */}
      {itemPickerTarget && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-5 max-w-lg w-full shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Package className="w-4 h-4 text-amber-400" />
                {itemPickerTarget === 'starting' && '시작 아이템 선택'}
                {itemPickerTarget === 'core' && '코어 아이템 선택'}
                {itemPickerTarget === 'situational' && '상황별 아이템 선택'}
              </h4>
              <button
                onClick={() => setItemPickerTarget(null)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Item search */}
            <div className="relative mb-3">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={itemSearch}
                onChange={(e) => setItemSearch(e.target.value)}
                placeholder="아이템 이름 검색..."
                className="w-full pl-9 pr-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Item catalog grid */}
            <div className="max-h-60 overflow-y-auto space-y-1.5 pr-1 mb-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleAddItem(itemPickerTarget, item.name)}
                  className="flex items-center justify-between p-2 rounded hover:bg-slate-800 border border-slate-800/80 hover:border-slate-700 cursor-pointer transition-colors"
                >
                  <div>
                    <span className="text-xs font-semibold text-slate-200 block">{item.name}</span>
                    <span className="text-[10px] text-slate-400 block truncate max-w-xs">{item.description}</span>
                  </div>
                  <span className="text-[11px] font-mono text-amber-400 shrink-0">{item.cost} G</span>
                </div>
              ))}
            </div>

            {/* Custom item name input */}
            <div className="pt-3 border-t border-slate-800 flex gap-2">
              <input
                type="text"
                value={newCustomItem}
                onChange={(e) => setNewCustomItem(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleAddItem(itemPickerTarget, newCustomItem);
                }}
                placeholder="또는 직접 아이템명 입력..."
                className="flex-1 px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-500"
              />
              <button
                onClick={() => handleAddItem(itemPickerTarget, newCustomItem)}
                className="px-3 py-1.5 rounded bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-xs cursor-pointer"
              >
                직접 추가
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
