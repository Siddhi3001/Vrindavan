/*
Module Name: LanguageContext.jsx
Purpose: Provides language state management across the application
Editable Sections: None
Dependencies: React
*/

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../data/translations';

type LanguageContextType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  t: (path: string) => any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>(localStorage.getItem('language') || 'mr');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (path: string) => {
    const keys = path.split('.');
    let result: any = translations[language];
    for (const key of keys) {
      if (result[key]) {
        result = result[key];
      } else {
        return path;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
