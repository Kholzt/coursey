import Navbar from "@/app/components/frontend/Navbar";
import React from "react";
import Form from "./Form";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4 md:w-[80%] mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Create Course</h1>
        <Form />
      </div>
    </div>
  );
};

export default page;
