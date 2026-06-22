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
        <div className="mx-auto mt-14 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.team.members.map((member, i) => (
            <div key={member.name} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${bgs[i]}`}>
                  <span className="text-5xl font-semibold text-foreground/40">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-base font-semibold text-foreground">{member.name}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-primary">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
