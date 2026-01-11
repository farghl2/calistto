"use client";

import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useChatStore } from '../store/chatStore';
import { useChatbot } from '../hooks/useChatbot';
import ChatHeader from './ChatHeader';
import ChatMessage, { TypingIndicator } from './ChatMessage';
import ChatInput from './ChatInput';

/**
 * Main Chat Sheet Component
 * Slides in from the right side of the screen
 */
export default function ChatSheet() {
  const { isOpen, closeChat } = useChatStore();
  const { messages, isLoading, sendMessage } = useChatbot();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeChat}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Sheet */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-navy-950 border-l border-cyan-500/20 shadow-2xl shadow-cyan-500/10 flex flex-col"
          >
            {/* Header */}
            <ChatHeader />

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto py-4 pb-6 space-y-4 scrollbar-thin scrollbar-thumb-cyan-500/20 scrollbar-track-transparent">
              {/* Messages */}
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}

              {/* Typing Indicator */}
              <AnimatePresence>
                {isLoading && <TypingIndicator />}
              </AnimatePresence>

              {/* Scroll anchor */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input - No overlay blocking it */}
            <ChatInput onSend={sendMessage} isLoading={isLoading} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
