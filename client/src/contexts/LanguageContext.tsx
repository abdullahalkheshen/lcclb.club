import React, { createContext, useContext, useEffect, useState } from 'react';
import en from '@/locales/en.json';
import ar from '@/locales/ar.json';
import fr from '@/locales/fr.json';

export type Language = 'en' | 'ar' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en,
  ar,
  fr,
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get saved language from localStorage or detect from browser
    const saved = localStorage.getItem('language') as Language | null;
    if (saved && ['en', 'ar', 'fr'].includes(saved)) {
      setLanguageState(saved);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'ar') {
        setLanguageState('ar');
      } else if (browserLang === 'fr') {
        setLanguageState('fr');
      } else {
        setLanguageState('en');
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    // Update HTML lang attribute and dir for RTL
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    // Save to localStorage
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key not found
        value = translations.en;
        for (const k of keys) {
          if (value && typeof value === 'object' && k in value) {
            value = value[k];
          } else {
            return key;
          }
        }
        return value;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
