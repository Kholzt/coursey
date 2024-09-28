"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";
// import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  const { isOpen, setIsOpen } = useGlobalContext();
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex border-b items-center sticky top-0 right-0 z-[99] bg-white py-2 px-4">
      <Menu onClick={handleToggle} className="md:hidden cursor-pointer" />
      <div className="ms-auto">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
