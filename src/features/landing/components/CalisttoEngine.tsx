"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import { Database, ShieldCheck, Cpu, ArrowUpRight, Lock, Settings } from 'lucide-react';
import ParticlesBackground from '@/src/features/landing/components/ParticlesBackground';

const features = [
  {
    title: 'SCALABILITY',
    icon: Database,
    desc: 'High-performance AI infrastructure that grows with your business, handling massive datasets.',
    color: 'cyan'
  },
  {
    title: 'SECURITY',
    icon: Lock,
    desc: 'Enterprise-grade data protection, encryption, and compliance for mission-critical assets.',
    color: 'amber'
  },
  {
    title: 'SEAMLESS INTEGRATION',
    icon: Settings,
    desc: 'Effortless deployment into existing workflows and platforms via robust APIs.',
    color: 'purple'
  }
];

// Network connection nodes
const networkNodes = [
  { top: '8%', left: '75%', size: 'lg', delay: 0 },
  { top: '12%', left: '55%', size: 'md', delay: 0.2 },
  { top: '5%', left: '90%', size: 'sm', delay: 0.4 },
  { top: '25%', left: '95%', size: 'md', delay: 0.6 },
  { top: '18%', left: '40%', size: 'sm', delay: 0.8 },
  { top: '75%', left: '92%', size: 'lg', delay: 0.3 },
  { top: '85%', left: '75%', size: 'md', delay: 0.5 },
  { top: '80%', left: '55%', size: 'sm', delay: 0.7 },
  { top: '65%', left: '35%', size: 'sm', delay: 0.9 },
  { top: '45%', left: '30%', size: 'md', delay: 0.1 },
  { top: '35%', left: '98%', size: 'sm', delay: 0.4 },
  { top: '55%', left: '95%', size: 'lg', delay: 0.6 },
];

// Connection lines between nodes
const connectionLines = [
  { x1: '75%', y1: '8%', x2: '55%', y2: '12%' },
  { x1: '75%', y1: '8%', x2: '90%', y2: '5%' },
  { x1: '90%', y1: '5%', x2: '95%', y2: '25%' },
  { x1: '75%', y1: '8%', x2: '70%', y2: '35%' },
  { x1: '55%', y1: '12%', x2: '40%', y2: '18%' },
  { x1: '92%', y1: '75%', x2: '75%', y2: '85%' },
  { x1: '75%', y1: '85%', x2: '55%', y2: '80%' },
  { x1: '95%', y1: '55%', x2: '92%', y2: '75%' },
  { x1: '30%', y1: '45%', x2: '35%', y2: '65%' },
  { x1: '95%', y1: '25%', x2: '98%', y2: '35%' },
];

export default function CalisttoEngine() {
  return (
    <section className="relative py-24 md:py-32 bg-navy-950 overflow-hidden" id="tech">
      {/* Circuit Board Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <ParticlesBackground className="absolute inset-0 z-10" count={100} colors={["#06B6D4", "#F59E0B"]} />
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-size-[60px_60px]" />
        
        {/* Horizontal circuit traces */}
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute top-[85%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />
        
        {/* Vertical circuit traces */}
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          
          {/* Left Content */}
          <div className="space-y-12 lg:pr-8">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.1]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                  THE CALISTTO
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-400 to-cyan-500 drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                  ENGINE
                </span>
              </h2>
            </motion.div>

            {/* Features Grid - Horizontal Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.15, duration: 0.6 }}
                  className="group"
                >
                  {/* Feature Icon */}
                  <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${
                    feature.color === 'cyan' ? 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30' :
                    feature.color === 'amber' ? 'from-amber-500/20 to-amber-600/10 border-amber-500/30' :
                    'from-purple-500/20 to-purple-600/10 border-purple-500/30'
                  } border flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]`}>
                    <feature.icon size={24} className={`${
                      feature.color === 'cyan' ? 'text-cyan-400' :
                      feature.color === 'amber' ? 'text-amber-400' :
                      'text-purple-400'
                    }`} />
                  </div>
                  
                  {/* Feature Title */}
                  <h3 className="font-oswald font-bold text-white text-base md:text-lg tracking-wider mb-2 uppercase">
                    {feature.title}
                  </h3>
                  
                  {/* Feature Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Visual - Brain with Network */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center"
          >
            {/* SVG Connection Lines */}
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none overflow-visible">
              {connectionLines.map((line, i) => (
                <motion.line
                  key={i}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.1 }}
                />
              ))}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

            {/* Network Nodes */}
            {networkNodes.map((node, i) => (
              <motion.div
                key={i}
                className={`absolute z-20 ${
                  node.size === 'lg' ? 'w-4 h-4' :
                  node.size === 'md' ? 'w-3 h-3' : 'w-2 h-2'
                }`}
                style={{ top: node.top, left: node.left }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + node.delay, duration: 0.4 }}
              >
                {/* Outer glow ring */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-cyan-400/30"
                  animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: node.delay }}
                />
                {/* Inner node */}
                <div className={`relative w-full h-full rounded-full ${
                  node.size === 'lg' ? 'bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-[0_0_15px_rgba(6,182,212,0.8)]' :
                  node.size === 'md' ? 'bg-gradient-to-br from-cyan-300 to-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]' :
                  'bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.5)]'
                }`} />
                
                {/* Hexagon icon for larger nodes */}
                {node.size === 'lg' && (
                  <div className="absolute -top-3 -left-3 w-10 h-10 border border-cyan-500/40 rounded-lg rotate-45 flex items-center justify-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-sm -rotate-45" />
                  </div>
                )}
              </motion.div>
            ))}

            {/* Center Glow Behind Brain */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/10 rounded-full blur-[100px]" />
              <motion.div 
                className="absolute inset-[10%] bg-cyan-500/15 rounded-full blur-[80px]"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Brain Image */}
            <div className="relative w-full h-full z-[5]">
              <div className="absolute inset-[-10%] mask-[radial-gradient(ellipse_at_center,black_50%,transparent_80%)]">
                <Image 
                  src="/calistto-brain-v2.png" 
                  alt="Calistto Neural Engine" 
                  fill 
                  className="object-contain mix-blend-lighten"
                  priority
                />
              </div>
            </div>

            {/* Floating Data Badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] right-[5%] glass-panel px-3 py-2 rounded-lg border-l-2 border-l-cyan-400 z-30"
            >
              <span className="text-[9px] text-gray-400 uppercase block">Neural Processing</span>
              <span className="text-xs font-bold text-cyan-400">Active</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] left-[5%] glass-panel px-3 py-2 rounded-lg border-l-2 border-l-amber-400 z-30"
            >
              <span className="text-[9px] text-gray-400 uppercase block">Data Throughput</span>
              <span className="text-xs font-bold text-amber-400">2.4 TB/s</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[35%] right-[0%] glass-panel px-3 py-2 rounded-lg border-l-2 border-l-purple-400 z-30"
            >
              <span className="text-[9px] text-gray-400 uppercase block">API Latency</span>
              <span className="text-xs font-bold text-purple-400">&lt;12ms</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
