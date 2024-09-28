"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";
import { Book, Compass, User } from "lucide-react";
import { useGlobalContext } from "@/context/GlobalContext";
const menus = [
  {
    href: "/admin/dashboard",
    name: "Dashboard",
    icon: <Compass className="w-5" />, // Ikon daftar untuk All Course
  },
  {
    href: "/admin/categories",
    name: "Categories",
    icon: <Book className="w-5" />, // Ikon buku untuk My Course
  },
  {
    href: "/admin/instrukture",
    name: "Instrukture",
    icon: <User className="w-5" />, // Ikon pengguna untuk Account
  },
];
const Sidebar = () => {
  const pathname = usePathname();
  const { isOpen } = useGlobalContext();
  const sidebarActive = isOpen;
  return (
    <aside
      className={`p-4 md:w-[250px] bg-[#4955FD] h-screen w-full z-[100] max-h-screen border-r transition-all  md:sticky top-0 md:left-0 absolute ${
        sidebarActive ? "left-0" : "left-[-100%]"
      } `}
    >
      <Link href={"/"} className="text-xl">
        <h1 className="text-2xl font-bold text-white text-center border-b pb-2">
          Coursey
        </h1>
        {/* <Image
          src="/images/logo.svg"
          width={200}
          height={70}
          alt="Logo application"
        /> */}
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
