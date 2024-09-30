import React from "react";
import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { Book, BookA, ChartLine } from "lucide-react";
import SidebarItem from "./SidebarItem";

const menus = [
  {
    icon: <BookA />,
    name: "My Courses",
    href: "/student/courses",
  },
  {
    icon: <Book />,
    name: "Courses",
    href: "/instructor/courses",
  },
  {
    icon: <ChartLine />,
    name: "Statistic",
    href: "/instructor/statistic",
  },
];
const Sidebar = async () => {
  const user = await currentUser();
  const isActive = true;

  return (
    <div className=" p-4   md:w-[17rem] border-e min-h-screen md:relative absolute md:left-0 left-[-100%] top-0 ">
      <div className="flex flex-col gap-6 text-center ">
        <figure>
          <Image
            width={500}
            height={500}
            src="/images/profile.jpg"
            alt="profile image"
            className="rounded-full  mx-auto aspect-square w-[100px]"
          />
        </figure>
        <div className="">
          <h2 className="text-sm ">{user?.firstName}</h2>
          <span className="text-xs text-slate-500">
            {user?.emailAddresses[0]?.emailAddress}
          </span>
        </div>
      </div>
      <ul className="mt-7">
        {menus.map((menu: any) => {
          return <SidebarItem {...menu} />;
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
