"use client";

import { X, Sparkles, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useChatStore } from '../store/chatStore';

/**
 * Chat Sheet Header
 * Contains title, AI indicator, and close button
 */
export default function ChatHeader() {
  const { closeChat, clearMessages } = useChatStore();

  return (
    <div className="flex items-center justify-between p-4 border-b border-cyan-500/20 bg-navy-900/80 backdrop-blur-sm">
      {/* Left: Title */}
      <div className="flex items-center gap-3">
        {/* AI Avatar */}
        <motion.div
          className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20"
          animate={{
            boxShadow: [
              '0 4px 20px rgba(6, 182, 212, 0.2)',
              '0 4px 30px rgba(6, 182, 212, 0.4)',
              '0 4px 20px rgba(6, 182, 212, 0.2)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="w-5 h-5 text-white" />
        </motion.div>

        <div>
          <h2 className="font-oswald text-lg font-bold text-white uppercase tracking-wide">
            Calistto AI
          </h2>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-gray-400">Online</span>
          </div>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Clear Chat */}
        <button
          onClick={clearMessages}
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Clear chat"
          title="Clear conversation"
        >
          <Trash2 className="w-4 h-4" />
        </button>

        {/* Close */}
        <button
          onClick={closeChat}
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close chat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
