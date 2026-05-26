import { MapPin, Camera, CheckCircle2, Phone } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const ProductScreenshots = () => {
  const { t } = useI18n();
  const s = t.screens;

  const payments = [
    { id: "INV-2041", amt: "₫ 1,250,000", st: s.statusPaid, c: "text-emerald-700 bg-emerald-50" },
    { id: "INV-2042", amt: "₫ 850,000", st: s.statusPending, c: "text-amber-700 bg-amber-50" },
    { id: "INV-2043", amt: "₫ 2,400,000", st: s.statusPaid, c: "text-emerald-700 bg-emerald-50" },
    { id: "INV-2044", amt: "₫ 600,000", st: s.statusOverdue, c: "text-destructive bg-destructive/10" },
  ];

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">{s.title}</h2>
        <p className="text-muted-foreground">{s.subtitle}</p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)] lg:col-span-2">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{s.dispatch}</p>
          <div className="grid grid-cols-4 gap-2">
            {s.columns.map((col, ci) => (
              <div key={col} className="rounded-lg bg-secondary/60 p-2">
                <p className="mb-2 text-[10px] font-semibold text-muted-foreground">{col}</p>
                <div className="space-y-1.5">
                  {[1, 2].map((i) => (
                    <div key={i} className="rounded-md border border-border bg-background p-2">
                      <p className="text-[10px] font-semibold text-foreground">AC-{1040 + ci * 2 + i}</p>
                      <p className="mt-0.5 text-[9px] text-muted-foreground">{s.taskTypes[ci]}</p>
                      <div className="mt-1.5 flex items-center justify-between">
                        <span className="text-[9px] text-muted-foreground">{ci === 0 ? "—" : ["Minh", "Hùng", "Tuấn"][ci - 1]}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{s.techApp}</p>
          <div className="mx-auto max-w-[220px] rounded-2xl border border-border bg-background p-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-foreground">Job AC-1043</span>
              <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[9px] font-medium text-emerald-700">{s.accepted}</span>
            </div>
            <div className="mb-3 flex items-center gap-2 rounded-md bg-secondary p-2">
              <MapPin className="h-3 w-3 text-primary" />
              <span className="text-[10px] text-foreground">{s.address}</span>
            </div>
            <p className="mb-2 text-[10px] font-semibold text-foreground">{s.checklist}</p>
            <div className="space-y-1.5">
              {s.checklistItems.map((t, i) => (
                <div key={t} className="flex items-center gap-1.5 text-[10px]">
                  <CheckCircle2 className={`h-3 w-3 ${i < 3 ? "text-emerald-600" : "text-muted-foreground/40"}`} />
                  <span className={i < 3 ? "text-foreground" : "text-muted-foreground"}>{t}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-md border border-dashed border-border p-2">
              <Camera className="h-3 w-3 text-muted-foreground" />
              <span className="text-[10px] text-muted-foreground">{s.photos}</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{s.calendar}</p>
          <div className="grid grid-cols-5 gap-1 text-[9px]">
            {s.days.map((d) => (
              <div key={d} className="text-center font-semibold text-muted-foreground">{d}</div>
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className={`h-10 rounded ${[2, 5, 7, 11, 14, 18].includes(i) ? "bg-primary/20" : "bg-secondary/60"} p-1`}>
                {[2, 5, 7, 11, 14, 18].includes(i) && (
                  <span className="text-[8px] font-medium text-primary">{s.job}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{s.payments}</p>
          <div className="space-y-2">
            {payments.map((p) => (
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

        <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{s.portal}</p>
          <div className="rounded-lg border border-border bg-background p-3">
            <p className="text-[10px] font-semibold text-foreground">{s.portalTitle}</p>
            <div className="mt-2 space-y-1.5">
              {s.portalFields.map((f) => (
                <div key={f} className="rounded-md bg-secondary px-2 py-1.5 text-[10px] text-muted-foreground">{f}</div>
              ))}
            </div>
            <button className="mt-3 w-full rounded-md bg-primary py-1.5 text-[10px] font-medium text-primary-foreground">
              {s.portalCta}
            </button>
            <div className="mt-2 flex items-center gap-1.5 text-[9px] text-muted-foreground">
              <Phone className="h-2.5 w-2.5" /> {s.portalNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductScreenshots;
