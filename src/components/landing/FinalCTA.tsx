import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import RequestDemoDialog from "./RequestDemoDialog";

const FinalCTA = () => {
  const { t } = useI18n();
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-12 text-center shadow-[var(--shadow-elevated)]">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">{t.finalCta.title}</h2>
        <p className="mb-8 text-muted-foreground">{t.finalCta.subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg">
            {t.finalCta.primary}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <Button variant="hero-outline" size="lg">{t.finalCta.secondary}</Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
