"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
interface CategoryItemProps {
  name: string;
  href: string;
}
const CategoryItem: React.FC<CategoryItemProps> = (props) => {
  let { href, name } = props;
  const currParam = useSearchParams();
  const params = new URLSearchParams();
  params.set("category", href);
  const isActive = currParam.get("category")
    ? href == currParam.get("category")
    : href == "all";

  return (
    <Link
      className={`px-4 py-2 border text-sm rounded-md ${
        isActive ? "border-[#4955FD] text-[#4955FD] " : ""
      }`}
      href={`all-course?${params.toString()}`}
    >
      {name}
    </Link>
  );
};

export default CategoryItem;
