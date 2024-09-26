import React from "react";
import Layout from "./../../../components/front/Layout";
import { useFetchServer } from "@/hooks/useFetch";
import { Pencil, Trash } from "lucide-react";

const page = async () => {
  const { data } = await useFetchServer("/categories");
  return (
    <Layout>
      <div className="p-4">
        <div className="mb-4 flex">
          <h1 className="text-3xl">Categories</h1>
          <button className="px-4 py-2 ms-auto bg-[#4955FD] hover:bg-[#4955FD]/90 text-white rounded-md">
            Add Category
          </button>
        </div>
        <div className="border rounded-md bg-white">
          <table className="w-full">
            <thead>
              <tr>
                <th scope="col" className="bg-slate-100 p-2 text-sm w-[100px]">
                  No
                </th>

                <th
                  scope="col"
                  align="left"
                  className="bg-slate-100 p-2 text-sm"
                >
                  Nama
                </th>
                <th
                  scope="col"
                  align="left"
                  className="bg-slate-100 p-2 text-sm w-[200px]"
                ></th>
              </tr>
            </thead>
            <tbody>
              {data.map((d: any, i: number) => {
                return (
                  <tr key={i}>
                    <td className="p-2" align="center">
                      {i + 1}
                    </td>
                    <td className="p-2">{d.name}</td>
                    <td className="p-2">
                      <button className="text-sm inline-flex items-center  me-3 text-yellow-500 gap-2 hover:underline">
                        <Pencil className="w-4" /> Edit
                      </button>
                      <button className="text-sm inline-flex items-center  text-red-600 gap-2 hover:underline">
                        <Trash className="w-4" /> Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
              {data.length == 0 && (
                <tr>
                  <td className="p-2" colSpan={2}>
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
