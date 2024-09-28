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
        className={`px-4 py-2 flex items-center gap-2 text-sm text-white ${
          isActive ? "bg-[#6a74ff] " : "hover:bg-[#5e68fb]"
        } rounded-md`}
      >
        {icon}
        {name}
      </Link>
    </li>
  );
};

export default SidebarItem;
