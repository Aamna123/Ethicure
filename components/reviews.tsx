import { Star, Calendar, MapPin, ArrowRight } from "lucide-react"

const reviews = [
  {
    quote:
      "ETHICURE helped me find the perfect cardiologist within my budget. The recommendation was spot-on!",
    name: "Sarah Johnson",
    date: "2 weeks ago",
    location: "New York",
  },
  {
    quote:
      "Professional, transparent, and truly care about matching patients with the right doctors. Highly recommend!",
    name: "Michael Chen",
    date: "1 month ago",
    location: "Los Angeles",
  },
  {
    quote:
      "The trust and quality of service is exceptional. Found an amazing pediatrician for my daughter.",
    name: "Emily Rodriguez",
    date: "3 weeks ago",
    location: "Chicago",
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="bg-secondary py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl text-balance">
            What Our Patients Say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Real experiences from real people who found their perfect healthcare
            match
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="flex flex-col rounded-2xl bg-background p-5 shadow-sm sm:p-6"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold sm:h-5 sm:w-5"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="flex-1 text-sm leading-relaxed text-foreground sm:text-base">
                {`"${r.quote}"`}
              </p>

              {/* Divider */}
              <div className="my-4 border-t border-border" />

              {/* Author */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-bold text-navy">{r.name}</p>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {r.location}
                  </span>
                </div>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {r.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-navy px-5 py-2.5 text-sm font-semibold text-navy hover:bg-navy hover:text-primary-foreground transition-colors"
          >
            Read More Reviews
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
