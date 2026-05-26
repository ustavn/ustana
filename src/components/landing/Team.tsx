const team = [
  { name: "Linh Pham", role: "Co-founder, CEO", bio: "10+ years scaling hospitality & service operations across SE Asia.", bg: "from-blue-100 to-blue-50" },
  { name: "KC", role: "Co-founder, Product", bio: "Built operational SaaS for field teams, logistics, and on-demand services.", bg: "from-emerald-100 to-emerald-50" },
  { name: "Hien NT", role: "Co-founder, Operations", bio: "Former operations lead managing 200+ field technicians across Vietnam.", bg: "from-amber-100 to-amber-50" },
  { name: "Vu Huynh", role: "Co-founder, Engineering", bio: "Built large-scale dispatch and payment systems for service platforms.", bg: "from-violet-100 to-violet-50" },
];

const Team = () => {
  return (
    <section className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
            Built by operators
          </h2>
          <p className="text-muted-foreground">
            Founded by product leaders and operators with deep experience in hospitality, field operations, and large-scale service systems.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="rounded-xl border border-border bg-background p-5 text-center shadow-[var(--shadow-card)]">
              <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${member.bg}`}>
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
