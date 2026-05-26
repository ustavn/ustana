import { MapPin, Camera, CheckCircle2, Phone } from "lucide-react";

const ProductScreenshots = () => {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
          See the platform in action
        </h2>
        <p className="text-muted-foreground">
          Real screens from real AC service operations — dispatch, field work, and payments.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-3">
        {/* Dispatch dashboard */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)] lg:col-span-2">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Dispatch dashboard</p>
          <div className="grid grid-cols-4 gap-2">
            {["Queued", "Assigned", "On-site", "Done"].map((col, ci) => (
              <div key={col} className="rounded-lg bg-secondary/60 p-2">
                <p className="mb-2 text-[10px] font-semibold text-muted-foreground">{col}</p>
                <div className="space-y-1.5">
                  {[1, 2].map((i) => (
                    <div key={i} className="rounded-md border border-border bg-background p-2">
                      <p className="text-[10px] font-semibold text-foreground">AC-{1040 + ci * 2 + i}</p>
                      <p className="mt-0.5 text-[9px] text-muted-foreground">
                        {ci === 0 ? "Cleaning · 2 units" : ci === 1 ? "Repair · gas leak" : ci === 2 ? "Maintenance" : "Warranty"}
                      </p>
                      <div className="mt-1.5 flex items-center justify-between">
                        <span className="text-[9px] text-muted-foreground">{ci === 0 ? "—" : ["Minh", "Hung", "Tuan"][ci - 1]}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technician mobile app */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Technician app</p>
          <div className="mx-auto max-w-[220px] rounded-2xl border border-border bg-background p-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-foreground">Job AC-1043</span>
              <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[9px] font-medium text-emerald-700">Accepted</span>
            </div>
            <div className="mb-3 flex items-center gap-2 rounded-md bg-secondary p-2">
              <MapPin className="h-3 w-3 text-primary" />
              <span className="text-[10px] text-foreground">Apt 12B, Vinhomes</span>
            </div>
            <p className="mb-2 text-[10px] font-semibold text-foreground">Service checklist</p>
            <div className="space-y-1.5">
              {["Inspect indoor unit", "Check refrigerant", "Clean filters", "Test cooling"].map((t, i) => (
                <div key={t} className="flex items-center gap-1.5 text-[10px]">
                  <CheckCircle2 className={`h-3 w-3 ${i < 3 ? "text-emerald-600" : "text-muted-foreground/40"}`} />
                  <span className={i < 3 ? "text-foreground" : "text-muted-foreground"}>{t}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-md border border-dashed border-border p-2">
              <Camera className="h-3 w-3 text-muted-foreground" />
              <span className="text-[10px] text-muted-foreground">3 on-site photos</span>
            </div>
          </div>
        </div>

        {/* Booking calendar */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Booking calendar</p>
          <div className="grid grid-cols-5 gap-1 text-[9px]">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => (
              <div key={d} className="text-center font-semibold text-muted-foreground">{d}</div>
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className={`h-10 rounded ${[2, 5, 7, 11, 14, 18].includes(i) ? "bg-primary/20" : "bg-secondary/60"} p-1`}>
                {[2, 5, 7, 11, 14, 18].includes(i) && (
                  <span className="text-[8px] font-medium text-primary">Job</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Payment tracking */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Payment tracking</p>
          <div className="space-y-2">
            {[
              { id: "INV-2041", amt: "₫ 1,250,000", st: "Paid", c: "text-emerald-700 bg-emerald-50" },
              { id: "INV-2042", amt: "₫ 850,000", st: "Pending", c: "text-amber-700 bg-amber-50" },
              { id: "INV-2043", amt: "₫ 2,400,000", st: "Paid", c: "text-emerald-700 bg-emerald-50" },
              { id: "INV-2044", amt: "₫ 600,000", st: "Overdue", c: "text-destructive bg-destructive/10" },
            ].map((p) => (
              <div key={p.id} className="flex items-center justify-between rounded-md border border-border px-2.5 py-2">
                <div>
                  <p className="text-[10px] font-semibold text-foreground">{p.id}</p>
                  <p className="text-[9px] text-muted-foreground">{p.amt}</p>
                </div>
                <span className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${p.c}`}>{p.st}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Customer portal */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Customer booking portal</p>
          <div className="rounded-lg border border-border bg-background p-3">
            <p className="text-[10px] font-semibold text-foreground">Book an AC service</p>
            <div className="mt-2 space-y-1.5">
              <div className="rounded-md bg-secondary px-2 py-1.5 text-[10px] text-muted-foreground">Service · AC cleaning</div>
              <div className="rounded-md bg-secondary px-2 py-1.5 text-[10px] text-muted-foreground">Date · Tomorrow, 9:00</div>
              <div className="rounded-md bg-secondary px-2 py-1.5 text-[10px] text-muted-foreground">Address · Apt 12B</div>
            </div>
            <button className="mt-3 w-full rounded-md bg-primary py-1.5 text-[10px] font-medium text-primary-foreground">
              Confirm booking
            </button>
            <div className="mt-2 flex items-center gap-1.5 text-[9px] text-muted-foreground">
              <Phone className="h-2.5 w-2.5" /> Technician will call 15 min before arrival
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductScreenshots;
