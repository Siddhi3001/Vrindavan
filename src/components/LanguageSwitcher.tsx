/*
Module Name: LanguageSwitcher.tsx
Purpose: UI component to change website language
Editable Sections: Add more languages icons/labels if needed
Dependencies: LanguageContext, motion
*/

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const langs = [
    { code: 'mr', label: 'मराठी' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'en', label: 'English' }
  ];

  const currentLang = langs.find(l => l.code === language) || langs[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/80 border border-maroon/20 rounded shadow-sm text-maroon font-bold text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-all"
      >
        <Globe size={14} className="text-gold" />
        <span>{currentLang.label}</span>
        <ChevronDown size={12} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full right-0 mt-2 w-32 bg-white rounded-sm shadow-2xl border border-gray-100 overflow-hidden z-50 origin-top-right"
          >
            {langs.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-left text-[11px] font-bold uppercase tracking-widest transition-colors border-b border-gray-50 last:border-0 ${
                  language === lang.code 
                    ? 'bg-maroon text-white' 
                    : 'text-maroon hover:bg-cream hover:text-gold'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
