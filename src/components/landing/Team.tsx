import { useI18n } from "@/i18n/I18nProvider";

const bgs = ["from-blue-100 to-blue-50", "from-emerald-100 to-emerald-50", "from-amber-100 to-amber-50", "from-violet-100 to-violet-50"];

const Team = () => {
  const { t } = useI18n();
  return (
    <section id="team" className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">{t.team.title}</h2>
          <p className="text-muted-foreground">{t.team.subtitle}</p>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.team.members.map((member, i) => (
            <div key={member.name} className="rounded-xl border border-border bg-background p-5 text-center shadow-[var(--shadow-card)]">
              <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${bgs[i]}`}>
                <span className="text-xl font-semibold text-foreground/70">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <p className="text-sm font-semibold text-foreground">{member.name}</p>
              <p className="mt-0.5 text-xs text-primary">{member.role}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
