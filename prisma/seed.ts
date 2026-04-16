import { PrismaClient } from "@prisma/client";
import { doctors } from "../data/doctors";

const prisma = new PrismaClient();

async function main() {
  for (const doctor of doctors) {
    await prisma.doctor.upsert({
      where: { slug: doctor.slug },
      update: {
        name: doctor.name,
        profileImage: doctor.profileImage,
        specialization: doctor.specialization,
        location: doctor.location,
        yearsOfExperience: doctor.yearsOfExperience,
        rating: doctor.rating,
        totalReviews: doctor.totalReviews,
        description: doctor.description,
        phoneNumber: doctor.phoneNumber,
        whatsappNumber: doctor.whatsappNumber,
        hospitalAffiliation: doctor.hospitalAffiliation,
        consultationFee: doctor.consultationFee,
        availableHours: doctor.availableHours,
        aboutDoctor: doctor.aboutDoctor,
        isAdvisor: true,
      },
      create: {
        slug: doctor.slug,
        name: doctor.name,
        profileImage: doctor.profileImage,
        specialization: doctor.specialization,
        location: doctor.location,
        yearsOfExperience: doctor.yearsOfExperience,
        rating: doctor.rating,
        totalReviews: doctor.totalReviews,
        description: doctor.description,
        phoneNumber: doctor.phoneNumber,
        whatsappNumber: doctor.whatsappNumber,
        hospitalAffiliation: doctor.hospitalAffiliation,
        consultationFee: doctor.consultationFee,
        availableHours: doctor.availableHours,
        aboutDoctor: doctor.aboutDoctor,
        isAdvisor: true,
      },
    });

    const dbDoctor = await prisma.doctor.findUniqueOrThrow({
      where: { slug: doctor.slug },
      select: { id: true },
    });

    await prisma.doctorExpertise.deleteMany({ where: { doctorId: dbDoctor.id } });
    await prisma.doctorQualification.deleteMany({ where: { doctorId: dbDoctor.id } });
    await prisma.doctorLanguage.deleteMany({ where: { doctorId: dbDoctor.id } });

    if (doctor.areasOfExpertise.length > 0) {
      await prisma.doctorExpertise.createMany({
        data: doctor.areasOfExpertise.map((value) => ({ doctorId: dbDoctor.id, value })),
      });
    }

    if (doctor.qualifications.length > 0) {
      await prisma.doctorQualification.createMany({
        data: doctor.qualifications.map((value) => ({ doctorId: dbDoctor.id, value })),
      });
    }

    if (doctor.languagesSpoken.length > 0) {
      await prisma.doctorLanguage.createMany({
        data: doctor.languagesSpoken.map((value) => ({ doctorId: dbDoctor.id, value })),
      });
    }
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
