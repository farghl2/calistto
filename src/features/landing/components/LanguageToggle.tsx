"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/src/i18n/routing';
import { motion } from 'motion/react';
import { Languages } from '@/src/shared/constans/enums';

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === Languages.ARABIC ? Languages.ENGLISH : Languages.ARABIC;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-4 py-2 rounded-full border border-white/10 overflow-hidden group ${className}`}
      aria-label="Toggle Language"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-navy-800 group-hover:bg-navy-700 transition-colors" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center gap-2">
        <span className={`text-sm font-bold ${locale === Languages.ENGLISH ? 'text-cyan-400' : 'text-gray-400'}`}>EN</span>
        <div className="w-px h-3 bg-white/20" />
        <span className={`text-sm font-bold ${locale === Languages.ARABIC ? 'text-amber-400' : 'text-gray-400'}`}>عربي</span>
      </div>
      
      {/* Hover Border Glow */}
      <div className="absolute inset-0 rounded-full border border-cyan-500/0 group-hover:border-cyan-500/30 transition-colors" />
    </motion.button>
  );
}
