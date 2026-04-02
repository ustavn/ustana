import { Calendar, CreditCard, BarChart3, Users, Wrench, Shield } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-powered dispatch that optimizes routes, availability, and skill matching in real time.",
  },
  {
    icon: Users,
    title: "Customer Portal",
    description: "White-label booking experience with real-time tracking and automated communications.",
  },
  {
    icon: Wrench,
    title: "Field Operations",
    description: "Mobile-first tools for technicians with offline support, checklists, and photo capture.",
  },
  {
    icon: CreditCard,
    title: "Payments & Invoicing",
    description: "Integrated billing with flexible pricing models, automated invoicing, and payment processing.",
  },
  {
    icon: BarChart3,
    title: "Analytics Engine",
    description: "Real-time dashboards with operational insights, revenue tracking, and performance metrics.",
  },
  {
    icon: Shield,
    title: "Compliance & Safety",
    description: "Built-in regulatory compliance, safety checklists, and audit trails for every job.",
  },
];

const FeatureGrid = () => {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
          Six modules. One platform.
        </h2>
        <p className="text-muted-foreground">
          Everything a service business needs to operate, built into a single cohesive system.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elevated)]"
          >
            <div className="mb-4 inline-flex rounded-lg bg-primary/5 p-2.5 text-primary">
              <feature.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-base font-semibold text-foreground">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
