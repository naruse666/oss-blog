import { PrismaClient } from "@prisma/client"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import { responseMessage } from "@/app/api/types/responseMessage"

const prisma = new PrismaClient()

export async function GET(
  request: NextRequest,
  { params }: { params: { url: string } },
) {
  const url: string = params.url

  const article = await prisma.article.findFirst({
    where: {
      url: url,
    },
  })

  if (!article) {
    return NextResponse.json(
      { message: responseMessage.error.notFound },
      { status: 404 },
    )
  }

  const userList = await prisma.bookmark.findMany({
    where: {
      articleId: article.id,
    },
    select: {
      userId: true,
    },
  })

  const userIdList = userList.map((bookmark) => bookmark.userId)

  return NextResponse.json(
    {
      message: responseMessage.success.get,
      data: {
        userIdList: userIdList,
      },
    },
    { status: 200 },
  )
}
