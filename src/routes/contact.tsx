import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/layout/Divider";
import { toast } from "sonner";
import { BUSINESS } from "@/data/menu";
import { Phone, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Yolk & Crumb Bakery Worcester" },
      { name: "description", content: "Get in touch with Yolk & Crumb — general questions, preorders, catering, or collaborations." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent — we'll reply within 1–2 business days.");
    e.currentTarget.reset();
  };
  return (
    <>
      <section className="bg-peach">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <Badge tone="outline">Contact</Badge>
          <h1 className="mt-4 font-serif text-4xl text-caramel sm:text-6xl">Say hello</h1>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/70">Questions, ideas, or collaborations — we read every note.</p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-[1fr_2fr]">
          <div className="space-y-4 rounded-3xl border border-border/60 bg-card p-6">
            <p className="flex items-start gap-3"><MapPin className="mt-1 h-5 w-5 text-caramel" /> <span className="text-sm">{BUSINESS.address}</span></p>
            <p className="flex items-start gap-3"><Phone className="mt-1 h-5 w-5 text-caramel" /> <a href={BUSINESS.phoneHref} className="text-sm hover:underline">{BUSINESS.phone}</a></p>
            <p className="flex items-start gap-3"><Mail className="mt-1 h-5 w-5 text-caramel" /> <span className="text-sm">hello@yolkandcrumb.com</span></p>
          </div>
          <form onSubmit={submit} className="grid gap-4 rounded-3xl bg-card p-6 shadow-sm sm:grid-cols-2">
            <input required name="name" placeholder="Full name" className="rounded-xl border border-border bg-cream px-4 py-3" />
            <input required name="email" type="email" placeholder="Email" className="rounded-xl border border-border bg-cream px-4 py-3" />
            <input name="phone" type="tel" placeholder="Phone (optional)" className="rounded-xl border border-border bg-cream px-4 py-3" />
            <select name="type" className="rounded-xl border border-border bg-cream px-4 py-3">
              <option>General question</option>
              <option>Preorder</option>
              <option>Catering</option>
              <option>Custom order</option>
              <option>Website feedback</option>
              <option>Collaboration</option>
            </select>
            <textarea required name="message" rows={6} placeholder="Your message" className="rounded-xl border border-border bg-cream px-4 py-3 sm:col-span-2" />
            <button type="submit" className="rounded-full bg-caramel px-6 py-3 text-sm font-semibold uppercase tracking-widest text-cream sm:col-span-2">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}