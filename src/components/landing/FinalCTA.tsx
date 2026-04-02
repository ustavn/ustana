import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
          Ready to modernize your operations?
        </h2>
        <p className="mb-8 text-muted-foreground">
          Join hundreds of service businesses running on a single platform.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg">
            Get started
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <Button variant="hero-outline" size="lg">
            Book a demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
