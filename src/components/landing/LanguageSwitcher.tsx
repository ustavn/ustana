import { useI18n } from "@/i18n/I18nProvider";
import { Globe } from "lucide-react";

const LanguageSwitcher = ({ className = "" }: { className?: string }) => {
  const { locale, setLocale } = useI18n();
  return (
    <div className={`inline-flex items-center gap-1 rounded-full border border-border bg-background p-0.5 ${className}`}>
      <Globe className="ml-2 h-3.5 w-3.5 text-muted-foreground" />
      {(["vi", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
            locale === l
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l === "en" ? "EN" : "VI"}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
