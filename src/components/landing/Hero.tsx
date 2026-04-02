import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-subtle)]" />
      <div className="container relative mx-auto px-6 py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              Now in General Availability
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
              The operating system for service businesses
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              A unified platform that connects your customers, technicians, payments, and data into one intelligent system. Built for scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Start building
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button variant="hero-outline" size="lg">
                Contact sales
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-medium text-muted-foreground">All systems operational</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Jobs today", value: "1,247" },
                    { label: "Revenue", value: "$84.2K" },
                    { label: "Completion", value: "96.8%" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-secondary p-3">
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                      <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg border border-border p-3">
                  <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Weekly throughput</span>
                    <span className="text-primary">+12.4%</span>
                  </div>
                  <div className="flex items-end gap-1">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-primary/20"
                        style={{ height: `${h * 0.6}px` }}
                      >
                        <div
                          className="w-full rounded-sm bg-primary"
                          style={{ height: `${h * 0.4}px`, marginTop: `${h * 0.2}px` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
