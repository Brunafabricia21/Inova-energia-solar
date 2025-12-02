import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

export const SolarAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou a IA da Inova Energia Solar. ☀️ Como posso te ajudar a economizar hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Extract just the text history for simple context
      const history = messages.map(m => m.text);
      const response = await sendMessageToGemini(userMessage, history);
      
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Desculpe, tive um problema técnico. Tente novamente mais tarde.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-tech-900 border border-white/10 rounded-2xl shadow-2xl w-[90vw] md:w-96 h-[500px] mb-4 flex flex-col overflow-hidden animate-float">
          {/* Header */}
          <div className="bg-gradient-to-r from-tech-800 to-tech-900 p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-solar-500 rounded-full flex items-center justify-center relative">
                 <Bot className="w-6 h-6 text-tech-900" />
                 <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-tech-900 rounded-full"></span>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">IA Inova Solar</h3>
                <p className="text-xs text-green-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-tech-950/50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-solar-500 text-tech-950 font-medium rounded-tr-none' 
                      : 'bg-tech-800 text-gray-200 border border-white/10 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-tech-800 border border-white/10 p-4 rounded-2xl rounded-tl-none">
                  <Loader2 className="w-5 h-5 animate-spin text-solar-400" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-tech-900 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Digite sua dúvida..."
                className="flex-1 bg-tech-950 text-white rounded-lg border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-solar-500 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-solar-500 text-tech-900 p-2 rounded-lg hover:bg-solar-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-solar-500 to-solar-600 text-tech-900 shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:scale-110 transition-all duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};