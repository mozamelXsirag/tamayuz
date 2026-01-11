
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { geminiService } from '../services/gemini';

const AIAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: 'مرحباً بك. أنا مستشارك الرقمي في مركز التميّز. كيف أساعدك اليوم؟' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);
    const response = await geminiService.sendMessage(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-10 left-10 z-[2000]">
      {isOpen ? (
        <div className="w-80 md:w-96 facet-card facet-clip h-[500px] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 bg-white/90 dark:bg-black/80">
          <div className="p-6 border-b border-zinc-100 dark:border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
               <span className="font-bold text-sm text-slate-900 dark:text-white">المساعد الذكي</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-orange-500 transition-colors"><X size={20} /></button>
          </div>
          
          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`p-4 rounded-2xl max-w-[85%] leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-zinc-100 dark:bg-zinc-800 text-slate-900 dark:text-white rounded-br-none' 
                  : 'bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-200 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-zinc-400 text-[10px] animate-pulse">جاري معالجة طلبك...</div>
            )}
          </div>

          <div className="p-6 border-t border-zinc-100 dark:border-white/5 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اكتب استفسارك..."
              className="flex-grow bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:border-orange-500 transition-colors text-slate-900 dark:text-white"
            />
            <button onClick={handleSend} className="bg-orange-500 text-white p-2 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
              <Send size={20} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 facet-card facet-clip flex items-center justify-center text-orange-500 shadow-2xl hover:scale-110 transition-all border-orange-500/20 bg-white/80 dark:bg-black/50"
        >
          <div className="relative">
            <MessageSquare size={28} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
          </div>
        </button>
      )}
    </div>
  );
};

export default AIAdvisor;
