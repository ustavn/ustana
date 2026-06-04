import { useI18n } from "@/i18n/I18nProvider";
import svcCleaning from "@/assets/svc-cleaning.jpg";
import svcRepair from "@/assets/svc-repair.jpg";
import svcHvac from "@/assets/svc-hvac.jpg";
import svcPlumbing from "@/assets/svc-plumbing.jpg";
import svcSeniorCare from "@/assets/svc-seniorcare.jpg";
import svcBeauty from "@/assets/svc-beauty.jpg";
import svcYoga from "@/assets/svc-yoga.jpg";
import svcGarden from "@/assets/svc-garden.jpg";
import svcPet from "@/assets/svc-pet.jpg";

const images = [
  svcCleaning,
  svcRepair,
  svcHvac,
  svcPlumbing,
  svcSeniorCare,
  svcBeauty,
  svcYoga,
  svcGarden,
  svcPet,
];

const WhichServices = () => {
  const { t } = useI18n();
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
          {t.serviceModels.title}
        </h2>
        <p className="text-muted-foreground">{t.serviceModels.subtitle}</p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-3">
        {t.serviceModels.items.map((o, i) => (
          <div
            key={o.label}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={images[i]}
                alt={o.label}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
              <span className="text-sm font-semibold text-white">
                {o.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhichServices;
