import {z} from "zod";
import {DayOfWeek, Role} from "@prisma/client";

export enum DAYS {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY
}

export interface BusinessInfo {
  id: string,
  businessEmail: string | null,
  businessPhone: string | null,
  facebook: string | null,
  instagram: string | null,
  linkedin: string | null,
  youtube: string | null,
  twitterX: string | null,
  businessAddress: string | null
}

export interface AuthorizedUser {
  email: string,
  username: string,
  role: Role
}

export interface CustomerInquiry {
  id: string,
  fullName: string,
  contactEmail: string,
  contactPhone: string | null,
  servicesRequested: string[],
  message: string | null
}

export interface CustomerAppointment {
  id: string,
  fullName: string,
  contactEmail: string,
  contactPhone: string | null,
  message: string | null,
  submittedDate: Date,
  appointmentStart: Date,
  appointmentEnd: Date
}

export interface AppointmentTimeslot {
  id: number,
  startHour: number,
  startMin: number,
  endHour: number,
  endMin: number
}

export interface AvailabilityRule {
  dayOfWeek: DayOfWeek,
  allowedAppointments: AppointmentTimeslot[]
}

export interface UnavailabilityRule {
  id: string,
  note: string | null,
  startDate: Date,
  endDate: Date
}

export const AuthorizedUserSchema = z.object({
  email: z.string().email(),
  username: z.string().default("New User"),
  role: z.enum([Role.ADMINISTRATOR, Role.MODERATOR])
});

export const CustomerInquirySchema = z.object({
  fullName: z.string().nonempty(),
  contactEmail: z.string().email(),
  contactPhone: z.string().optional(),
  servicesRequested: z.string().array().default([]),
  message: z.string().max(300).optional()
});

export const BusinessInfoSchema = z.object({
  businessEmail: z.string().optional(),
  businessPhone: z.string().optional(),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  linkedin: z.string().optional(),
  youtube: z.string().optional(),
  twitterX: z.string().optional(),
  businessAddress: z.string().optional()
});

export const CustomerAppointmentSchema = CustomerInquirySchema.extend({
  submittedDate: z.date(),
  appointmentStart: z.date(),
  appointmentEnd: z.date()
}).omit({servicesRequested: true});