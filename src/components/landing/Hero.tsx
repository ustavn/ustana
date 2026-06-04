import { Button } from "@/components/ui/button";
import { ArrowRight, Play, User, Cpu, Wrench, CreditCard } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import RequestDemoDialog from "./RequestDemoDialog";

const icons = [User, Cpu, Wrench, CreditCard];

const Hero = () => {
  const { t } = useI18n();
  const h = t.hero;
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-subtle)]" />
      <div className="container relative mx-auto px-6 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {h.badge}
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              {h.title}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{h.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="lg">
                {h.ctaPrimary}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button variant="hero-outline" size="lg">
                <Play className="mr-1 h-4 w-4" />
                {h.ctaSecondary}
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]">
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-y-4">
                {h.flow.map((n, i) => {
                  const Icon = icons[i];
                  const col = i % 2 === 0 ? "col-start-1" : "col-start-3";
                  return (
                    <div key={n.label} className={`${col} rounded-xl border border-border bg-background p-4 shadow-[var(--shadow-card)]`}>
                      <div className="mb-3 inline-flex rounded-md bg-primary/10 p-2 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="text-sm font-semibold text-foreground">{n.label}</p>
                      <p className="text-xs text-muted-foreground">{n.desc}</p>
                    </div>
                  );
                })}
                <div className="col-start-2 row-start-1 flex justify-center">
                  <ArrowRight className="h-4 w-4 text-muted-foreground/50" />
                </div>
                <div className="col-start-2 row-start-2 flex justify-center">
                  <ArrowRight className="h-4 w-4 text-muted-foreground/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
