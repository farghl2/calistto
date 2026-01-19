"use client";

import { motion } from 'motion/react';
import Navbar from '@/src/features/landing/components/Navbar';
import Footer from '@/src/features/landing/components/Footer';
import ParticlesBackground from '@/src/features/landing/components/ParticlesBackground';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Calendar, Briefcase, ExternalLink, Code2, Layers, Cpu, Zap, Target, Award, Rocket } from 'lucide-react';
import { CTA_LINK, projectsData } from '@/src/shared/constans/data';
import { useRouter } from 'next/navigation';

export default function SingleProject({ projectId }: { projectId: number }) {
  const router = useRouter();
  
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) return null;

  const isCyan = project.color === 'cyan';
  const Icon = project.icon;

  // Enhance project with features if missing (fallback logic)
  // But we added them to data index, so we can cast to string[] if TS complains, 
  // or just use optional chaining
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const features = (project as any).features || []; 

  return (
    <main className="min-h-screen bg-navy-950 text-white selection:bg-cyan-500/30 font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 md:pt-48 pb-20 md:pb-32 overflow-hidden border-b border-white/5">
        {/* Dynamic Background */}
        <div className={`absolute inset-0 bg-linear-to-b ${isCyan ? 'from-cyan-900/20 via-navy-950/80 to-navy-950' : 'from-amber-900/20 via-navy-950/80 to-navy-950'} z-0`} />
        
        {/* Particles & Grid */}
        <ParticlesBackground className="absolute inset-0 z-0 opacity-20" count={30} colors={isCyan ? ["#06B6D4", "#ffffff"] : ["#F59E0B", "#ffffff"]} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px] opacity-10 pointer-events-none" />

        <div className="container max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
            
            {/* Left Content */}
            <motion.div 
                className="flex-1 text-center md:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
                    <button 
                        onClick={() => router.back()}
                        className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold"
                    >
                        <div className={`p-1.5 rounded-full border border-white/10 ${isCyan ? 'group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30' : 'group-hover:bg-amber-500/10 group-hover:border-amber-500/30'} transition-all`}>
                            <ArrowLeft size={14} />
                        </div>
                        Back
                    </button>
                    
                    <span className={`inline-block py-1 px-3 rounded-full bg-navy-900/80 border border-white/10 ${isCyan ? 'text-cyan-400 border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]' : 'text-amber-400 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]'} text-xs font-bold uppercase tracking-widest bg-blur-sm`}>
                        {project.category}
                    </span>
                </div>

                <h1 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wide leading-[0.9] text-white mb-8">
                    {project.title.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                    ))}
                </h1>

                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto md:mx-0 mb-8">
                    {project.description}
                </p>
                
                {/* Live Demo Button */}
                {(project).demoLink && (
                    <motion.a
                        href={(project).demoLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className={`inline-flex items-center gap-2 px-8 py-3 rounded-full ${isCyan ? 'bg-cyan-500 hover:bg-cyan-400 text-navy-950' : 'bg-amber-500 hover:bg-amber-400 text-navy-950'} font-bold uppercase tracking-wide transition-all shadow-lg hover:shadow-xl`}
                    >
                        Live Demo <ExternalLink size={18} />
                    </motion.a>
                )}

                {/* Quick Stats in Hero */}
                <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-10">
                    <div className="flex items-center gap-3">
                        <Calendar size={20} className="text-gray-500" />
                        <div>
                            <span className="block text-[10px] text-gray-500 uppercase tracking-widest font-bold">Timeline</span>
                            <span className="text-white font-medium">4 Months</span>
                        </div>
                    </div>
                    <div className={`w-px h-8 bg-white/10`} />
                    <div className="flex items-center gap-3">
                        <Briefcase size={20} className="text-gray-500" />
                        <div>
                            <span className="block text-[10px] text-gray-500 uppercase tracking-widest font-bold">Role</span>
                            <span className="text-white font-medium">Full Development</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Visual (Icon in 3D-ish Glass Card) */}
            <motion.div 
                className="flex-1 w-full max-w-md mx-auto relative perspective-1000"
                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.2, type: "spring" }}
            >
                <div className={`relative aspect-square rounded-[3rem] bg-linear-to-br ${isCyan ? 'from-cyan-900/20 to-blue-900/10' : 'from-amber-900/20 to-orange-900/10'} backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-center group overflow-hidden`}>
                     {/* Inner Glow */}
                     <div className={`absolute inset-0 bg-radial-gradient ${isCyan ? 'from-cyan-500/10' : 'from-amber-500/10'} to-transparent opacity-50`} />
                     
                     {/* Floating Rings */}
                     <div className={`absolute inset-0 border-[1px] ${isCyan ? 'border-cyan-500/20' : 'border-amber-500/20'} rounded-full scale-[1.2] opacity-30 animate-[spin_20s_linear_infinite]`} />
                     <div className={`absolute inset-0 border-[1px] border-white/5 rounded-full scale-[1.5] opacity-20 animate-[spin_30s_linear_infinite_reverse]`} />

                     {/* The Icon */}
                     <motion.div 
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className={`relative z-10 p-12 rounded-3xl bg-navy-950/80 border border-white/10 shadow-2xl backdrop-blur-md ${isCyan ? 'text-cyan-400 shadow-cyan-500/20' : 'text-amber-400 shadow-amber-500/20'}`}
                    >
                         <Icon size={120} strokeWidth={1} />
                     </motion.div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* --- CONTENT GRID --- */}
      <section className="relative z-10 -mt-10 pb-0">
          <div className="container max-w-7xl mx-auto px-4">
              
              {/* Feature Grid (Overlapping Hero) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                  {features.map((feature: string, idx: number) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-panel-heavy p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 bg-navy-900"
                      >
                          <div className={`w-10 h-10 rounded-lg ${isCyan ? 'bg-cyan-500/10 text-cyan-400' : 'bg-amber-500/10 text-amber-400'} flex items-center justify-center mb-4`}>
                             <Rocket size={20} />
                          </div>
                          <h4 className="text-white font-bold text-lg mb-1">{feature}</h4>
                      </motion.div>
                  ))}
              </div>

              {/* Story Section */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-32">
                  
                  {/* Sticky Sidebar */}
                  <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
                       <h3 className="font-oswald text-2xl font-bold uppercase text-white border-b border-white/10 pb-4">Tech Stack</h3>
                       <div className="flex flex-wrap gap-2">
                           {project.tags.map((tag, idx) => (
                               <span key={idx} className={`px-4 py-2 text-sm font-medium rounded-lg bg-white/5 border border-white/10 text-gray-300 flex items-center gap-2 hover:bg-white/10 transition-colors`}>
                                   <Code2 size={16} className={isCyan ? 'text-cyan-400' : 'text-amber-400'} />
                                   {tag}
                               </span>
                           ))}
                       </div>

                       {/* Project Link Box */}
                       <div className={`p-6 rounded-2xl bg-linear-to-br ${isCyan ? 'from-cyan-900/20 to-blue-900/20' : 'from-amber-900/20 to-orange-900/20'} border border-white/10`}>
                           <h4 className="font-bold text-white mb-2">Interested in this architecture?</h4>
                           <p className="text-xs text-gray-400 mb-4">We can replicate this success for your business.</p>
                           <a 
                               href={CTA_LINK} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className={`w-full py-3 flex items-center justify-center gap-2 rounded-lg font-bold text-sm uppercase tracking-wide bg-white/5 hover:bg-white/10 border border-white/10 transition-all ${isCyan ? 'text-cyan-400' : 'text-amber-400'}`}
                            >
                               Start a Conversation <ExternalLink size={14} />
                           </a>
                       </div>
                  </div>

                  {/* Main Story Content */}
                  <div className="lg:col-span-8 flex flex-col gap-16">
                      
                      {/* Challenge */}
                      <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                      >
                          <div className="flex items-center gap-4 mb-6">
                              <span className={`flex items-center justify-center w-12 h-12 rounded-full ${isCyan ? 'bg-cyan-500/20 text-cyan-400' : 'bg-amber-500/20 text-amber-400'} border border-white/10`}>
                                  <Target size={24} />
                              </span>
                              <h2 className="font-oswald text-4xl font-bold uppercase text-white">The Challenge</h2>
                          </div>
                          <p className="text-xl text-gray-300 font-light leading-relaxed pl-4 border-l-2 border-white/10">
                              {project.details.challenge}
                          </p>
                      </motion.div>

                      {/* Solution */}
                      <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                      >
                           <div className="flex items-center gap-4 mb-6">
                              <span className={`flex items-center justify-center w-12 h-12 rounded-full ${isCyan ? 'bg-cyan-500/20 text-cyan-400' : 'bg-amber-500/20 text-amber-400'} border border-white/10`}>
                                  <Cpu size={24} />
                              </span>
                              <h2 className="font-oswald text-4xl font-bold uppercase text-white">Our Solution</h2>
                          </div>
                          <p className="text-xl text-gray-300 font-light leading-relaxed pl-4 border-l-2 border-white/10">
                              {project.details.solution}
                          </p>
                      </motion.div>

                      {/* Outcomes Section */}
                      <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         className={`p-8 md:p-12 rounded-3xl bg-linear-to-br ${isCyan ? 'from-cyan-950 to-navy-900 border-cyan-500/20' : 'from-amber-950 to-navy-900 border-amber-500/20'} border`}
                      >
                          <div className="flex items-center gap-4 mb-8">
                              <Award size={32} className={isCyan ? 'text-cyan-400' : 'text-amber-400'} />
                               <h2 className="font-oswald text-3xl font-bold uppercase text-white">Impact Delivered</h2>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {project.details.outcomes.map((outcome, idx) => (
                                  <div key={idx} className="flex items-start gap-4">
                                      <div className={`mt-1 min-w-[20px] h-[20px] rounded-full flex items-center justify-center ${isCyan ? 'bg-cyan-500/20 text-cyan-400' : 'bg-amber-500/20 text-amber-400'}`}>
                                          <CheckCircle2 size={12} />
                                      </div>
                                      <span className="text-lg text-gray-200 font-medium">{outcome}</span>
                                  </div>
                              ))}
                          </div>
                      </motion.div>

                  </div>
              </div>
          </div>
      </section>

      {/* --- FOOTER NAV --- */}
      <section className="py-20 border-t border-white/5 bg-navy-950 relative overflow-hidden">
          <div className={`absolute inset-0 bg-linear-to-b ${isCyan ? 'from-navy-950 to-cyan-900/10' : 'from-navy-950 to-amber-900/10'} opacity-50`} />
          <div className="container max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center text-center space-y-8">
              <h2 className="font-oswald text-4xl font-bold uppercase text-white">Ready to start your journey?</h2>
              
              <div className="flex flex-wrap gap-4 justify-center">
                  <button 
                      onClick={() => router.push('/projects')}
                      className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold uppercase tracking-wide transition-all"
                  >
                      View All Projects
                  </button>
                  <a 
                      href={CTA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-8 py-3 rounded-full ${isCyan ? 'bg-cyan-500 hover:bg-cyan-400 text-navy-950' : 'bg-amber-500 hover:bg-amber-400 text-navy-950'} font-bold uppercase tracking-wide transition-all shadow-lg hover:shadow-xl`}
                  >
                      Contact Us
                  </a>
              </div>
          </div>
      </section>

      <Footer />
    </main>
  );
}
