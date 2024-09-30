"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import { Menu } from "lucide-react";
// import Link from "next/link";
import React from "react";
import AuthButtons from "../Auth";

const Navbar: React.FC = () => {
  const { isOpen, setIsOpen } = useGlobalContext();
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex border-b items-center sticky top-0 right-0 z-[99] bg-white py-2 px-4">
      <Menu onClick={handleToggle} className="md:hidden cursor-pointer" />
      <div className="ms-auto">
        <AuthButtons link="/" />
      </div>
    </nav>
  );
};

export default Navbar;
