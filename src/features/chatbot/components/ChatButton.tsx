"use client";

import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Sparkles, X } from 'lucide-react';
import { useChatStore } from '../store/chatStore';

/**
 * Premium Floating AI Chat Button
 * Features: Hexagonal shape, pulsing rings, particle effects, and smooth animations
 */
export default function ChatButton() {
  const { isOpen, toggleChat } = useChatStore();

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0, opacity: 0, rotate: 180 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Outer Pulsing Rings */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ 
              width: '100%', 
              height: '100%',
              transform: 'rotate(45deg)',
            }}
          />
          
          {/* Second Ring (offset timing) */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 to-cyan-500"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            style={{ 
              width: '100%', 
              height: '100%',
              transform: 'rotate(45deg)',
            }}
          />

          {/* Main Button - Rounded Square (Diamond when rotated) */}
          <motion.button
            onClick={toggleChat}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-16 h-16 group cursor-pointer"
            aria-label="Open AI Chat"
          >
            {/* Background Shape */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-cyan-600 shadow-lg"
              style={{ 
                transform: 'rotate(45deg)',
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)',
              }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(6, 182, 212, 0.4)',
                  '0 0 40px rgba(6, 182, 212, 0.6)',
                  '0 0 20px rgba(6, 182, 212, 0.4)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Inner Border Glow */}
            <motion.div
              className="absolute inset-1 rounded-xl border border-white/30"
              style={{ transform: 'rotate(45deg)' }}
            />

            {/* Icon Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* AI Sparkle Effect */}
              <motion.div
                className="absolute"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Orbiting Dots */}
                {[0, 120, 240].map((angle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-amber-400"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${angle}deg) translateX(24px) translateY(-50%)`,
                    }}
                    animate={{
                      opacity: [0.4, 1, 0.4],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.div>

              {/* Main Icon with Glow */}
              <motion.div
                className="relative z-10"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <MessageSquare className="w-6 h-6 text-white drop-shadow-lg" />
                
                {/* AI Sparkle Badge */}
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 drop-shadow-lg" />
                </motion.div>
              </motion.div>
            </div>

            {/* Hover Shine Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden"
              style={{ transform: 'rotate(45deg)' }}
            >
              <motion.div
                className="absolute w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent"
                initial={{ y: '-100%' }}
                whileHover={{ y: '200%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </motion.button>

          {/* Floating Label */}
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap"
          >
            <motion.div
              className="relative bg-navy-900/95 backdrop-blur-xl text-white text-sm px-4 py-2.5 rounded-xl shadow-xl border border-cyan-500/30"
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Arrow pointing right */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-l-navy-900/95" />
              </div>
              
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ✨
                </motion.span>
                <span className="font-medium">Ask Calistto AI</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
