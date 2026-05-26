const metrics = [
  { value: "120K+", label: "Service jobs dispatched" },
  { value: "98%", label: "Jobs assigned within SLA" },
  { value: "340+", label: "AC service teams" },
  { value: "60%", label: "Fewer missed appointments" },
];

const Metrics = () => {
  return (
    <section className="border-y border-border bg-card">
      <div className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
            Trusted by AC service operators
          </h2>
          <p className="text-muted-foreground">
            From single-shop repair businesses to multi-city HVAC operations.
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
