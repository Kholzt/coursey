import { Metadata } from "next";
import React from "react";
import Layout from "../../components/front/Layout";
import Card from "../../components/Card";
import CategoryItem from "./CategoryItem";
import SearchCourse from "./SearchCourse";
import { useFetchServer } from "./../../../hooks/useFetch";
export const metadata: Metadata = {
  title: "Coursey | My Course",
  description: "all your courses will be displayed here",
};

const page = async ({ searchParams }: { searchParams: any }) => {
  const category = searchParams.category
    ? "?category=" + searchParams.category
    : "";
  const { data: courses } = await useFetchServer(`/courses${category}`);
  const { data: categories } = await useFetchServer(`/categories`);
  return (
    <Layout>
      <div className="p-4">
        <h1 className="font-bold text-2xl mb-5">All Course</h1>
        <div className="mb-4 flex gap-2">
          <CategoryItem href={"all"} name={"All"} />
          {categories.map((category: any, i: number) => {
            return (
              <CategoryItem href={category.slug} key={i} name={category.name} />
            );
          })}
        </div>
        <SearchCourse />
        <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2">
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
    </Layout>
  );
};

export default page;
