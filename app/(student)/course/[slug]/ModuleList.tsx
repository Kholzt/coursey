"use client";
import { Lock } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
interface ModuleItemProps {
  name: string;
  id: string;
  isLock: boolean;
}
interface ModuleListProps {
  modules: ModuleItemProps[];
}
const ModuleList: React.FC<ModuleListProps> = (props) => {
  const { slug } = useParams();
  const { modules } = props;
  return (
    <ul>
      {modules.map((modul: ModuleItemProps) => {
        const { isLock, id, name } = modul;
        const isActive = slug == id;
        return (
          <li key={id}>
            <Link
              href={`/course/${id}`}
              className={`${
                isActive && "border-[#4955FD] text-[#4955FD]"
              } border px-4 py-2 rounded-md flex gap-2 items-center mb-2 hover:bg-slate-100`}
            >
              {isLock && <Lock className="w-5 h-5" />} {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ModuleList;
