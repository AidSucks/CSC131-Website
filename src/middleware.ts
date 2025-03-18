import { auth } from "@/auth"
import {NextResponse} from "next/server";

export default auth((req) => {

  console.log("Ran middleware on: " + req.nextUrl.pathname);

  if(!req.auth || !req.auth.user) {

    const signInRedirect = new URL("/api/auth/signin", req.url);
    signInRedirect.searchParams.set("callbackUrl", req.url);

    return NextResponse.redirect(signInRedirect);
  }
});

export const config = {
  matcher: '/dashboard/:path*'
}