import React from "react";

interface Props {
  about: string;
}

export default function AboutDoctorSection({ about }: Props) {
  return (
    <section className="mb-10">
      <h3 className="mb-4 text-center text-lg font-semibold text-navy">
        About the Doctor
      </h3>
      <div className="mx-auto max-w-5xl rounded-lg border border-border bg-background p-6 text-sm text-muted-foreground text-center">
        {about}
      </div>
    </section>
  );
}
