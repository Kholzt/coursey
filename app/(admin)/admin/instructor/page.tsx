import React from "react";
import Layout from "../../../components/backend/Layout";
import { Metadata } from "next";
import DataTable from "./DataTable";
import { getInstructor } from "@/actions/instructorAction";

export const metadata: Metadata = {
  title: "Coursey | Instructor",
  description: "Instructor course",
};

const page = async () => {
  const { data }: any = await getInstructor();
  return (
    <Layout>
      <div className="p-4">
        <div className="mb-4 flex">
          <h1 className="text-3xl font-bold">Instructor</h1>
        </div>
        <DataTable data={data || []} />
      </div>
    </Layout>
  );
};

export default page;
