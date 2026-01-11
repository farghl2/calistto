"use client";

import { motion } from 'motion/react';
import ParticlesBackground from '@/src/features/landing/components/ParticlesBackground';

// Tech Stack Data with better icons and colors matching the design
const techStack = [
  {
    name: 'React',
    color: 'cyan',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 md:w-16 md:h-16">
        <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    color: 'amber',
    svg: (
      <div className="flex items-center gap-1">
        <svg viewBox="0 0 24 24" className="w-10 h-10 md:w-12 md:h-12">
          <path d="M12 1.85l9.5 5.5v11L12 23.85l-9.5-5.5v-11l9.5-5.5zm0 2.3L4.7 8.6v7.8l7.3 4.45 7.3-4.45V8.6L12 4.15z" fill="currentColor"/>
          <text x="12" y="15" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor">JS</text>
        </svg>
        <span className="font-bold text-lg md:text-xl tracking-tight">node</span>
      </div>
    ),
  },
  {
    name: 'Python',
    color: 'cyan',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.2S18.28 0 11.914 0zM8.708 1.85a1.06 1.06 0 1 1 0 2.118 1.06 1.06 0 0 1 0-2.118z"/>
        <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.121s3.9.445 3.9-5.735c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.45s-3.24-.052-3.24 3.148v5.294S5.72 24 12.086 24zm3.206-1.85a1.06 1.06 0 1 1 0-2.118 1.06 1.06 0 0 1 0 2.118z"/>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    color: 'white',
    svg: (
      <div className="flex items-center gap-0">
        <span className="font-bold text-2xl md:text-3xl tracking-tighter">NEXT</span>
        <span className="font-light text-lg md:text-xl">.js</span>
      </div>
    ),
  },
  {
    name: 'PostgreSQL',
    color: 'cyan',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
        <path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02a10.922 10.922 0 0 0-1.612-.135c-.86-.009-1.66.122-2.373.398-.423-.14-.88-.237-1.397-.299-.93-.11-1.972-.06-3.053.193C3.378 1.168 1.64 2.943.88 5.062c-.47 1.313-.693 2.735-.755 4.262-.06 1.488.043 3.121.266 4.846.47 3.636 1.597 7.833 3.357 10.054.757.964 1.783 1.376 2.77 1.376.552 0 1.098-.128 1.618-.412.355-.194.695-.475 1.016-.855.05-.06.1-.119.148-.18.196.267.42.498.672.688.625.469 1.392.67 2.276.63a4.21 4.21 0 0 0 1.007-.162c.323-.093.63-.222.95-.397l.03-.016c.135.26.277.503.452.727.466.597 1.082.935 1.742 1.015.163.02.328.03.496.028.925-.011 1.88-.4 2.684-1.128.655-.593 1.202-1.358 1.53-2.238l.062-.175c.14.057.28.104.422.138.447.107.918.128 1.413.015.603-.138 1.143-.453 1.576-.927.504-.552.873-1.302 1.087-2.17.25-1.014.305-2.217.085-3.515l-.02-.11c-.133-.727-.346-1.588-.636-2.545-.275-.91-.613-1.868-1.013-2.788-.234-.537-.485-1.054-.752-1.54.104-.265.209-.564.31-.912.214-.735.35-1.523.365-2.297.016-.768-.09-1.487-.343-2.055a2.428 2.428 0 0 0-.16-.281l-.003-.005-.002-.003-.003-.005-.143-.186a2.75 2.75 0 0 0-.253-.27 3.35 3.35 0 0 0-1.033-.668c-.713-.322-1.61-.49-2.69-.415l-.034.002c-.346.027-.7.088-1.057.185a10.42 10.42 0 0 0-2.038-1.015A10.268 10.268 0 0 0 17.128 0z"/>
      </svg>
    ),
  },
  {
    name: 'AWS',
    color: 'amber',
    svg: (
      <span className="font-bold text-2xl md:text-3xl tracking-tight">aws</span>
    ),
  },
  {
    name: 'Docker',
    color: 'cyan',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
        <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
      </svg>
    ),
  },
  {
    name: 'Kubernetes',
    color: 'amber',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 md:w-16 md:h-16">
        <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" />
        <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/>
        <line x1="12" y1="9" x2="12" y2="2"/>
        <line x1="15" y1="10.5" x2="22" y2="7"/>
        <line x1="15" y1="13.5" x2="22" y2="17"/>
        <line x1="12" y1="15" x2="12" y2="22"/>
        <line x1="9" y1="13.5" x2="2" y2="17"/>
        <line x1="9" y1="10.5" x2="2" y2="7"/>
      </svg>
    ),
  },
];

export default function OurTechStackSection() {
  return (
    <section className="relative py-24 bg-navy-950 overflow-hidden z-10 border-t border-cyan-500/10">
       
       {/* Background Elements */}
       <div className="absolute inset-0 z-0">
          <ParticlesBackground className="absolute inset-0 z-10 opacity-20" count={30} colors={["#06B6D4", "#F59E0B"]} />
          
          {/* Circuit Pattern - Top Right */}
          <svg className="absolute top-0 right-0 w-64 h-64 opacity-20" viewBox="0 0 100 100">
            <path d="M100,20 L80,20 L80,40 L60,40" stroke="#06B6D4" strokeWidth="0.5" fill="none"/>
            <path d="M100,40 L70,40 L70,60 L50,60" stroke="#06B6D4" strokeWidth="0.5" fill="none"/>
            <circle cx="60" cy="40" r="2" fill="#06B6D4"/>
            <circle cx="50" cy="60" r="2" fill="#06B6D4"/>
          </svg>
          
          {/* Circuit Pattern - Bottom Left */}
          <svg className="absolute bottom-0 left-0 w-64 h-64 opacity-20" viewBox="0 0 100 100">
            <path d="M0,80 L20,80 L20,60 L40,60" stroke="#06B6D4" strokeWidth="0.5" fill="none"/>
            <path d="M0,60 L30,60 L30,40 L50,40" stroke="#06B6D4" strokeWidth="0.5" fill="none"/>
            <circle cx="40" cy="60" r="2" fill="#06B6D4"/>
            <circle cx="50" cy="40" r="2" fill="#06B6D4"/>
          </svg>
          
          {/* Flowing Wave Line - Animated */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 h-40 overflow-hidden">
            <motion.svg 
              className="absolute w-[200%] h-full"
              viewBox="0 0 2400 100" 
              preserveAspectRatio="none"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent"/>
                  <stop offset="25%" stopColor="#06B6D4" stopOpacity="0.3"/>
                  <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.2"/>
                  <stop offset="75%" stopColor="#06B6D4" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="transparent"/>
                </linearGradient>
              </defs>
              <path 
                d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50 T1500,50 T1800,50 T2100,50 T2400,50" 
                fill="none" 
                stroke="url(#waveGradient)" 
                strokeWidth="2"
              />
              <path 
                d="M0,50 Q150,80 300,50 T600,50 T900,50 T1200,50 T1500,50 T1800,50 T2100,50 T2400,50" 
                fill="none" 
                stroke="url(#waveGradient)" 
                strokeWidth="1"
                opacity="0.5"
              />
            </motion.svg>
          </div>
       </div>

       <div className="container mx-auto px-4 relative z-10">
         
         {/* Header */}
         <div className="text-center mb-20 space-y-4">
           <motion.h2 
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="font-oswald text-5xl md:text-6xl font-bold uppercase text-white tracking-wide"
           >
             OUR TECH STACK
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-300 text-lg md:text-xl font-light"
           >
             The powerful tools and frameworks powering our solutions.
           </motion.p>
         </div>

         {/* Infinite Scroll Marquee */}
         <div className="relative w-full overflow-hidden mb-20">
           {/* Fade Edges */}
           <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
           <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />
           
           {/* Scrolling Container */}
           <motion.div
             className="flex gap-16 md:gap-20 py-8"
             animate={{ x: ['0%', '-50%'] }}
             transition={{
               x: {
                 duration: 25,
                 repeat: Infinity,
                 ease: 'linear',
               },
             }}
           >
             {/* Duplicate items for seamless loop */}
             {[...techStack, ...techStack].map((tech, idx) => {
               const isCyan = tech.color === 'cyan';
               const isAmber = tech.color === 'amber';
               
               return (
                 <div
                   key={idx}
                   className="group flex items-center justify-center cursor-default shrink-0"
                 >
                   {/* Icon with Glow */}
                   <div className={`relative ${isCyan ? 'text-cyan-400' : isAmber ? 'text-amber-400' : 'text-white'} transition-transform duration-300 hover:scale-110`}>
                     {/* Glow Effect */}
                     <div className={`absolute inset-0 ${isCyan ? 'bg-cyan-400' : isAmber ? 'bg-amber-400' : 'bg-white'} opacity-20 blur-xl rounded-full`} />
                     
                     {/* Drop Shadow Glow */}
                     <div className={`${isCyan ? 'drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]' : isAmber ? 'drop-shadow-[0_0_20px_rgba(245,158,11,0.6)]' : 'drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]'}`}>
                       {tech.svg}
                     </div>
                   </div>
                 </div>
               );
             })}
           </motion.div>
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
             className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm sm:text-lg rounded-4xl shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] transition-all uppercase tracking-wider border-2 border-amber-400/50"
           >
             Get a Tech Consultation
           </motion.button>
         </motion.div>

       </div>
       
       {/* Decorative Star - Bottom Right */}
       <motion.div 
         className="absolute bottom-8 right-8"
         animate={{ rotate: 360, scale: [1, 1.2, 1] }}
         transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
       >
         <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="opacity-80">
           <polygon points="12,0 14,10 24,12 14,14 12,24 10,14 0,12 10,10"/>
         </svg>
       </motion.div>
    </section>
  );
}
