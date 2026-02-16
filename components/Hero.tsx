
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 hero-gradient overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-blue-400 tracking-wider uppercase">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping"></span>
            USA & Worldwide Solutions
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter">
            We Design <br />
            <span className="gradient-text">Future Web.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
            NEX WEBDEVELOPER creates modern, ultra-high performance websites for clients across the USA and India. Elevate your brand with world-class engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-blue-600 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all hover:scale-105">
              Explore Templates
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
              Watch Reel
            </button>
          </div>
          
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0a0c]" src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
              ))}
            </div>
            <p className="text-sm text-gray-500 font-medium">
              Trusted by <span className="text-white">500+</span> global brands
            </p>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="relative z-10 glass-card p-4 rounded-3xl transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/web/1000/800" 
              className="rounded-2xl w-full h-auto object-cover" 
              alt="Web Design Showcase" 
            />
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-xl animate-bounce">
              <div className="text-blue-500 text-2xl font-bold">99.9%</div>
              <div className="text-gray-400 text-xs">Page Speed Score</div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[80px] -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
