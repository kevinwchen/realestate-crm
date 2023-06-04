import { SessionProvider } from "next-auth/react"

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return { children }
}
