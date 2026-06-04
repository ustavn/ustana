import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";
import RequestDemoDialog from "./RequestDemoDialog";

const navMap = [
  { key: "platform", labelKey: "platform" as const },
  { key: "features", labelKey: "dispatch" as const },
  { key: "team", labelKey: "pricing" as const },
];

const Navbar = () => {
  const { t } = useI18n();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-14 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <a href="#" className="text-base font-bold tracking-widest text-foreground">USTA</a>
          <div className="hidden items-center gap-6 md:flex">
            {navMap.map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                onClick={(e) => handleScroll(e, item.key)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.nav[item.labelKey]}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">{t.nav.signIn}</Button>
          <Button size="sm">{t.nav.getStarted}</Button>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 border-t border-border px-6 py-2 sm:hidden">
        <LanguageSwitcher />
        <Button variant="ghost" size="sm">{t.nav.signIn}</Button>
      </div>
    </nav>
  );
};

export default Navbar;
