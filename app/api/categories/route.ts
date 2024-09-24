import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { prisma } from "../../../prisma/prisma";

export async function GET(req: NextApiRequest) {
  try {
    const categories = await prisma.category.findMany();
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
