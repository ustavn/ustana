import { Clock, Users, CalendarCheck, Wallet, Eye } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const icons = [Clock, Users, CalendarCheck, Wallet, Eye];

const MarketSize = () => {
  const { t } = useI18n();
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">{t.outcomes.title}</h2>
        <p className="text-muted-foreground">{t.outcomes.subtitle}</p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.outcomes.items.map((o, i) => {
          const Icon = icons[i];
          return (
            <div key={o.label} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="mb-4 flex items-center justify-between">
                <div className="inline-flex rounded-lg bg-primary/5 p-2 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-xl font-bold text-foreground">{o.value}</span>
              </div>
              <h3 className="mb-1.5 text-sm font-semibold text-foreground">{o.label}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{o.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MarketSize;
