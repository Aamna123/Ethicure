import { ContactChannel, ConsultationStatus, ReviewStatus, UserRole } from "@prisma/client";
import { z } from "zod";

const phoneRegex = /^[+0-9()\s-]{7,20}$/;

export const userCreateSchema = z.object({
  role: z.nativeEnum(UserRole).optional(),
  fullName: z.string().min(2).max(120).optional(),
  phone: z.string().regex(phoneRegex, "Invalid phone format"),
  email: z.string().email().optional(),
  externalAuthId: z.string().min(3).max(255).optional(),
});

export const doctorCreateSchema = z.object({
  slug: z.string().min(3).max(100),
  name: z.string().min(2).max(120),
  profileImage: z.string().url().or(z.string().startsWith("/")).optional(),
  specialization: z.string().min(2).max(120),
  location: z.string().min(2).max(120),
  yearsOfExperience: z.number().int().min(0).max(60),
  rating: z.number().min(0).max(5).optional(),
  totalReviews: z.number().int().min(0).optional(),
  description: z.string().min(8).max(400),
  phoneNumber: z.string().regex(phoneRegex, "Invalid phone format"),
  whatsappNumber: z.string().regex(phoneRegex, "Invalid phone format").optional(),
  hospitalAffiliation: z.string().max(160).optional(),
  consultationFee: z.string().max(120).optional(),
  availableHours: z.string().max(160).optional(),
  aboutDoctor: z.string().max(2000).optional(),
  areasOfExpertise: z.array(z.string().min(2).max(120)).default([]),
  qualifications: z.array(z.string().min(2).max(200)).default([]),
  languagesSpoken: z.array(z.string().min(2).max(80)).default([]),
  isAdvisor: z.boolean().optional(),
});

export const consultationCreateSchema = z.object({
  patientId: z.string().cuid(),
  doctorId: z.string().cuid(),
  status: z.nativeEnum(ConsultationStatus).optional(),
  symptoms: z.string().max(1000).optional(),
  notes: z.string().max(2000).optional(),
  preferredDate: z.coerce.date().optional(),
  preferredChannel: z.nativeEnum(ContactChannel).optional(),
  notifyEmail: z.string().email().optional(),
  notifyWhatsapp: z.string().regex(phoneRegex, "Invalid phone format").optional(),
  contactEvent: z
    .object({
      channel: z.nativeEnum(ContactChannel),
      metadata: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])).optional(),
    })
    .optional(),
});

export const reviewCreateSchema = z.object({
  userId: z.string().cuid(),
  doctorId: z.string().cuid(),
  consultationId: z.string().cuid().optional(),
  rating: z.number().int().min(1).max(5),
  title: z.string().max(160).optional(),
  text: z.string().min(8).max(1500),
  status: z.nativeEnum(ReviewStatus).optional(),
});

export const contactLogCreateSchema = z.object({
  doctorId: z.string().cuid(),
  userId: z.string().cuid().optional(),
  channel: z.nativeEnum(ContactChannel),
  metadata: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])).optional(),
});
