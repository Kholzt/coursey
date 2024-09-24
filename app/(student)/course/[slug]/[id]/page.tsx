import React from "react";
import Navbar from "../../../../components/front/Navbar";
import Video from "./Video";
import ModuleList from "./ModuleList";
import { useFetchServer } from "@/hooks/useFetch";

const modules = [
  { name: "Introduction", id: "123456", isLock: false },
  { name: "What is figma?", id: "123", isLock: true },
  { name: "Plugin on figma", id: "1234", isLock: true },
];
const page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const { data: course } = await useFetchServer(`/courses/` + slug);
  if (!course) {
    return <>Tidak ada data</>;
  }
  return (
    <>
      <Navbar />
      <main className="px-4 grid grid-cols-6 gap-5 mx-auto md:w-[95%]  py-8">
        <div className="md:col-span-4 col-span-2">
          <Video />
        </div>
        <div className="md:col-span-2  col-span-6">
          <ModuleList modules={course.modules} />
        </div>
      </main>
    </>
  );
};

export default page;
