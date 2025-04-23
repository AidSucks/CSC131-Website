'use server';

import {signOut} from "@/auth";
import prisma from "@/app/lib/prisma";
import {z} from "zod";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {cache} from "react";

const AuthorizedUserSchema = z.object({
  email: z.string().email({message: "Invalid Email"}),
  username: z.string().default("New User"),
  role: z.enum(["MODERATOR", "ADMINISTRATOR"])
});

export async function logOut() {
  await signOut({redirectTo: "/"});
}

//TODO Further research react caching
export const fetchAllUsers = cache(async () => {
  return await prisma.authorizedUser.findMany();
});

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