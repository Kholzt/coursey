import { Metadata } from "next";
import React from "react";
import Layout from "../../components/frontend/Layout";
import Card from "./../../components/Card";
import Link from "next/link";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Coursey | My Course",
  description: "all your courses will be displayed here",
};
const array = [
  {
    image: "/images/course.jpg",
    title: "Mastering JavaScript for Web Development",
    price: "$49.99",
    id: "12345",
    authorName: "John Doe",
    authorImage: "/images/profile.jpg",
    authorLink: "images/profile.jpg",
    categoryName: "Web Development",
    categoryLink: "https://example.com/categories/web-development",
    module: 5,
  },
  {
    image: "/images/course.jpg",
    title: "Introduction to Data Science with Python",
    price: "$59.99",
    id: "12345",
    authorName: "Jane Smith",
    authorImage: "/images/profile.jpg",
    authorLink: "images/profile.jpg",
    categoryName: "Data Science",
    categoryLink: "https://example.com/categories/data-science",
    module: 5,
  },
  {
    image: "/images/course.jpg",
    title: "UI/UX Design for Beginners",
    price: "$39.99",
    id: "12345",
    authorName: "Alex Johnson",
    authorImage: "/images/profile.jpg",
    authorLink: "images/profile.jpg",
    categoryName: "Design",
    categoryLink: "https://example.com/categories/design",
    module: 5,
  },
  {
    image: "/images/course.jpg",
    title: "Advanced Machine Learning with TensorFlow",
    price: "$79.99",
    id: "12345",
    authorName: "Emily Davis",
    authorImage: "/images/profile.jpg",
    authorLink: "images/profile.jpg",
    categoryName: "Artificial Intelligence",
    categoryLink: "https://example.com/categories/artificial-intelligence",
    module: 5,
  },
  {
    image: "/images/course.jpg",
    title: "Digital Marketing Strategies for 2024",
    price: "$29.99",
    id: "12345",
    authorName: "Michael Brown",
    authorImage: "/images/profile.jpg",
    authorLink: "images/profile.jpg",
    categoryName: "Marketing",
    categoryLink: "https://example.com/categories/marketing",
    module: 5,
  },
];
const page = () => {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="font-bold text-2xl mb-5">My Course</h1>
        {array.length > 0 ? (
          <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2">
            {array.map((arr: any, i: number) => {
              return (
                <Card
                  key={i}
                  {...arr}
                  href={`/course/${arr.id}`}
                  purchased
                  progress={90}
                />
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col min-h-[300px] text-center">
            <Image
              src={"/images/no-data.jpg"}
              width={300}
              height={300}
              alt="no-data"
              layout="responsive"
              className="max-w-[300px]"
            />
            <h4 className="font-bold text-xl">
              You haven't enrolled in any courses yet.
            </h4>
            <p> Start learning by exploring our courses!</p>
            <Link
              href={"/all-course"}
              className="mt-4 px-4 py-2 bg-[#4955FD] hover:bg-[#4955FD]/90 rounded-md text-white"
            >
              All Course
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default page;
