import React, { useState } from 'react';
import { RunePageSelection, RunePathId } from '../types/lol';
import { RUNE_PATHS, STAT_SHARDS } from '../data/runesData';
import { Info, Check, RefreshCw } from 'lucide-react';

interface RuneBuilderProps {
  runes: RunePageSelection;
  onChange: (runes: RunePageSelection) => void;
  readOnly?: boolean;
}

export const RuneBuilder: React.FC<RuneBuilderProps> = ({ runes, onChange, readOnly = false }) => {
  const [activeTooltip, setActiveTooltip] = useState<{ name: string; desc: string; icon: string } | null>(null);

  const currentPrimary = RUNE_PATHS[runes.primaryPath] || RUNE_PATHS.precision;
  const currentSecondary = RUNE_PATHS[runes.secondaryPath] || RUNE_PATHS.inspiration;

  // Change Primary Path
  const handlePrimaryPathChange = (pathId: RunePathId) => {
    if (readOnly) return;
    const newPath = RUNE_PATHS[pathId];
    let newSecondary = runes.secondaryPath;
    if (newSecondary === pathId) {
      const otherPaths = (Object.keys(RUNE_PATHS) as RunePathId[]).filter(p => p !== pathId);
      newSecondary = otherPaths[0];
    }
    const secPath = RUNE_PATHS[newSecondary];

    onChange({
      ...runes,
      primaryPath: pathId,
      keystone: newPath.keystones[0]?.id || '',
      primarySlot1: newPath.slots[0]?.runes[0]?.id || '',
      primarySlot2: newPath.slots[1]?.runes[0]?.id || '',
      primarySlot3: newPath.slots[2]?.runes[0]?.id || '',
      secondaryPath: newSecondary,
      secondarySlot1: secPath.slots[0]?.runes[0]?.id || '',
      secondarySlot2: secPath.slots[1]?.runes[0]?.id || ''
    });
  };

  // Change Secondary Path
  const handleSecondaryPathChange = (pathId: RunePathId) => {
    if (readOnly || pathId === runes.primaryPath) return;
    const secPath = RUNE_PATHS[pathId];
    onChange({
      ...runes,
      secondaryPath: pathId,
      secondarySlot1: secPath.slots[0]?.runes[0]?.id || '',
      secondarySlot2: secPath.slots[1]?.runes[0]?.id || ''
    });
  };

  // Select Keystone
  const handleKeystoneSelect = (id: string) => {
    if (readOnly) return;
    onChange({ ...runes, keystone: id });
  };

  // Select Primary Slot Rune
  const handlePrimarySlotSelect = (slotIndex: number, runeId: string) => {
    if (readOnly) return;
    if (slotIndex === 0) onChange({ ...runes, primarySlot1: runeId });
    if (slotIndex === 1) onChange({ ...runes, primarySlot2: runeId });
    if (slotIndex === 2) onChange({ ...runes, primarySlot3: runeId });
  };

  // Select Secondary Slot Rune (allows 2 runes chosen across the 3 slots of secondary path)
  const handleSecondarySlotSelect = (runeId: string) => {
    if (readOnly) return;
    if (runes.secondarySlot1 === runeId) return;
    if (runes.secondarySlot2 === runeId) return;

    // Shift first to second, set new as first
    onChange({
      ...runes,
      secondarySlot2: runes.secondarySlot1,
      secondarySlot1: runeId
    });
  };

  // Select Stat Shard
  const handleShardSelect = (category: 'offense' | 'flex' | 'defense', shardId: string) => {
    if (readOnly) return;
    if (category === 'offense') onChange({ ...runes, shardOffense: shardId });
    if (category === 'flex') onChange({ ...runes, shardFlex: shardId });
    if (category === 'defense') onChange({ ...runes, shardDefense: shardId });
  };

  // Helper to find rune by ID
  const findRune = (id: string) => {
    for (const path of Object.values(RUNE_PATHS)) {
      const ks = path.keystones.find(k => k.id === id);
      if (ks) return ks;
      for (const slot of path.slots) {
        const r = slot.runes.find(ru => ru.id === id);
        if (r) return r;
      }
    }
    return null;
  };

  const selectedKeystone = currentPrimary.keystones.find(k => k.id === runes.keystone) || currentPrimary.keystones[0];

  return (
    <div className="bg-[#0e1320] border border-slate-800 rounded-xl p-5 shadow-2xl relative overflow-hidden">
      {/* Background glow based on primary rune color */}
      <div
        className="absolute -top-32 -left-32 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none transition-all duration-700"
        style={{ backgroundColor: currentPrimary.color }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none transition-all duration-700"
        style={{ backgroundColor: currentSecondary.color }}
      />

      {/* Header Bar */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-lg shadow-inner font-bold"
            style={{ backgroundColor: `${currentPrimary.color}25`, color: currentPrimary.color, border: `1px solid ${currentPrimary.color}50` }}
          >
            {currentPrimary.icon}
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              인게임 룬 페이지 세팅
              <span className="text-xs px-2 py-0.5 rounded font-normal bg-slate-800 text-slate-300">
                {currentPrimary.name} + {currentSecondary.name}
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              클릭하여 핵심 룬, 보조 룬 및 능력치 파편을 롤 클라이언트처럼 직접 변경하세요.
            </p>
          </div>
        </div>

        {/* Selected Keystone Summary */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
          <span className="text-lg">{selectedKeystone?.icon}</span>
          <div className="text-right">
            <span className="text-xs font-semibold text-amber-300 block">{selectedKeystone?.name}</span>
            <span className="text-[10px] text-slate-400 block">{selectedKeystone?.englishName}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT: PRIMARY PATH (7 cols) */}
        <div className="lg:col-span-7 bg-[#0b0e17]/90 border border-slate-800/80 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400 tracking-wider">메인 룬 경로 선택</span>
            <span className="text-xs font-mono font-medium" style={{ color: currentPrimary.color }}>
              {currentPrimary.name} ({currentPrimary.englishName})
            </span>
          </div>

          {/* Primary Path Tabs */}
          <div className="grid grid-cols-5 gap-1.5 mb-5 p-1 bg-slate-950 rounded-lg border border-slate-800">
            {(Object.values(RUNE_PATHS) as typeof currentPrimary[]).map((path) => {
              const isActive = runes.primaryPath === path.id;
              return (
                <button
                  key={path.id}
                  onClick={() => handlePrimaryPathChange(path.id)}
                  disabled={readOnly}
                  className={`flex flex-col items-center justify-center py-2 px-1 rounded transition-all text-xs font-medium cursor-pointer ${
                    isActive
                      ? 'bg-slate-800 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                  style={isActive ? { borderBottom: `2px solid ${path.color}` } : {}}
                  title={path.description}
                >
                  <span className="text-base mb-0.5">{path.icon}</span>
                  <span className="truncate text-[11px]">{path.name}</span>
                </button>
              );
            })}
          </div>

          {/* KEYSTONES SLOT */}
          <div className="mb-5 pb-4 border-b border-slate-800/60">
            <div className="text-xs text-slate-400 mb-2 font-medium flex items-center justify-between">
              <span>핵심 룬 (Keystone)</span>
              <span className="text-[11px] text-amber-400/90 font-mono">1개 선택</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {currentPrimary.keystones.map((ks) => {
                const isSelected = runes.keystone === ks.id;
                return (
                  <button
                    key={ks.id}
                    onClick={() => handleKeystoneSelect(ks.id)}
                    disabled={readOnly}
                    onMouseEnter={() => setActiveTooltip({ name: ks.name, desc: ks.description, icon: ks.icon })}
                    className={`relative p-3 rounded-lg border text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-slate-800/90 shadow-lg'
                        : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700 text-slate-400'
                    }`}
                    style={
                      isSelected
                        ? { borderColor: currentPrimary.color, boxShadow: `0 0 14px ${currentPrimary.color}35` }
                        : {}
                    }
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-xl transition-transform ${
                        isSelected ? 'scale-110 bg-slate-950 border-2' : 'bg-slate-950/60'
                      }`}
                      style={isSelected ? { borderColor: currentPrimary.color } : {}}
                    >
                      {ks.icon}
                    </div>
                    <span className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {ks.name}
                    </span>
                    {isSelected && (
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ backgroundColor: currentPrimary.color }} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* PRIMARY 3 SLOTS */}
          <div className="space-y-3.5">
            {currentPrimary.slots.map((slot, slotIdx) => {
              const selectedRuneId =
                slotIdx === 0 ? runes.primarySlot1 : slotIdx === 1 ? runes.primarySlot2 : runes.primarySlot3;

              return (
                <div key={slotIdx} className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-900">
                  <div className="grid grid-cols-3 gap-2">
                    {slot.runes.map((rune) => {
                      const isSelected = selectedRuneId === rune.id;
                      return (
                        <button
                          key={rune.id}
                          onClick={() => handlePrimarySlotSelect(slotIdx, rune.id)}
                          disabled={readOnly}
                          onMouseEnter={() => setActiveTooltip({ name: rune.name, desc: rune.description, icon: rune.icon })}
                          className={`p-2 rounded-md border text-left transition-all flex items-center gap-2 cursor-pointer ${
                            isSelected
                              ? 'bg-slate-800 border-amber-500/80 text-white font-medium'
                              : 'bg-transparent border-transparent text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                          }`}
                        >
                          <span className={`text-sm shrink-0 ${isSelected ? 'scale-110' : 'opacity-70'}`}>{rune.icon}</span>
                          <span className="text-xs truncate">{rune.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: SECONDARY PATH & STAT SHARDS (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Secondary Path Container */}
          <div className="bg-[#0b0e17]/90 border border-slate-800/80 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-400 tracking-wider">보조 룬 경로</span>
              <span className="text-xs font-mono font-medium" style={{ color: currentSecondary.color }}>
                {currentSecondary.name} (2개 선택)
              </span>
            </div>

            {/* Secondary Path Tabs (exclude primary) */}
            <div className="grid grid-cols-4 gap-1 mb-4 p-1 bg-slate-950 rounded-lg border border-slate-800">
              {(Object.values(RUNE_PATHS) as typeof currentPrimary[])
                .filter(p => p.id !== runes.primaryPath)
                .map((path) => {
                  const isActive = runes.secondaryPath === path.id;
                  return (
                    <button
                      key={path.id}
                      onClick={() => handleSecondaryPathChange(path.id)}
                      disabled={readOnly}
                      className={`flex flex-col items-center justify-center py-1.5 px-1 rounded transition-all text-xs font-medium cursor-pointer ${
                        isActive
                          ? 'bg-slate-800 text-white shadow'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                      }`}
                      style={isActive ? { borderBottom: `2px solid ${path.color}` } : {}}
                      title={path.description}
                    >
                      <span className="text-sm">{path.icon}</span>
                      <span className="truncate text-[10px]">{path.name}</span>
                    </button>
                  );
                })}
            </div>

            {/* Secondary Path Runes (choose 2 across slots) */}
            <div className="space-y-2">
              {currentSecondary.slots.map((slot, sIdx) => (
                <div key={sIdx} className="bg-slate-950/60 p-2 rounded border border-slate-900">
                  <div className="grid grid-cols-3 gap-1.5">
                    {slot.runes.map((rune) => {
                      const isSelected = runes.secondarySlot1 === rune.id || runes.secondarySlot2 === rune.id;
                      return (
                        <button
                          key={rune.id}
                          onClick={() => handleSecondarySlotSelect(rune.id)}
                          disabled={readOnly}
                          onMouseEnter={() => setActiveTooltip({ name: rune.name, desc: rune.description, icon: rune.icon })}
                          className={`p-1.5 rounded border text-left transition-all flex items-center gap-1.5 cursor-pointer ${
                            isSelected
                              ? 'bg-slate-800 border-cyan-500/80 text-white font-medium shadow-sm'
                              : 'bg-transparent border-transparent text-slate-400 hover:bg-slate-900 hover:text-slate-300'
                          }`}
                        >
                          <span className="text-xs shrink-0">{rune.icon}</span>
                          <span className="text-[11px] truncate">{rune.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* STAT SHARDS (능력치 파편 3개) */}
          <div className="bg-[#0b0e17]/90 border border-slate-800/80 rounded-lg p-4">
            <div className="text-xs font-semibold text-slate-400 tracking-wider mb-2.5 flex items-center justify-between">
              <span>능력치 파편 (Stat Shards)</span>
              <span className="text-[10px] text-slate-500">공격 / 유연 / 방어</span>
            </div>

            <div className="space-y-2">
              {/* Row 1: Offense */}
              <div className="flex items-center gap-1.5 bg-slate-950/70 p-1.5 rounded border border-slate-900">
                <span className="text-[10px] font-mono text-amber-400 w-9 shrink-0 text-center">공격</span>
                <div className="grid grid-cols-3 gap-1 flex-1">
                  {STAT_SHARDS.offense.map((shard) => {
                    const isSelected = runes.shardOffense === shard.id;
                    return (
                      <button
                        key={shard.id}
                        onClick={() => handleShardSelect('offense', shard.id)}
                        disabled={readOnly}
                        onMouseEnter={() => setActiveTooltip({ name: shard.name, desc: shard.description, icon: shard.icon })}
                        className={`py-1 px-1.5 rounded text-[10px] truncate text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-500/20 text-amber-200 border border-amber-500/60 font-semibold'
                            : 'text-slate-400 hover:bg-slate-900'
                        }`}
                      >
                        {shard.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 2: Flex */}
              <div className="flex items-center gap-1.5 bg-slate-950/70 p-1.5 rounded border border-slate-900">
                <span className="text-[10px] font-mono text-cyan-400 w-9 shrink-0 text-center">유연</span>
                <div className="grid grid-cols-3 gap-1 flex-1">
                  {STAT_SHARDS.flex.map((shard) => {
                    const isSelected = runes.shardFlex === shard.id;
                    return (
                      <button
                        key={shard.id}
                        onClick={() => handleShardSelect('flex', shard.id)}
                        disabled={readOnly}
                        onMouseEnter={() => setActiveTooltip({ name: shard.name, desc: shard.description, icon: shard.icon })}
                        className={`py-1 px-1.5 rounded text-[10px] truncate text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/60 font-semibold'
                            : 'text-slate-400 hover:bg-slate-900'
                        }`}
                      >
                        {shard.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 3: Defense */}
              <div className="flex items-center gap-1.5 bg-slate-950/70 p-1.5 rounded border border-slate-900">
                <span className="text-[10px] font-mono text-emerald-400 w-9 shrink-0 text-center">방어</span>
                <div className="grid grid-cols-3 gap-1 flex-1">
                  {STAT_SHARDS.defense.map((shard) => {
                    const isSelected = runes.shardDefense === shard.id;
                    return (
                      <button
                        key={shard.id}
                        onClick={() => handleShardSelect('defense', shard.id)}
                        disabled={readOnly}
                        onMouseEnter={() => setActiveTooltip({ name: shard.name, desc: shard.description, icon: shard.icon })}
                        className={`py-1 px-1.5 rounded text-[10px] truncate text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-500/20 text-emerald-200 border border-emerald-500/60 font-semibold'
                            : 'text-slate-400 hover:bg-slate-900'
                        }`}
                      >
                        {shard.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RUNE TOOLTIP / INSPECTION BAR */}
      <div className="mt-4 p-3 rounded-lg bg-slate-950 border border-slate-800/80 flex items-start gap-3">
        <div className="w-7 h-7 rounded bg-slate-900 flex items-center justify-center text-sm shrink-0 text-amber-400 border border-slate-800">
          {activeTooltip ? activeTooltip.icon : <Info className="w-4 h-4 text-slate-400" />}
        </div>
        <div className="flex-1 text-xs">
          <div className="font-semibold text-slate-200 mb-0.5">
            {activeTooltip ? activeTooltip.name : '룬 상세 효과 안내'}
          </div>
          <p className="text-slate-400 leading-relaxed text-[11px]">
            {activeTooltip
              ? activeTooltip.desc
              : '마우스를 룬 위로 올리면 상세 효과 설명이 표시됩니다. 원하는 룬을 클릭하여 나만의 최적 룬 트리를 완성하세요.'}
          </p>
        </div>
      </div>
    </div>
  );
};
