"use client";

import { motion } from 'motion/react';
import ParticlesBackground from '@/src/features/landing/components/ParticlesBackground';
import { ArrowUpRight, Building2, Ship, BarChart3, Blocks, Globe, Smartphone } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI-POWERED REAL',
    titleHighlight: 'ESTATE CRM',
    description: 'Developed a predictive analytics platform for high-value property assets, increasing sales velocity by 35%. Features market trend forecasting and intelligent lead scoring.',
    icon: Building2,
    accentColor: 'cyan',
    stats: [
      { label: 'Sales Increase', value: '+35%' },
      { label: 'Lead Conversion', value: '2.5x' },
      { label: 'Time Saved', value: '60hrs/mo' },
    ],
    tags: ['Next.js', 'AI/ML', 'Real Estate'],
  },
  {
    id: 2,
    title: 'BLOCKCHAIN SUPPLY',
    titleHighlight: 'CHAIN TRACKER',
    description: 'Built a decentralized application for real-time transparency and security in global logistics, reducing counterfeiting and delays.',
    icon: Blocks,
    accentColor: 'amber',
    stats: [
      { label: 'Cost Reduction', value: '-40%' },
      { label: 'Transparency', value: '100%' },
      { label: 'Partners', value: '50+' },
    ],
    tags: ['Web3', 'Blockchain', 'Logistics'],
  },
  {
    id: 3,
    title: 'LUXURY YACHT',
    titleHighlight: 'BOOKING PLATFORM',
    description: 'Premium yacht charter platform with real-time availability, crew management, and seamless payment integration for high-net-worth clients.',
    icon: Ship,
    accentColor: 'cyan',
    stats: [
      { label: 'Bookings', value: '+200%' },
      { label: 'Revenue', value: '$2.5M' },
      { label: 'User Rating', value: '4.9★' },
    ],
    tags: ['React Native', 'Stripe', 'Yachting'],
  },
];

export default function OurPortfolioSection() {
  return (
    <section id="portfolio" className="relative py-24 bg-navy-950 overflow-hidden z-10 border-t border-cyan-500/10">
       
       {/* Background Elements */}
       <div className="absolute inset-0 z-0">
          <ParticlesBackground className="absolute inset-0 z-10 opacity-30" count={40} colors={["#06B6D4", "#F59E0B"]} />
          <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
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
             OUR PORTFOLIO
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto"
           >
             Showcasing our most impactful and innovative client projects.
           </motion.p>
         </div>

         {/* Projects */}
         <div className="space-y-20 max-w-6xl mx-auto">
           {projects.map((project, idx) => {
             const IconComponent = project.icon;
             const isReversed = idx % 2 !== 0;
             const isCyan = project.accentColor === 'cyan';
             
             return (
               <motion.div
                 key={project.id}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.6, delay: idx * 0.1 }}
                 className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}
               >
                 
                 {/* Visual Card */}
                 <motion.div 
                   className="w-full lg:w-1/2 relative group"
                   whileHover={{ scale: 1.02 }}
                   transition={{ duration: 0.3 }}
                 >
                   {/* Glow */}
                   <div className={`absolute -inset-4 ${isCyan ? 'bg-cyan-500/20' : 'bg-amber-500/20'} rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                   
                   {/* Main Card */}
                   <div className={`relative bg-navy-900/80 backdrop-blur-sm border-2 ${isCyan ? 'border-cyan-500/40 group-hover:border-cyan-400/60' : 'border-amber-500/40 group-hover:border-amber-400/60'} rounded-2xl overflow-hidden transition-all duration-500 ${isCyan ? 'shadow-[0_0_40px_rgba(6,182,212,0.15)]' : 'shadow-[0_0_40px_rgba(245,158,11,0.15)]'}`}>
                     
                     {/* Corner Accents */}
                     <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${isCyan ? 'border-cyan-400/50' : 'border-amber-400/50'} rounded-tl-xl`} />
                     <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${isCyan ? 'border-cyan-400/50' : 'border-amber-400/50'} rounded-br-xl`} />
                     
                     {/* Card Content */}
                     <div className="aspect-[16/10] relative flex items-center justify-center p-8">
                       
                       {/* Background Pattern */}
                       <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,${isCyan ? 'rgba(6,182,212,0.1)' : 'rgba(245,158,11,0.1)'},transparent_70%)]`} />
                       
                       {/* Floating Icon */}
                       <motion.div
                         animate={{ 
                           y: [0, -10, 0],
                           rotate: [0, 2, -2, 0],
                         }}
                         transition={{ 
                           duration: 4, 
                           repeat: Infinity, 
                           ease: "easeInOut" 
                         }}
                         className={`relative w-32 h-32 rounded-2xl bg-gradient-to-br ${isCyan ? 'from-cyan-500/30 to-cyan-600/10' : 'from-amber-500/30 to-amber-600/10'} border border-white/10 flex items-center justify-center`}
                       >
                         <IconComponent 
                           size={64} 
                           strokeWidth={1}
                           className={`${isCyan ? 'text-cyan-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.8)]' : 'text-amber-400 drop-shadow-[0_0_30px_rgba(245,158,11,0.8)]'}`} 
                         />
                         
                         {/* Orbiting Dot */}
                         <motion.div
                           className="absolute w-full h-full"
                           animate={{ rotate: 360 }}
                           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                         >
                           <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${isCyan ? 'bg-cyan-400' : 'bg-amber-400'}`} />
                         </motion.div>
                       </motion.div>
                       
                       {/* Decorative Elements */}
                       <div className="absolute top-4 left-4 flex gap-2">
                         <div className={`w-2 h-2 rounded-full ${isCyan ? 'bg-cyan-400' : 'bg-amber-400'} animate-pulse`} />
                         <div className={`w-2 h-2 rounded-full ${isCyan ? 'bg-cyan-400/50' : 'bg-amber-400/50'}`} />
                         <div className={`w-2 h-2 rounded-full ${isCyan ? 'bg-cyan-400/30' : 'bg-amber-400/30'}`} />
                       </div>
                       
                       {/* Project Number */}
                       <div className="absolute bottom-4 right-4">
                         <span className={`font-oswald text-7xl font-bold ${isCyan ? 'text-cyan-500/10' : 'text-amber-500/10'}`}>
                           0{project.id}
                         </span>
                       </div>
                     </div>
                     
                     {/* Stats Bar */}
                     <div className={`flex justify-around border-t ${isCyan ? 'border-cyan-500/20' : 'border-amber-500/20'} py-4 px-6 bg-navy-950/50`}>
                       {project.stats.map((stat, sIdx) => (
                         <motion.div 
                           key={sIdx}
                           initial={{ opacity: 0, y: 10 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: 0.3 + sIdx * 0.1 }}
                           className="text-center"
                         >
                           <p className={`font-oswald text-xl md:text-2xl font-bold ${isCyan ? 'text-cyan-400' : 'text-amber-400'}`}>
                             {stat.value}
                           </p>
                           <p className="text-gray-400 text-xs uppercase tracking-wider">
                             {stat.label}
                           </p>
                         </motion.div>
                       ))}
                     </div>
                   </div>
                 </motion.div>

                 {/* Text Content */}
                 <motion.div 
                   initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                   className="w-full lg:w-1/2 space-y-6"
                 >
                   {/* Tags */}
                   <div className="flex flex-wrap gap-2">
                     {project.tags.map((tag, tIdx) => (
                       <span 
                         key={tIdx}
                         className={`px-3 py-1 text-xs uppercase tracking-wider rounded-full border ${isCyan ? 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10' : 'border-amber-500/30 text-amber-400 bg-amber-500/10'}`}
                       >
                         {tag}
                       </span>
                     ))}
                   </div>
                   
                   {/* Title */}
                   <h3 className="font-oswald text-3xl md:text-4xl font-bold uppercase text-white leading-tight">
                     {project.title} <br />
                     <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isCyan ? 'from-cyan-400 to-blue-500' : 'from-amber-400 to-orange-500'}`}>
                       {project.titleHighlight}
                     </span>
                   </h3>
                   
                   {/* Description */}
                   <p className="text-gray-300 font-light text-lg leading-relaxed">
                     {project.description}
                   </p>

                   {/* CTA Button */}
                   <motion.button 
                     whileHover={{ scale: 1.05, x: 5 }}
                     whileTap={{ scale: 0.98 }}
                     className={`px-8 py-3 bg-gradient-to-r ${isCyan ? 'from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]' : 'from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]'} text-black font-bold rounded-xl transition-all flex items-center gap-2 uppercase tracking-wide`}
                   >
                     View Case Study
                     <ArrowUpRight size={18} />
                   </motion.button>
                 </motion.div>

               </motion.div>
             );
           })}
         </div>

         {/* Bottom CTA */}
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex justify-center mt-20"
         >
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.98 }}
             className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-lg rounded-full shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] transition-all uppercase tracking-wider flex items-center gap-3"
           >
             <Globe size={20} />
             View All Projects
           </motion.button>
         </motion.div>

       </div>
    </section>
  );
}
