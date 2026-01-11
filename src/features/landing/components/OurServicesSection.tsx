"use client";

import { motion } from 'motion/react';
import { BrainCircuit, Code2, Smartphone, Blocks } from 'lucide-react';
import ParticlesBackground from '@/src/features/landing/components/ParticlesBackground';

const services = [
  {
    title: 'AI & MACHINE LEARNING SOLUTIONS',
    description: 'Custom deep-learning models for predictive analytics, automation, and intelligent data insights.',
    icon: BrainCircuit,
    borderColor: 'border-cyan-500/60',
    glowColor: 'shadow-[0_0_30px_rgba(6,182,212,0.3)]',
    hoverGlow: 'group-hover:shadow-[0_0_50px_rgba(6,182,212,0.5)]',
    iconColor: 'text-cyan-400',
    iconGlow: 'drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]',
    iconBg: 'from-cyan-500/20 to-cyan-600/10',
    accentColor: 'cyan',
  },
  {
    title: 'MODERN WEB DEVELOPMENT',
    description: 'Scalable, high-performance web applications built with Next.js, React, and Node.js.',
    icon: Code2,
    borderColor: 'border-amber-500/60',
    glowColor: 'shadow-[0_0_30px_rgba(245,158,11,0.3)]',
    hoverGlow: 'group-hover:shadow-[0_0_50px_rgba(245,158,11,0.5)]',
    iconColor: 'text-amber-400',
    iconGlow: 'drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]',
    iconBg: 'from-amber-500/20 to-amber-600/10',
    accentColor: 'amber',
  },
  {
    title: 'CROSS-PLATFORM MOBILE APPS',
    description: 'Native-quality iOS and Android applications for seamless user experiences on any device.',
    icon: Smartphone,
    borderColor: 'border-cyan-500/60',
    glowColor: 'shadow-[0_0_30px_rgba(6,182,212,0.3)]',
    hoverGlow: 'group-hover:shadow-[0_0_50px_rgba(6,182,212,0.5)]',
    iconColor: 'text-cyan-400',
    iconGlow: 'drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]',
    iconBg: 'from-cyan-500/20 to-cyan-600/10',
    accentColor: 'cyan',
  },
  {
    title: 'BLOCKCHAIN & WEB3 INNOVATION',
    description: 'Secure decentralized applications (dApps), smart contracts, and crypto-asset integration.',
    icon: Blocks,
    borderColor: 'border-amber-500/60',
    glowColor: 'shadow-[0_0_30px_rgba(245,158,11,0.3)]',
    hoverGlow: 'group-hover:shadow-[0_0_50px_rgba(245,158,11,0.5)]',
    iconColor: 'text-amber-400',
    iconGlow: 'drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]',
    iconBg: 'from-amber-500/20 to-amber-600/10',
    accentColor: 'amber',
  }
];

export default function OurServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-navy-950 overflow-hidden z-10 border-t border-cyan-500/10">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
         <ParticlesBackground className="absolute inset-0 z-10 opacity-30" count={60} colors={["#06B6D4", "#F59E0B"]} />
         {/* Circuit Grid Pattern */}
         <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />
         {/* Central Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
         {/* Top Right Accent */}
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-oswald text-5xl md:text-6xl font-bold uppercase text-white tracking-wide"
          >
            OUR SERVICES
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto"
          >
            Tailored digital solutions powered by advanced AI and robust engineering.
          </motion.p>
        </div>

        {/* Services Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className={`group relative bg-navy-900/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border-2 ${service.borderColor} ${service.glowColor} ${service.hoverGlow} hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left cursor-default`}
              >
                {/* Corner Accents */}
                <div className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 ${service.accentColor === 'cyan' ? 'border-cyan-500/40' : 'border-amber-500/40'} rounded-tl-xl`} />
                <div className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 ${service.accentColor === 'cyan' ? 'border-cyan-500/40' : 'border-amber-500/40'} rounded-br-xl`} />
                
                {/* Icon Container with Neon Effect */}
                <motion.div 
                  className={`relative shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${service.iconBg} border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                  whileHover={{ rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Inner Glow */}
                  <div className={`absolute inset-0 rounded-2xl ${service.accentColor === 'cyan' ? 'bg-cyan-400/5' : 'bg-amber-400/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Icon with Neon Glow */}
                  <IconComponent 
                    size={48} 
                    strokeWidth={1.5}
                    className={`${service.iconColor} ${service.iconGlow} transition-all duration-300 group-hover:scale-110`} 
                  />
                  
                  {/* Animated Ring on Hover */}
                  <motion.div 
                    className={`absolute inset-0 rounded-2xl border-2 ${service.accentColor === 'cyan' ? 'border-cyan-400/0 group-hover:border-cyan-400/30' : 'border-amber-400/0 group-hover:border-amber-400/30'} transition-all duration-500`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className={`font-oswald font-bold text-lg md:text-xl uppercase mb-3 tracking-wide text-white`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-lg rounded-full shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] transition-all uppercase tracking-wider"
          >
            Ask an Engineer
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
