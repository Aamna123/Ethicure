import { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { consultationCreateSchema } from "@/lib/api/schemas";
import { handleApiError, ok } from "@/lib/api/http";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") ?? undefined;
    const doctorId = searchParams.get("doctorId") ?? undefined;
    const patientId = searchParams.get("patientId") ?? undefined;

    const consultations = await prisma.consultation.findMany({
      where: {
        status: status as never,
        doctorId,
        patientId,
      },
      include: {
        doctor: true,
        patient: true,
        notifications: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return ok(consultations);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const payload = consultationCreateSchema.parse(body);

    const consultation = await prisma.consultation.create({
      data: {
        patientId: payload.patientId,
        doctorId: payload.doctorId,
        status: payload.status,
        symptoms: payload.symptoms,
        notes: payload.notes,
        preferredDate: payload.preferredDate,
        preferredChannel: payload.preferredChannel,
        notifications: {
          create: [
            ...(payload.notifyEmail
              ? [{ channel: "EMAIL" as const, recipient: payload.notifyEmail }]
              : []),
            ...(payload.notifyWhatsapp
              ? [{ channel: "WHATSAPP" as const, recipient: payload.notifyWhatsapp }]
              : []),
          ],
        },
      },
      include: {
        doctor: true,
        patient: true,
        notifications: true,
      },
    });

    const contactEvent = payload.contactEvent as
      | { channel: "PHONE_CALL" | "WHATSAPP_MESSAGE" | "WHATSAPP_CALL"; metadata?: Record<string, string | number | boolean> }
      | undefined;

    if (contactEvent) {
      await prisma.contactLog.create({
        data: {
          doctorId: payload.doctorId,
          userId: payload.patientId,
          channel: contactEvent.channel,
          metadata: contactEvent.metadata,
        },
      });
    }

    return ok(consultation, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
