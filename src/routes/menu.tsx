import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MENU, CATEGORIES, type MenuItem } from "@/data/menu";
import { Badge } from "@/components/layout/Divider";
import { toast } from "sonner";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Yolk & Crumb Bakery, Worcester" },
      { name: "description", content: "Croissants, scones, cinnamon rolls, artisan bread, desserts, and coffee — the daily bake at Yolk & Crumb in Worcester." },
    ],
  }),
  component: MenuPage,
});

const TAG_LABELS: Record<NonNullable<MenuItem["tags"]>[number], { label: string; tone: "peach" | "butter" | "caramel" | "outline" }> = {
  vegetarian: { label: "Vegetarian", tone: "peach" },
  nuts: { label: "Contains nuts", tone: "outline" },
  savory: { label: "Savory", tone: "butter" },
  sweet: { label: "Sweet", tone: "peach" },
  limited: { label: "Limited", tone: "caramel" },
  preorder: { label: "Preorder available", tone: "outline" },
  seasonal: { label: "Seasonal", tone: "butter" },
};

function MenuPage() {
  const [active, setActive] = useState<string>("all");
  const items = useMemo(() => (active === "all" ? MENU : MENU.filter((m) => m.category === active)), [active]);

  return (
    <>
      <section className="bg-peach">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <Badge tone="outline">The daily bake</Badge>
          <h1 className="mt-4 font-serif text-4xl text-caramel sm:text-6xl">Menu</h1>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/70">A rotating list of what's coming out of the oven. Menu changes based on seasonality and daily bake. Preorders are requests until confirmed.</p>
        </div>
      </section>

      <section className="sticky top-[60px] z-20 border-y border-border/60 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition ${active === c.id ? "bg-caramel text-cream" : "bg-peach/60 text-caramel hover:bg-peach"}`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16">
          {items.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border p-16 text-center text-muted-foreground">
              Sold out for today — check back tomorrow morning.
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <article key={item.id} className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  {item.image && (
                    <div className="aspect-[4/3] overflow-hidden bg-peach">
                      <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags?.map((t) => <Badge key={t} tone={TAG_LABELS[t].tone}>{TAG_LABELS[t].label}</Badge>)}
                    </div>
                    <h3 className="mt-3 font-serif text-xl text-caramel">{item.name}</h3>
                    <p className="mt-2 min-h-[3rem] text-sm text-foreground/70">{item.description}</p>
                    <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-4">
                      <span className="font-serif text-lg text-caramel">{item.price}</span>
                      <button
                        onClick={() => toast.success(`Added ${item.name} to your preorder`)}
                        className="rounded-full bg-caramel px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cream transition hover:opacity-90"
                      >
                        Add to Preorder
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}