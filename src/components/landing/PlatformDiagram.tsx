import { Users, Cpu, Wrench, CreditCard, BarChart3, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const icons = [Users, Cpu, Wrench, CreditCard, BarChart3];

const PlatformDiagram = () => {
  const { t } = useI18n();
  const nodes = t.workflow.nodes;

  return (
    <section className="relative border-y border-border bg-card">
      <div className="absolute inset-0" style={{ background: "var(--gradient-subtle)" }} />
      <div className="container relative mx-auto px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">{t.workflow.title}</h2>
          <p className="text-muted-foreground">{t.workflow.subtitle}</p>
        </div>

        <div className="relative mx-auto mt-16 max-w-6xl">
          <div className="grid gap-4 md:grid-cols-5 md:gap-3">
            {nodes.map((n, i) => {
              const Icon = icons[i];
              const isCore = i === 1;
              return (
                <div key={n.label} className="relative flex flex-col">
                  <div
                    className={`relative z-10 flex h-full flex-col rounded-xl border bg-background p-5 text-center shadow-[var(--shadow-card)] ${
                      isCore ? "border-primary/30 ring-1 ring-primary/10" : "border-border"
                    }`}
                  >
                    <div
                      className={`mx-auto mb-3 inline-flex rounded-lg p-2.5 ${
                        isCore ? "bg-primary text-primary-foreground" : "bg-primary/5 text-primary"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{n.label}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{n.desc}</p>
                  </div>
                  {i < nodes.length - 1 && (
                    <div className="pointer-events-none absolute -right-2 top-1/2 z-20 hidden -translate-y-1/2 md:block">
                      <ArrowRight className="h-4 w-4 text-muted-foreground/40" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="relative mt-6 hidden md:block">
            <svg viewBox="0 0 1000 80" className="w-full" preserveAspectRatio="none" height="64">
              <defs>
                <linearGradient id="loopGrad" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
                </linearGradient>
                <marker id="arrowEnd" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="hsl(var(--primary))" opacity="0.5" />
                </marker>
              </defs>
              <path
                d="M 900,0 C 900,70 700,75 500,75 C 300,75 100,70 100,0"
                fill="none"
                stroke="url(#loopGrad)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                markerEnd="url(#arrowEnd)"
              />
            </svg>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium text-muted-foreground shadow-[var(--shadow-card)]">
                ↺ {t.workflow.loopLabel}
              </span>
            </div>
          </div>

          <div className="mt-6 flex justify-center md:hidden">
            <span className="rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium text-muted-foreground">
              ↺ {t.workflow.loopLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformDiagram;
