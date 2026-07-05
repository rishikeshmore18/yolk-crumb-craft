import { createFileRoute } from "@tanstack/react-router";
import { Badge, Divider } from "@/components/layout/Divider";
import hero from "@/assets/hero-croissant.jpg";
import bread from "@/assets/artisan-bread.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Yolk & Crumb Artisan Bakeshop, Worcester" },
      { name: "description", content: "An artisan bakeshop in Tatnuck Square built around laminated dough, slow mornings, and small-batch baking." },
    ],
  }),
  component: About,
});

const VALUES = [
  { t: "Small batch", d: "We bake in quantities small enough to still care about every one." },
  { t: "Handmade", d: "Every laminated layer, every glaze, every crumb is done by hand." },
  { t: "Freshly baked", d: "What's in the case came out of our ovens that morning." },
  { t: "Quality ingredients", d: "European butter, single-origin chocolate, real vanilla, local eggs." },
  { t: "Neighborhood warmth", d: "A quiet corner of Tatnuck Square that feels like your kitchen." },
];

function About() {
  return (
    <>
      <section className="bg-peach">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <Badge tone="outline">Our story</Badge>
          <h1 className="mt-4 font-serif text-4xl text-caramel sm:text-6xl">An Artisan Bakeshop in Tatnuck Square</h1>
          <p className="mx-auto mt-5 max-w-2xl text-foreground/75">Built around the craft of laminated dough, slow mornings, and small-batch baking.</p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
          <img src={hero} alt="Golden croissant" loading="lazy" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl" />
          <div>
            <h2 className="font-serif text-3xl text-caramel sm:text-4xl">From golden croissants to seasonal pastries</h2>
            <p className="mt-4 text-foreground/75">Yolk &amp; Crumb is designed around freshness, texture, and care. Croissant dough is folded over three days. Cakes are baked to order when we can. Bread cools on the counter, not in a bag.</p>
            <p className="mt-4 text-foreground/75">We're a neighborhood bakeshop first — the kind of place that remembers your Saturday order and always has one cinnamon roll saved just in case.</p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="bg-peach">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <Badge>Founder story</Badge>
            <h2 className="mt-3 font-serif text-3xl text-caramel sm:text-4xl">A note from the bakers</h2>
            <p className="mt-4 rounded-2xl border border-dashed border-caramel/40 bg-cream/60 p-6 text-sm italic text-foreground/70">
              [Add founder story here — the who, the why, and the first pastry that started it all.]
            </p>
          </div>
          <img src={bread} alt="Artisan loaf" loading="lazy" className="order-1 aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl md:order-2" />
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-center font-serif text-3xl text-caramel sm:text-5xl">What we value</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((v) => (
              <div key={v.t} className="rounded-3xl border border-border/60 bg-card p-6">
                <p className="font-serif text-xl text-caramel">{v.t}</p>
                <p className="mt-2 text-sm text-foreground/70">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}