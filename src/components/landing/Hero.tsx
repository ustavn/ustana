import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, CheckCircle2, Wrench } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-subtle)]" />
      <div className="container relative mx-auto px-6 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              Built for AC & HVAC service operators
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              Manage AC service operations from booking to payment
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Dispatch technicians faster, reduce missed appointments, track every service job, and manage payments — all in one platform.
            </p>
            <div className="mb-8 flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Book a demo
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button variant="hero-outline" size="lg">
                See dispatch workflow
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
              {[
                { v: "98%", l: "Jobs assigned within SLA" },
                { v: "35%", l: "Faster technician dispatch" },
                { v: "60%", l: "Fewer missed appointments" },
              ].map((m) => (
                <div key={m.l}>
                  <p className="text-xl font-bold text-foreground">{m.v}</p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{m.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dispatch dashboard mockup */}
          <div className="hidden lg:block">
            <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-elevated)]">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-foreground">Dispatch board · Today</span>
                </div>
                <span className="text-xs text-muted-foreground">Mon, 26 May</span>
              </div>

              <div className="mb-4 grid grid-cols-3 gap-2">
                {[
                  { l: "Active jobs", v: "24" },
                  { l: "Technicians", v: "12/14" },
                  { l: "On-time SLA", v: "98%" },
                ].map((s) => (
                  <div key={s.l} className="rounded-lg bg-secondary p-3">
                    <p className="text-[11px] text-muted-foreground">{s.l}</p>
                    <p className="text-base font-semibold text-foreground">{s.v}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                {[
                  { id: "AC-1042", task: "AC cleaning · 2 units", tech: "Minh T.", status: "On the way", color: "text-blue-600 bg-blue-50", icon: MapPin },
                  { id: "AC-1043", task: "Repair · Compressor", tech: "Hung P.", status: "In progress", color: "text-amber-700 bg-amber-50", icon: Wrench },
                  { id: "AC-1044", task: "Warranty revisit", tech: "Tuan L.", status: "Completed", color: "text-emerald-700 bg-emerald-50", icon: CheckCircle2 },
                  { id: "AC-1045", task: "Maintenance · Apt 12B", tech: "Unassigned", status: "Queued", color: "text-muted-foreground bg-secondary", icon: Clock },
                ].map((j) => (
                  <div key={j.id} className="flex items-center justify-between rounded-lg border border-border px-3 py-2.5">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-7 w-7 items-center justify-center rounded-md ${j.color}`}>
                        <j.icon className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground">{j.id} · {j.task}</p>
                        <p className="text-[11px] text-muted-foreground">{j.tech}</p>
                      </div>
                    </div>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${j.color}`}>{j.status}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-lg bg-secondary px-3 py-2.5">
                <span className="text-xs text-muted-foreground">Payments collected today</span>
                <span className="text-sm font-semibold text-foreground">₫ 42,800,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
