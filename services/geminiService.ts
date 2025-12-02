import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Você é a IA Solar da INOVA ENERGIA SOLAR, um assistente virtual especializado, educado e altamente tecnológico.
Sua missão é ajudar potenciais clientes a entenderem os benefícios da energia solar, tirar dúvidas sobre instalação, custos e manutenção.

Diretrizes:
1. Seu tom deve ser profissional, otimista e futurista.
2. Destaque sempre a economia financeira e a sustentabilidade.
3. Se o usuário perguntar sobre preços exatos, diga que varia de acordo com o consumo, mas ofereça uma estimativa genérica e incentive a preencher o formulário de orçamento no site.
4. Responda de forma concisa (máximo de 3 parágrafos curtos).
5. A empresa se chama INOVA ENERGIA SOLAR.
6. Use emojis relacionados a sol, energia e tecnologia ocasionalmente ☀️⚡🔋.
`;

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (message: string, history: string[]): Promise<string> => {
  try {
    const ai = getAiClient();
    
    // Construct a context string from history for stateless request
    // Note: For a real chat session, we would use ai.chats.create, but for this simple widget,
    // sending context in the prompt or using a simple generateContent is often sufficient for single-turn logic
    // or we can use the Chat API. Let's use Chat API for better context handling.
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    // Replay simple history to set context (mocking persistent history for this demo)
    // In a real app, you'd persist the chat session object.
    for (const hist of history) {
        // We are skipping this for now to keep it simple and stateless per request for the demo,
        // or we treat each message as a fresh query with context if needed.
        // For this implementation, we will send the message directly.
    }

    const result = await chat.sendMessage({ message });
    return result.text || "Desculpe, tive um problema ao processar sua resposta. Tente novamente.";
    
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Estou com dificuldades de conexão no momento. Por favor, tente novamente mais tarde ou entre em contato pelo formulário.";
  }
};