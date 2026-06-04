import { CalendarDays, Radio, Users, Wallet, UserCircle, BarChart3 } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const icons = [CalendarDays, Radio, Users, Wallet, UserCircle, BarChart3];

const FeatureGrid = () => {
  const { t } = useI18n();
  return (
    <section id="features" className="container mx-auto px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
          {t.features.titlePrefix}{" "}
          <span className="text-primary">{t.features.titleAccent}</span>
        </h2>
        <p className="text-muted-foreground">{t.features.subtitle}</p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.features.items.map((feature, i) => {
          const Icon = icons[i];
          return (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureGrid;
