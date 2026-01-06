import React, { useState } from 'react';
import { processMemoryInput } from '../services/geminiService';
import { Memory } from '../types';
import { Send, Loader2, Sparkles } from 'lucide-react';

interface MemoryInputProps {
  onAddMemory: (memory: Memory) => void;
}

const MemoryInput: React.FC<MemoryInputProps> = ({ onAddMemory }) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const data = await processMemoryInput(input);
      const newMemory: Memory = {
        id: crypto.randomUUID(),
        ...data,
        timestamp: Date.now(),
      };
      onAddMemory(newMemory);
      setInput('');
    } catch (err) {
      setError("The connection was lost. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto relative z-20">
      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-900/20 to-slate-900/20 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Where have you been? (e.g., 'Rainy afternoon in Kyoto')"
          disabled={isLoading}
          className="w-full bg-slate-900/80 backdrop-blur-md border border-slate-800 text-slate-200 placeholder-slate-600 px-6 py-4 rounded-full focus:outline-none focus:border-amber-900/50 focus:ring-1 focus:ring-amber-900/30 transition-all shadow-xl font-serif text-lg"
        />
        
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-slate-800/50 hover:bg-amber-900/30 text-slate-400 hover:text-amber-100 rounded-full transition-all disabled:opacity-0 disabled:scale-75"
        >
          {isLoading ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <Send size={20} />
          )}
        </button>
      </form>
      
      {error && (
        <div className="absolute top-full left-0 w-full text-center mt-2 text-red-400/80 text-sm animate-pulse">
          {error}
        </div>
      )}

      <div className="mt-4 flex justify-center gap-2 items-center text-xs text-slate-600">
         <Sparkles size={10} />
         <span>AI reflects on your location</span>
      </div>
    </div>
  );
};

export default MemoryInput;
