import React from "react";
import Layout from "../components/front/Layout";
import Image from "next/image";
const page = () => {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-3xl mb-4">Account</h1>
        <div className="border p-4 rounded-md">
          <h2 className="text-lg mb-4">Your Account Detail</h2>
          <div className="flex gap-6">
            <figure>
              <Image
                width={500}
                height={500}
                src="/images/profile.jpg"
                alt="profile image"
                className="rounded-full  aspect-square w-[200px]"
              />
            </figure>
            <div className="">
              <h2 className="text-lg ">Muhammad Nor Kholit</h2>
              <span>mnorkholit7@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
