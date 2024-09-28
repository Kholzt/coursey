import React from "react";
import Layout from "../components/frontend/Layout";
import Image from "next/image";
import { useFetchServer } from "./../../hooks/useFetch";
import Card from "../components/Card";
import CategoryItem from "../components/CategoryItem";
const page = async ({ searchParams }: { searchParams: any }) => {
  const category = searchParams.category
    ? "?category=" + searchParams.category
    : "";
  const { data: courses } = await useFetchServer(`/courses${category}`);
  const { data: categories } = await useFetchServer(`/categories`);

  return (
    <Layout>
      <div className="p-4">
        {/* <h1 className="text-3xl mb-4">Account</h1> */}
        <div className="flex">
          <div className=" p-4 rounded-md w-[26rem]">
            <div className="flex flex-col gap-6 text-center">
              <figure>
                <Image
                  width={500}
                  height={500}
                  src="/images/profile.jpg"
                  alt="profile image"
                  className="rounded-full  mx-auto aspect-square w-[150px]"
                />
              </figure>
              <div className="">
                <h2 className="text-base ">Muhammad Nor Kholit</h2>
                <span className="text-sm text-slate-500">
                  mnorkholit7@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="mb-4 flex gap-2">
               <CategoryItem baseUrl={"/account"} href={" "} name={"All"} />
          {categories.map((category: any, i: number) => {
            return (
              <CategoryItem
                href={category.slug}
                baseUrl={"/account"}
                key={i}
                name={category.name}
              />
            );
          })}
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2  gap-4">
              {courses?.map((course: any, i: number) => {
                return (
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
                    purchased={course.enrollments.length}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
