import React from "react";
import { notFound } from "next/navigation";
import DoctorProfilePage from "@/components/doctor/DoctorProfilePage";
import { doctors } from "@/data/doctors";

export async function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export default async function Page({ params }: { params: any }) {
  const resolved = await params;
  const slug: string = resolved?.slug;
  const doctor = doctors.find((d) => d.slug === slug);
  if (!doctor) return notFound();

  return <DoctorProfilePage doctor={doctor} />;
}
