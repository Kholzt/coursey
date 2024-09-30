import { NextRequest, NextResponse } from "next/server";
import { prisma } from "./../../../../prisma/prisma";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url || "");
    const params = new URLSearchParams(url.searchParams);
    const category = params.get("category");
    const published = params.get("published") as unknown;
    let where = {};

    if (category && category !== "all") {
      where = {
        category: {
          name: category as string,
        },
      };
    }
    if (published !== null) {
      where = { ...where, published: published === "true" };
    }
    const courses = await prisma.course.findMany({
      where,
      include: {
        category: true,
        instructor: true,
        modules: {
          orderBy: {
            orderNumber: "asc",
          },
        },
        enrollments: true, // Include enrollments for checking
      },
    });

    // Map through courses and check if the current user is enrolled
    const enrichedCourses = courses.map((course: any) => {
      const isPurchased = course.enrollments.some(
        (enrollment: any) => enrollment.studentId === 0
      );
      return {
        ...course,
        purchased: isPurchased, // Add the purchased attribute
      };
    });

    return new NextResponse(JSON.stringify(enrichedCourses), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(error), {
      status: 500,
    });
  }
}

// Example function to get logged-in user ID, replace with your actual logic
function getLoggedInUserId(req: Request): number {
  // Extract user ID from request headers or session
  // This is just a placeholder
  return 1; // Replace with actual user ID logic
}
