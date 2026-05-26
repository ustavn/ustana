import { Clock, Users, CalendarCheck, Wallet, Eye } from "lucide-react";

const outcomes = [
  { icon: Clock, label: "Reduce dispatch time", value: "−35%", desc: "From minutes-on-the-phone to one-tap assignment." },
  { icon: Users, label: "Increase technician utilization", value: "+28%", desc: "Fewer idle hours, smarter routing between jobs." },
  { icon: CalendarCheck, label: "Fewer missed appointments", value: "−60%", desc: "Automated reminders and live ETA updates." },
  { icon: Wallet, label: "Faster payment reconciliation", value: "−4 days", desc: "Cash, transfers, and invoices in one ledger." },
  { icon: Eye, label: "Real-time operational visibility", value: "24/7", desc: "Every job, technician, and payment in one view." },
];

const MarketSize = () => {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
          Built for real field operations
        </h2>
        <p className="text-muted-foreground">
          Operational outcomes measured across AC service teams running on Usta — not theoretical market charts.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {outcomes.map((o) => (
          <div key={o.label} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="mb-4 flex items-center justify-between">
              <div className="inline-flex rounded-lg bg-primary/5 p-2 text-primary">
                <o.icon className="h-4 w-4" />
              </div>
              <span className="text-xl font-bold text-foreground">{o.value}</span>
            </div>
            <h3 className="mb-1.5 text-sm font-semibold text-foreground">{o.label}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{o.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketSize;
