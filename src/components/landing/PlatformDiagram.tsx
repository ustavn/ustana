import { Zap, User, Smartphone, ArrowRight, Wallet, Database, BarChart3, Settings } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const outcomeIcons = [Wallet, Database, BarChart3, Settings];

const PlatformDiagram = () => {
  const { t } = useI18n();
  const w = t.workflow;

  return (
    <section className="border-y border-border bg-background">
      <div className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            A unified infrastructure for{" "}
            <span className="text-primary">{w.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground">{w.subtitle}</p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)] md:p-10">
          {/* Top: input → core → output */}
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_2fr_auto_1fr]">
            {/* Customer Request */}
            <div className="rounded-xl bg-gradient-to-br from-primary/80 to-primary p-5 text-center text-primary-foreground shadow-[var(--shadow-card)]">
              <div className="mx-auto mb-3 inline-flex rounded-lg bg-white/15 p-2">
                <User className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold">{w.input.label}</p>
              <p className="mt-1 text-xs opacity-90">{w.input.desc}</p>
            </div>

            <ArrowRight className="hidden h-5 w-5 justify-self-center text-muted-foreground/40 md:block" />

            {/* Platform Core */}
            <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/90 p-6 text-primary-foreground shadow-[var(--shadow-elevated)]">
              <div className="mb-4 text-center">
                <div className="mx-auto mb-3 inline-flex rounded-lg bg-white/15 p-2">
                  <Zap className="h-5 w-5" />
                </div>
                <p className="text-base font-semibold">{w.coreTitle}</p>
                <p className="text-xs opacity-90">{w.coreSubtitle}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {w.coreModules.map((m) => (
                  <div key={m} className="rounded-md bg-white/10 px-3 py-2 text-center text-xs font-medium">
                    {m}
                  </div>
                ))}
              </div>
            </div>

            <ArrowRight className="hidden h-5 w-5 justify-self-center text-muted-foreground/40 md:block" />

            {/* Technician */}
            <div className="rounded-xl bg-gradient-to-br from-primary/80 to-primary p-5 text-center text-primary-foreground shadow-[var(--shadow-card)]">
              <div className="mx-auto mb-3 inline-flex rounded-lg bg-white/15 p-2">
                <Smartphone className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold">{w.output.label}</p>
              <p className="mt-1 text-xs opacity-90">{w.output.desc}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px w-full bg-border" />

          {/* Bottom: outcome modules */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {w.outcomes.map((o, i) => {
              const Icon = outcomeIcons[i];
              return (
                <div key={o} className="rounded-xl border border-border bg-primary/5 p-4 text-center">
                  <div className="mx-auto mb-2 inline-flex rounded-md bg-primary/10 p-2 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{o}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformDiagram;
