import { NextResponse } from "next/server";
import { prisma } from "./../../../../prisma/prisma";

export async function GET(req: Request) {
  try {
    const categories = await prisma.user.findMany({
      where: {
        role: "instructor",
      },
    });

    return NextResponse.json(categories?.length || 0, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, {
      status: 500,
    });
  }
}
