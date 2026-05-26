import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-12 text-center shadow-[var(--shadow-elevated)]">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
          Run your AC service business with less chaos
        </h2>
        <p className="mb-8 text-muted-foreground">
          Manage bookings, technicians, payments, and customer operations from one platform.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg">
            Book a live demo
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <Button variant="hero-outline" size="lg">
            See dispatch workflow
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
