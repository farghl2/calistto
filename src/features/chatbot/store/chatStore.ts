import { create } from 'zustand';
import type { ChatState, ChatMessage } from '../types/chat.types';

// Generate unique ID for messages
const generateId = () => `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

// Initial welcome message
const welcomeMessage: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content: "👋 Hi! I'm Calistto AI, your virtual assistant. I can help you learn about our services, projects, and how we can help bring your ideas to life. What would you like to know?",
  timestamp: new Date(),
};

export const useChatStore = create<ChatState>((set) => ({
  // State
  isOpen: false,
  messages: [welcomeMessage],
  isLoading: false,

  // Actions
  openChat: () => set({ isOpen: true }),
  closeChat: () => set({ isOpen: false }),
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  
  addMessage: (message: ChatMessage) => 
    set((state) => ({ 
      messages: [...state.messages, { ...message, id: message.id || generateId() }] 
    })),
  
  setLoading: (loading: boolean) => set({ isLoading: loading }),
  
  clearMessages: () => set({ messages: [welcomeMessage] }),
}));
