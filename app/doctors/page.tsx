import Link from "next/link";
import React from "react";
import { doctors } from "@/data/doctors";

export default function DoctorsIndex() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="mb-6 text-2xl font-semibold text-navy">Doctors (debug index)</h2>
      <ul className="space-y-3">
        {doctors.map((d) => (
          <li key={d.slug}>
            <Link
              href={`/doctors/${d.slug}`}
              className="text-crimson underline"
            >
              {d.name} — {d.specialization}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
