import { Metadata } from "next";
import React from "react";
import Layout from "../../components/frontend/Layout";
import Card from "../../components/Card";
import SearchCourse from "./SearchCourse";
import { useFetchServer } from "../../../hooks/useFetch";
import CategoryItem from "../../components/CategoryItem";
import { getCategories } from "@/actions/categoriesAction";
import { getCourses } from "@/actions/coursesAction";
export const metadata: Metadata = {
  title: "Coursey | All Course",
  description: "all  courses will be displayed here",
};

const page = async ({ searchParams }: { searchParams: any }) => {
  const category = searchParams.category ? searchParams.category : "";
  const { data: courses } = await getCourses(true, category);
  const { data: categories } = await getCategories();
  return (
    <Layout>
      <div className="pb-4  ">
        <div className="py-10  mb-10 bg-[#4955FD] px-4">
          <h1 className="text-4xl text-center text-white md:w-[400px] mx-auto md:mb-4 mb-2 md:mt-6 mt-3 font-bold">
            Start Your Learning Journey Today
          </h1>
          <p className="text-center  text-slate-200 md:w-[600px] mx-auto text-sm md:mb-10 mb-5">
            Choose from a wide variety of courses and take the next step toward
            achieving your goals. Enroll now and unlock your potential!
          </p>
          <SearchCourse />
        </div>
        <div className="mb-4 flex overflow-x-auto no-scrollbar w-full gap-2 md:px-20 px-4">
          <CategoryItem baseUrl={"/courses"} href={" "} name={"All"} />
          {categories?.map((category: any, i: number) => (
            <CategoryItem
              href={category.slug}
              baseUrl={"/courses"}
              key={i}
              name={category.name}
            />
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 md:px-20 px-4">
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
                purchased={course.purchased}
                progress={course.enrollments.progress}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default page;
