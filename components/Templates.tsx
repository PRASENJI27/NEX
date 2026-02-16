
import React from 'react';
import { TEMPLATES } from '../constants';

const Templates: React.FC = () => {
  return (
    <section id="templates" className="py-24 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Modern <span className="text-blue-500">Templates.</span></h2>
            <p className="text-gray-400 max-w-lg">Hand-crafted designs ready to be customized for your unique business needs.</p>
          </div>
          <button className="text-blue-500 font-bold flex items-center gap-2 group">
            View all designs 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEMPLATES.map((tpl) => (
            <div key={tpl.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-900 border border-white/5 transition-all group-hover:border-blue-500/50">
                <img 
                  src={tpl.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                  alt={tpl.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 p-6 w-full">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{tpl.category}</span>
                  <h3 className="text-xl font-bold mt-1">{tpl.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
