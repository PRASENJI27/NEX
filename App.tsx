
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Templates from './components/Templates';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import AISuggestion from './components/AISuggestion';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0c] selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <Hero />
      <Brands />
      
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-8">Have a vision? <br /> <span className="text-blue-500">Let's AI Brainstorm.</span></h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12">Use our proprietary AI consultant to get instant feature ideas for your niche.</p>
        <AISuggestion />
      </section>

      <Templates />
      <Pricing />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
