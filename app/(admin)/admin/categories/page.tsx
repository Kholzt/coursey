import React from "react";
import Layout from "../../../components/backend/Layout";
import { useFetchServer } from "@/hooks/useFetch";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";
import Image from "next/image";
import SearchCategory from "./SearchCategory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coursey | Categories",
  description: "categories course",
};

const fetchCategories = async (search?: string) => {
  let data = await useFetchServer("/categories");
  if (search) {
    data.data = data.data.filter((d: any) =>
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
  const { data } = await fetchCategories(search);
  return (
    <Layout>
      <div className="p-4">
        <div className="mb-4 flex">
          <h1 className="text-3xl font-bold">Categories</h1>
          <AddCategory />
        </div>
        <div className="border rounded-md flex flex-col bg-white">
          <SearchCategory />
          <table className="w-full">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="bg-gray-100/70 p-2 text-sm w-[100px]"
                >
                  No
                </th>

                <th
                  scope="col"
                  align="left"
                  className="bg-gray-100/70 p-2 text-sm w-[200px]"
                >
                  Thumnail
                </th>
                <th
                  scope="col"
                  align="left"
                  className="bg-gray-100/70 p-2 text-sm"
                >
                  Nama
                </th>
                <th
                  scope="col"
                  align="left"
                  className="bg-gray-100/70 p-2 text-sm w-[200px]"
                ></th>
              </tr>
            </thead>
            <tbody>
              {data.map((d: any, i: number) => {
                const { name, id, thumbnail, slug } = d;
                return (
                  <tr key={i}>
                    <td className="p-2 border-b" align="center">
                      {i + 1}
                    </td>
                    <td className="p-2 border-b">
                      <Image
                        src={thumbnail ?? "/images/default.png"}
                        alt={name}
                        width={50}
                        height={50}
                        className="aspect-square  rounded-md"
                      />
                    </td>
                    <td className="p-2 border-b">{name}</td>
                    <td className="p-2 border-b">
                      <EditCategory data={{ name, slug }} />
                      <DeleteCategory data={{ name, slug }} />
                    </td>
                  </tr>
                );
              })}
              {data.length == 0 && (
                <tr>
                  <td className="p-2" colSpan={4} align="center">
                    Category data not available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default page;
