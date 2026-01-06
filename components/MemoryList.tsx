import React, { useState } from 'react';
import { Memory } from '../types';
import { MapPin, Clock, Edit2, Trash2, Check, X } from 'lucide-react';
import { formatDateRange } from '../utils/dateUtils';

interface MemoryListProps {
  memories: Memory[];
  onSelect: (memory: Memory) => void;
  onUpdate: (id: string, updates: Partial<Memory>) => void;
  onDelete: (id: string) => void;
  selectedId?: string;
}

const MemoryList: React.FC<MemoryListProps> = ({ memories, onSelect, onUpdate, onDelete, selectedId }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');

  const handleStartEdit = (e: React.MouseEvent, mem: Memory) => {
    e.stopPropagation();
    setEditingId(mem.id);
    setEditValue(mem.reflection);
  };

  const handleSave = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    onUpdate(id, { reflection: editValue });
    setEditingId(null);
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingId(null);
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (confirm("Let this memory fade into the void?")) {
      onDelete(id);
    }
  };

  return (
    <div className="flex flex-col gap-6 p-2">
      {memories.length === 0 ? (
        <div className="text-slate-500 text-sm italic text-center py-10">
          The map is silent for this period.<br/>Add a memory to begin.
        </div>
      ) : (
        memories.map((mem) => (
          <div 
            key={mem.id} 
            onClick={() => onSelect(mem)}
            className={`group cursor-pointer border-l-2 pl-4 transition-all duration-500 relative ${
              selectedId === mem.id ? 'border-amber-500 bg-amber-500/5' : 'border-slate-800 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2 text-amber-100/80 group-hover:text-amber-100">
                <MapPin size={14} className="opacity-70" />
                <span className="text-sm tracking-widest uppercase font-medium">{mem.locationName}</span>
              </div>
              
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={(e) => handleStartEdit(e, mem)} className="p-1 hover:text-amber-400 text-slate-500 transition-colors">
                  <Edit2 size={12} />
                </button>
                <button onClick={(e) => handleDelete(e, mem.id)} className="p-1 hover:text-red-400 text-slate-500 transition-colors">
                  <Trash2 size={12} />
                </button>
              </div>
            </div>
            
            {editingId === mem.id ? (
              <div className="mt-1 flex flex-col gap-2" onClick={e => e.stopPropagation()}>
                <textarea
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-slate-200 text-sm focus:outline-none focus:border-amber-500/50"
                  rows={2}
                />
                <div className="flex justify-end gap-2">
                  <button onClick={(e) => handleSave(e, mem.id)} className="p-1 text-green-400 hover:bg-green-400/10 rounded"><Check size={14}/></button>
                  <button onClick={handleCancel} className="p-1 text-slate-400 hover:bg-slate-400/10 rounded"><X size={14}/></button>
                </div>
              </div>
            ) : (
              <p className="serif text-lg text-slate-400 group-hover:text-slate-200 leading-relaxed transition-colors">
                "{mem.reflection}"
              </p>
            )}
            
            <div className="mt-2 flex items-center gap-2 text-xs text-slate-600">
              <Clock size={12} />
              <span>{formatDateRange(mem.timestamp, mem.endDate)}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MemoryList;