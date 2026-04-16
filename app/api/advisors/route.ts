import { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { handleApiError, ok } from "@/lib/api/http";
import { doctorCreateSchema } from "@/lib/api/schemas";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const specialization = searchParams.get("specialization") ?? undefined;
    const location = searchParams.get("location") ?? undefined;

    const advisors = await prisma.doctor.findMany({
      where: {
        isAdvisor: true,
        specialization: specialization ? { contains: specialization, mode: "insensitive" } : undefined,
        location: location ? { contains: location, mode: "insensitive" } : undefined,
      },
      include: {
        expertise: true,
        qualifications: true,
        languages: true,
      },
      orderBy: [{ rating: "desc" }, { createdAt: "desc" }],
    });

    return ok(advisors);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const payload = doctorCreateSchema.parse(body);

    const advisor = await prisma.doctor.create({
      data: {
        slug: payload.slug,
        name: payload.name,
        profileImage: payload.profileImage,
        specialization: payload.specialization,
        location: payload.location,
        yearsOfExperience: payload.yearsOfExperience,
        rating: payload.rating ?? 0,
        totalReviews: payload.totalReviews ?? 0,
        description: payload.description,
        phoneNumber: payload.phoneNumber,
        whatsappNumber: payload.whatsappNumber,
        hospitalAffiliation: payload.hospitalAffiliation,
        consultationFee: payload.consultationFee,
        availableHours: payload.availableHours,
        aboutDoctor: payload.aboutDoctor,
        isAdvisor: true,
        expertise: {
          create: payload.areasOfExpertise.map((value) => ({ value })),
        },
        qualifications: {
          create: payload.qualifications.map((value) => ({ value })),
        },
        languages: {
          create: payload.languagesSpoken.map((value) => ({ value })),
        },
      },
      include: {
        expertise: true,
        qualifications: true,
        languages: true,
      },
    });

    return ok(advisor, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
