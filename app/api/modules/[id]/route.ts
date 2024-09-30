import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const moduleId = parseInt(id); // Parse the module ID as integer
    if (isNaN(moduleId)) {
      throw new Error("Invalid module ID");
    }

    // Find the current module
    const currentModule = await prisma.courseModule.findFirst({
      where: { id: moduleId },
    });

    if (!currentModule) {
      return new NextResponse(JSON.stringify({ message: "Module not found" }), {
        status: 404,
      });
    }

    // Find the course and include its modules ordered by orderNumber
    const courseWithModules = await prisma.course.findFirst({
      where: { id: currentModule.courseId },
      include: {
        modules: {
          orderBy: {
            orderNumber: "asc", // Ascending order to ensure the modules are in the right sequence
          },
        },
      },
    });

    if (!courseWithModules) {
      return new NextResponse(JSON.stringify({ message: "Course not found" }), {
        status: 404,
      });
    }

    // Find the current module's index within the course modules array
    const currentIndex = courseWithModules.modules.findIndex(
      (module) => module.id === currentModule.id
    );

    // Safely access the previous and next modules
    const prevModule =
      currentIndex > 0 ? courseWithModules.modules[currentIndex - 1] : null;
    const nextModule =
      currentIndex < courseWithModules.modules.length - 1
        ? courseWithModules.modules[currentIndex + 1]
        : null;

    return new NextResponse(
      JSON.stringify({
        ...currentModule,
        prevModuleLink: prevModule
          ? courseWithModules.slug + "/" + prevModule.id
          : null,
        nextModuleLink: nextModule
          ? courseWithModules.slug + "/" + nextModule.id
          : null,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
