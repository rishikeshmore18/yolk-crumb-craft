import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MENU } from "@/data/menu";
import { Badge } from "@/components/layout/Divider";
import { toast } from "sonner";
import { Check, Minus, Plus } from "lucide-react";

export const Route = createFileRoute("/preorder")({
  head: () => ({
    meta: [
      { title: "Preorder for Pickup — Yolk & Crumb" },
      { name: "description", content: "Request a preorder for pickup at Yolk & Crumb in Tatnuck Square, Worcester. The bakery will confirm availability." },
    ],
  }),
  component: Preorder,
});

function Preorder() {
  const [qty, setQty] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [ack, setAck] = useState(false);

  const change = (id: string, d: number) => setQty((q) => ({ ...q, [id]: Math.max(0, (q[id] ?? 0) + d) }));
  const total = Object.values(qty).reduce((a, b) => a + b, 0);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ack) { toast.error("Please acknowledge that this is a request."); return; }
    if (total === 0) { toast.error("Add at least one item."); return; }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <section className="bg-cream">
        <div className="mx-auto max-w-2xl px-4 py-24 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-caramel text-cream"><Check className="h-8 w-8" /></div>
          <h1 className="mt-6 font-serif text-4xl text-caramel">Thank you.</h1>
          <p className="mt-4 text-foreground/70">Your preorder request has been received. Yolk &amp; Crumb will confirm availability before your pickup. Payment is handled after confirmation.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-peach">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <Badge tone="outline">Preorder request</Badge>
          <h1 className="mt-4 font-serif text-4xl text-caramel sm:text-6xl">Preorder for Pickup</h1>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/70">Send a request and the bakery will confirm what's available for your pickup window. No payment collected here — that's handled after confirmation.</p>
        </div>
      </section>

      <section className="bg-cream">
        <form onSubmit={submit} className="mx-auto max-w-5xl space-y-10 px-4 py-16">
          {/* Products */}
          <Step n={1} title="Choose products">
            <div className="grid gap-3 sm:grid-cols-2">
              {MENU.filter((m) => m.category !== "drinks").map((m) => (
                <div key={m.id} className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-3">
                  {m.image && <img src={m.image} alt="" loading="lazy" className="h-16 w-16 shrink-0 rounded-xl object-cover" />}
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-serif text-caramel">{m.name}</p>
                    <p className="text-xs text-muted-foreground">{m.price}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <button type="button" onClick={() => change(m.id, -1)} className="rounded-full border border-border p-1.5 text-foreground/70 hover:border-caramel"><Minus className="h-3 w-3" /></button>
                    <span className="w-6 text-center font-medium">{qty[m.id] ?? 0}</span>
                    <button type="button" onClick={() => change(m.id, 1)} className="rounded-full bg-caramel p-1.5 text-cream"><Plus className="h-3 w-3" /></button>
                  </div>
                </div>
              ))}
            </div>
          </Step>

          <div className="grid gap-6 md:grid-cols-2">
            <Step n={2} title="Pickup date">
              <input type="date" required name="date" className="w-full rounded-xl border border-border bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-caramel/40" />
            </Step>
            <Step n={3} title="Pickup time">
              <select required name="time" className="w-full rounded-xl border border-border bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-caramel/40">
                <option value="">Select a window</option>
                <option>8:00 – 9:00 AM</option>
                <option>9:00 – 10:00 AM</option>
                <option>10:00 – 11:00 AM</option>
                <option>11:00 AM – 12:00 PM</option>
                <option>12:00 – 1:00 PM</option>
                <option>1:00 – 3:00 PM</option>
              </select>
            </Step>
          </div>

          <Step n={4} title="Your info">
            <div className="grid gap-4 sm:grid-cols-3">
              <input required name="name" placeholder="Full name" className="rounded-xl border border-border bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-caramel/40" />
              <input required name="email" type="email" placeholder="Email" className="rounded-xl border border-border bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-caramel/40" />
              <input required name="phone" type="tel" placeholder="Phone" className="rounded-xl border border-border bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-caramel/40" />
            </div>
          </Step>

          <Step n={5} title="Notes & allergies">
            <div className="grid gap-4 sm:grid-cols-2">
              <textarea name="notes" placeholder="Special requests or notes" rows={3} className="rounded-xl border border-border bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-caramel/40" />
              <textarea name="allergies" placeholder="Allergies to flag" rows={3} className="rounded-xl border border-border bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-caramel/40" />
            </div>
          </Step>

          <div className="rounded-3xl border border-border/60 bg-peach/50 p-6">
            <label className="flex items-start gap-3 text-sm">
              <input type="checkbox" checked={ack} onChange={(e) => setAck(e.target.checked)} className="mt-1 h-4 w-4 accent-[color:var(--caramel)]" />
              <span>I understand this is a request and the bakery will confirm availability before pickup. Payment is handled after confirmation.</span>
            </label>
            <button type="submit" className="mt-6 w-full rounded-full bg-caramel px-6 py-4 text-sm font-semibold uppercase tracking-widest text-cream transition hover:opacity-90">
              Submit Preorder Request · {total} item{total === 1 ? "" : "s"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-caramel font-serif text-sm text-cream">{n}</span>
        <h2 className="font-serif text-2xl text-caramel">{title}</h2>
      </div>
      {children}
    </section>
  );
}