"use client";
import Modal from "@/app/components/Modal";
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFetchServer } from "@/hooks/useFetch";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// Define the schema for category validation
const categorySchema = z.object({
  name: z
    .string()
    .min(3, { message: "Category name must be at least 3 characters long" })
    .max(50, { message: "Category name must be less than 50 characters" }),
});

type CategoryFormData = z.infer<typeof categorySchema>;

const AddCategory: React.FC = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),
  });

  const onSubmit = async (data: CategoryFormData) => {
    try {
      const res = await useFetchServer("/categories", {
        method: "POST",
        body: JSON.stringify(data),
      });
      toast.success("Category successfully created");
      router.refresh();
      setShow(false);
    } catch (error) {
      toast.error("Category failed created");
    }
  };

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="px-4 py-2 ms-auto bg-[#4955FD] hover:bg-[#4955FD]/90 text-white rounded-md"
      >
        New Category
      </button>
      <Modal setShow={setShow} show={show} title="Add Category">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label htmlFor="name" className="mb-1 inline-block text-base">
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              id="name"
              autoFocus
              required
              placeholder="Category Name"
              className="px-3 py-2 text-sm border ms-auto pr-4 bg-white/10 w-full rounded-md outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="px-4 py-2 mt-4 bg-[#4955FD] hover:bg-[#4955FD]/90 text-white rounded-md"
            >
              Create
            </button>
            <button
              onClick={() => setShow(false)}
              type="button"
              className="px-4 py-2 mt-4 text-[#4955FD] border border-[#4955FD] rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddCategory;
