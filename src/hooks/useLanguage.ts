import { createContext, useContext } from 'react';
import type { STRINGS, Language } from '@/i18n';

type Strings = (typeof STRINGS)[Language];

export interface LanguageApi {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Strings;
}

export const LanguageContext = createContext<LanguageApi | null>(null);

export function useLanguage(): LanguageApi {
  const ctx = useContext(LanguageContext);
  if (ctx === null) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
