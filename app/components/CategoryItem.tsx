"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
interface CategoryItemProps {
  name: string;
  href: string;
  baseUrl: string;
}
const CategoryItem: React.FC<CategoryItemProps> = (props) => {
  let { href, name, baseUrl } = props;
  const currParam = useSearchParams();
  const params = new URLSearchParams();
  if (href !== " ") params.set("category", href);
  const isActive = currParam.get("category")
    ? href == currParam.get("category")
    : href == " ";

  return (
    <Link
      className={`px-4 py-2 border text-sm rounded-md ${
        isActive
          ? "border-[#4955FD] text-[#4955FD] bg-[#4955FD]/10 "
          : "hover:border-[#4955FD] hover:text-[#4955FD]"
      }`}
      href={`${baseUrl}?${params.toString()}`}
    >
      {name}
    </Link>
  );
};

export default CategoryItem;
