import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import logoAsset from "@/assets/logo.asset.json";
import { BUSINESS, HOURS } from "@/data/menu";
import { useI18n } from "@/lib/i18n";
import { toast } from "sonner";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="section-caramel mt-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-3 transition hover:opacity-90" aria-label="Go to homepage">
            <img src={logoAsset.url} alt="Yolk & Crumb" className="h-12 w-12 rounded-full bg-cream object-contain p-1" />
            <div>
              <p className="font-serif text-xl">Yolk &amp; Crumb</p>
              <p className="text-xs uppercase tracking-[0.2em] opacity-80">Artisan Bakeshop</p>
            </div>
          </Link>
          <p className="mt-4 text-sm opacity-80">{t("footer.tagline")}</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest opacity-80">Visit</h4>
          <p className="text-sm opacity-90">{BUSINESS.address}</p>
          <a href={BUSINESS.phoneHref} className="mt-2 block text-sm opacity-90 hover:underline">{BUSINESS.phone}</a>
          <a href={BUSINESS.instagram} className="mt-3 inline-flex items-center gap-2 text-sm opacity-90 hover:underline" target="_blank" rel="noreferrer">
            <Instagram className="h-4 w-4" /> Instagram
          </a>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest opacity-80">Hours</h4>
          <ul className="space-y-1 text-sm opacity-90">
            {HOURS.map((h) => (
              <li key={h.day} className="flex justify-between gap-4"><span>{h.day}</span><span>{h.hours}</span></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest opacity-80">Newsletter</h4>
          <p className="text-sm opacity-80">Warm bread, seasonal drops, and Saturday specials in your inbox.</p>
          <form onSubmit={(e) => { e.preventDefault(); toast.success("Thanks — we'll be in touch soon."); (e.currentTarget as HTMLFormElement).reset(); }} className="mt-3 flex overflow-hidden rounded-full bg-cream/10 ring-1 ring-cream/30">
            <input required type="email" placeholder="you@example.com" className="flex-1 bg-transparent px-4 py-2 text-sm text-cream placeholder:text-cream/50 focus:outline-none" />
            <button type="submit" className="bg-cream px-4 py-2 text-xs font-semibold uppercase tracking-widest text-caramel">Join</button>
          </form>
          <div className="mt-6 flex flex-wrap gap-3 text-xs opacity-80">
            <Link to="/menu" className="hover:underline">Menu</Link>
            <Link to="/preorder" className="hover:underline">Preorder</Link>
            <Link to="/catering" className="hover:underline">Catering</Link>
            <Link to="/journal" className="hover:underline">Journal</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs opacity-70">
          © {new Date().getFullYear()} Yolk &amp; Crumb. Baked with care in Worcester, Massachusetts.
        </div>
      </div>
    </footer>
  );
}
