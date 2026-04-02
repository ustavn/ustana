const team = [
  { name: "Sarah Chen", role: "CEO & Co-founder", bg: "bg-blue-100" },
  { name: "Marcus Rivera", role: "CTO & Co-founder", bg: "bg-emerald-100" },
  { name: "Aisha Patel", role: "VP Engineering", bg: "bg-amber-100" },
  { name: "James Okonkwo", role: "VP Product", bg: "bg-violet-100" },
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
            Our team combines deep industry experience with world-class engineering.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-6 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full ${member.bg}`}>
                <span className="text-xl font-semibold text-foreground/60">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <p className="text-sm font-semibold text-foreground">{member.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
