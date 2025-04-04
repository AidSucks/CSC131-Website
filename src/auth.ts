import NextAuth, { type DefaultSession } from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/app/lib/prisma";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";


/*

  Need to use type augmentation to allow the session and sign-in callbacks to recognize the additional
  session information that we add. (i.e) Role, username, etc.

declare module "next-auth" {
  interface Session {
    user: {
      unreelProfile: {
        uuid: string,
        username: string,
        role: string
      }
    } & DefaultSession["user"]
  }
}*/

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "database"
  },
  providers: [
    Google({
      allowDangerousEmailAccountLinking: true
    }),
    GitHub({
      allowDangerousEmailAccountLinking: true
    })
  ],
  callbacks: {
    async signIn() {
      console.log("Called Sign In Callback");
      return true;
    },
    async session({session}) {
      console.log("Called Session Callback");
      return {...session};
    }
  }
});