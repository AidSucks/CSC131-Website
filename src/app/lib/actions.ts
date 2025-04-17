'use server';

import {signOut} from "@/auth";
import prisma from "@/app/lib/prisma";

export async function logOut() {
  await signOut({redirectTo: "/"});
}

export async function fetchAllUsers() {
  return await prisma.user.findMany();
}