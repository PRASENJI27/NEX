
import React, { useState } from 'react';
import { getAIBrainstorm } from '../services/geminiService';

const AISuggestion: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleBrainstorm = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    const aiResponse = await getAIBrainstorm(prompt);
    setResult(aiResponse || "No response received.");
    setLoading(false);
  };

  return (
    <div className="p-8 rounded-3xl glass-card border-blue-500/20 max-w-3xl mx-auto my-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <div>
          <h3 className="text-xl font-bold">AI Project Strategist</h3>
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Powered by Gemini Pro</p>
        </div>
      </div>
      
      <div className="flex flex-col gap-4">
        <textarea 
          placeholder="Describe your business goal (e.g., 'Modern real estate site for USA market with focus on high-res photos')"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-blue-500 h-24 resize-none transition-all"
        />
        <button 
          onClick={handleBrainstorm}
          disabled={loading}
          className="bg-blue-600 py-3 rounded-xl font-bold hover:bg-blue-700 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
        >
          {loading ? 'Thinking...' : 'Brainstorm Ideas'}
        </button>
      </div>

      {result && (
        <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-2xl animate-fade-in">
          <p className="text-blue-400 text-xs font-bold uppercase mb-4 tracking-wider">AI Recommendations</p>
          <div className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed prose prose-invert">
            {result}
          </div>
        </div>
      )}
    </div>
  );
};

export default AISuggestion;
