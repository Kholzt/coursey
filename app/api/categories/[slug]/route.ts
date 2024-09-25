import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";

export async function GET(
  req: Request,
  { params: { slug } }: { params: { slug: string } }
) {
  try {
    let categories = await prisma.category.findFirst({
      where: {
        slug: slug as string,
      },
    });

    return new NextResponse(JSON.stringify(categories), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(error), {
      status: 500,
    });
  }
}
