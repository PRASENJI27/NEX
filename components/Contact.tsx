
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl font-black">Get in <span className="text-blue-500">Touch.</span></h2>
              <p className="text-gray-400">Ready to start your next global project? Visit us or drop a message.</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 border border-white/10">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold">Our Location</h4>
                  <p className="text-gray-400 text-sm">Park Circus, Kolkata, West Bengal, India</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 border border-white/10">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-gray-400 text-sm">hello@nexwebdev.com</p>
                </div>
              </div>
            </div>

            <div className="h-64 rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
               {/* Simplified map representation */}
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14739.389243764516!2d88.35824888715818!3d22.5473729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276d403444983%3A0x8e83b8e734567262!2sPark%20Circus%2C%20Ballygunge%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1708512345678!5m2!1sen!2sin" 
                className="w-full h-full border-none"
                loading="lazy"
               ></iframe>
            </div>
          </div>

          <div className="p-8 lg:p-12 rounded-[40px] glass-card border-white/5">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400">Your Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400">Project Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-all appearance-none text-gray-400">
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>E-commerce Solution</option>
                  <option>UI/UX Design</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400">Message</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-all h-32 resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full py-5 bg-blue-600 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all transform hover:scale-[1.02]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
