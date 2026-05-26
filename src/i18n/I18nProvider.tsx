import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { translations, type Locale, type Translation } from "./translations";

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translation;
};

const I18nContext = createContext<I18nContextValue | null>(null);
const STORAGE_KEY = "usta.locale";

function detectInitial(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored === "en" || stored === "vi") return stored;
  const nav = window.navigator.language?.toLowerCase() ?? "";
  return nav.startsWith("vi") ? "vi" : "en";
}

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    setLocaleState(detectInitial());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, l);
  };

  const value = useMemo(
    () => ({ locale, setLocale, t: translations[locale] }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
