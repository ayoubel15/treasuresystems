import { createContext } from 'react';
import type { Dictionary } from '@/i18n/ar';

export type Lang = 'ar' | 'en';

export type LanguageContextValue = {
  lang: Lang;
  t: Dictionary;
  toggleLang: () => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);
