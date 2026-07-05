import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Badge } from "@/components/layout/Divider";
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
import { BUSINESS } from "@/data/menu";
import { Instagram } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Yolk & Crumb Bakery Worcester" },
      { name: "description", content: "A visual look at croissants, desserts, bread, and coffee from Yolk & Crumb in Tatnuck Square, Worcester." },
    ],
  }),
  component: Gallery,
});

type Item = { src: string; alt: string; cat: "Croissants" | "Desserts" | "Bread" | "Coffee" | "Behind the Scenes"; span?: string };

const ITEMS: Item[] = [
  { src: hero, alt: "Golden croissant", cat: "Croissants", span: "row-span-2" },
  { src: fancy, alt: "Filled croissant", cat: "Croissants" },
  { src: basque, alt: "Basque cheesecake", cat: "Desserts" },
  { src: bread, alt: "Country loaf", cat: "Bread", span: "row-span-2" },
  { src: latte, alt: "Vanilla latte", cat: "Coffee" },
  { src: almond, alt: "Almond croissant", cat: "Croissants" },
  { src: cinnamon, alt: "Cinnamon roll", cat: "Behind the Scenes" },
  { src: caprese, alt: "Caprese croissant", cat: "Croissants" },
  { src: cookie, alt: "Chocolate chip cookie", cat: "Desserts" },
  { src: butter, alt: "Butter croissant", cat: "Croissants" },
  { src: chorizo, alt: "Chorizo scone", cat: "Behind the Scenes" },
  { src: choc, alt: "Pain au chocolat", cat: "Croissants" },
];

const FILTERS = ["All", "Croissants", "Desserts", "Bread", "Coffee", "Behind the Scenes"] as const;

function Gallery() {
  const [f, setF] = useState<(typeof FILTERS)[number]>("All");
  const shown = f === "All" ? ITEMS : ITEMS.filter((i) => i.cat === f);

  return (
    <>
      <section className="bg-peach">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <Badge tone="outline">Gallery</Badge>
          <h1 className="mt-4 font-serif text-4xl text-caramel sm:text-6xl">Today's bake, in pictures</h1>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {FILTERS.map((x) => (
              <button key={x} onClick={() => setF(x)} className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${f === x ? "bg-caramel text-cream" : "bg-peach/60 text-caramel hover:bg-peach"}`}>{x}</button>
            ))}
          </div>
          <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4">
            {shown.map((i, idx) => (
              <figure key={idx} className={`group relative overflow-hidden rounded-2xl bg-peach ${i.span ?? ""}`}>
                <img src={i.src} alt={i.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-caramel/90 to-transparent px-4 py-3 text-xs font-medium uppercase tracking-widest text-cream opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  {i.alt}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-caramel px-6 py-3 text-sm font-semibold text-cream">
              <Instagram className="h-4 w-4" /> See today's bake on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}