"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import type { ChatFormValues } from '../types/chat.types';

// Validation schema
const chatFormSchema = z.object({
  message: z
    .string()
    .min(1, 'Please enter a message')
    .max(1000, 'Message is too long'),
});

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

/**
 * Chat Input Form Component
 * Uses react-hook-form with zod validation
 */
export default function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ChatFormValues>({
    resolver: zodResolver(chatFormSchema),
    defaultValues: {
      message: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: ChatFormValues) => {
    if (isLoading) return;
    onSend(data.message.trim());
    reset();
  };

  // Handle Enter key (without Shift)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 border-t border-cyan-500/20 bg-navy-900/80 backdrop-blur-sm"
    >
      {/* Error Message */}
      {errors.message && (
        <p className="text-xs text-red-400 mb-2 px-1">
          {errors.message.message}
        </p>
      )}

      <div className="flex items-end gap-3">
        {/* Text Input */}
        <div className="flex-1 relative">
          <textarea
            {...register('message')}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything about Calistto..."
            disabled={isLoading}
            rows={1}
            className="w-full px-4 py-3 bg-navy-800/60 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ minHeight: '44px', maxHeight: '120px' }}
          />
        </div>

        {/* Send Button */}
        <motion.button
          type="submit"
          disabled={isLoading || !isValid}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </motion.button>
      </div>

      {/* Hint */}
      <p className="text-[10px] text-gray-500 mt-2 text-center">
        Press Enter to send • Shift+Enter for new line
      </p>
    </form>
  );
}
