import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="bg-background py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            background: "linear-gradient(135deg, #0a2240 0%, #b91c1c 100%)",
          }}
        >
          <div className="flex justify-center items-center">
            {/* Text */}
            <div className="flex-1 p-8 sm:p-10 lg:p-16 text-center flex flex-col items-center">
              <h2 className="text-xl font-bold leading-tight text-primary-foreground sm:text-2xl lg:text-3xl">
                Ready to find your perfect doctor?
              </h2>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
                Join thousands of satisfied patients who found their ideal
                healthcare professionals through ETHICURE.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-background px-5 py-2.5 text-sm font-semibold text-navy hover:bg-background/90 transition-colors"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/30 bg-transparent px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
