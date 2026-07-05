import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/layout/Divider";
import { toast } from "sonner";
import { Briefcase, Cake, Coffee, Gift, PartyPopper, Users } from "lucide-react";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Catering & Custom Orders — Yolk & Crumb, Worcester" },
      { name: "description", content: "Pastry boxes, office orders, birthday desserts, and custom bakes from Yolk & Crumb in Tatnuck Square, Worcester." },
    ],
  }),
  component: Catering,
});

const CASES = [
  { icon: Briefcase, title: "Office mornings" },
  { icon: Coffee, title: "Weekend brunches" },
  { icon: Cake, title: "Birthday desserts" },
  { icon: PartyPopper, title: "Holiday gatherings" },
  { icon: Users, title: "Coffee meetings" },
  { icon: Gift, title: "Thank-you boxes" },
];

function Catering() {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Request sent — we'll be in touch within 1–2 business days.");
    e.currentTarget.reset();
  };

  return (
    <>
      <section className="bg-peach">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <Badge tone="outline">Catering & custom</Badge>
          <h1 className="mt-4 font-serif text-4xl text-caramel sm:text-6xl">Pastry Boxes, Events &amp; Custom Bakes</h1>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/70">Bring a little of the bakeshop to your morning, your office, or your celebration.</p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {CASES.map(({ icon: Icon, title }) => (
              <div key={title} className="rounded-3xl border border-border/60 bg-card p-6 text-center shadow-sm">
                <Icon className="mx-auto h-8 w-8 text-caramel" />
                <p className="mt-3 font-serif text-lg text-caramel">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-peach">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="rounded-3xl bg-cream p-8 shadow-lg sm:p-10">
            <h2 className="font-serif text-3xl text-caramel">Request a custom order</h2>
            <p className="mt-2 text-sm text-foreground/70">Tell us what you're planning and we'll put a menu together.</p>
            <form onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Full name" className="rounded-xl border border-border bg-card px-4 py-3" />
              <input required name="email" type="email" placeholder="Email" className="rounded-xl border border-border bg-card px-4 py-3" />
              <input required name="phone" type="tel" placeholder="Phone" className="rounded-xl border border-border bg-card px-4 py-3" />
              <input required name="date" type="date" className="rounded-xl border border-border bg-card px-4 py-3" />
              <input name="time" placeholder="Pickup time" className="rounded-xl border border-border bg-card px-4 py-3" />
              <input name="people" type="number" min={1} placeholder="Number of people" className="rounded-xl border border-border bg-card px-4 py-3" />
              <select name="type" className="rounded-xl border border-border bg-card px-4 py-3 sm:col-span-2">
                <option>Pastry box</option>
                <option>Office / corporate</option>
                <option>Birthday / celebration</option>
                <option>Wedding / event</option>
                <option>Holiday</option>
                <option>Other</option>
              </select>
              <select name="budget" className="rounded-xl border border-border bg-card px-4 py-3 sm:col-span-2">
                <option>Budget: under $75</option>
                <option>$75 – $150</option>
                <option>$150 – $300</option>
                <option>$300 – $600</option>
                <option>$600+</option>
              </select>
              <textarea name="message" rows={4} placeholder="Tell us about your event" className="rounded-xl border border-border bg-card px-4 py-3 sm:col-span-2" />
              <button type="submit" className="rounded-full bg-caramel px-6 py-3 text-sm font-semibold uppercase tracking-widest text-cream sm:col-span-2">
                Request a Custom Order
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}