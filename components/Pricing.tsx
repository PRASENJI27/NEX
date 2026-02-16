
import React from 'react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-[#0f0f12]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">Dedicated <span className="text-blue-500">Pricing.</span></h2>
          <p className="text-gray-400">Transparent pricing for every stage of your business growth.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.name} 
              className={`p-8 rounded-3xl glass-card flex flex-col h-full relative ${plan.recommended ? 'border-blue-500 bg-blue-500/5' : ''}`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-500">/ project</span>}
                </div>
                <p className="mt-4 text-sm text-gray-400">{plan.description}</p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map(feature => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.recommended ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
