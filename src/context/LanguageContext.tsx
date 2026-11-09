import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { ar } from '@/i18n/ar';
import { en } from '@/i18n/en';
import { LanguageContext, type Lang, type LanguageContextValue } from '@/context/languageContext';

const STORAGE_KEY = 'treasure-lang';

function readStoredLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en') {
      return 'ar';
    }
    return 'ar';
  } catch {
    return 'ar';
  }
}

function storeLang(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    return;
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readStoredLang);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = (lang === 'ar' ? ar : en).meta.title;
    storeLang(lang);
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      t: lang === 'ar' ? ar : en,
      toggleLang: () => setLang((current) => (current === 'ar' ? 'en' : 'ar')),
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
