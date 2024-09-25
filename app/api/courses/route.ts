import { NextResponse } from "next/server";
import { prisma } from "./../../../prisma/prisma";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url || "");
    const params = new URLSearchParams(url.searchParams);
    const category = params.get("category");

    // Assuming you have a way to get the logged-in user's ID
    const userId = getLoggedInUserId(req); // Implement this function based on your authentication logic

    let courses: any = [];

    if (category && category !== "all") {
      courses = await prisma.course.findMany({
        where: {
          category: {
            name: category as string,
          },
        },
        include: {
          category: true,
          instructor: true,
          modules: true,
          enrollments: true, // Include enrollments for checking
        },
      });
    } else {
      // Fetch all courses if category is 'all' or not provided
      courses = await prisma.course.findMany({
        include: {
          category: true,
          instructor: true,
          modules: true,
          enrollments: true, // Include enrollments for checking
        },
      });
    }

    // Map through courses and check if the current user is enrolled
    const enrichedCourses = courses.map((course: any) => {
      const isPurchased = course.enrollments.some(
        (enrollment: any) => enrollment.studentId === userId
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
