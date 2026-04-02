const metrics = [
  { value: "2.4M+", label: "Jobs completed" },
  { value: "98.7%", label: "Platform uptime" },
  { value: "340+", label: "Enterprise clients" },
  { value: "$1.2B", label: "Processed annually" },
];

const Metrics = () => {
  return (
    <section className="border-y border-border bg-card">
      <div className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
            Trusted at scale
          </h2>
          <p className="text-muted-foreground">
            Infrastructure that powers the operations behind industry leaders.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-3xl font-bold text-foreground lg:text-4xl">{metric.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
