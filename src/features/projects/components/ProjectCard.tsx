"use client";

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { CTA_LINK } from '@/src/shared/constans/data';

interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        category: string;
        image: string;
        description: string;
        tags: string[];
        icon: any; // LucideIcon is a type but 'any' is safe here to avoid prop types issues
        color: string;
    };
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const isCyan = project.color === 'cyan';
    const Icon = project.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative h-full"
        >
            {/* Card Glow Effect - Behind */}
            <div className={`absolute -inset-0.5 rounded-[2rem] bg-linear-to-br ${isCyan ? 'from-cyan-500/50 to-blue-600/50' : 'from-amber-500/50 to-orange-600/50'} opacity-30 blur-md group-hover:opacity-100 transition duration-500 group-hover:blur-lg`} />
            
            {/* Main Card Container */}
            <div className="relative h-full flex flex-col bg-navy-900 rounded-[1.9rem] overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors duration-300">
                
                {/* Top Image/Gradient Area */}
                <div className={`h-64 relative overflow-hidden`}>
                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-linear-to-br ${project.image} opacity-40 group-hover:opacity-60 transition-opacity duration-700`} />
                    
                    {/* Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[40px_40px] opacity-30" />
                    
                    {/* Icon Container - Floating */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                            className={`w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center ${isCyan ? 'text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)]' : 'text-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.3)]'}`}
                            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.4 }}
                        >
                            <Icon size={40} strokeWidth={1.5} />
                        </motion.div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-navy-950/80 backdrop-blur-sm border border-white/10 ${isCyan ? 'text-cyan-400' : 'text-amber-400'}`}>
                            {project.category}
                        </span>
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow bg-navy-900/40 backdrop-blur-sm">
                    <h3 className="font-oswald text-3xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                        {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light flex-grow">
                        {project.description}
                    </p>
                    
                    <div className="space-y-6 mt-auto">
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tIdx) => (
                                <span 
                                    key={tIdx} 
                                    className={`px-3 py-1 text-xs font-medium rounded-lg bg-white/5 border border-white/10 ${isCyan ? 'group-hover:border-cyan-500/30 group-hover:text-cyan-100' : 'group-hover:border-amber-500/30 group-hover:text-amber-100'} transition-colors`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Separator */}
                        <div className={`h-px w-full bg-linear-to-r from-transparent ${isCyan ? 'via-cyan-500/30' : 'via-amber-500/30'} to-transparent`} />

                        {/* CTA Link */}
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                                Case Study
                            </span>
                            <motion.a 
                                href={`/projects/${project.id}`}
                                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${isCyan ? 'border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-navy-950 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]' : 'border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-navy-950 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]'}`}
                                whileHover={{ rotate: -45 }}
                            >
                                <ArrowUpRight size={18} />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
