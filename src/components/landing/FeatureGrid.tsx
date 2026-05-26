import { Send, Smartphone, CalendarDays, CreditCard, MessageSquare, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Send,
    title: "Smart Dispatch",
    description: "Automatically assign technicians based on skill, location, and availability — no more dispatching through phone calls.",
  },
  {
    icon: Smartphone,
    title: "Technician App",
    description: "Technicians receive jobs, upload on-site photos, complete service checklists, and update job status in real time.",
  },
  {
    icon: CalendarDays,
    title: "Booking Management",
    description: "Track bookings, reschedules, cancellations, and technician assignments from one operational dashboard.",
  },
  {
    icon: CreditCard,
    title: "Payments & Invoicing",
    description: "Manage cash and online payments with automated invoices, receipts, and end-of-day reconciliation.",
  },
  {
    icon: MessageSquare,
    title: "Customer Communication",
    description: "Send booking confirmations, reminders, and technician arrival updates over SMS and Zalo — automatically.",
  },
  {
    icon: BarChart3,
    title: "Reports & Operations",
    description: "Monitor job completion, technician performance, revenue, SLA compliance, and recurring maintenance contracts.",
  },
];

const FeatureGrid = () => {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
          Everything your AC service team needs
        </h2>
        <p className="text-muted-foreground">
          Practical tools for dispatchers, technicians, and operations managers — in one place.
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
