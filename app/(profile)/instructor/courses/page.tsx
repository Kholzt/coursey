// app/course/page.tsx
import React from "react";
import Layout from "../../Layout";
import { Metadata } from "next";
import { getCoursesByUser } from "@/actions/coursesAction";
import DataTable from "./DataTable"; // Import the DataTable component
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coursey | Your Courses",
  description: "View and manage the courses you have created as an instructor.",
};

const Page = async ({
  searchParams: { search },
}: {
  searchParams: { search?: string };
}) => {
  const { data }: any = await getCoursesByUser(undefined, undefined, "20");

  return (
    <Layout>
      <div className="p-4 w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Your Courses</h1>
          <Link
            href={"/instructor/courses/create"}
            className="px-4 py-2 bg-[#4955FD] text-sm hover:bg-[#4955FD]/90 text-white rounded-md"
          >
            Create New Course
          </Link>
        </div>
        <p className="mt-2 text-gray-600">
          Manage your courses, track student progress, and edit course details
          all in one place.
        </p>
        <DataTable data={data || []} /> {/* Pass data to the DataTable */}
      </div>
    </Layout>
  );
};

export default Page;
