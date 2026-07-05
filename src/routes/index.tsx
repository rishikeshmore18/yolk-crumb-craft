import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-croissant.jpg";
import almond from "@/assets/almond-croissant.jpg";
import fancy from "@/assets/fancy-croissant.jpg";
import caprese from "@/assets/caprese-croissant.jpg";
import basque from "@/assets/basque-cheesecake.jpg";
import chorizo from "@/assets/chorizo-scone.jpg";
import cinnamon from "@/assets/cinnamon-roll.jpg";
import bread from "@/assets/artisan-bread.jpg";
import cookie from "@/assets/cookie.jpg";
import latte from "@/assets/latte.jpg";
import butter from "@/assets/butter-croissant.jpg";
import choc from "@/assets/chocolate-croissant.jpg";
import { Divider, Badge } from "@/components/layout/Divider";
import { BUSINESS, HOURS } from "@/data/menu";
import { ArrowRight, Clock, MapPin, Phone, Instagram } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yolk & Crumb — Artisan Bakery in Worcester, MA" },
      { name: "description", content: "Handcrafted croissants, laminated pastries, artisan bread, and coffee in Tatnuck Square, Worcester." },
    ],
  }),
  component: Home,
});

const FEATURED = [
  { title: "Classic Croissants", desc: "Butter, chocolate, and pain aux amandes — the ones we perfect every morning." },
  { title: "Filled Croissants", desc: "Pistachio-raspberry, almond, and seasonal fillings folded into flaky layers." },
  { title: "Savory Croissants", desc: "Caprese, chorizo-cheddar, and rotating specials for a proper lunch." },
];

const CATEGORIES = [
  { name: "Croissants", img: butter },
  { name: "Scones", img: chorizo },
  { name: "Cinnamon Rolls", img: cinnamon },
  { name: "Artisan Bread", img: bread },
  { name: "Cakes & Desserts", img: basque },
  { name: "Coffee & Tea", img: latte },
];

const BEST = [
  { name: "Almond Croissant", desc: "Twice-baked, sugared, snowed in with almonds.", price: "$5.75", img: almond, tags: ["Nuts"] },
  { name: "Chocolate • Almond • Pistachio • Raspberry", desc: "Four flavors, one dramatic pastry.", price: "$7.50", img: fancy, tags: ["Limited", "Nuts"] },
  { name: "Caprese Croissant", desc: "Mozzarella, tomato, basil — savory lunchable.", price: "$6.50", img: caprese, tags: ["Savory"] },
  { name: "Basque Cheesecake", desc: "Caramelized on top, cloud-soft inside.", price: "$7.25", img: basque, tags: ["Vegetarian"] },
  { name: "Chorizo Cheddar Scone", desc: "Smoky, sharp, and endlessly craveable.", price: "$5.25", img: chorizo, tags: ["Savory"] },
  { name: "Cinnamon Roll", desc: "Laminated coil, brown butter glaze, ceylon cinnamon.", price: "$5.75", img: cinnamon, tags: ["Sweet"] },
];

const GALLERY = [hero, almond, fancy, caprese, basque, chorizo, cinnamon, bread, cookie, latte, butter, choc];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-peach">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="order-2 md:order-1">
            <Badge tone="outline">Baked fresh · Tatnuck Square</Badge>
            <h1 className="mt-5 font-serif text-4xl leading-[1.05] text-caramel sm:text-5xl md:text-6xl lg:text-7xl">
              Handcrafted Croissants &amp; Artisan Bakes in Worcester
            </h1>
            <p className="mt-5 max-w-xl text-base text-foreground/75 sm:text-lg">
              A warm neighborhood bakeshop in Tatnuck Square, known for flaky croissants, small-batch pastries, artisan breads, and cozy coffee moments.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/preorder" className="inline-flex items-center gap-2 rounded-full bg-caramel px-6 py-3 text-sm font-semibold text-cream shadow-md transition hover:opacity-90">
                Preorder for Pickup <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/menu" className="inline-flex items-center gap-2 rounded-full border border-caramel/50 bg-cream/60 px-6 py-3 text-sm font-semibold text-caramel transition hover:bg-cream">
                Explore the Menu
              </Link>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-toast">Small-batch baking · Limited daily quantities · Come early</p>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-butter/30 blur-3xl" aria-hidden />
            <img src={hero} alt="Golden flaky croissant on warm cream linen" width={1600} height={1600} className="mx-auto aspect-square w-full max-w-lg rounded-[2rem] object-cover shadow-2xl shadow-caramel/20" />
          </div>
        </div>
      </section>

      {/* Featured signature */}
      <section className="hidden bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <Badge>Signature</Badge>
            <h2 className="mt-4 font-serif text-3xl text-caramel sm:text-5xl">Our Signature Croissants</h2>
            <p className="mt-4 text-foreground/70">Flaky, golden, layered, and baked with care — the pastry that started this whole thing.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FEATURED.map((f) => (
              <div key={f.title} className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="text-3xl">✦</div>
                <h3 className="mt-4 font-serif text-2xl text-caramel">{f.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div hidden>
        <Divider />
      </div>

      {/* Categories */}
      <section className="bg-peach">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Badge tone="outline">The bake list</Badge>
              <h2 className="mt-3 font-serif text-3xl text-caramel sm:text-5xl">Browse by category</h2>
            </div>
            <Link to="/menu" className="text-sm font-semibold text-caramel underline underline-offset-4">View full menu →</Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
            {CATEGORIES.map((c) => (
              <Link key={c.name} to="/menu" className="group overflow-hidden rounded-3xl bg-cream shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[5/4] overflow-hidden">
                  <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="font-serif text-lg text-caramel">{c.name}</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-toast">View items →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best sellers */}
      <section className="hidden bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <Badge tone="butter">Best sellers</Badge>
            <h2 className="mt-4 font-serif text-3xl text-caramel sm:text-5xl">Loved by the neighborhood</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BEST.map((b) => (
              <article key={b.name} className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden bg-peach">
                  <img src={b.img} alt={b.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5">{b.tags.map((t) => <Badge key={t} tone="peach">{t}</Badge>)}</div>
                  <h3 className="mt-3 font-serif text-xl text-caramel">{b.name}</h3>
                  <p className="mt-2 min-h-[3rem] text-sm text-foreground/70">{b.desc}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-4">
                    <span className="font-serif text-lg text-caramel">{b.price}</span>
                    <Link to="/preorder" className="rounded-full bg-caramel px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cream transition hover:opacity-90">
                      Preorder
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Preorder teaser */}
      <section className="section-caramel">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] opacity-70">Preorders</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl">Planning a weekend pickup or pastry box?</h2>
            <p className="mt-4 max-w-lg text-cream/85">
              Send a preorder request and the bakery can confirm availability. Payment is handled after we confirm — nothing charges until we say yes.
            </p>
            <Link to="/preorder" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-caramel transition hover:opacity-90">
              Start Preorder Request <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={cinnamon} alt="Cinnamon roll" loading="lazy" className="aspect-square rounded-3xl object-cover" />
            <img src={fancy} alt="Filled croissant" loading="lazy" className="aspect-square translate-y-6 rounded-3xl object-cover" />
            <img src={basque} alt="Basque cheesecake" loading="lazy" className="aspect-square rounded-3xl object-cover" />
            <img src={bread} alt="Artisan loaf" loading="lazy" className="aspect-square translate-y-6 rounded-3xl object-cover" />
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Badge>Instagram</Badge>
              <h2 className="mt-3 font-serif text-3xl text-caramel sm:text-5xl">Follow the crumb trail</h2>
            </div>
            <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-caramel underline underline-offset-4">
              <Instagram className="h-4 w-4" /> @yolkandcrumb
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-2 md:grid-cols-6">
            {GALLERY.map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl bg-peach">
                <img src={img} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="bg-peach">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 md:grid-cols-2">
          <div>
            <Badge tone="outline">Visit</Badge>
            <h2 className="mt-3 font-serif text-3xl text-caramel sm:text-5xl">Come by the bakeshop</h2>
            <div className="mt-6 space-y-4 text-sm text-foreground/80">
              <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-caramel" /> {BUSINESS.address}</p>
              <p className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-caramel" /> <a href={BUSINESS.phoneHref} className="hover:underline">{BUSINESS.phone}</a></p>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-caramel" />
                <ul className="space-y-0.5">
                  {HOURS.map((h) => <li key={h.day} className="flex gap-3"><span className="w-24 font-medium">{h.day}</span><span className="text-foreground/70">{h.hours}</span></li>)}
                </ul>
              </div>
            </div>
            <p className="mt-6 text-xs italic text-toast">Hours and menu availability may change. Please check Instagram or call before visiting.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={BUSINESS.mapUrl} target="_blank" rel="noreferrer" className="rounded-full bg-caramel px-5 py-2.5 text-sm font-semibold text-cream">Get Directions</a>
              <a href={BUSINESS.phoneHref} className="rounded-full border border-caramel/50 px-5 py-2.5 text-sm font-semibold text-caramel">Call Bakery</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
            <iframe title="Map to Yolk & Crumb" src="https://www.google.com/maps?q=1130+Pleasant+St,+Worcester,+MA+01602&output=embed" className="h-full min-h-[360px] w-full" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
