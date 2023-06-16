export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/UserPost/:path*"], // protect all URLs starting with /UserPost
}
