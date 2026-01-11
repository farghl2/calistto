import { useMutation } from '@tanstack/react-query';
import { useChatStore } from '../store/chatStore';
import { sendChatMessage } from '../services/chatService';
import type { ChatMessage } from '../types/chat.types';

/**
 * Custom hook for chatbot functionality
 * Uses React Query for managing the chat mutation and Zustand for state
 */
export function useChatbot() {
  const { messages, isLoading, addMessage, setLoading, clearMessages } = useChatStore();

  // React Query mutation for sending messages
  const chatMutation = useMutation({
    mutationFn: sendChatMessage,
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (response) => {
      // Add assistant response
      const assistantMessage: ChatMessage = {
        id: `assistant_${Date.now()}`,
        role: 'assistant',
        content: response.message,
        timestamp: new Date(),
      };
      addMessage(assistantMessage);
    },
    onError: (error) => {
      console.error('Chat mutation error:', error);
      // Add error message
      const errorMessage: ChatMessage = {
        id: `error_${Date.now()}`,
        role: 'assistant',
        content: "I apologize, but I encountered an error. Please try again or contact us at contact@calistto.com.",
        timestamp: new Date(),
      };
      addMessage(errorMessage);
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  // Send a message
  const sendMessage = (content: string) => {
    // Add user message to store
    const userMessage: ChatMessage = {
      id: `user_${Date.now()}`,
      role: 'user',
      content,
      timestamp: new Date(),
    };
    addMessage(userMessage);

    // Send to API with conversation history
    chatMutation.mutate({
      message: content,
      conversationHistory: [...messages, userMessage],
    });
  };

  return {
    messages,
    isLoading: isLoading || chatMutation.isPending,
    sendMessage,
    clearMessages,
    isError: chatMutation.isError,
  };
}
