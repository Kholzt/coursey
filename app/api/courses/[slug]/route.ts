import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";

export async function GET(
  req: NextApiRequest,
  { params: { slug } }: { params: { slug: string } }
) {
  try {
    let courses = await prisma.course.findFirst({
      where: {
        slug: slug as string,
      },
      include: {
        category: true,
        instructor: true,
        modules: true,
        enrollments: true,
      },
    });

    return new NextResponse(JSON.stringify(courses), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(error), {
      status: 500,
    });
  }
}
