import { NextResponse } from "next/server";

export function proxy() {
  const response = NextResponse.next();
  const env = process.env.VERCEL_ENV;

  if (env && env !== "production") {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|i/|v/|pdf/|biopics/|portfolio/).*)"],
};
