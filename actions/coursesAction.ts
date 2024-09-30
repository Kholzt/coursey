import { prisma } from "@/prisma/prisma";
import { auth, currentUser, getAuth } from "@clerk/nextjs/server";

// Fetch all courses with filters (category, published)
export async function getCourses(published?: boolean, category?: string) {
  let courses: any;
  try {
    let where: any = {};

    if (category && category !== "all") {
      where = {
        category: {
          name: category,
        },
      };
    }

    if (published !== undefined) {
      where = { ...where, published: published === true };
    }

    courses = await prisma.course.findMany({
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

    // Check if the current user is enrolled in each course
    const enrichedCourses = courses.map((course: any) => {
      const isPurchased = course.enrollments.some(
        (enrollment: any) => enrollment.studentId === getLoggedInUserId()
      );
      return {
        ...course,
        purchased: isPurchased, // Add the purchased attribute
      };
    });

    return { data: enrichedCourses, status: 200 };
  } catch (error) {
    console.error(error);
    return { error: "Internal Server Error", status: 500 };
  } finally {
    await prisma.$disconnect(); // Ensure the Prisma client disconnects after the request
  }
}

export async function getCoursesByUser(
  published?: boolean,
  category?: string,
  userId?: string
) {
  let courses: any;
  try {
    let where: any = {};

    if (category) {
      where = {
        category: {
          name: category,
        },
      };
    }

    if (published !== undefined) {
      where = { ...where, published: published === true };
    }

    courses = await prisma.course.findMany({
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

    return { data: courses, status: 200 };
  } catch (error) {
    console.error(error);
    return { error: "Internal Server Error", status: 500 };
  } finally {
    await prisma.$disconnect(); // Ensure the Prisma client disconnects after the request
  }
}

// Fetch a single course by slug
export async function getCourseBySlug(slug: string) {
  let course: any;
  try {
    course =
      (await prisma.course.findFirst({
        where: {
          slug: slug,
        },
        include: {
          category: true,
          instructor: true,
          modules: {
            orderBy: {
              orderNumber: "asc",
            },
          },
          enrollments: true,
        },
      })) || [];

    if (!course) {
      return { data: [], error: "Course not found", status: 404 };
    }

    return { data: course as any, status: 200 };
  } catch (error) {
    console.error(error);
    return { data: [], error: "Internal Server Error", status: 500 };
  } finally {
    await prisma.$disconnect(); // Ensure the Prisma client disconnects after the request
  }
}

// Get the total number of courses
export async function getCoursesCount() {
  try {
    const totalCourses = (await getCourses()).data || [];
    return { data: totalCourses.length, status: 200 };
  } catch (error) {
    console.error(error);
    return { error: "Internal Server Error", status: 500 };
  } finally {
    await prisma.$disconnect(); // Ensure the Prisma client disconnects after the request
  }
}

// Example function to get the logged-in user ID
function getLoggedInUserId(): number {
  // Replace this with your actual logic to get the logged-in user's ID
  return 1; // Placeholder value for now
}
