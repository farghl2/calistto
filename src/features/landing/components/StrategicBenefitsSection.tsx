"use client";

import { motion } from 'motion/react';

const benefits = [
  {
    title: 'EFFICIENCY',
    description: 'Automate 70% of manual operations.',
    color: 'amber',
    // Custom SVG for Gear + Clock + Arrow
    icon: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 md:w-32 md:h-32">
        {/* Main Gear */}
        <g className="text-amber-400" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M50 20 L53 28 L60 25 L58 33 L66 35 L60 40 L65 47 L57 47 L57 55 L50 50 L43 55 L43 47 L35 47 L40 40 L34 35 L42 33 L40 25 L47 28 L50 20Z" />
          <circle cx="50" cy="40" r="8" />
        </g>
        {/* Clock Circle */}
        <g className="text-amber-400">
          <circle cx="70" cy="70" r="18" fill="none" stroke="currentColor" strokeWidth="2"/>
          <line x1="70" y1="70" x2="70" y2="58" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="70" y1="70" x2="80" y2="70" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="70" cy="70" r="2" fill="currentColor"/>
        </g>
        {/* Circular Arrow */}
        <g className="text-cyan-400">
          <path d="M25 55 A25 25 0 1 1 55 25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <polygon points="55,15 55,35 65,25" fill="currentColor"/>
        </g>
      </svg>
    ),
  },
  {
    title: 'PRECISION',
    description: 'AI-backed decision-making for high-value assets.',
    color: 'purple',
    // Custom SVG for Target + Brain
    icon: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 md:w-32 md:h-32">
        {/* Outer Target Ring */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="url(#purpleGradient)" strokeWidth="2"/>
        {/* Middle Ring */}
        <circle cx="50" cy="50" r="32" fill="none" stroke="url(#purpleGradient)" strokeWidth="1.5"/>
        {/* Inner Ring */}
        <circle cx="50" cy="50" r="20" fill="none" stroke="url(#purpleGradient)" strokeWidth="1"/>
        {/* Crosshairs */}
        <line x1="50" y1="5" x2="50" y2="25" stroke="#A855F7" strokeWidth="2"/>
        <line x1="50" y1="75" x2="50" y2="95" stroke="#A855F7" strokeWidth="2"/>
        <line x1="5" y1="50" x2="25" y2="50" stroke="#A855F7" strokeWidth="2"/>
        <line x1="75" y1="50" x2="95" y2="50" stroke="#A855F7" strokeWidth="2"/>
        {/* Brain Icon */}
        <g className="text-cyan-400" transform="translate(35, 35) scale(0.6)">
          <path d="M50 15 C35 15 25 25 25 40 C25 50 30 55 35 58 L35 70 L45 70 L45 60 C47 61 50 61 50 61 C50 61 53 61 55 60 L55 70 L65 70 L65 58 C70 55 75 50 75 40 C75 25 65 15 50 15Z" 
                fill="none" stroke="currentColor" strokeWidth="3"/>
          <path d="M40 30 Q50 25 60 30" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M35 40 Q50 45 65 40" fill="none" stroke="currentColor" strokeWidth="2"/>
        </g>
        <defs>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A855F7"/>
            <stop offset="100%" stopColor="#C084FC"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'SCALE',
    description: 'Infrastructure built to handle global demand.',
    color: 'cyan',
    // Custom SVG for Globe + Arrow
    icon: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 md:w-32 md:h-32">
        {/* Globe */}
        <g className="text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="45" cy="55" r="35"/>
          {/* Latitude lines */}
          <ellipse cx="45" cy="55" rx="35" ry="12"/>
          <ellipse cx="45" cy="55" rx="35" ry="25"/>
          {/* Longitude line */}
          <ellipse cx="45" cy="55" rx="12" ry="35"/>
        </g>
        {/* Trending Arrow */}
        <g className="text-amber-400">
          <path d="M55 45 L75 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <polygon points="80,10 70,15 75,25" fill="currentColor"/>
          {/* Arrow base bars */}
          <line x1="50" y1="55" x2="55" y2="45" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </g>
      </svg>
    ),
  },
];

export default function StrategicBenefitsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-navy-950 overflow-hidden z-10 border-t border-cyan-500/10">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Circuit Lines - Horizontal */}
        <svg className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="circuitGradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent"/>
              <stop offset="15%" stopColor="#06B6D4" stopOpacity="0.4"/>
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.3"/>
              <stop offset="85%" stopColor="#06B6D4" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="transparent"/>
            </linearGradient>
          </defs>
          {/* Main horizontal lines */}
          <path d="M0,40 L300,40 L330,20 L600,20 L630,40 L900,40 L930,60 L1200,60" stroke="url(#circuitGradientLine)" strokeWidth="1.5" fill="none"/>
          <path d="M0,60 L250,60 L280,80 L650,80 L680,60 L950,60 L980,40 L1200,40" stroke="url(#circuitGradientLine)" strokeWidth="1" fill="none"/>
          {/* Circuit nodes */}
          <circle cx="330" cy="20" r="4" fill="#06B6D4" opacity="0.8">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="630" cy="40" r="4" fill="#A855F7" opacity="0.8">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin="0.5s"/>
          </circle>
          <circle cx="930" cy="60" r="4" fill="#06B6D4" opacity="0.8">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin="1s"/>
          </circle>
        </svg>
        
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
        
        {/* Side glows */}
        <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-amber-500/8 rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[350px] h-[350px] bg-cyan-500/8 rounded-full blur-[100px] -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-white tracking-wide"
          >
            STRATEGIC BENEFITS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              (THE ROI)
            </span>
          </motion.h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => {
            const isAmber = benefit.color === 'amber';
            const isPurple = benefit.color === 'purple';
            const isCyan = benefit.color === 'cyan';
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Container with Glow */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative mb-8"
                >
                  {/* Glow Effect Behind Icon */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 rounded-full blur-2xl transition-all duration-500 ${
                    isAmber ? 'bg-amber-500/40 group-hover:bg-amber-500/60' :
                    isPurple ? 'bg-purple-500/40 group-hover:bg-purple-500/60' :
                    'bg-cyan-500/40 group-hover:bg-cyan-500/60'
                  }`} />
                  
                  {/* Icon with Neon Shadow */}
                  <div className={`relative z-10 transition-all duration-300 ${
                    isAmber ? 'drop-shadow-[0_0_30px_rgba(245,158,11,0.5)] group-hover:drop-shadow-[0_0_40px_rgba(245,158,11,0.8)]' :
                    isPurple ? 'drop-shadow-[0_0_30px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_40px_rgba(168,85,247,0.8)]' :
                    'drop-shadow-[0_0_30px_rgba(6,182,212,0.5)] group-hover:drop-shadow-[0_0_40px_rgba(6,182,212,0.8)]'
                  }`}>
                    {benefit.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className={`font-oswald text-xl md:text-2xl font-bold uppercase tracking-wider mb-4 ${
                  isAmber ? 'text-amber-400' :
                  isPurple ? 'text-purple-400' :
                  'text-cyan-400'
                }`}>
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed max-w-[280px]">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
      
      {/* Decorative Star */}
      <motion.div 
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10"
        animate={{ rotate: 360, scale: [1, 1.3, 1] }}
        transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="opacity-70">
          <polygon points="12,0 14,10 24,12 14,14 12,24 10,14 0,12 10,10"/>
        </svg>
      </motion.div>
    </section>
  );
}
