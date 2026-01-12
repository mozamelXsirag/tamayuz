import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
أنت المستشار التقني لمركز التميّز التقني التابع لجمعية البرهان.
تخصصك هو معايير التقنيات القرآنية، تطبيقات الذكاء الاصطناعي في خدمة الوحي، والتحول الرقمي للقطاع غير الربحي التعليمي.
أجب بأسلوب احترافي، تقني، وموجز باللغة العربية.
ركز على رؤية المركز في ضبط الجودة الرقمية للمحتوى القرآني.
`;

class GeminiService {
  private ai;
  private chatSession;

  constructor() {
    // Initializing GoogleGenAI with the API key directly from process.env.API_KEY
    this.ai = new GoogleGenAI({ apiKey: window.process.env.API_KEY });
    this.chatSession = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }

  async sendMessage(message) {
    try {
      const response = await this.chatSession.sendMessage({ message });
      return response.text || "عذراً، لم أتمكن من معالجة طلبك حالياً.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "حدث خطأ في الاتصال بنظام الذكاء الاصطناعي.";
    }
  }
}

const geminiService = new GeminiService();

(window as any).geminiService = geminiService;