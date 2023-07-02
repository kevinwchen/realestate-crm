export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/dashboard/:path*"], // protect all URLs starting with /UserPost
}
