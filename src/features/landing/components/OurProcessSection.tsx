"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import ParticlesBackground from '@/src/features/landing/components/ParticlesBackground';
import { Search, LayoutTemplate, FileCode2, Bug, Rocket } from 'lucide-react';
import { CTA_LINK } from '@/src/shared/constans/data';

export default function OurProcessSection() {
  const t = useTranslations('process');

  const steps = [
    {
      id: 1,
      title: t('steps.discovery.title'),
      description: t('steps.discovery.desc'),
      icon: Search,
      color: 'cyan'
    },
    {
      id: 2,
      title: t('steps.design.title'),
      description: t('steps.design.desc'),
      icon: LayoutTemplate,
      color: 'amber'
    },
    {
      id: 3,
      title: t('steps.development.title'),
      description: t('steps.development.desc'),
      icon: FileCode2,
      color: 'cyan'
    },
    {
      id: 4,
      title: t('steps.testing.title'),
      description: t('steps.testing.desc'),
      icon: Bug,
      color: 'amber'
    },
    {
      id: 5,
      title: t('steps.deployment.title'),
      description: t('steps.deployment.desc'),
      icon: Rocket,
      color: 'cyan'
    }
  ];

  return (
    <section id='process' className="relative py-24 bg-navy-950 overflow-hidden z-10 border-t border-cyan-500/10">
       
       {/* Background Elements */}
       <div className="absolute inset-0 z-0">
          <ParticlesBackground className="absolute inset-0 z-10 opacity-30" count={40} colors={["#06B6D4", "#F59E0B"]} />
          <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-size-[60px_60px] opacity-30" />
       </div>

       <div className="container mx-auto px-4 relative z-10">
         
         {/* Header */}
         <div className="text-center mb-24 space-y-4">
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

         {/* Process Timeline */}
         <div className="relative max-w-7xl mx-auto mb-20 hidden md:block">
            
            {/* Connecting Line (SVG) */}
            <svg className="absolute top-12 left-0 w-full h-24 z-0 pointer-events-none" preserveAspectRatio="none">
               <path 
                 d="M 50,20 C 250,20 250,55 450,55 C 650,55 650,20 850,20 C 1050,20 1050,55 1250,55"
                 fill="none" 
                 stroke="url(#lineGradient)" 
                 strokeWidth="2" 
                 className="drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
               />
               <defs>
                 <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                   <stop offset="0%" stopColor="#06B6D4" />
                   <stop offset="25%" stopColor="#F59E0B" />
                   <stop offset="50%" stopColor="#06B6D4" />
                   <stop offset="75%" stopColor="#F59E0B" />
                   <stop offset="100%" stopColor="#06B6D4" />
                 </linearGradient>
               </defs>
            </svg>

            <div className="grid grid-cols-5 gap-4 relative z-10">
               {steps.map((step, idx) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex flex-col items-center text-center group"
                  >
                     {/* Step Icon */}
                     <div className={`w-24 h-24 rounded-full bg-navy-900 border-2 ${step.color === 'cyan' ? 'border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)]'} flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300`}>
                        {/* Number Badge */}
                        <div className={`absolute -top-2 -left-2 w-8 h-8 rounded-full ${step.color === 'cyan' ? 'bg-cyan-500' : 'bg-amber-500'} text-black font-bold flex items-center justify-center shadow-lg`}>
                           {step.id}
                        </div>
                        {/* Inner Content */}
                        <div className={`w-20 h-20 rounded-full ${step.color === 'cyan' ? 'bg-cyan-500/10' : 'bg-amber-500/10'} flex items-center justify-center backdrop-blur-sm`}>
                           <step.icon size={32} className={step.color === 'cyan' ? 'text-cyan-400' : 'text-amber-400'} />
                        </div>
                     </div>

                     {/* Content */}
                     <h3 className="font-oswald font-bold text-lg text-white uppercase mb-3 px-2">
                       {step.title}
                     </h3>
                     <p className="text-gray-400 text-sm leading-relaxed px-2 font-light">
                       {step.description}
                     </p>
                  </motion.div>
               ))}
            </div>
         </div>

         {/* Mobile Timeline (Vertical) */}
         <div className="md:hidden space-y-12 relative mb-16">
            <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-linear-to-b from-cyan-500 via-amber-500 to-cyan-500 opacity-30" />
            
            {steps.map((step, idx) => (
               <div key={step.id} className="flex gap-6 relative">
                  <div className={`w-12 h-12 shrink-0 rounded-full bg-navy-900 border-2 ${step.color === 'cyan' ? 'border-cyan-500' : 'border-amber-500'} flex items-center justify-center z-10`}>
                     <span className={`font-bold ${step.color === 'cyan' ? 'text-cyan-400' : 'text-amber-400'}`}>{step.id}</span>
                  </div>
                  <div className="pt-2 pb-8">
                     <h3 className="font-oswald font-bold text-lg text-white uppercase mb-2">
                       {step.title}
                     </h3>
                     <p className="text-gray-400 text-sm leading-relaxed font-light">
                       {step.description}
                     </p>
                  </div>
               </div>
            ))}
         </div>

         {/* CTA Button */}
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="flex justify-center"
         >
           <a 
             href={CTA_LINK}
             target="_blank"
             rel="noopener noreferrer"
             className="px-10 py-4 bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-lg rounded-full shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] hover:scale-105 transition-all uppercase tracking-wider inline-block text-center"
           >
             {t('cta')}
           </a>
         </motion.div>

       </div>
    </section>
  );
}
