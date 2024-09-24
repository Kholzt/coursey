import React from "react";
import Navbar from "../../../components/front/Navbar";
import { useFetchServer } from "@/hooks/useFetch";
import Image from "next/image";
import Link from "next/link";
import CardPrice from "./CardPrice";

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
      <main className="px-4 grid grid-cols-6 gap-5 mx-auto md:w-[80%]  py-8">
        <div className="md:col-span-4 col-span-6">
          <Image
            src={course.thumbnail}
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
                src={course.instructor.thumbnail}
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
          <CardPrice price={course.price} countModule={course.modules.length} />
        </div>
      </main>
    </>
  );
};

export default page;
