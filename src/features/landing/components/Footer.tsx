"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import { Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: '#', color: 'hover:text-cyan-400 hover:bg-cyan-500/10' },
  { icon: Github, href: '#', color: 'hover:text-white hover:bg-white/10' },
  { icon: Twitter, href: '#', color: 'hover:text-cyan-400 hover:bg-cyan-500/10' },
  { icon: Instagram, href: '#', color: 'hover:text-amber-400 hover:bg-amber-500/10' },
];

const companyLinks = ['About Us', 'Our Process', 'Careers', 'Contact Us'];
const serviceLinks = ['AI Integration', 'Web Development', 'Mobile Apps', 'Blockchain'];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 pt-8 pb-8 z-20 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950 to-navy-900" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Ambient Glows */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px]" />
        
        {/* Circuit Lines */}
        <svg className="absolute bottom-0 left-0 w-64 h-64 opacity-10" viewBox="0 0 100 100">
          <path d="M0,80 L30,80 L30,50 L60,50" stroke="#06B6D4" strokeWidth="0.5" fill="none"/>
          <circle cx="60" cy="50" r="2" fill="#06B6D4"/>
        </svg>
        <svg className="absolute bottom-0 right-0 w-64 h-64 opacity-10" viewBox="0 0 100 100">
          <path d="M100,80 L70,80 L70,50 L40,50" stroke="#F59E0B" strokeWidth="0.5" fill="none"/>
          <circle cx="40" cy="50" r="2" fill="#F59E0B"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* CTA Card - Now inside the container and responsive */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-12 md:mb-16 group max-w-3xl mx-auto"
        >
          {/* Glowing Border Effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-amber-500 to-cyan-500 rounded-2xl opacity-50 blur-sm group-hover:opacity-80 transition-opacity" />
          
          <div className="relative bg-navy-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 sm:p-8 md:p-10 text-center overflow-hidden">
            {/* Inner Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-oswald text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3"
            >
              Ready to Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">Future?</span>
            </motion.h2>
            <p className="text-gray-300 text-sm md:text-base font-light mb-5 md:mb-6 max-w-xl mx-auto">
              Let's transform your ideas into intelligent, scalable software solutions today.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm md:text-base rounded-full shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] transition-all uppercase tracking-wider relative z-10 inline-flex items-center gap-2"
            >
              <MessageCircle size={18} className="md:w-5 md:h-5" />
              Chat on WhatsApp
            </motion.button>
          </div>
        </motion.div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          
          {/* Brand Column */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            {/* Logo - Matching Navbar Style */}
            <div className="flex items-center gap-3 group">
              {/* Logo Icon Container */}
              <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 border border-cyan-500/30 flex items-center justify-center overflow-hidden shadow-lg">
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-md" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-amber-400/50 rounded-br-md" />
                
                <Image
                  src="/logo-c-v4.png" 
                  alt="Calistto Logo" 
                  width={32}
                  height={32}
                  className="object-contain rounded-full drop-shadow-lg" 
                />
              </div>
              
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="font-oswald text-xl md:text-2xl font-bold tracking-widest uppercase leading-tight">
                  <span className="text-white">CAL</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">ISTTO</span>
                </span>
                <span className="text-[8px] md:text-[9px] text-gray-500 uppercase tracking-[0.2em] md:tracking-[0.25em] -mt-0.5">
                  software solutions
                </span>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed font-light text-sm">
              Empowering businesses with AI-driven software architecture. Building robust, scalable, and future-proof digital assets.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a 
                  key={idx} 
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-9 h-9 md:w-10 md:h-10 rounded-xl bg-navy-800/50 border border-white/5 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 shadow-lg`}
                >
                  <social.icon size={16} className="md:w-[18px] md:h-[18px]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-oswald text-base md:text-lg font-bold text-white uppercase mb-4 md:mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Company
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group text-sm">
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-oswald text-base md:text-lg font-bold text-white uppercase mb-4 md:mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Services
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2 group text-sm">
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-amber-400" />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-oswald text-base md:text-lg font-bold text-white uppercase mb-4 md:mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Contact
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a href="#" className="flex items-start gap-3 text-gray-400 group hover:text-white transition-colors">
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all">
                    <MapPin size={14} className="md:w-4 md:h-4 text-cyan-400" />
                  </div>
                  <span className="text-xs md:text-sm leading-relaxed">
                    Remote First Company<br/>
                    <span className="text-gray-500">Worldwide</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:islam@calistto.com" className="flex items-center gap-3 text-gray-400 group hover:text-cyan-400 transition-colors">
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all">
                    <Mail size={14} className="md:w-4 md:h-4 text-cyan-400" />
                  </div>
                  <span className="text-xs md:text-sm">islam@calistto.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+201000000000" className="flex items-center gap-3 text-gray-400 group hover:text-cyan-400 transition-colors">
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all">
                    <Phone size={14} className="md:w-4 md:h-4 text-cyan-400" />
                  </div>
                  <span className="text-xs md:text-sm">+20 100 000 0000</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs md:text-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            © 2026 Calistto. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-xs md:text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs md:text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs md:text-sm transition-colors">Cookies</a>
          </div>
        </div>

      </div>
      
      {/* Decorative Star */}
      <motion.div 
        className="absolute bottom-8 right-8 hidden md:block"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="opacity-60">
          <polygon points="12,0 14,10 24,12 14,14 12,24 10,14 0,12 10,10"/>
        </svg>
      </motion.div>
    </footer>
  );
}
