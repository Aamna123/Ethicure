import React from "react";
import { DoctorProfileData } from "@/data/doctors";
import ExpertiseTags from "./ExpertiseTags";
import QualificationsList from "./QualificationsList";

interface Props {
  doctor: DoctorProfileData;
}

export default function ProfessionalDetails({ doctor }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-lg border border-border bg-background p-6">
            <h4 className="mb-3 text-sm font-semibold text-navy">Areas of Expertise</h4>
            <ExpertiseTags tags={doctor.areasOfExpertise} />
          </div>

          <div className="rounded-lg border border-border bg-background p-6">
            <h4 className="mb-3 text-sm font-semibold text-navy">Qualifications</h4>
            <QualificationsList items={doctor.qualifications} />
          </div>

          <div className="rounded-lg border border-border bg-background p-6">
            <h4 className="mb-3 text-sm font-semibold text-navy">Hospital Affiliation</h4>
            <p className="text-sm text-muted-foreground">{doctor.hospitalAffiliation}</p>
          </div>

          <div className="rounded-lg border border-border bg-background p-6">
            <h4 className="mb-3 text-sm font-semibold text-navy">Languages Spoken</h4>
            <div className="flex flex-wrap gap-2">
              {doctor.languagesSpoken.map((l) => (
                <span key={l} className="rounded-full bg-muted px-2 py-1 text-xs text-navy">
                  {l}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-background p-6">
            <h4 className="mb-3 text-sm font-semibold text-navy">Consultation Fee</h4>
            <p className="text-sm font-semibold text-crimson">{doctor.consultationFee}</p>
          </div>

          <div className="rounded-lg border border-border bg-background p-6">
            <h4 className="mb-3 text-sm font-semibold text-navy">Available Hours</h4>
            <p className="text-sm text-muted-foreground">{doctor.availableHours}</p>
          </div>
        </div>
      </div>

      <aside className="rounded-lg border border-border bg-background p-6">
        <h4 className="mb-3 text-sm font-semibold text-navy">Contact</h4>
        <p className="text-sm text-muted-foreground">{doctor.phoneNumber}</p>
      </aside>
    </div>
  );
}
