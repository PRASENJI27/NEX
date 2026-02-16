
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0c] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2 space-y-8">
            <div className="text-3xl font-black tracking-tighter text-white">
              NEX <span className="text-blue-500 font-light">WEBDEVELOPER</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Crafting premium digital experiences for the global stage. From Kolkata to New York, we build the future of the web.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-gray-400 group-hover:bg-white rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-sm text-gray-500">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#templates" className="hover:text-blue-500 transition-colors">Templates</a></li>
              <li><a href="#pricing" className="hover:text-blue-500 transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-sm text-gray-500">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Consulting</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} NEX WEBDEVELOPER. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
