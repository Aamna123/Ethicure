import { Search, Users, Phone } from "lucide-react"

const steps = [
  {
    num: 1,
    icon: Search,
    title: "Share Your Needs",
    desc: "Tell us about your medical requirements, budget, and location preferences",
  },
  {
    num: 2,
    icon: Users,
    title: "Get Matched",
    desc: "Our AI analyzes and matches you with the most suitable healthcare professionals",
  },
  {
    num: 3,
    icon: Phone,
    title: "Connect & Consult",
    desc: "Directly connect with your recommended doctor and schedule an appointment",
  },
]

export default function HowItWorks() {
  return (
    <section id="about" className="bg-background py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl text-balance">
            How ETHICURE Works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Your journey to the right healthcare professional in three simple
            steps
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {/* Dashed connector line – desktop only */}
          <div
            className="pointer-events-none absolute top-10 left-[20%] right-[20%] hidden border-t-2 border-dashed border-muted-foreground/30 md:block"
            aria-hidden="true"
          />

          {steps.map((s) => (
            <div key={s.num} className="flex flex-col items-center text-center">
              <div className="relative mb-4 md:mb-6">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full sm:h-20 sm:w-20"
                  style={{
                    background:
                      "linear-gradient(135deg, #0a2240 0%, #b91c1c 100%)",
                  }}
                >
                  <s.icon className="h-6 w-6 text-primary-foreground sm:h-7 sm:w-7" />
                </div>
                <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-crimson text-xs font-bold text-accent-foreground sm:h-7 sm:w-7">
                  {s.num}
                </span>
              </div>
              <h3 className="mb-2 text-base font-bold text-navy sm:text-lg">
                {s.title}
              </h3>
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
