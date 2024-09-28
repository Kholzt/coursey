"use client";
import React, { ChangeEvent } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const SearchCategory = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (searchTerm) {
      params.set("search", searchTerm);
    } else {
      params.delete("search");
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <input
      onChange={onChange}
      type="text"
      name="search"
      placeholder="Search"
      className="px-3 py-2 text-sm border ms-auto pr-4 bg-white/10 m-3 md:w-[20%] w-[200px] rounded-md outline-none"
    />
  );
};

export default SearchCategory;
