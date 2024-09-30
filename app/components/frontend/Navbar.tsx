"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useUser, UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import AuthButtons from "../Auth";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="flex items-center  border-b sticky top-0 z-50 bg-white py-4 px-4 md:px-20">
      {/* Brand / Logo */}
      <div className="text-xl font-bold md:me-10">Coursey</div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`${
                pathname === link.href ? "text-[#4955FD]" : ""
              } text-sm`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Profile Picture (hidden on mobile) */}
      <div className="hidden md:block ms-auto">
        <AuthButtons />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center ms-auto me-4">
        <UserButton />
      </div>
      <button onClick={toggleMobileMenu} className="md:hidden ">
        <Menu className="w-6 h-6 text-gray-600" />
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
          <button onClick={toggleMobileMenu} className="absolute top-5 right-5">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <ul className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${
                    pathname === link.href ? "text-[#4955FD]" : ""
                  } text-sm`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
