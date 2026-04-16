import { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { handleApiError, ok, fail } from "@/lib/api/http";
import { reviewCreateSchema } from "@/lib/api/schemas";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const doctorId = searchParams.get("doctorId") ?? undefined;
    const userId = searchParams.get("userId") ?? undefined;
    const status = searchParams.get("status") ?? undefined;
    const minRating = searchParams.get("minRating");

    const reviews = await prisma.review.findMany({
      where: {
        doctorId,
        userId,
        status: status as never,
        rating: minRating ? { gte: Number(minRating) } : undefined,
      },
      include: {
        user: true,
        doctor: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return ok(reviews);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const payload = reviewCreateSchema.parse(body);

    const user = await prisma.user.findUnique({ where: { id: payload.userId }, select: { id: true, role: true } });
    if (!user) {
      return fail("User not found", 404);
    }

    if (user.role !== "PATIENT") {
      return fail("Only patients can submit reviews", 403);
    }

    if (payload.consultationId) {
      const consultation = await prisma.consultation.findUnique({ where: { id: payload.consultationId } });
      if (!consultation || consultation.patientId !== payload.userId || consultation.doctorId !== payload.doctorId) {
        return fail("Consultation is invalid for this review", 422);
      }
    }

    const review = await prisma.review.create({
      data: payload,
      include: {
        user: true,
        doctor: true,
      },
    });

    return ok(review, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
