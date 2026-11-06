import React, { useState, useEffect } from 'react';
import { Champion, ChampionBuild, Lane, MatchFeedback } from './types/lol';
import { api } from './services/api';
import { Header } from './components/Header';
import { ChampionGrid } from './components/ChampionGrid';
import { ChampionDetailView } from './components/ChampionDetailView';
import { AddChampionModal } from './components/AddChampionModal';
import { EditLanesModal } from './components/EditLanesModal';
import { INITIAL_CHAMPIONS, generateDefaultBuild } from './data/championsData';
import { RefreshCw, RotateCcw, Download, Upload } from 'lucide-react';

export default function App() {
  const [champions, setChampions] = useState<Champion[]>(INITIAL_CHAMPIONS);
  const [feedbacks, setFeedbacks] = useState<MatchFeedback[]>([]);
  const [selectedLaneFilter, setSelectedLaneFilter] = useState<Lane | 'ALL'>('ALL');

  // Currently viewed champion
  const [selectedChampion, setSelectedChampion] = useState<Champion | null>(null);
  const [selectedLane, setSelectedLane] = useState<Lane | undefined>(undefined);
  const [currentBuild, setCurrentBuild] = useState<ChampionBuild | undefined>(undefined);

  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingLanesChampion, setEditingLanesChampion] = useState<Champion | null>(null);

  // Cloud sync status
  const [syncStatus, setSyncStatus] = useState<'synced' | 'saving' | 'offline'>('synced');
  const [isLoading, setIsLoading] = useState(true);

  // Load champions & feedbacks on mount + attach real-time multi-device cloud listeners
  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const [champsData, feedbacksData] = await Promise.all([
          api.getChampions().catch(() => INITIAL_CHAMPIONS),
          api.getFeedbacks().catch(() => [])
        ]);
        setChampions(champsData);
        setFeedbacks(feedbacksData);
        setSyncStatus('synced');
      } catch (err) {
        console.error('Initial load failed', err);
        setSyncStatus('synced');
      } finally {
        setIsLoading(false);
      }
    }
    loadData();

    // Real-time synchronization across devices
    const unsubFeedbacks = api.subscribeFeedbacks((updated) => {
      setFeedbacks(updated);
      setSyncStatus('synced');
    });

    const unsubChamps = api.subscribeChampions((updated) => {
      setChampions(updated);
      setSyncStatus('synced');
    });

    return () => {
      unsubFeedbacks();
      unsubChamps();
    };
  }, []);

  // When champion or lane changes, fetch the corresponding build
  useEffect(() => {
    if (!selectedChampion) return;

    const laneToLoad = selectedLane || selectedChampion.primaryLane || selectedChampion.lanes[0] || 'MID';

    async function loadBuild() {
      try {
        setSyncStatus('saving');
        const build = await api.getBuild(selectedChampion!.id, laneToLoad);
        setCurrentBuild(build);
        setSyncStatus('synced');
      } catch (e) {
        // Fallback default build
        const fallback = generateDefaultBuild(selectedChampion!, laneToLoad);
        setCurrentBuild(fallback);
        setSyncStatus('synced');
      }
    }

    loadBuild();
  }, [selectedChampion, selectedLane]);

  // Open champion detail
  const handleSelectChampion = (champion: Champion, lane?: Lane) => {
    setSelectedChampion(champion);
    setSelectedLane(lane || champion.primaryLane);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add custom champion
  const handleAddChampion = async (champData: Partial<Champion>) => {
    setSyncStatus('saving');
    try {
      const created = await api.addChampion(champData);
      setChampions((prev) => [created, ...prev]);
      setSyncStatus('synced');
      handleSelectChampion(created, created.primaryLane);
    } catch (e) {
      setSyncStatus('synced');
      throw e;
    }
  };

  // Save modified lanes
  const handleSaveLanes = async (championId: string, lanes: Lane[], primaryLane: Lane) => {
    setSyncStatus('saving');
    try {
      const updated = await api.updateChampionLanes(championId, lanes, primaryLane);
      setChampions((prev) =>
        prev.map((c) => (c.id === championId ? { ...c, lanes, primaryLane } : c))
      );
      if (selectedChampion?.id === championId) {
        setSelectedChampion({ ...selectedChampion, lanes, primaryLane });
      }
      setSyncStatus('synced');
    } catch (e) {
      setSyncStatus('synced');
      throw e;
    }
  };

  // Delete custom champion
  const handleDeleteChampion = async (championId: string) => {
    setSyncStatus('saving');
    try {
      await api.deleteChampion(championId);
      setChampions((prev) => prev.filter((c) => c.id !== championId));
      if (selectedChampion?.id === championId) {
        setSelectedChampion(null);
      }
      setSyncStatus('synced');
    } catch (e) {
      setSyncStatus('synced');
      alert('챔피언 삭제 실패');
    }
  };

  // Save build
  const handleSaveBuild = async (build: ChampionBuild) => {
    setSyncStatus('saving');
    try {
      const saved = await api.saveBuild(build);
      setCurrentBuild(saved);
      setSyncStatus('synced');
    } catch (e) {
      setSyncStatus('offline');
      throw e;
    }
  };

  // Add feedback
  const handleAddFeedback = async (feedbackData: Omit<MatchFeedback, 'id' | 'createdAt'>) => {
    setSyncStatus('saving');
    try {
      const created = await api.createFeedback(feedbackData);
      setFeedbacks((prev) => [created, ...prev]);
      setSyncStatus('synced');
    } catch (e) {
      setSyncStatus('offline');
      throw e;
    }
  };

  // Delete feedback
  const handleDeleteFeedback = async (id: string) => {
    setSyncStatus('saving');
    try {
      await api.deleteFeedback(id);
      setFeedbacks((prev) => prev.filter((f) => f.id !== id));
      setSyncStatus('synced');
    } catch (e) {
      setSyncStatus('offline');
      throw e;
    }
  };

  // Reset to initial seed defaults
  const handleResetDefaults = async () => {
    if (confirm('모든 커스텀 챔피언, 수정된 빌드 및 피드백 기록을 초기화하시겠습니까?')) {
      try {
        setSyncStatus('saving');
        await api.resetToDefaults();
        const [champsData, feedbacksData] = await Promise.all([
          api.getChampions(),
          api.getFeedbacks()
        ]);
        setChampions(champsData);
        setFeedbacks(feedbacksData);
        setSelectedChampion(null);
        setSyncStatus('synced');
      } catch (e) {
        alert('초기화 실패');
      }
    }
  };

  const handleExportBackup = () => {
    const jsonStr = api.exportDatabaseJson();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lol_playbook_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      const content = event.target?.result as string;
      const success = api.importDatabaseJson(content);
      if (success) {
        alert('백업 데이터가 성공적으로 복원되었습니다.');
        const [champsData, feedbacksData] = await Promise.all([
          api.getChampions(),
          api.getFeedbacks()
        ]);
        setChampions(champsData);
        setFeedbacks(feedbacksData);
      } else {
        alert('올바른 백업 JSON 파일 형식이 아닙니다.');
      }
    };
    reader.readAsText(file);
  };

  const handleRefreshCloud = async () => {
    try {
      setSyncStatus('saving');
      const [champsData, feedbacksData] = await Promise.all([
        api.getChampions(),
        api.getFeedbacks()
      ]);
      setChampions(champsData);
      setFeedbacks(feedbacksData);
      setSyncStatus('synced');
    } catch (e) {
      console.error(e);
      setSyncStatus('synced');
    }
  };

  return (
    <div className="min-h-screen bg-[#070a10] text-slate-100 flex flex-col font-sans">
      {/* Header Bar */}
      <Header
        selectedLaneFilter={selectedLaneFilter}
        onSelectLaneFilter={setSelectedLaneFilter}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        syncStatus={syncStatus}
        onRefreshCloud={handleRefreshCloud}
        onNavigateHome={() => {
          setSelectedChampion(null);
          setSelectedLane(undefined);
        }}
        currentChampionName={selectedChampion?.koreanName}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-6">
        {isLoading ? (
          <div className="py-24 text-center space-y-3">
            <RefreshCw className="w-8 h-8 text-amber-400 animate-spin mx-auto" />
            <p className="text-sm font-semibold text-slate-300">
              리그 오브 레전드 챔피언 데이터베이스 로딩 중...
            </p>
          </div>
        ) : selectedChampion ? (
          <ChampionDetailView
            champion={selectedChampion}
            initialLane={selectedLane}
            onBack={() => {
              setSelectedChampion(null);
              setSelectedLane(undefined);
            }}
            onOpenEditLanes={(champ) => setEditingLanesChampion(champ)}
            onSaveBuild={handleSaveBuild}
            feedbacks={feedbacks}
            onAddFeedback={handleAddFeedback}
            onDeleteFeedback={handleDeleteFeedback}
            buildData={currentBuild}
          />
        ) : (
          <ChampionGrid
            champions={champions}
            feedbacks={feedbacks}
            selectedLaneFilter={selectedLaneFilter}
            onSelectChampion={handleSelectChampion}
            onOpenEditLanes={(champ) => setEditingLanesChampion(champ)}
            onDeleteChampion={handleDeleteChampion}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-[#05070c] py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>
            리그 오브 레전드 챔피언 전술 연구소 &amp; 매치 리뷰 다이어리 · 최신 173번째 챔피언 '로크' 수록
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleExportBackup}
              className="text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
              title="현재 공략 및 피드백 데이터를 JSON 파일로 다운로드"
            >
              <Download className="w-3.5 h-3.5" />
              <span>백업 다운로드</span>
            </button>
            <label
              className="text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
              title="백업된 JSON 파일로부터 데이터 복원"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>백업 복원</span>
              <input
                type="file"
                accept=".json"
                onChange={handleImportBackup}
                className="hidden"
              />
            </label>
            <span className="text-slate-700">|</span>
            <button
              onClick={handleResetDefaults}
              className="text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1 cursor-pointer"
              title="데이터 기본값으로 재설정"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>초기화</span>
            </button>
            <span className="text-slate-700">|</span>
            <span className="font-mono text-[11px] text-slate-500">
              {champions.length} 챔피언 · {feedbacks.length} 피드백 저장됨
            </span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AddChampionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddChampion={handleAddChampion}
      />

      {editingLanesChampion && (
        <EditLanesModal
          champion={editingLanesChampion}
          isOpen={true}
          onClose={() => setEditingLanesChampion(null)}
          onSaveLanes={handleSaveLanes}
        />
      )}
    </div>
  );
}
