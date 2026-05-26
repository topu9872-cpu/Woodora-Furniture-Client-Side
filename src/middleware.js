import { NextResponse } from "next/server";

export function middleware(request) {
  const session = request.cookies.get("better-auth.session_token")?.value;

  const isProtected =
    request.nextUrl.pathname.startsWith("/profile") ||
    request.nextUrl.pathname.startsWith("/cart");

  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/cart/:path*"],
};