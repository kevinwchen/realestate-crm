import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import 'dotenv/config'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as any

        const res = await fetch("http://lcoalhost:8000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(username, password),
        })

        const user = await res.json()

        if (res.ok && user) {
          return user
        } else return null
      },
    }),
  ],
  session: {
    strategy: "jwt",
  }
}

export default NextAuth(authOptions)
