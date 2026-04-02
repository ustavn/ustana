import { ArrowRight } from "lucide-react";

const nodes = [
  { id: "customer", label: "Customer", sublabel: "Booking & requests", color: "bg-blue-50 border-blue-200 text-blue-700" },
  { id: "platform", label: "Usta OS", sublabel: "Orchestration engine", color: "bg-primary/5 border-primary/20 text-primary", highlight: true },
  { id: "technician", label: "Technician", sublabel: "Dispatch & execution", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { id: "payment", label: "Payment", sublabel: "Billing & invoicing", color: "bg-amber-50 border-amber-200 text-amber-700" },
  { id: "data", label: "Data Loop", sublabel: "Analytics & insights", color: "bg-violet-50 border-violet-200 text-violet-700" },
];

const PlatformDiagram = () => {
  return (
    <section className="border-y border-border bg-card">
      <div className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
            How the platform works
          </h2>
          <p className="text-muted-foreground">
            A continuous loop from customer request to data-driven optimization.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          {/* Desktop flow */}
          <div className="hidden items-center justify-between md:flex">
            {nodes.map((node, i) => (
              <div key={node.id} className="flex items-center">
                <div
                  className={`rounded-xl border px-5 py-4 text-center shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-elevated)] ${node.color} ${node.highlight ? "ring-1 ring-primary/10" : ""}`}
                >
                  <p className="text-sm font-semibold">{node.label}</p>
                  <p className="mt-1 text-xs opacity-70">{node.sublabel}</p>
                </div>
                {i < nodes.length - 1 && (
                  <ArrowRight className="mx-3 h-4 w-4 shrink-0 text-muted-foreground/40" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile flow */}
          <div className="flex flex-col items-center gap-3 md:hidden">
            {nodes.map((node, i) => (
              <div key={node.id} className="flex flex-col items-center">
                <div
                  className={`w-full max-w-xs rounded-xl border px-5 py-4 text-center shadow-[var(--shadow-card)] ${node.color}`}
                >
                  <p className="text-sm font-semibold">{node.label}</p>
                  <p className="mt-1 text-xs opacity-70">{node.sublabel}</p>
                </div>
                {i < nodes.length - 1 && (
                  <ArrowRight className="my-1 h-4 w-4 rotate-90 text-muted-foreground/40" />
                )}
              </div>
            ))}
          </div>

          {/* Return arrow label */}
          <div className="mt-8 flex justify-center">
            <div className="rounded-full border border-dashed border-muted-foreground/20 px-4 py-1.5 text-xs text-muted-foreground">
              ↺ Continuous feedback loop
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformDiagram;
