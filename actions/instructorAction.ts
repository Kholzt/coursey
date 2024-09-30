"use server";
import { prisma } from "@/prisma/prisma";
import { slugify } from "@/utils/helpers";

// Fetch all categories or a category by slug
export async function getInstructor() {
  try {
    const instructor = await prisma.user.findMany({
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
    return { data: instructor, status: 200 };
  } catch (error) {
    return { data: [], status: 500, error };
  } finally {
    await prisma.$disconnect(); // Ensure the Prisma client disconnects after the request
  }
}
