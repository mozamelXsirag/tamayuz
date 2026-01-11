
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
أنت المستشار التقني لمركز التميّز التقني التابع لجمعية البرهان.
تخصصك هو معايير التقنيات القرآنية، تطبيقات الذكاء الاصطناعي في خدمة الوحي، والتحول الرقمي للقطاع غير الربحي التعليمي.
أجب بأسلوب احترافي، تقني، وموجز باللغة العربية.
ركز على رؤية المركز في ضبط الجودة الرقمية للمحتوى القرآني.
`;

export class GeminiService {
  private ai: GoogleGenAI;
  // Use 'Chat' type from @google/genai as per guidelines
  private chatSession: Chat;

  constructor() {
    // Initializing GoogleGenAI with the API key directly from process.env.API_KEY
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    this.chatSession = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      // Accessing the .text property of GenerateContentResponse directly (not as a method)
      const response: GenerateContentResponse = await this.chatSession.sendMessage({ message });
      return response.text || "عذراً، لم أتمكن من معالجة طلبك حالياً.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "حدث خطأ في الاتصال بنظام الذكاء الاصطناعي.";
    }
  }
}

export const geminiService = new GeminiService();
