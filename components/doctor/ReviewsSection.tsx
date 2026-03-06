import React from "react";
import { DoctorProfileData } from "@/data/doctors";
import ReviewCard from "./ReviewCard";

interface Props {
  reviews: DoctorProfileData["patientReviews"];
}

export default function ReviewsSection({ reviews }: Props) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="mt-8">
      <h3 className="mb-6 text-center text-lg font-semibold text-navy">
        Patient Reviews
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {reviews.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
    </section>
  );
}
