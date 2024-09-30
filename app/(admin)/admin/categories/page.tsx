import React from "react";
import Layout from "../../../components/backend/Layout";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";
import Image from "next/image";
import SearchCategory from "./SearchCategory";
import { Metadata } from "next";
import { getCategories } from "@/actions/categoriesAction";
import DataTable from "./DataTable";

export const metadata: Metadata = {
  title: "Coursey | Categories",
  description: "categories course",
};

const fetchCategories = async (search?: string) => {
  let data = (await getCategories()) || [];
  if (search) {
    data.data = data?.data?.filter((d: any) =>
      d.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  return data;
};
const page = async ({
  searchParams: { search },
}: {
  searchParams: { search?: string };
}) => {
  const { data }: any = await fetchCategories(search);

  return (
    <Layout>
      <div className="p-4">
        <div className="mb-4 flex">
          <h1 className="text-3xl font-bold">Categories</h1>
          <AddCategory />
        </div>
        <DataTable data={data || []} />
      </div>
    </Layout>
  );
};

export default page;
