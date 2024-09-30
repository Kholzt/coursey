import ImageUpload from "@/app/components/ImageUpload";
import React from "react";

const Form = () => {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      <div className="flex flex-col gap-4">
        <div className="border p-4 rounded-md">
          <h6 className="text-lg font-semibold">Course Information</h6>
          <p className="text-sm mb-5">
            Please provide detailed information about the course.
          </p>
          <form>
            <div className="mb-2">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                type="text"
                //   className="px-3 py-2 text-sm border w-full  rounded-md outline-none"
                name="name"
                placeholder="Name course"
                id=""
              />
            </div>
            <div className="mb-2">
              <label htmlFor="description" className="text-sm">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Course Description "
                id=""
              ></textarea>
            </div>
            <div className="mb-2">
              <label htmlFor="price" className="text-sm">
                Price
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price course"
                id=""
              />{" "}
            </div>
          </form>
        </div>
        <div className="border p-4 rounded-md">
          <h6 className="text-lg font-semibold">Course Thumnail</h6>
          <p className="text-sm mb-5">
            Please provide detailed information about the course.
          </p>
          <form>
            <div className="mb-2">
              <ImageUpload name="thumbnail" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
