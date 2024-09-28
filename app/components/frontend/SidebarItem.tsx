import Link from "next/link";
import React from "react";

interface SidebarItemProps {
  href: string;
  name: string;
  isActive: boolean;
  icon: React.ReactNode;
}
const SidebarItem: React.FC<SidebarItemProps> = (props) => {
  const { href, name, isActive, icon } = props;
  return (
    <li>
      <Link
        href={href}
        className={`px-4 py-2 flex items-center gap-2 text-sm  ${
          isActive ? "bg-[#4955FD] text-white" : "hover:bg-slate-100"
        } rounded-md`}
      >
        {icon}
        {name}
      </Link>
    </li>
  );
};

export default SidebarItem;
