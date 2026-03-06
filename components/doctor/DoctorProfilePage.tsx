"use client";

import React from "react";
import { DoctorProfileData } from "@/data/doctors";
import DoctorHero from "./DoctorHero";
import ProfessionalDetails from "./ProfessionalDetails";
import AboutDoctorSection from "./AboutDoctorSection";
import ReviewsSection from "./ReviewsSection";
import AppointmentCTA from "./AppointmentCTA";

interface Props {
  doctor: DoctorProfileData;
}

export default function DoctorProfilePage({ doctor }: Props) {
  return (
    <div>
      <DoctorHero doctor={doctor} />

      <section className="bg-background/50 py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
          <ProfessionalDetails doctor={doctor} />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10 py-12">
        <AboutDoctorSection about={doctor.aboutDoctor} />
        <ReviewsSection reviews={doctor.patientReviews} />
      </div>

      <AppointmentCTA name={doctor.name} />
    </div>
  );
}
