"use client";
import { Lock, PlayCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
interface ModuleItemProps {
  title: string;
  id: string;
  isLock: boolean;
}
interface ModuleListProps {
  modules: ModuleItemProps[];
}
const ModuleList: React.FC<ModuleListProps> = (props) => {
  const { slug ,id:idActive} = useParams();
  const { modules } = props;
  return (
    <>
    <h6 className="mb-2">All Module</h6>
    <ul>
      {modules.map((modul: ModuleItemProps) => {
        const { isLock,   id, title } = modul;
        const isActive = idActive == id;
        return (
          <li key={id}>
            <Link
              href={`/course/${slug}/${id}`}
              className={`${
                isActive && "border-[#4955FD] text-[#4955FD]"
              } border px-4 py-2 rounded-md flex gap-2 items-center mb-2 hover:bg-slate-100`}
            >
              {isLock ? <Lock className="w-5 h-5" /> : <PlayCircle />} {title}
            </Link>
          </li>
        );
      })}
    </ul></>
  );
};

export default ModuleList;
