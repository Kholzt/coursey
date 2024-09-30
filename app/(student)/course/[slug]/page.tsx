import React from "react";
import Navbar from "../../../components/frontend/Navbar";
import { useFetchServer } from "@/hooks/useFetch";
import Image from "next/image";
import Link from "next/link";
import CardPrice from "./CardPrice";
import { ArrowLeft } from "lucide-react";
import { getCourseBySlug } from "@/actions/coursesAction";

const page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const { data: course } = await getCourseBySlug(slug);
  if (!course) {
    return <>Tidak ada data</>;
  }

  return (
    <>
      <Navbar />
      <Link
        href="/courses"
        className="border px-4 py-2 rounded-md mt-4 ms-4 items-center gap-2  inline-flex bg-slate-800 text-white text-sm hover:bg-slate-800/90"
      >
        <ArrowLeft className="w-5" /> Back to Courses
      </Link>
      <main className="px-4 grid grid-cols-6 gap-5 mx-auto md:w-[80%]  py-8">
        <div className="md:col-span-4 col-span-6">
          <Image
            src={course.thumbnail || "/images/default.png"}
            width={500}
            height={500}
            layout={"responsive"}
            objectFit="cover"
            alt="Courses"
            className="w-full aspect-video rounded-md object-cover object-center"
          />
          <div className="mt-4">
            <h1 className="text-3xl mb-4">{course.title}</h1>
            <p className="text-base mb-6">{course.description}</p>
            <Link
              href={"/author/" + course.instructor.id}
              className="flex mt-2 items-center gap-2"
            >
              <Image
                src={course.instructor.thumbnail || "/images/default.png"}
                alt="Card 1"
                width={30} // Set appropriate width
                height={30} // Set appropriate height maintaining aspect ratio (e.g., 16:9 for videos)
                className="rounded-full aspect-square object-cover"
              />
              <span className="text-xs">{course.instructor.name}</span>
            </Link>
          </div>
        </div>
        <div className="md:col-span-2  col-span-6">
          <CardPrice
            price={course.price}
            firstModul={(course.modules[0].id as unknown as string) || ""}
            countModule={course.modules.length}
          />
        </div>
      </main>
    </>
  );
};

export default page;
