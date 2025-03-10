'use server'

import prisma from "@/app/lib/prisma";

export async function fetchUser() {
  return await prisma.user.findFirst();
}