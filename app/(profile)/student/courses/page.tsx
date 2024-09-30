import React from "react";
import Layout from "../../Layout";
import { Metadata } from "next";
import { getCoursesByUser } from "@/actions/coursesAction";
import Card from "@/app/components/Card";
import { auth } from "@clerk/nextjs/server";

export const metadata: Metadata = {
  title: "Coursey | Explore Our Courses",
  description:
    "Discover a variety of courses tailored for your learning journey. Enroll now and enhance your skills!",
  keywords: "online courses, enroll, learning, education, Coursey",
  openGraph: {
    title: "Coursey | Courses",
    description:
      "Explore and enroll in a wide range of online courses to enhance your skills.",
    url: "https://yourwebsite.com/courses",
    images: [
      {
        url: "https://yourwebsite.com/path/to/image.jpg",
        width: 800,
        height: 600,
        alt: "Courses Overview",
      },
    ],
  },
};

const Page = async () => {
  const { userId }: any = auth();
  const { data: courses }: any = await getCoursesByUser(
    undefined,
    undefined,
    userId
  );

  return (
    <Layout>
      <div className="p-4 w-full">
        <header className="flex justify-between mb-2">
          <h1 className="text-3xl font-bold">My Courses</h1>
          <div className="flex items-center">
            <p className="text-base text-gray-600">
              Total Courses: {courses.length}
            </p>
          </div>
        </header>
        <p className="text-gray-700  mb-6">
          Here you can find all the courses you are enrolled in. Click on a
          course to continue your learning journey.
        </p>

        <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2">
          {courses?.map((course: any, i: number) => (
            <Card
              key={i}
              href={`/course/${course.slug}`}
              image={course.thumbnail}
              title={course.title}
              price={course.price}
              authorName={course.instructor.name}
              authorImage={course.instructor.thumbnail}
              categoryName={course.category.name}
              authorLink={`/author/${course.instructor.slug}`}
              categoryLink={`/category/${course.category.slug}`}
              module={course.modules.length}
              purchased={course.purchased}
              progress={course.enrollments.progress}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Page;
