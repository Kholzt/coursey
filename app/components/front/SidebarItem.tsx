import Link from "next/link";
import React from "react";

interface SidebarItemProps {
  href: string;
  name: string;
  isActive: boolean;
}
const SidebarItem: React.FC<SidebarItemProps> = (props) => {
  const { href, name, isActive } = props;
  return (
    <li>
      <Link
        href={href}
        className={`px-4 py-2 block  ${
          isActive ? "bg-[#4955FD] text-white" : "hover:bg-slate-100"
        } rounded-md`}
      >
        {name}
      </Link>
    </li>
  );
};

export default SidebarItem;
