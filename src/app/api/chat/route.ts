import { NextRequest, NextResponse } from 'next/server';
import { generateChatbotContext } from '@/src/features/chatbot/data/chatbotContext';

// Gemini API models to try (in order of preference)
const GEMINI_MODELS = [
  'gemini-1.5-flash',      // More stable quota
  'gemini-1.5-flash-8b',   // Lighter model
  'gemini-2.0-flash',      // Latest but might hit quota
  'gemini-2.5-flash',
];

const GEMINI_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  message: string;
  history?: Message[];
}

// Try calling Gemini with a specific model
async function tryGeminiModel(model: string, apiKey: string, contents: unknown[]): Promise<{ success: boolean; data?: unknown; error?: string }> {
  try {
    const response = await fetch(`${GEMINI_BASE_URL}/${model}:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents,
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
        ],
      }),
    });

    if (response.status === 429) {
      // Rate limited, try next model
      return { success: false, error: 'Rate limited' };
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error(`Gemini ${model} error:`, response.status, errorData);
      return { success: false, error: `API error: ${response.status}` };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error(`Gemini ${model} fetch error:`, error);
    return { success: false, error: 'Network error' };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json();
    const { message, history = [] } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Get API key
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      console.error('GEMINI_API_KEY not configured');
      return NextResponse.json(
        { error: 'AI service not configured' },
        { status: 500 }
      );
    }

    // Generate context
    const systemContext = generateChatbotContext();

    // Build conversation contents for Gemini
    const contents = [
      // System context as first user message
      {
        role: 'user',
        parts: [{ text: `${systemContext}\n\n---\n\nUser: ${history.length === 0 ? message : 'Starting conversation...'}` }],
      },
      {
        role: 'model',
        parts: [{ text: "I understand. I'm Calistto AI, ready to help answer questions about Calistto's services, projects, and capabilities. How can I assist you today?" }],
      },
    ];

    // Add conversation history
    for (const msg of history) {
      contents.push({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }],
      });
    }

    // Add current message if we had history
    if (history.length > 0) {
      contents.push({
        role: 'user',
        parts: [{ text: message }],
      });
    }

    // Try each model until one works
    let aiResponse: string | null = null;
    
    for (const model of GEMINI_MODELS) {
      console.log(`Trying Gemini model: ${model}`);
      const result = await tryGeminiModel(model, apiKey, contents);
      
      if (result.success && result.data) {
        const data = result.data as { candidates?: { content?: { parts?: { text?: string }[] } }[] };
        aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || null;
        
        if (aiResponse) {
          console.log(`Success with model: ${model}`);
          break;
        }
      }
    }

    // If all models failed, return a fallback response
    if (!aiResponse) {
      console.error('All Gemini models exhausted or failed');
      
      // Smart fallback based on user message
      aiResponse = getFallbackResponse(message);
    }

    return NextResponse.json({
      message: aiResponse,
      success: true,
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Fallback responses when API is unavailable
function getFallbackResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();
  
  // Check for common intents
  if (lowerMessage.includes('service') || lowerMessage.includes('offer') || lowerMessage.includes('do you do')) {
    return `We offer a range of services including:

• **Web Development** - Custom web applications with Next.js, React, and modern technologies
• **Mobile App Development** - Native and cross-platform apps for iOS and Android
• **AI & Machine Learning** - Chatbots, predictive analytics, and intelligent automation
• **UI/UX Design** - User-centered design that converts
• **Cloud & DevOps** - Scalable infrastructure and deployment pipelines

For detailed information about any service, please contact us at contact@calistto.com 📧`;
  }
  
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
    return `Our pricing depends on project scope, complexity, and timeline. We offer both fixed-price projects and retainer-based engagements.

For an accurate quote tailored to your needs, please reach out to us at **contact@calistto.com** with your project details, and we'll get back to you promptly! 💼`;
  }
  
  if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email')) {
    return `You can reach us at:

📧 **Email**: contact@calistto.com
🌐 **Website**: calistto.com

We typically respond within 24 hours!`;
  }
  
  if (lowerMessage.includes('tech') || lowerMessage.includes('stack') || lowerMessage.includes('technolog')) {
    return `Our core technology stack includes:

**Frontend**: React, Next.js, TypeScript, TailwindCSS
**Backend**: Node.js, Python, PostgreSQL, MongoDB
**Mobile**: React Native, Flutter
**AI/ML**: OpenAI, Google Gemini, TensorFlow
**Cloud**: AWS, Google Cloud, Docker, Kubernetes

We're always evaluating and adopting new technologies to deliver the best solutions! 🚀`;
  }
  
  // Default fallback
  return `Thanks for your message! I'm currently experiencing high demand, but I'd love to help you.

For immediate assistance, please contact us directly at **contact@calistto.com** and our team will respond within 24 hours.

In the meantime, you can explore our services, portfolio, and process on this page! 👇`;
}
