import { getCategoryCount } from "@/actions/categoriesAction";
import { getCoursesCount } from "@/actions/coursesAction";
import Layout from "@/app/components/backend/Layout";
import { useFetchServer } from "@/hooks/useFetch";
import { auth } from "@clerk/nextjs/server";
import { User } from "lucide-react";
import React from "react";

const page = async () => {
  const { data: coursesCount } = await getCoursesCount();
  const { data: categoriesCount } = await getCategoryCount();
  const { data: instructorCount } = await useFetchServer(`/instructor/count`);
  return (
    <Layout>
      <div className="p-4">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
          <article className=" border bg-[#4955FD] text-white p-4 rounded-md flex items-center gap-4">
            <User className=" bg-[#6a74ff] w-[50px] h-[50px] p-2 rounded-full" />
            <div className="">
              <h1 className="text-2xl font-bold">{coursesCount}</h1>
              <h6 className="text-sm">Users</h6>
            </div>
          </article>
          <article className=" border bg-[#4955FD] text-white p-4 rounded-md flex items-center gap-4">
            <User className=" bg-[#6a74ff] w-[50px] h-[50px] p-2 rounded-full" />
            <div className="">
              <h1 className="text-2xl font-bold">{instructorCount}</h1>
              <h6 className="text-sm">Instrukture</h6>
            </div>
          </article>
          <article className=" border bg-[#4955FD] text-white p-4 rounded-md flex items-center gap-4">
            <User className=" bg-[#6a74ff] w-[50px] h-[50px] p-2 rounded-full" />
            <div className="">
              <h1 className="text-2xl font-bold">{categoriesCount}</h1>
              <h6 className="text-sm">Categories</h6>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default page;
