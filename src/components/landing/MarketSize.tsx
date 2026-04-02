const MarketSize = () => {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
              A $800B market, still on paper
            </h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              The field services industry remains one of the largest underdigitized markets in the world. Legacy tools, fragmented workflows, and manual coordination cost businesses billions annually.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We're building the infrastructure layer that brings these businesses online — not with another point solution, but with a platform that replaces the entire operational stack.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Total addressable market", value: "$800B", bar: 100 },
              { label: "Serviceable market", value: "$120B", bar: 60 },
              { label: "Current digital penetration", value: "~12%", bar: 12 },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <span className="text-lg font-bold text-foreground">{item.value}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary/60"
                    style={{ width: `${item.bar}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSize;
