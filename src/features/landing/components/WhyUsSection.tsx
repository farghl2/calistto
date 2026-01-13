"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import { Brain, TrendingUp, Globe, ShieldCheck, Cog } from 'lucide-react';
import ParticlesBackground from '@/src/features/landing/components/ParticlesBackground';
import { CTA_LINK } from '@/src/shared/constans/data';



export default function WhyUsSection() {
  const t = useTranslations('why_us');

  const features = [
    {
      title: t('cards.ai_integration.title'),
      description: t('cards.ai_integration.desc'),
      icon: Brain,
      secondaryIcon: Cog,
      iconColor: 'text-cyan-400',
      iconGlow: 'drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]',
      borderColor: 'border-cyan-500/50',
      glowColor: 'shadow-[0_0_25px_rgba(6,182,212,0.25)]',
      hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]',
      iconBg: 'from-cyan-500/20 to-cyan-600/5',
      accentColor: 'cyan',
    },
    {
      title: t('cards.scalable.title'),
      description: t('cards.scalable.desc'),
      icon: TrendingUp,
      iconColor: 'text-amber-400',
      iconGlow: 'drop-shadow-[0_0_20px_rgba(245,158,11,0.8)]',
      borderColor: 'border-amber-500/50',
      glowColor: 'shadow-[0_0_25px_rgba(245,158,11,0.25)]',
      hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]',
      iconBg: 'from-amber-500/20 to-amber-600/5',
      accentColor: 'amber',
    },
    {
      title: t('cards.global.title'), // Note: "BUSINESS MINDSET" in old, "Global Standards" in JSON? Maps to 'global' key based on order? Old 3rd was "BUSINESS MINDSET". JSON 3rd is "global".
      description: t('cards.global.desc'),
      icon: Globe,
      iconColor: 'text-cyan-400',
      iconGlow: 'drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]',
      borderColor: 'border-cyan-500/50',
      glowColor: 'shadow-[0_0_25px_rgba(6,182,212,0.25)]',
      hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]',
      iconBg: 'from-cyan-500/20 to-cyan-600/5',
      accentColor: 'cyan',
    },
    {
      title: t('cards.security.title'),
      description: t('cards.security.desc'),
      icon: ShieldCheck,
      iconColor: 'text-amber-400',
      iconGlow: 'drop-shadow-[0_0_20px_rgba(245,158,11,0.8)]',
      borderColor: 'border-amber-500/50',
      glowColor: 'shadow-[0_0_25px_rgba(245,158,11,0.25)]',
      hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]',
      iconBg: 'from-amber-500/20 to-amber-600/5',
      accentColor: 'amber',
    }
  ];

  return (
    <section className="relative py-24 bg-navy-950 overflow-hidden z-10 border-t border-cyan-500/10">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
         {/* Particles */}
         <ParticlesBackground className="absolute inset-0 z-10 opacity-30" count={100} colors={["#06B6D4", "#F59E0B"]} />
         
         {/* Tech Grid */}
         <div 
           className="absolute inset-0 z-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-size-[60px_60px] opacity-30" 
         />
         
         {/* Ambient Glows */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

         {/* Circuit Lines SVG */}
         <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0" preserveAspectRatio="none">
            <path d="M0,50 Q400,100 800,50 T1600,50" fill="none" stroke="#06B6D4" strokeWidth="1" strokeDasharray="10 20" className="animate-pulse" />
            <path d="M0,200 Q300,250 600,200 T1200,200" fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="5 15" opacity="0.5" />
         </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-oswald text-5xl md:text-6xl font-bold uppercase text-white tracking-wide"
          >
            {t('title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl font-light"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            const SecondaryIcon = feature.secondaryIcon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`group relative bg-navy-900/40 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center text-center border-2 ${feature.borderColor} ${feature.glowColor} ${feature.hoverGlow} hover:scale-105 hover:-translate-y-1 transition-all duration-500 cursor-default`}
              >
                {/* Corner Accents */}
                <div className={`absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 ${feature.accentColor === 'cyan' ? 'border-cyan-500/40' : 'border-amber-500/40'} rounded-tl-xl`} />
                <div className={`absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 ${feature.accentColor === 'cyan' ? 'border-cyan-500/40' : 'border-amber-500/40'} rounded-br-xl`} />

                {/* Icon Container with Neon Effect */}
                <motion.div 
                  className={`relative mb-6 w-20 h-20 rounded-2xl bg-linear-to-br ${feature.iconBg} border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Inner Glow on Hover */}
                  <div className={`absolute inset-0 rounded-2xl ${feature.accentColor === 'cyan' ? 'bg-cyan-400/5' : 'bg-amber-400/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Main Icon with Neon Glow */}
                  <IconComponent 
                    size={40} 
                    strokeWidth={1.5}
                    className={`${feature.iconColor} ${feature.iconGlow} transition-all duration-300 group-hover:scale-110`} 
                  />
                  
                  {/* Secondary Icon (if exists) */}
                  {SecondaryIcon && (
                    <motion.div 
                      className="absolute -bottom-1 -right-1"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <SecondaryIcon 
                        size={18} 
                        strokeWidth={2}
                        className={`${feature.iconColor} drop-shadow-lg`} 
                      />
                    </motion.div>
                  )}
                  
                  {/* Animated Ring on Hover */}
                  <motion.div 
                    className={`absolute inset-0 rounded-2xl border-2 ${feature.accentColor === 'cyan' ? 'border-cyan-400/0 group-hover:border-cyan-400/20' : 'border-amber-400/0 group-hover:border-amber-400/20'} transition-all duration-500`}
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* Title */}
                <h3 className="font-oswald font-bold text-xl text-white uppercase mb-4 tracking-wide relative z-10">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed relative z-10 font-light">
                  {feature.description}
                </p>
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
          <motion.a 
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-lg rounded-full shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] transition-all uppercase tracking-wider inline-block text-center"
          >
            {t('cta')}
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
