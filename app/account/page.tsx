import React from "react";
import Layout from "../components/front/Layout";
import Image from "next/image";
const page = () => {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl mb-4">Your Account Detail</h1>
        <form className="grid md:grid-cols-6 grid-cols-1 md:gap-10 gap-2">
          <figure className="col-span-2">
            <Image
              width={500}
              height={500}
              src="/images/profile.jpg"
              alt="profile image"
              className="rounded w-full aspect-square "
            />
          </figure>

          <div className="col-span-4 flex flex-col items-start">
            <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-2">
              <div className="form-group mb-2">
                <label htmlFor="fullname" className="mb-1 inline-block">
                  Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="px-3 py-2 text-sm border w-full  pr-4 rounded-md outline-none"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="phone" className="mb-1 inline-block">
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="px-3 py-2 text-sm border w-full  pr-4 rounded-md outline-none"
                  placeholder="Your phone number"
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="email" className="mb-1 inline-block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="px-3 py-2 text-sm border w-full  pr-4 rounded-md outline-none"
                  placeholder="Your email"
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-[#4955FD] rounded-md text-white mt-auto"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default page;
