import { CalendarCheck, Send, UserCheck, Wrench, CreditCard, LineChart, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const icons = [CalendarCheck, Send, UserCheck, Wrench, CreditCard, LineChart];

const PlatformDiagram = () => {
  const { t } = useI18n();
  const steps = t.workflow.steps;
  return (
    <section className="border-y border-border bg-card">
      <div className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">{t.workflow.title}</h2>
          <p className="text-muted-foreground">{t.workflow.subtitle}</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = icons[i];
            const previewColor =
              i === 0 ? "bg-blue-100 text-blue-700" :
              i === 2 ? "text-emerald-600" :
              i === 5 ? "text-emerald-600" :
              "text-foreground";
            return (
              <div key={s.label} className="relative rounded-xl border border-border bg-background p-5 shadow-[var(--shadow-card)]">
                <div className="mb-3 flex items-center justify-between">
                  <div className="inline-flex rounded-lg bg-primary/5 p-2 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-[11px] font-medium text-muted-foreground">{t.workflow.stepLabel} {i + 1}</span>
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-foreground">{s.label}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

                <div className="rounded-md border border-border bg-secondary/60 p-2.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className={i === 0 || i === 2 ? "font-medium text-foreground" : "text-muted-foreground"}>{s.preview[0]}</span>
                    {i === 0 ? (
                      <span className="rounded-full bg-blue-100 px-2 py-0.5 text-blue-700">{s.preview[1]}</span>
                    ) : (
                      <span className={`font-medium ${previewColor}`}>{s.preview[1]}</span>
                    )}
                  </div>
                </div>

                {i < steps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-muted-foreground/30 lg:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformDiagram;
