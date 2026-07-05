export function Divider({ label = "✦" }: { label?: string }) {
  return (
    <div className="mx-auto my-14 max-w-md">
      <div className="divider-swirl"><span>{label}</span></div>
    </div>
  );
}

export function Badge({ children, tone = "peach" }: { children: React.ReactNode; tone?: "peach" | "butter" | "caramel" | "outline" }) {
  const tones = {
    peach: "bg-peach text-caramel",
    butter: "bg-butter text-ink",
    caramel: "bg-caramel text-cream",
    outline: "border border-caramel/40 text-caramel",
  } as const;
  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${tones[tone]}`}>{children}</span>;
}