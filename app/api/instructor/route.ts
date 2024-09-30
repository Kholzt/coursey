import { NextResponse } from "next/server";
import { prisma } from "../../../prisma/prisma";
import { slugify } from "@/utils/helpers";

export async function GET(req: Request) {
  try {
    const categories = await prisma.user.findMany({
      where: {
        role: "instructor",
      },
      include: {
        courses: true,
      },
      orderBy: {
        id: "desc",
      },
    });
    return NextResponse.json(categories, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
    });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name } = body;

    if (!name) {
      return NextResponse.json(
        { error: "Name is required" },
        {
          status: 400,
        }
      );
    }

    const slug = slugify(name); // Generate a slug from the name

    const category = await prisma.category.create({
      data: {
        name,
        slug,
      },
    });

    return NextResponse.json(category, {
      status: 201,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}
