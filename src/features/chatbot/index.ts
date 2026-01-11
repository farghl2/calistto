// Chatbot Feature Barrel Export
export { default as ChatButton } from './components/ChatButton';
export { default as ChatSheet } from './components/ChatSheet';

// Hooks
export { useChatbot } from './hooks/useChatbot';
export { useChatStore } from './store/chatStore';

// Types
export type * from './types/chat.types';

// Data
export { generateChatbotContext, COMPANY_INFO, SERVICES, PROJECTS, FAQ } from './data/chatbotContext';
