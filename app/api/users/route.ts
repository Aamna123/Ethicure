import { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { handleApiError, ok } from "@/lib/api/http";
import { userCreateSchema } from "@/lib/api/schemas";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const role = searchParams.get("role") ?? undefined;
    const phone = searchParams.get("phone") ?? undefined;

    const users = await prisma.user.findMany({
      where: {
        role: role as never,
        phone: phone ? { contains: phone } : undefined,
      },
      orderBy: { createdAt: "desc" },
    });

    return ok(users);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const payload = userCreateSchema.parse(body);

    const user = await prisma.user.create({ data: payload });
    return ok(user, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
