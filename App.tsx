import React, { useState, useMemo, useEffect } from 'react';
import Globe from './components/Globe';
import MemoryInput from './components/MemoryInput';
import MemoryList from './components/MemoryList';
import { Memory } from './types';
import { Compass, BookOpen, Filter } from 'lucide-react';
import { INITIAL_MEMORIES } from './data/initialMemories';

const App: React.FC = () => {
  // Load from localStorage or fallback to INITIAL_MEMORIES
  const [memories, setMemories] = useState<Memory[]>(() => {
    const saved = localStorage.getItem('terra_memoria_logs');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_MEMORIES;
      }
    }
    return INITIAL_MEMORIES;
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem('terra_memoria_logs', JSON.stringify(memories));
  }, [memories]);

  const years = useMemo(() => {
    const allYears = memories.map(m => new Date(m.timestamp).getFullYear().toString());
    // Fix: Explicitly cast Array.from result to string[] to resolve 'unknown' type error for localeCompare during sort
    const uniqueYears = (Array.from(new Set(allYears)) as string[]).sort((a, b) => b.localeCompare(a));
    return ['All', ...uniqueYears];
  }, [memories]);

  const filteredMemories = useMemo(() => {
    if (selectedYear === 'All') return memories;
    return memories.filter(m => new Date(m.timestamp).getFullYear().toString() === selectedYear);
  }, [memories, selectedYear]);

  const handleAddMemory = (memory: Memory) => {
    setMemories((prev) => [memory, ...prev]);
    setSelectedMemory(memory);
    // Briefly open sidebar if it was closed to show the new entry
    if (!isSidebarOpen) setIsSidebarOpen(true);
  };

  const handleUpdateMemory = (id: string, updates: Partial<Memory>) => {
    setMemories(prev => prev.map(m => m.id === id ? { ...m, ...updates } : m));
  };

  const handleDeleteMemory = (id: string) => {
    setMemories(prev => prev.filter(m => m.id !== id));
    if (selectedMemory?.id === id) setSelectedMemory(null);
  };

  const handleMemorySelect = (memory: Memory) => {
    setSelectedMemory(memory);
  };

  return (
    <div className="relative w-full h-screen bg-slate-950 overflow-hidden flex flex-col selection:bg-amber-900/30">
      
      {/* Header / Brand */}
      <div className="absolute top-0 left-0 p-8 z-30 pointer-events-none">
        <h1 className="text-4xl text-slate-200 tracking-tight font-serif italic opacity-90">
          Terra Memoria
        </h1>
        <p className="text-slate-500 text-sm mt-1 tracking-widest uppercase">
          A Travel Log
        </p>
      </div>

      {/* Year Filter Bar */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4 bg-slate-900/40 backdrop-blur-md px-6 py-2 rounded-full border border-slate-800 shadow-2xl">
        <Filter size={14} className="text-slate-500" />
        <div className="flex gap-6 overflow-x-auto no-scrollbar max-w-[60vw]">
          {years.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`text-xs uppercase tracking-[0.2em] transition-all whitespace-nowrap px-1 py-1 ${
                selectedYear === year ? 'text-amber-400 font-bold border-b border-amber-400/50' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Main Globe Area */}
      <div className="flex-grow relative">
        <Globe 
          memories={filteredMemories} 
          onMemoryClick={handleMemorySelect} 
          selectedMemory={selectedMemory}
        />
      </div>

      {/* Floating Input Area (Bottom Center) */}
      <div className="absolute bottom-12 left-0 right-0 px-6 z-30 flex justify-center">
        <MemoryInput onAddMemory={handleAddMemory} />
      </div>

      {/* Sidebar Toggle (Top Right) */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute top-8 right-8 z-40 p-3 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-full text-slate-400 hover:text-amber-100 hover:border-amber-900/50 transition-all shadow-xl group"
        title="Open Journal"
      >
        {isSidebarOpen ? (
          <Compass size={24} className="animate-spin-slow text-amber-500/80" />
        ) : (
          <BookOpen size={24} className="group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Sidebar (Overlay) */}
      <div 
        className={`fixed top-0 right-0 h-full w-96 bg-slate-950/90 backdrop-blur-xl border-l border-slate-900 transform transition-transform duration-500 z-30 ease-out flex flex-col ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 pb-4 border-b border-slate-900">
          <h2 className="font-serif text-2xl text-slate-200 italic">Journal</h2>
          <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
            {selectedYear === 'All' ? 'Every Moment' : `Whispers from ${selectedYear}`} &bull; {filteredMemories.length} Entries
          </p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
          <MemoryList 
            memories={filteredMemories} 
            onSelect={handleMemorySelect}
            onUpdate={handleUpdateMemory}
            onDelete={handleDeleteMemory}
            selectedId={selectedMemory?.id}
          />
        </div>
        
        <div className="p-4 border-t border-slate-900 text-center">
            <button 
                onClick={() => setIsSidebarOpen(false)}
                className="text-[10px] uppercase tracking-widest text-slate-600 hover:text-slate-400 transition-colors"
            >
                Close Journal
            </button>
        </div>
      </div>

      {/* Instructions / Footer note (Bottom Left) */}
      <div className="absolute bottom-8 left-8 z-20 pointer-events-none opacity-40 hidden md:block">
        <p className="text-xs text-slate-500 font-mono tracking-tighter">
          DRAG TO ROTATE &bull; SCROLL TO ZOOM &bull; CLICK LIGHTS TO REMEMBER
        </p>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>

    </div>
  );
};

export default App;