"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import Image from 'next/image';
import ParticlesBackground from '@/src/features/landing/components/ParticlesBackground';

export default function IndustrySpecificSection() {
  const t = useTranslations('industry_specific');

  const industries = [
    {
      id: 'real-estate',
      title: t('cards.real_estate.title'),
      description: t('cards.real_estate.desc'),
      image: '/card-real-estate.png',
      color: 'cyan', // #06B6D4
      borderColor: 'border-cyan-400',
      glowColor: 'shadow-cyan-400/50',
      headerGradient: 'from-cyan-400/20 to-transparent'
    },
    {
      id: 'yachts',
      title: t('cards.yachts.title'),
      description: t('cards.yachts.desc'),
      image: '/card-yacht.png',
      color: 'amber', // #F59E0B
      borderColor: 'border-amber-400',
      glowColor: 'shadow-amber-400/50',
      headerGradient: 'from-amber-400/20 to-transparent'
    },
    {
      id: 'stocks',
      title: t('cards.stocks.title'),
      description: t('cards.stocks.desc'),
      image: '/card-stocks.png',
      color: 'emerald', // #10B981
      borderColor: 'border-emerald-400',
      glowColor: 'shadow-emerald-400/50',
      headerGradient: 'from-emerald-400/20 to-transparent'
    },
    {
      id: 'ecommerce',
      title: t('cards.ecommerce.title'),
      description: t('cards.ecommerce.desc'),
      image: '/card-ecommerce.png',
      color: 'purple', // #A855F7
      borderColor: 'border-purple-400',
      glowColor: 'shadow-purple-400/50',
      headerGradient: 'from-purple-400/20 to-transparent'
    }
  ];

  return (
    <section className="relative pt-32 pb-20 -mt-20 md:-mt-32 overflow-hidden z-10 bg-linear-to-b from-transparent to-navy-950">
       {/* Particles Effect */}
       <ParticlesBackground className="absolute inset-0 z-0 opacity-40" count={80} colors={["#F59E0B", "#06B6D4", "#10B981", "#A855F7"]} />
       
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

       <div className="container mx-auto px-4 relative z-10">
         
         {/* Headers */}
         <div className="text-center mb-16 space-y-4">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="font-oswald text-4xl md:text-5xl font-bold uppercase text-white tracking-wide"
           >
             {t('title')}
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-400 font-light text-lg tracking-wide"
           >
             {t('subtitle')}
           </motion.p>
         </div>

         {/* Cards Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group bg-navy-800/20 backdrop-blur-sm border ${industry.borderColor} rounded-2xl p-1 flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] ${industry.glowColor} hover:shadow-lg`}
                style={{ borderWidth: '1px' }}
              >
                 {/* Inner Content Container */}
                 <div className="w-full h-full bg-navy-900/90 rounded-[14px] overflow-hidden flex flex-col relative">
                    
                    {/* Top Glow/Highlight */}
                    <div className={`absolute top-0 left-0 w-full h-32 bg-linear-to-b ${industry.headerGradient} opacity-50 group-hover:opacity-80 transition-opacity`} />
                    
                    {/* Image Area */}
                    <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden">
                       {/* Ambient Color Glow */}
                       <div className={`absolute inset-0 bg-${industry.color}-500/20 blur-3xl rounded-full scale-75 opacity-60`} />

                       <Image 
                         src={industry.image} 
                         alt={industry.title} 
                         fill
                         className="object-contain p-2 mix-blend-screen relative z-10 hover:scale-110 transition-transform duration-500"
                       />
                    </div>

                    {/* Content Area */}
                    <div className="px-6 pb-8 pt-2 relative z-10">
                       {/* Divider Line */}
                       <div className={`w-12 h-[2px] mx-auto mb-4 bg-linear-to-r from-transparent via-${industry.color}-500 to-transparent shadow-[0_0_8px_currentColor]`} />

                       <h3 className="font-oswald text-xl font-bold text-white uppercase tracking-wider mb-3">
                         {industry.title}
                       </h3>

                       <p className="text-gray-400 text-sm leading-relaxed font-light">
                         {industry.description}
                       </p>
                    </div>

                    {/* Bottom Edge Highlight */}
                    <div className={`absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-${industry.color}-400 to-transparent opacity-50`} />
                 </div>
              </motion.div>
            ))}
         </div>

       </div>
    </section>
  );
}
