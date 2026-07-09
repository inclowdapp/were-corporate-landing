import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  T: typeof translations;
};

const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("were.lang") as Lang | null;
      if (stored === "id" || stored === "en") {
        setLangState(stored);
        document.documentElement.lang = stored;
        return;
      }
      const browser = (navigator.language || "id").toLowerCase();
      const next: Lang = browser.startsWith("id") ? "id" : "en";
      setLangState(next);
      document.documentElement.lang = next;
    } catch {
      /* noop */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("were.lang", l);
      document.documentElement.lang = l;
    } catch {
      /* noop */
    }
  };

  return (
    <LangCtx.Provider
      value={{ lang, setLang, toggle: () => setLang(lang === "id" ? "en" : "id"), T: translations }}
    >
      {children}
    </LangCtx.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}