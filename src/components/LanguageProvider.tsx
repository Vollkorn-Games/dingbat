import { useCallback, useEffect, useMemo, useState } from 'react';
import { LanguageContext, type LanguageApi } from '@/hooks/useLanguage';
import { detectLanguage, LANGUAGES, STRINGS, type Language } from '@/i18n';

const STORAGE_KEY = 'dingbat:lang-v1';

function read(): Language {
  if (typeof window === 'undefined') {
    return 'en';
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw !== null && (LANGUAGES as readonly string[]).includes(raw)) {
      return raw as Language;
    }
  } catch {
    // ignore
  }
  return detectLanguage();
}

export function LanguageProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  const [language, setLanguageState] = useState<Language>(() => read());

  useEffect(() => {
    function onStorage(e: StorageEvent): void {
      if (e.key === STORAGE_KEY) {
        setLanguageState(read());
      }
    }
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo<LanguageApi>(
    () => ({ language, setLanguage, t: STRINGS[language] }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
