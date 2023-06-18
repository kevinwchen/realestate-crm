import { verifyJwt } from "@/lib/jwt"
import prisma from "@/lib/prisma"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const accessToken = request.headers.get("authorization")
  // Check if access token is not present or invalid
  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(
      JSON.stringify({
        error: "Unauthorised",
      }),
      {
        status: 401,
      }
    )
  }

  const userPosts = await prisma.post.findMany({
    where: { authorId: params.id },
    include: {
      author: {
        select: {
          email: true,
          name: true,
        },
      },
    },
  })

  return new Response(JSON.stringify(userPosts))
}
