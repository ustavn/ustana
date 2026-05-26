import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, CheckCircle2, Wrench } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const icons = [MapPin, Wrench, CheckCircle2, Clock];
const colors = [
  "text-blue-600 bg-blue-50",
  "text-amber-700 bg-amber-50",
  "text-emerald-700 bg-emerald-50",
  "text-muted-foreground bg-secondary",
];

const Hero = () => {
  const { t } = useI18n();
  const h = t.hero;
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-subtle)]" />
      <div className="container relative mx-auto px-6 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              {h.badge}
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              {h.title}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{h.subtitle}</p>
            <div className="mb-8 flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                {h.ctaPrimary}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button variant="hero-outline" size="lg">{h.ctaSecondary}</Button>
            </div>
            <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
              {h.metrics.map((m) => (
                <div key={m.l}>
                  <p className="text-xl font-bold text-foreground">{m.v}</p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{m.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-elevated)]">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-foreground">{h.board.title}</span>
                </div>
                <span className="text-xs text-muted-foreground">{h.board.date}</span>
              </div>

              <div className="mb-4 grid grid-cols-3 gap-2">
                {h.board.stats.map((s) => (
                  <div key={s.l} className="rounded-lg bg-secondary p-3">
                    <p className="text-[11px] text-muted-foreground">{s.l}</p>
                    <p className="text-base font-semibold text-foreground">{s.v}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                {h.board.jobs.map((j, i) => {
                  const Icon = icons[i];
                  const color = colors[i];
                  return (
                    <div key={j.id} className="flex items-center justify-between rounded-lg border border-border px-3 py-2.5">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-7 w-7 items-center justify-center rounded-md ${color}`}>
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground">{j.id} · {j.task}</p>
                          <p className="text-[11px] text-muted-foreground">{j.tech}</p>
                        </div>
                      </div>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${color}`}>{j.status}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-lg bg-secondary px-3 py-2.5">
                <span className="text-xs text-muted-foreground">{h.board.payments}</span>
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
