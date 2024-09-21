"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";
const menus = [
  {
    href: "/my-course",
    name: "My Course",
  },
  {
    href: "/all-course",
    name: "All Course",
  },
  {
    href: "/account",
    name: "Account",
  },
];
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="p-4 md:w-[250px] border-r ">
      <Link href={"/"} className="text-xl">
        <Image
          src="images/logo.svg"
          width={200}
          height={70}
          alt="Logo application"
        />
      </Link>
      <ul className="flex flex-col gap-2 mt-6">
        {menus.map((menu: any, i: number) => {
          const isActive = pathname == menu.href;
          return (
            <SidebarItem
              key={i}
              isActive={isActive}
              name={menu.name}
              href={menu.href}
            />
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
