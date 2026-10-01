"use client";

import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  type Language,
  type Translations,
  TRANSLATIONS,
} from "@/locales/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const STORAGE_KEY = "max_thermal_preferred_lang";
let memoryLang: Language = "en";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("local-storage-lang", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("local-storage-lang", callback);
  };
}

function getSnapshot(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "bn") {
      memoryLang = saved;
      return saved;
    }
  } catch {}
  return memoryLang;
}

function getServerSnapshot(): Language {
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
      if (language === "bn") {
        document.documentElement.classList.add("lang-bn");
      } else {
        document.documentElement.classList.remove("lang-bn");
      }
    }
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    memoryLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      window.dispatchEvent(new Event("local-storage-lang"));
    } catch {
      // Fail silently if localStorage is restricted
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "en" ? "bn" : "en");
  }, [language, setLanguage]);

  const t = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    // Return a safe fallback during SSR before provider attaches
    return {
      language: "en",
      setLanguage: () => {},
      toggleLanguage: () => {},
      t: TRANSLATIONS.en,
    };
  }
  return context;
}
