import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/logo.asset.json";
import { useI18n, LANGUAGES, type LangCode } from "@/lib/i18n";
import { BUSINESS } from "@/data/menu";
import { Instagram, Menu, X, Globe } from "lucide-react";

const NAV = [
  { to: "/", key: "nav.home" as const },
  { to: "/menu", key: "nav.menu" as const },
  { to: "/preorder", key: "nav.preorder" as const },
  { to: "/catering", key: "nav.catering" as const },
  { to: "/about", key: "nav.about" as const },
  { to: "/gallery", key: "nav.gallery" as const },
  { to: "/visit", key: "nav.visit" as const },
  { to: "/contact", key: "nav.contact" as const },
];

export function AnnouncementBar() {
  const { t } = useI18n();
  return (
    <div className="section-caramel">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-4 py-2 text-xs sm:flex-row sm:text-sm">
        <p className="font-medium tracking-wide">{t("announcement")}</p>
        <div className="flex items-center gap-4 opacity-90">
          <Link to="/visit" className="hover:underline">Hours</Link>
          <Link to="/menu" className="hover:underline">Menu</Link>
          <Link to="/preorder" className="hover:underline">Preorder</Link>
        </div>
      </div>
    </div>
  );
}

function LanguageSelector() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-border/70 bg-card px-3 py-1.5 text-xs font-medium text-foreground/80 transition hover:border-caramel"
        aria-label="Language"
      >
        <Globe className="h-3.5 w-3.5" />
        {LANGUAGES.find((l) => l.code === lang)?.flag}
      </button>
      {open && (
        <>
          <button className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden />
          <div className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code as LangCode); setOpen(false); }}
                className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-peach/50 ${lang === l.code ? "bg-peach/60 font-semibold" : ""}`}
              >
                <span>{l.label}</span>
                <span className="text-xs text-muted-foreground">{l.flag}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img src={logoAsset.url} alt="Yolk & Crumb logo" className="h-11 w-11 rounded-full object-contain" />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-lg text-caramel">Yolk &amp; Crumb</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Artisan Bakeshop</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} className="text-sm font-medium text-foreground/75 transition hover:text-caramel" activeProps={{ className: "text-caramel" }}>
              {t(n.key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSelector />
          <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hidden rounded-full border border-border/70 bg-card p-2 text-foreground/70 transition hover:border-caramel hover:text-caramel sm:inline-flex">
            <Instagram className="h-4 w-4" />
          </a>
          <Link to="/preorder" className="hidden rounded-full bg-caramel px-4 py-2 text-sm font-semibold text-cream shadow-sm transition hover:opacity-90 md:inline-flex">
            {t("cta.preorder")}
          </Link>
          <button onClick={() => setOpen((v) => !v)} className="rounded-full border border-border/70 bg-card p-2 text-foreground/80 lg:hidden" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-cream lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-base font-medium text-foreground/80 hover:bg-peach/60">
                {t(n.key)}
              </Link>
            ))}
            <Link to="/preorder" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-caramel px-4 py-2.5 text-center text-sm font-semibold text-cream">
              {t("cta.preorder")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}