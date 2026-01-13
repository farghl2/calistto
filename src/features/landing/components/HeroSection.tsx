"use client";

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ChevronDown, Mouse } from 'lucide-react';
import ParticlesBackground from '@/src/features/landing/components/ParticlesBackground';
import { CTA_LINK, PORTFOLIO_LINK } from '@/src/shared/constans/data';

export default function HeroSection() {
  const t = useTranslations('hero');
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-linear-to-b from-navy-900 via-navy-800 to-navy-950">
      
      {/* Particles Effect */}
      <ParticlesBackground className="absolute inset-0 z-0" count={60} colors={["#F59E0B", "#06B6D4", "#ffffff", "#000000"]} />

      {/* Background Decorative - Left Side Sun/Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Text */}
        <div className="space-y-8 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-oswald font-bold leading-[1.1] tracking-wide text-5xl md:text-6xl lg:text-7xl">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-amber-500 block mb-2">
                {t('title_prefix')}
              </span>
              <span className="text-white block">
                {/* {t('title_highlight')} */} {/* Note: Swapped logic? No, mapping 1:1 based on lines */}
                {t('title_highlight')}
              </span>
              <span className="text-white block">
                {t('title_suffix')}
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-300 text-lg md:text-xl font-light tracking-wide max-w-lg"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-105 inline-block text-center">
              {t('start_project')}
            </a>
            <a href={PORTFOLIO_LINK} className="px-8 py-3 border border-white/20 text-white hover:bg-white/10 font-bold rounded-full tracking-wider transition-all backdrop-blur-sm inline-block text-center">
              {t('view_work')}
            </a>
          </motion.div>

          {/* Partners */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8 }}
             className="pt-8 flex items-center gap-6 opacity-80"
          >
             {/* Microsoft Azure */}
             <div className="flex items-center gap-2">
               <div className="w-4 h-4 bg-[#0089D6]" /> 
               <span className="text-white font-medium text-sm">Microsoft Azure</span>
             </div>
             {/* AWS */}
             <div className="flex items-center gap-2">
               <span className="text-white font-bold text-lg">aws</span>
             </div>
             {/* IBM Watson */}
             <div className="flex items-center gap-2">
               <div className="w-5 h-5 rounded-full border-2 border-green-400 opacity-80" />
               <span className="text-white font-normal text-sm">IBM Watson</span>
             </div>
          </motion.div>
        </div>

        {/* Right Column: Visual */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center mt-12 lg:mt-0"
        >
           {/* Glow behind image */}
           <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-amber-500/10 rounded-full blur-[80px]" />
           
           {/* The Image - Seamlessly integrated with responsive mask */}
           <div 
             className="relative w-full h-full md:h-[130%] -mt-5 md:-mt-20 scale-100 md:scale-125 z-0 pointer-events-none mask-[radial-gradient(circle_at_center,black_60%,transparent_88%)] md:mask-[radial-gradient(circle_at_65%_45%,black_40%,transparent_69%)]"
           >
              <Image 
                src="/hero-visual.png" 
                alt="AI Dashboard Visualization"
                fill
                className="object-contain object-center opacity-90"
                priority
              />
           </div>

           {/* Floating Data Widgets (CSS Overlay) */}
           <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-[10%] md:top-[20%] right-0 md:right-[-20px] glass-panel px-4 py-2 rounded-lg border-l-2 border-l-amber-500 scale-100 md:scale-100"
           >
             <span className="text-[8px] md:text-[10px] text-gray-400 uppercase block">Route Optimization</span>
             <span className="text-xs md:text-sm font-bold text-white">Active</span>
           </motion.div>

           <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute bottom-[20%] md:bottom-[30%] left-0 md:left-[-20px] glass-panel px-4 py-2 rounded-lg border-l-2 border-l-cyan-500 scale-100 md:scale-100"
           >
             <span className="text-[8px] md:text-[10px] text-gray-400 uppercase block">Energy Efficiency</span>
             <span className="text-xs md:text-sm font-bold text-white">98.4%</span>
           </motion.div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 group cursor-pointer"
        aria-label="Scroll down"
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Mouse Icon with Scroll Wheel */}
          <div className="relative w-7 h-11 rounded-full border-2 border-cyan-500/50 flex items-start justify-center p-2 group-hover:border-cyan-400 transition-colors">
            {/* Scroll Wheel Dot */}
            <motion.div
              className="w-1.5 h-3 bg-cyan-400 rounded-full"
              animate={{ 
                y: [0, 8, 0],
                opacity: [1, 0.3, 1],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          {/* Chevrons */}
          <div className="flex flex-col items-center -space-y-1">
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], y: [0, 2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 text-cyan-400/80" />
            </motion.div>
            <motion.div
              animate={{ opacity: [0.2, 0.8, 0.2], y: [0, 2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            >
              <ChevronDown className="w-4 h-4 text-cyan-400/60" />
            </motion.div>
          </div>
          
          {/* Text Label */}
          <span className="text-[10px] uppercase tracking-widest text-cyan-400/60 group-hover:text-cyan-400 transition-colors">
            {t('scroll')}
          </span>
        </motion.div>
      </motion.button>
    </section>
  );
}
