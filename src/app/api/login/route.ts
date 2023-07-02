import { signJwtAccessToken } from "@/lib/jwt"
import prisma from "@/lib/prisma"
import * as bcrypt from "bcrypt"

interface RequestBody {
  email: string
  password: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  })

  if (!user || !user?.hashedPassword) {
    throw new Error("No user found")
  }

  if (user && (await bcrypt.compare(body.password, user.hashedPassword))) {
    const { hashedPassword, ...userWithoutPass } = user
    const accessToken = signJwtAccessToken(userWithoutPass)
    const result = {
      ...userWithoutPass,
      accessToken,
    }

    return new Response(JSON.stringify(result))
  } else return new Response(JSON.stringify(null))
}
