"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";
import { Book, List, User } from "lucide-react";
const menus = [
  {
    href: "/my-course",
    name: "My Course",
    icon: <Book className="w-5" />, // Ikon buku untuk My Course
  },
  {
    href: "/all-course",
    name: "All Course",
    icon: <List className="w-5" />, // Ikon daftar untuk All Course
  },
  {
    href: "/account",
    name: "Account",
    icon: <User className="w-5" />, // Ikon pengguna untuk Account
  },
];
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="p-4 md:w-[250px] max-h-screen border-r z-[99] sticky top-0 left-0 ">
      <Link href={"/"} className="text-xl">
        <Image
          src="/images/logo.svg"
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
              icon={menu.icon}
            />
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
