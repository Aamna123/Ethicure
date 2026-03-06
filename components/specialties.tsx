import { Heart, Users, Sparkles, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import { doctors } from "@/data/doctors";

const specialties = [
  { icon: Heart, label: "Cardiology", patients: "15K+ Patients" },
  { icon: Users, label: "Neurology", patients: "12K+ Patients" },
  { icon: Sparkles, label: "Pediatrics", patients: "18K+ Patients" },
  { icon: Shield, label: "Orthopedics", patients: "10K+ Patients" },
];

export default function Specialties() {
  return (
    <section id="specialties" className="bg-secondary py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl text-balance">
            Popular Medical Specialties
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Browse through our network of verified specialists across multiple
            medical fields
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {specialties.map((s) => {
            const doc = doctors.find((d) => d.specialization === s.label);
            const href = doc ? `/doctors/${doc.slug}` : "#";

            return (
              <Link
                key={s.label}
                href={href}
                className="flex flex-col items-center gap-4 rounded-2xl bg-background p-6 shadow-sm transition-shadow hover:shadow-md sm:gap-6 sm:p-8 lg:p-10"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl sm:h-14 sm:w-14"
                  style={{
                    background:
                      "linear-gradient(135deg, #b91c1c 0%, #0a2240 100%)",
                  }}
                >
                  <s.icon className="h-5 w-5 text-primary-foreground sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-sm font-bold text-navy sm:text-base lg:text-lg">
                  {s.label}
                </h3>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center md:mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-navy px-5 py-2.5 text-sm font-semibold text-navy hover:bg-navy hover:text-primary-foreground transition-colors"
          >
            View All Specialties
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
