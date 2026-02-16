
import React from 'react';
import { BRANDS } from '../constants';

const Brands: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-12">Trusted by Indian Small Brands & USA Startups</p>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-40 hover:opacity-100 transition-opacity">
          {BRANDS.map(brand => (
            <div key={brand} className="text-2xl font-black tracking-tighter text-white grayscale hover:grayscale-0 hover:text-blue-500 transition-all cursor-default">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
