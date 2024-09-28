"use client";
import Modal from "@/app/components/Modal";
import React, { FormEvent, useState } from "react";
import { useFetchServer } from "@/hooks/useFetch";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Trash } from "lucide-react";

interface CategoryProps {
  name: string;
  slug: string;
}
interface DeleteCategoryProps {
  data: CategoryProps;
}
const DeleteCategory: React.FC<DeleteCategoryProps> = (props) => {
  const { slug, name } = props.data;
  const [show, setShow] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await useFetchServer("/categories/" + slug, {
        method: "DELETE",
      });
      router.refresh();
      toast.success("Category successfully deleted");
      setShow(false);
    } catch (error) {
      toast.error("Category failed deleted");
    }
  };

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="text-sm inline-flex items-center  text-red-600 gap-2 hover:underline"
      >
        <Trash className="w-4" /> Delete
      </button>
      <Modal setShow={setShow} show={show} title="Add Category">
        <form onSubmit={onSubmit}>
          <h6>Are you sure you want to delete the {name} category?</h6>
          <p className="text-sm">Deleted data cannot be recovered</p>
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="px-4 py-2 mt-4 bg-red-600 hover:bg-red-600/90 text-white rounded-md"
            >
              Delete
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

export default DeleteCategory;
