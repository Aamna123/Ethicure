"use client";

import { Search, MapPin, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import pic from "../assets/doc.png";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-navy"
      style={{
        background:
          "linear-gradient(135deg, #0a2240 0%, #0d3060 50%, #1a1a3e 100%)",
      }}
    >
      <div className="mx-auto flex ml-3 max-w-8xl flex-col gap-10 px-10 py-16 md:px-8 md:py-20 lg:flex-row lg:items-center lg:gap-16 lg:px-10 lg:py-32">
        {/* Left content */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium text-primary-foreground sm:text-sm">
            <Sparkles className="h-4 w-4 text-gold" />
            Trusted by 50,000+ Patients
          </span>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl text-balance">
            Find the Right Doctor for <span className="text-gold">You</span>
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            ETHICURE connects you with the most skilled and suitable doctors in
            your city, tailored to your needs and budget.
          </p>

          {/* Search bar */}
          <div className="flex flex-col gap-3 rounded-2xl bg-background p-3 shadow-xl sm:flex-row sm:items-center sm:gap-0 sm:rounded-full sm:p-2">
            <div className="flex flex-1 items-center gap-2 px-3 py-2 sm:border-r sm:border-border sm:py-0">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by specialty or symptoms"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                aria-label="Search by specialty or symptoms"
              />
            </div>
            <div className="flex flex-1 items-center gap-2 px-3 py-2 sm:py-0">
              <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                type="text"
                placeholder="Enter your city"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                aria-label="Enter your city"
              />
            </div>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-crimson px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-crimson-dark transition-colors sm:w-auto sm:rounded-full">
              <Search className="h-4 w-4" />
              Search
            </button>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#specialties"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground px-5 py-2.5 text-sm font-semibold text-navy hover:bg-primary-foreground/90 transition-colors sm:justify-start"
            >
              Browse Specialties
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/30 bg-transparent px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors sm:justify-start"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="relative flex flex-1 items-center justify-center">
          <div className="relative h-64 w-full overflow-hidden rounded-3xl sm:h-80 md:h-96 lg:h-[480px]">
            <Image
              src={pic}
              alt="Professional doctor with stethoscope"
              fill
              className="object-cover object-[75%_10%]"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
