import { PhoneCall, CalendarX, MessageSquareWarning, Wallet, MapPinOff, UserX } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const icons = [UserX, CalendarX, PhoneCall, Wallet, MapPinOff, MessageSquareWarning];

const PainPoints = () => {
  const { t } = useI18n();
  return (
    <section className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">{t.pains.title}</h2>
          <p className="text-muted-foreground">{t.pains.subtitle}</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.pains.items.map((p, i) => {
            const Icon = icons[i];
            return (
              <div key={p.title} className="rounded-xl border border-border bg-background p-5 shadow-[var(--shadow-card)]">
                <div className="mb-3 inline-flex rounded-lg bg-destructive/5 p-2 text-destructive">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-foreground">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
