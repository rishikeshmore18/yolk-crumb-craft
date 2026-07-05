import { createFileRoute, Link } from "@tanstack/react-router";
import { BUSINESS, HOURS } from "@/data/menu";
import { Badge } from "@/components/layout/Divider";
import { MapPin, Phone, Clock } from "lucide-react";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit — Yolk & Crumb, 1130 Pleasant St, Worcester, MA" },
      { name: "description", content: "Yolk & Crumb bakery is at 1130 Pleasant St, Tatnuck Square, Worcester, MA. Hours, phone, and directions." },
    ],
  }),
  component: Visit,
});

function Visit() {
  return (
    <>
      <section className="bg-peach">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <Badge tone="outline">Come visit</Badge>
          <h1 className="mt-4 font-serif text-4xl text-caramel sm:text-6xl">Find us in Tatnuck Square</h1>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2">
          <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm">
            <div className="space-y-5">
              <p className="flex items-start gap-3 text-foreground/85"><MapPin className="mt-1 h-5 w-5 text-caramel" /> <span>{BUSINESS.address}</span></p>
              <p className="flex items-start gap-3 text-foreground/85"><Phone className="mt-1 h-5 w-5 text-caramel" /> <a href={BUSINESS.phoneHref} className="hover:underline">{BUSINESS.phone}</a></p>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-caramel" />
                <ul className="w-full space-y-1 text-sm">
                  {HOURS.map((h) => (
                    <li key={h.day} className="flex justify-between border-b border-border/40 pb-1 last:border-0">
                      <span className="font-medium">{h.day}</span>
                      <span className={h.hours === "Closed" ? "text-muted-foreground" : "text-foreground/80"}>{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-6 rounded-xl bg-peach/60 p-4 text-xs italic text-caramel">Hours and menu availability may change. Please check Instagram or call before visiting. Small-batch items may sell out — for larger orders, please preorder.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={BUSINESS.mapUrl} target="_blank" rel="noreferrer" className="rounded-full bg-caramel px-5 py-2.5 text-sm font-semibold text-cream">Get Directions</a>
              <a href={BUSINESS.phoneHref} className="rounded-full border border-caramel/50 px-5 py-2.5 text-sm font-semibold text-caramel">Call Bakery</a>
              <Link to="/menu" className="rounded-full border border-caramel/50 px-5 py-2.5 text-sm font-semibold text-caramel">View Menu</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border/60 shadow-sm">
            <iframe title="Map" src="https://www.google.com/maps?q=1130+Pleasant+St,+Worcester,+MA+01602&output=embed" className="h-full min-h-[420px] w-full" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}