'use server';

import {signOut} from "@/auth";
import prisma from "@/app/lib/prisma";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {cache} from "react";

import {
  AuthorizedUser,
  CustomerInquiry,
  AvailabilityRule,
  AuthorizedUserSchema,
  CustomerInquirySchema, UnavailabilityRule, CustomerAppointment,
} from "@/app/lib/zod-schemas";
import dayjs from "dayjs";

export async function logOut() {
  await signOut({redirectTo: "/"});
}

// DATA FETCHING METHODS

//TODO Further research react caching
export const fetchAllUsers = cache(async () => {
  const users: AuthorizedUser[] = await prisma.authorizedUser.findMany();
  return users;
});

export async function fetchAllCustomerInquiries() {
  const customers: CustomerInquiry[] = await prisma.customerInquiry.findMany();
  return customers;
}

export async function fetchAvailabilityRules() {
  const availabilityRules: AvailabilityRule[] = await prisma.availabilityRule.findMany({
    include: {
      allowedAppointments: true
    }
  });
  return availabilityRules;
}

export async function fetchUnavailabilityRules() {
  const unavailabilityRules: UnavailabilityRule[] = await prisma.specialUnavailabilityRule.findMany();
  return unavailabilityRules;
}

export async function fetchCustomerAppointments() {
  const customerAppointments: CustomerAppointment[] = await prisma.customerAppointment.findMany();
  return customerAppointments;
}

// FORM METHODS

export async function createAuthorizedUser(formData: FormData) {

  const validatedFields = AuthorizedUserSchema.safeParse({
    email: formData.get("email"),
    role: formData.get("role")?.toString().toUpperCase()
  });

  //TODO Change this!!!
  if(!validatedFields.success) {
    console.log("Fields did not validate");
    return;
  }

  const addedUser = await prisma.authorizedUser.create({
    data: validatedFields.data
  });

  //TODO Change this!!!
  if(!addedUser) {
    console.log("Error adding authorized user");
    return;
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}

export async function removeAuthorizedUser(email: string) {
  await prisma.authorizedUser.delete({
    where: {
      email: email
    }
  });

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}

export async function createCustomerInquiry(formData: FormData) {

  const data = {
    fullName: formData.get("fullName"),
    contactEmail: formData.get("contactEmail"),
    contactPhone: formData.get("contactPhone"),
    servicesRequested: ["Test"],
    message: formData.get("message")
  }

  console.log(data);

  const validatedFields = CustomerInquirySchema.safeParse(data);

  //TODO Change this!!!
  if(!validatedFields.success) {
    console.log("Fields did not validate");
    return;
  }

  const submittedForm = await prisma.customerInquiry.create({
    data: validatedFields.data
  });

  //TODO Change this!!!
  if(!submittedForm) {
    console.log("Error adding authorized user");
    return;
  }

  revalidatePath("/contact");
  redirect("/");
}

export async function createCustomerAppointment(formData: FormData) {
  console.log(formData);
  console.log("Start: " + dayjs(formData.get("appointmentStart")?.toString()).format("MMMM DD YYYY @ h:mm A"));
  console.log("End: " + dayjs(formData.get("appointmentEnd")?.toString()).format("MMMM DD YYYY @ h:mm A"));
}