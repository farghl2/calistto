"use client";

import { useTranslations } from 'next-intl'; // Left unused but good to keep if page logic expands
import { motion } from 'motion/react';
import Navbar from '@/src/features/landing/components/Navbar';
import Footer from '@/src/features/landing/components/Footer';
import ParticlesBackground from '@/src/features/landing/components/ParticlesBackground';
import { LayoutTemplate } from 'lucide-react';
import { CTA_LINK } from '@/src/shared/constans/data';
import ProjectsList from '@/src/features/projects/components/ProjectsList';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-navy-950 text-white selection:bg-cyan-500/30">
      <Navbar />

      {/* Hero Section of Projects Page */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        <ParticlesBackground className="absolute inset-0 z-0 opacity-40" count={60} colors={["#06B6D4", "#F59E0B"]} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-size-[60px_60px] opacity-20 pointer-events-none" />
        
        {/* Ambient Hero Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
                    Our Portfolio
                </span>
                <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-wide mb-6 leading-tight">
                    Digital <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Masterpieces</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    Exploring the boundaries of technology with every line of code. Here is a curated selection of our most impactful projects.
                </p>
            </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <ProjectsList />

      {/* Footer Call to Action */}
      <section className="py-24 text-center bg-navy-950/50">
         <div className="container mx-auto px-4">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-8 text-white">
                Ready to build your <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500">Legacy?</span>
            </h2>
             <motion.a 
                 href={CTA_LINK}
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.98 }}
                 className="px-10 py-5 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-lg rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all uppercase tracking-wider inline-flex items-center gap-3 group"
             >
                 Start a Project <LayoutTemplate size={20} className="group-hover:rotate-12 transition-transform" />
             </motion.a>
         </div>
      </section>

      <Footer />
    </main>
  );
}
