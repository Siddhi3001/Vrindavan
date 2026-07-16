/*
Module Name: Chatbot.tsx
Purpose: Floating smart assistant with quick replies and translations
Editable Sections: Questions and responses in translations.js
Dependencies: React, motion, lucide-react, LanguageContext
*/

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const { t } = useLanguage();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ id: Date.now(), text: t('chatbot.welcome'), isBot: true }]);
    }
  }, [isOpen, t]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleOptionClick = (optionKey) => {
    const userMsg = t(`chatbot.options.${optionKey}`);
    const botMsg = t(`chatbot.responses.${optionKey}`);
    
    setMessages(prev => [...prev, 
      { id: Date.now(), text: userMsg, isBot: false },
      { id: Date.now() + 1, text: botMsg, isBot: true }
    ]);
  };

  const options = ['capacity', 'parking', 'hours', 'location', 'packages', 'facilities'];

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="size-14 bg-maroon text-white rounded-full flex items-center justify-center shadow-xl hover:bg-gold transition-colors duration-500"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-20 right-0 w-[320px] md:w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-maroon p-4 text-white flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-full">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-bold text-sm">{t('chatbot.name')}</h3>
                <p className="text-[10px] text-white/70 uppercase tracking-widest">{t('chatbot.activeNow')}</p>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="h-[300px] overflow-y-auto p-4 flex flex-col gap-3 bg-cream/30"
            >
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.isBot 
                      ? 'self-start bg-white text-gray-800 shadow-sm border border-gray-100' 
                      : 'self-end bg-maroon text-white shadow-md'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Suggested Options */}
            <div className="p-3 border-t border-gray-50 bg-white">
              <p className="text-[10px] text-gray-400 mb-2 uppercase font-bold px-1">{t('chatbot.suggestedQuestions')}</p>
              <div className="flex flex-wrap gap-2">
                {options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleOptionClick(opt)}
                    className="text-[11px] px-3 py-1.5 bg-gray-50 border border-gray-200 text-maroon rounded-full hover:bg-maroon hover:text-white hover:border-maroon transition-all"
                  >
                    {t(`chatbot.options.${opt}`)}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Input Area (Static Mock for simple easy react) */}
            <div className="p-4 bg-gray-50 flex items-center gap-2">
              <div className="flex-1 bg-white border border-gray-200 rounded-full px-4 py-2 text-xs text-gray-400">
                {t('chatbot.placeholder')}
              </div>
              <button className="text-maroon">
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
