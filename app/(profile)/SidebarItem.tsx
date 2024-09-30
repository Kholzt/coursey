"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarItemProps {
  href: string;
  name: string;
  icon: React.ReactNode;
}
const SidebarItem: React.FC<SidebarItemProps> = (props) => {
  const { href, name, icon } = props;
  const pathname = usePathname();
  const isActive = pathname == href;
  return (
    <li>
      <Link
        href={href}
        className={`px-4 py-2 flex items-center  gap-2 text-sm  ${
          isActive ? "text-[#4955FD] " : ""
        } `}
      >
        {icon}
        {name}
      </Link>
    </li>
  );
};

export default SidebarItem;
