import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/layout/Divider";
import hero from "@/assets/hero-croissant.jpg";
import fancy from "@/assets/fancy-croissant.jpg";
import bread from "@/assets/artisan-bread.jpg";
import basque from "@/assets/basque-cheesecake.jpg";
import cinnamon from "@/assets/cinnamon-roll.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Yolk & Crumb Bakery Worcester" },
      { name: "description", content: "Stories, tips, and notes from the Yolk & Crumb bakery in Worcester." },
    ],
  }),
  component: Journal,
});

const POSTS = [
  { t: "What Makes a Croissant Flaky?", img: hero, e: "The three-day fold, the butter temperature, and why patience is the real ingredient." },
  { t: "A Guide to Ordering Pastry Boxes", img: fancy, e: "How to plan a box for a meeting, a brunch, or a Sunday morning at home." },
  { t: "Weekend Bakes in Worcester", img: bread, e: "What we're pulling out of the oven on Saturday and Sunday mornings." },
  { t: "How to Store Artisan Bread", img: bread, e: "Keep the crust crisp, the crumb soft, and never, ever the fridge." },
  { t: "Seasonal Specials at Yolk & Crumb", img: basque, e: "What's coming next: stone fruit, spice, and one very good pumpkin experiment." },
  { t: "The Cinnamon Roll, Slowly", img: cinnamon, e: "Why our coil takes 36 hours — and why it's worth the wait." },
];

function Journal() {
  return (
    <>
      <section className="bg-peach">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <Badge tone="outline">Journal</Badge>
          <h1 className="mt-4 font-serif text-4xl text-caramel sm:text-6xl">Notes from the bakery</h1>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p) => (
              <article key={p.t} className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden bg-peach">
                  <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-toast">Journal</p>
                  <h3 className="mt-2 font-serif text-xl text-caramel">{p.t}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{p.e}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-caramel">Read more →</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}