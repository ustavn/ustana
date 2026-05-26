import { CalendarCheck, Send, UserCheck, Wrench, CreditCard, LineChart, ArrowRight } from "lucide-react";

const steps = [
  { icon: CalendarCheck, label: "Customer booking", desc: "Bookings come in from web, hotline, or Zalo into one queue." },
  { icon: Send, label: "Smart dispatch", desc: "Assign the right technician by skill, location, and availability." },
  { icon: UserCheck, label: "Technician accepts", desc: "Job appears on the mobile app with full customer and site details." },
  { icon: Wrench, label: "On-site service", desc: "Checklists, photo proof, and parts logged from the field." },
  { icon: CreditCard, label: "Payment collection", desc: "Cash or online — invoiced and reconciled automatically." },
  { icon: LineChart, label: "Feedback & analytics", desc: "Track SLA, technician performance, and recurring maintenance." },
];

const PlatformDiagram = () => {
  return (
    <section className="border-y border-border bg-card">
      <div className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
            How Usta runs your service operations
          </h2>
          <p className="text-muted-foreground">
            From the first customer request to the final payment — one connected workflow.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.label} className="relative rounded-xl border border-border bg-background p-5 shadow-[var(--shadow-card)]">
              <div className="mb-3 flex items-center justify-between">
                <div className="inline-flex rounded-lg bg-primary/5 p-2 text-primary">
                  <s.icon className="h-4 w-4" />
                </div>
                <span className="text-[11px] font-medium text-muted-foreground">Step {i + 1}</span>
              </div>
              <h3 className="mb-1.5 text-sm font-semibold text-foreground">{s.label}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

              {/* mini UI preview per step */}
              <div className="rounded-md border border-border bg-secondary/60 p-2.5">
                {i === 0 && (
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-medium text-foreground">AC cleaning · Apt 8F</span>
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-blue-700">New</span>
                  </div>
                )}
                {i === 1 && (
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-muted-foreground">Suggested</span>
                    <span className="font-medium text-foreground">Minh T. · 1.2 km</span>
                  </div>
                )}
                {i === 2 && (
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-medium text-foreground">Hung P. accepted</span>
                    <span className="text-emerald-600">✓ ETA 25m</span>
                  </div>
                )}
                {i === 3 && (
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-muted-foreground">Checklist</span>
                    <span className="font-medium text-foreground">6/7 · photos uploaded</span>
                  </div>
                )}
                {i === 4 && (
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-muted-foreground">Invoice #INV-2041</span>
                    <span className="font-medium text-foreground">₫ 1,250,000 · Paid</span>
                  </div>
                )}
                {i === 5 && (
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-muted-foreground">SLA this week</span>
                    <span className="font-medium text-emerald-600">98.2% ↑</span>
                  </div>
                )}
              </div>

              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-muted-foreground/30 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformDiagram;
