import { PhoneCall, CalendarX, MessageSquareWarning, Wallet, MapPinOff, UserX } from "lucide-react";

const pains = [
  { icon: UserX, title: "Technicians missing or rejecting jobs", desc: "No accountability when assignments go ignored or bounce between staff." },
  { icon: CalendarX, title: "Double bookings & schedule conflicts", desc: "Spreadsheets and group chats can't keep up with same-day reschedules." },
  { icon: PhoneCall, title: "Dispatching through calls and Zalo", desc: "Job details get lost across phone calls, chat threads, and sticky notes." },
  { icon: Wallet, title: "Cash collection and reconciliation issues", desc: "Hard to track who collected what, and which jobs are still unpaid." },
  { icon: MapPinOff, title: "No visibility into technician location", desc: "You don't know who's free, who's late, or who's nearest to the next job." },
  { icon: MessageSquareWarning, title: "Customer complaints handled manually", desc: "Missed updates, late arrivals, and no record of what was promised." },
];

const PainPoints = () => {
  return (
    <section className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
            Still managing operations manually?
          </h2>
          <p className="text-muted-foreground">
            Most AC service teams run on phone calls, chat apps, and spreadsheets — and lose jobs because of it.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pains.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-background p-5 shadow-[var(--shadow-card)]">
              <div className="mb-3 inline-flex rounded-lg bg-destructive/5 p-2 text-destructive">
                <p.icon className="h-4 w-4" />
              </div>
              <h3 className="mb-1.5 text-sm font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
