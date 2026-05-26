import { useI18n } from "@/i18n/I18nProvider";

const Metrics = () => {
  const { t } = useI18n();
  return (
    <section className="border-y border-border bg-card">
      <div className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">{t.metrics.title}</h2>
          <p className="text-muted-foreground">{t.metrics.subtitle}</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
          {t.metrics.items.map((m) => (
            <div key={m.l} className="text-center">
              <p className="text-3xl font-bold text-foreground lg:text-4xl">{m.v}</p>
              <p className="mt-2 text-sm text-muted-foreground">{m.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
