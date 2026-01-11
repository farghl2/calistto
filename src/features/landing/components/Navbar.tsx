"use client";

import { Link } from '@/src/i18n/routing';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Calistto Engine', href: '#tech' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
       initial={{ y: -100 }}
       animate={{ y: 0 }}
       transition={{ duration: 0.8, ease: "easeOut" }}
       className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}
    >
      <div 
        className={`relative flex items-center justify-between px-6 md:px-8 py-3 rounded-full transition-all duration-500 ${
          scrolled 
            ? 'w-[90%] md:w-[85%] max-w-7xl bg-navy-900/80 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)]' 
            : 'w-full max-w-7xl bg-transparent border border-transparent'
        }`}
      >
        
        {/* Premium Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo Icon Container */}
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {/* Outer Glow Ring */}
            <motion.div 
              className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500 to-amber-500 opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-500"
            />
            
            {/* Logo Background */}
            <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 border border-cyan-500/30 group-hover:border-cyan-400/50 flex items-center justify-center overflow-hidden transition-all duration-300 shadow-lg">
              {/* Inner Gradient Shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-md" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-amber-400/50 rounded-br-md" />
              
              {/* Logo Image */}
              <Image
                src="/logo-c-v4.png" 
                alt="Calistto Logo" 
                width={32}
                height={32}
                className="object-contain rounded-full relative z-10 drop-shadow-lg" 
              />
            </div>
          </motion.div>

          {/* Logo Text */}
          <motion.div 
            className="flex flex-col"
            whileHover={{ x: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <span className="font-oswald text-xl md:text-2xl font-bold tracking-widest uppercase leading-tight">
              <span className="text-white">CAL</span>
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: '200% auto' }}
              >
                ISTTO
              </motion.span>
            </span>
            {/* Tagline - only visible on larger screens */}
            <span className="hidden lg:block text-[9px] text-gray-500 uppercase tracking-[0.3em] -mt-0.5">
              software solutions
            </span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
            >
              {item.name}
              {/* Hover Glow Effect */}
              <span className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
           <button className="group relative px-6 py-2.5 bg-cyan-500 text-black font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
             <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-100 group-hover:opacity-90 transition-opacity" />
             <div className="relative flex items-center gap-2 text-sm uppercase tracking-wide">
               Let's Talk
               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
             </div>
           </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="absolute top-24 left-4 right-4 bg-navy-900/95 backdrop-blur-2xl border border-cyan-500/20 rounded-3xl p-6 flex flex-col gap-2 md:hidden shadow-2xl z-50 overflow-hidden"
        >
          {/* Menu Background Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 group border border-transparent hover:border-white/5 transition-all"
            >
              <span className="text-lg font-medium text-gray-200 group-hover:text-white">{item.name}</span>
              <ArrowRight size={18} className="text-cyan-500/50 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold rounded-xl mt-2 hover:shadow-lg transition-all uppercase tracking-wider">
             Let's Talk
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
