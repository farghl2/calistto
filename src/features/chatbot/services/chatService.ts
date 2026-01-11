import type { ChatRequest, ChatResponse, ChatMessage } from '../types/chat.types';

/**
 * Send a message to the chatbot API
 * Uses the Next.js API route which handles Gemini integration
 */
export async function sendChatMessage(request: ChatRequest): Promise<ChatResponse> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: request.message,
        history: request.conversationHistory.map((msg) => ({
          role: msg.role,
          content: msg.content,
        })),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to get response from AI');
    }

    const data = await response.json();
    
    return {
      message: data.message,
      success: true,
    };
  } catch (error) {
    console.error('Chat service error:', error);
    return {
      message: "I'm sorry, I'm having trouble connecting right now. Please try again or contact us directly at contact@calistto.com.",
      success: false,
    };
  }
}

/**
 * Format conversation history for API
 */
export function formatConversationHistory(messages: ChatMessage[]): { role: string; content: string }[] {
  return messages
    .filter((msg) => msg.id !== 'welcome') // Exclude welcome message from history
    .map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));
}
