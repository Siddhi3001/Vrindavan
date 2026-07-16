/*
Module Name: LanguageContext.jsx
Purpose: Provides language state management across the application
Editable Sections: None
Dependencies: React
*/

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Default language is Marathi ('mr')
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'mr');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (path) => {
    const keys = path.split('.');
    let result = translations[language];
    for (const key of keys) {
      if (result[key]) {
        result = result[key];
      } else {
        return path; // Return path if not found
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

export const useLanguage = () => useContext(LanguageContext);
