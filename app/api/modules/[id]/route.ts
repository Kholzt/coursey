import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: number } }
) {
  try {
    let courses = await prisma.courseModule.findFirst({
      where: {
        id ,
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
