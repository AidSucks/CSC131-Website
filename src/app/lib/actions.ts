'use server';

import {signOut, signIn} from "@/auth";
import prisma from "@/app/lib/prisma";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {cache} from "react";

import {
  AuthorizedUser,
  CustomerInquiry,
  AvailabilityRule,
  UnavailabilityRule,
  CustomerAppointment,
  BusinessInfo,
  AuthorizedUserSchema,
  CustomerInquirySchema, BusinessInfoSchema,
} from "@/app/lib/zod-schemas";

import dayjs from "dayjs";

export async function logOut() {
  await signOut({redirectTo: "/"});
}

export async function logIn(provider: "google" | "github") {
  await signIn(provider, {redirectTo: "/dashboard"});
}

// DATA FETCHING METHODS

export async function fetchBusinessInfo() {
  const businessInfo: BusinessInfo | null = await prisma.businessInformation.findFirst();
  return businessInfo;
}

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
    username: formData.get("username"),
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

export async function updateBusinessInformation(formData: FormData) {

  const data = {
    businessEmail: formData.get("businessEmail"),
    businessPhone: formData.get("businessPhone"),
    facebook: formData.get("facebook"),
    instagram: formData.get("instagram"),
    linkedin: formData.get("linkedin"),
    youtube: formData.get("youtube"),
    twitterX: formData.get("twitterX"),
    businessAddress: formData.get("businessAddress")
  }

  const validatedFields = BusinessInfoSchema.safeParse(data);

  if(!validatedFields.success) {
    console.log("Fields did not validate");
    return;
  }

  const updatedInfo = await prisma.businessInformation.update({
    where: {
      id: "1"
    },
    data: validatedFields.data
  });

  if(!updatedInfo) {
    console.log("Error updating business info");
    return;
  }

  revalidatePath("/dashboard/business-info");
  redirect("/dashboard/business-info");
}

export async function removerCustomerInquiry(id: string) {
  await prisma.customerInquiry.delete({
    where: {
      id: id
    }
  });

  revalidatePath("/dashboard/customers");
  redirect("/dashboard/customers");
}

export async function createCustomerAppointment(formData: FormData) {
  console.log(formData);
  console.log("Start: " + dayjs(formData.get("appointmentStart")?.toString()).format("MMMM DD YYYY @ h:mm A"));
  console.log("End: " + dayjs(formData.get("appointmentEnd")?.toString()).format("MMMM DD YYYY @ h:mm A"));
}