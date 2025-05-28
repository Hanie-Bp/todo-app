// // middleware.ts
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { getToken } from "next-auth/jwt";

// export async function middleware(req: NextRequest) {
//   const token = await getToken({
//     req,
//     secret: process.env.NEXTAUTH_SECRET,
//   });

//   // console.log("✅ Middleware token:", token);
//   const { pathname } = req.nextUrl;

//   // Allow public routes
//   if (pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up")) {
//     return NextResponse.next();
//   }

  

//   // Redirect unauthenticated users
//   if (!token) {
//     const signInUrl = new URL("/sign-in", req.url);
//     return NextResponse.redirect(signInUrl);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!_next|favicon.ico|api|.*\\..*).*)"],
// };

// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = req.nextUrl;

 
  const publicPaths = ["/sign-in", "/sign-up"];
  const publicApi = ["/api/auth", "/api/users"];

  const isPublicPage = publicPaths.some((path) => pathname.startsWith(path));
  const isPublicApi = publicApi.some((api) => pathname.startsWith(api));

  if (isPublicPage || isPublicApi) {
    return NextResponse.next();
  }

  if (!token) {
    const signInUrl = new URL("/sign-in", req.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};



