import React from "react";
import { Search } from "lucide-react";
const SearchCourse = () => {
  return (
    <div className="relative md:w-[70%] mx-auto group mb-6 ">
      <input
        type="text"
        className="px-3 py-2 text-sm border w-full  placeholder:text-white focus:border-white    pr-4 bg-white/10 text-white rounded-md outline-none"
        name="search"
        placeholder="Search by Course,Instrukture"
        id=""
      />
      <Search className="absolute top-[45%] !text-white   right-4 group-focus:text-[#4955FD] translate-y-[-50%]" />
    </div>
  );
};

export default SearchCourse;
