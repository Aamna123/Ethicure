import Image from "next/image";
import React from "react";
import { DoctorProfileData } from "@/data/doctors";
import ContactButtons from "./ContactButtons";

interface Props {
  doctor: DoctorProfileData;
}

export default function DoctorHero({ doctor }: Props) {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="flex items-start gap-8">
          <div className="w-72">
            <div className="rounded-lg border border-border bg-background p-4">
              <div className="overflow-hidden rounded-md bg-muted p-4">
                {typeof doctor.profileImage === "string" &&
                doctor.profileImage.startsWith("/") ? (
                  <Image
                    src={doctor.profileImage}
                    alt={doctor.name}
                    width={320}
                    height={320}
                    className="h-64 w-full object-cover"
                  />
                ) : (
                  <div className="flex h-64 w-full items-center justify-center bg-muted text-muted-foreground">
                    <div className="text-center">
                      <div className="mb-2 text-sm font-semibold text-navy">
                        Image not found
                      </div>
                      <div className="text-xs">
                        Place image in public/images and set profileImage to
                        /images/your-file
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-extrabold text-navy">{doctor.name}</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {doctor.specialization}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              {doctor.location} • {doctor.yearsOfExperience}+ years experience •{" "}
              {doctor.rating} ({doctor.totalReviews} reviews)
            </p>

            <div className="mt-6 max-w-md">
              <ContactButtons
                phone={doctor.phoneNumber}
                whatsapp={doctor.whatsappNumber}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
