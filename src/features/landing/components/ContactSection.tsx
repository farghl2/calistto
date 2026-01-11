"use client";

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

import ParticlesBackground from '@/src/features/landing/components/ParticlesBackground';

export default function ContactSection() {
  return (
    <section className="relative py-24 pb-48 bg-navy-950 overflow-hidden z-10 border-t border-cyan-500/10" id="contact">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <ParticlesBackground className="absolute inset-0 z-10 opacity-30" count={40} colors={["#06B6D4", "#F59E0B"]} />
         <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-size-[60px_60px] opacity-30" />
         {/* Ambient Glows */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-gray-400">
            Let's build the future of your industry together. Reach out for a demo or consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel-heavy p-8 rounded-2xl glow-box-cyan border-l-4 border-l-cyan-500"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Company</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Your company name" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Select Industry</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-gray-300 focus:outline-none focus:border-cyan-500 transition-colors">
                   <option>Real Estate</option>
                   <option>Yachts</option>
                   <option>Finance</option>
                   <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="How can we help you?" />
              </div>
              
              <button type="button" className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg transition-colors tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20">
                SEND MESSAGE
                <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Map & Info */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex flex-col gap-6"
          >
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
               <div className="glass-panel p-4 rounded-xl flex flex-col items-center text-center">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-2">
                    <MapPin size={16} />
                  </div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Global HQ</span>
                  <span className="text-xs text-white">Alexandria, Egypt</span>
               </div>
               <div className="glass-panel p-4 rounded-xl flex flex-col items-center text-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-2">
                    <Mail size={16} />
                  </div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Email</span>
                  <span className="text-xs text-white">contact@calistto.com</span>
               </div>
               <div className="glass-panel p-4 rounded-xl flex flex-col items-center text-center">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 mb-2">
                    <Phone size={16} />
                  </div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Phone</span>
                  <span className="text-xs text-white">+20 123 456 7890</span>
               </div>
            </div>

            {/* World Map Visual (CSS Representation) */}
            <div className="flex-1 glass-panel rounded-2xl relative overflow-hidden min-h-[300px]">
               <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-center bg-no-repeat bg-contain opacity-20 invert" />
               
               {/* Glowing Points */}
               <div className="absolute top-[40%] left-[55%] w-3 h-3 bg-cyan-500 rounded-full animate-ping" />
               <div className="absolute top-[40%] left-[55%] w-3 h-3 bg-cyan-500 rounded-full border-2 border-white shadow-[0_0_20px_#06b6d4]" />
               
               <div className="absolute top-[35%] left-[48%] w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
               <div className="absolute top-[25%] left-[20%] w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
               
               {/* Connection Lines */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none">
                 <path d="M 400 200 Q 300 100 150 150" stroke="#06b6d4" strokeWidth="1" fill="transparent" strokeOpacity="0.3" />
               </svg>
            </div>

            {/* Partners */}
            <div className="glass-panel p-6 rounded-xl flex justify-between items-center opacity-70 grayscale hover:grayscale-0 transition-all">
               <span className="text-white font-bold flex items-center gap-2"><div className="w-4 h-4 bg-blue-500 rounded-sm" /> Microsoft Azure</span>
               <span className="text-white font-bold flex items-center gap-2">aws</span>
               <span className="text-white font-bold flex items-center gap-2"><div className="w-4 h-4 rounded-full border border-white" /> IBM Watson</span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
