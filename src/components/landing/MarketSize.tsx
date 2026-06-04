import {
  Sparkles,
  Wrench,
  AirVent,
  Droplets,
  HeartHandshake,
  Flower2,
  Activity,
  Leaf,
  PawPrint,
} from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const icons = [
  Sparkles,
  Wrench,
  AirVent,
  Droplets,
  HeartHandshake,
  Flower2,
  Activity,
  Leaf,
  PawPrint,
];

const MarketSize = () => {
  const { t } = useI18n();
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
          {t.serviceModels.title}
        </h2>
        <p className="text-muted-foreground">{t.serviceModels.subtitle}</p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.serviceModels.items.map((o, i) => {
          const Icon = icons[i];
          return (
            <div
              key={o.label}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
            >
              <div className="inline-flex shrink-0 rounded-lg bg-primary/10 p-2.5 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {o.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MarketSize;
