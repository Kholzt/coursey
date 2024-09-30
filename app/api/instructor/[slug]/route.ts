import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";
import { slugify } from "@/utils/helpers";

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

    return NextResponse.json(categories, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
    });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
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

    const existingCategory = await prisma.category.findUnique({
      where: { slug },
    });

    if (!existingCategory) {
      return NextResponse.json(
        { error: "Category not found" },
        {
          status: 404,
        }
      );
    }
    const slugGen = slugify(name); // Generate a slug from the name

    const category = await prisma.category.update({
      where: {
        slug,
      },
      data: {
        name,
        slug: slugGen,
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

export async function DELETE(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const existingCategory = await prisma.category.findUnique({
      where: { slug },
    });

    if (!existingCategory) {
      return NextResponse.json(
        { error: "Category not found" },
        {
          status: 404,
        }
      );
    }
    const category = await prisma.category.delete({
      where: {
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
