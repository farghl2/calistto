"use client";

import { motion } from 'motion/react';
import { Bot, User } from 'lucide-react';
import type { ChatMessage as ChatMessageType } from '../types/chat.types';
import { cn } from '@/src/lib/utils';

interface ChatMessageProps {
  message: ChatMessageType;
}

/**
 * Individual Chat Message Component
 * Renders differently based on role (user vs assistant)
 */
export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "flex gap-3 px-4",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
          isUser
            ? "bg-amber-500/20 text-amber-400"
            : "bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400"
        )}
      >
        {isUser ? (
          <User className="w-4 h-4" />
        ) : (
          <Bot className="w-4 h-4" />
        )}
      </div>

      {/* Message Bubble */}
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3",
          isUser
            ? "bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-tr-none"
            : "bg-navy-800/80 text-gray-200 border border-cyan-500/10 rounded-tl-none"
        )}
      >
        {/* Content */}
        <p className="text-sm leading-relaxed whitespace-pre-wrap">
          {message.content}
        </p>

        {/* Timestamp */}
        <p
          className={cn(
            "text-[10px] mt-1.5",
            isUser ? "text-cyan-100/60" : "text-gray-500"
          )}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </div>
    </motion.div>
  );
}

/**
 * Typing Indicator Component
 */
export function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="flex gap-3 px-4"
    >
      {/* Avatar */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
        <Bot className="w-4 h-4 text-cyan-400" />
      </div>

      {/* Dots */}
      <div className="bg-navy-800/80 border border-cyan-500/10 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-2 h-2 bg-cyan-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
