import React from "react";

interface Props {
  name: string;
}

export default function AppointmentCTA({ name }: Props) {
  return (
    <section className="mt-12 bg-gradient-to-r from-navy to-crimson py-10 text-center text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <h3 className="text-xl font-semibold">
          Book an appointment with {name} today
        </h3>
        <p className="mt-2 text-sm">
          Take the first step towards better health. Schedule your consultation
          now.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="rounded-lg bg-white/10 px-5 py-2.5 text-sm font-semibold">
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
