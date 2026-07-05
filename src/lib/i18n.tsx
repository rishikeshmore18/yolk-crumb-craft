import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export const LANGUAGES = [
  { code: "en", label: "English", flag: "EN" },
  { code: "es", label: "Español", flag: "ES" },
  { code: "zh", label: "中文", flag: "ZH" },
  { code: "tl", label: "Tagalog", flag: "TL" },
  { code: "vi", label: "Tiếng Việt", flag: "VI" },
  { code: "ar", label: "العربية", flag: "AR" },
  { code: "fr", label: "Français", flag: "FR" },
  { code: "ko", label: "한국어", flag: "KO" },
  { code: "ru", label: "Русский", flag: "RU" },
  { code: "pt", label: "Português", flag: "PT" },
] as const;

export type LangCode = (typeof LANGUAGES)[number]["code"];

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.menu": "Menu",
  "nav.preorder": "Preorder",
  "nav.catering": "Catering",
  "nav.about": "About",
  "nav.gallery": "Gallery",
  "nav.visit": "Visit",
  "nav.contact": "Contact",
  "nav.journal": "Journal",
  "cta.preorder": "Preorder for Pickup",
  "cta.menu": "Explore the Menu",
  "announcement": "Freshly baked in Tatnuck Square, Worcester",
  "footer.tagline": "Yolk & Crumb — An Artisan Bakeshop in Worcester, MA.",
};

const es: Dict = {
  "nav.home": "Inicio",
  "nav.menu": "Menú",
  "nav.preorder": "Pedido",
  "nav.catering": "Catering",
  "nav.about": "Nosotros",
  "nav.gallery": "Galería",
  "nav.visit": "Visítanos",
  "nav.contact": "Contacto",
  "nav.journal": "Diario",
  "cta.preorder": "Pedir para recoger",
  "cta.menu": "Ver el menú",
  "announcement": "Recién horneado en Tatnuck Square, Worcester",
  "footer.tagline": "Yolk & Crumb — Panadería artesanal en Worcester, MA.",
};

const dicts: Partial<Record<LangCode, Dict>> = { en, es };

type Ctx = { lang: LangCode; setLang: (l: LangCode) => void; t: (k: string) => string };
const I18nContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (k) => en[k] ?? k });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("yc-lang") as LangCode | null) : null;
    if (stored) setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: LangCode) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("yc-lang", l);
  };

  const t = (k: string) => {
    const d = dicts[lang] ?? en;
    return d[k] ?? en[k] ?? k;
  };

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);