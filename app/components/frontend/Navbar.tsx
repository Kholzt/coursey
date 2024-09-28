"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

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
    <nav className="flex items-center justify-between border-b sticky top-0 z-50 bg-white py-4 px-4 md:px-20">
      {/* Brand / Logo */}
      <div className="text-xl font-bold">My Brand</div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={pathname === link.href ? "text-[#4955FD]" : ""}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Profile Picture (hidden on mobile) */}
      <div className="hidden md:block">
        <Image
          src="/images/profile.jpg"
          width={40}
          height={40}
          alt="Profile picture"
          className="rounded-full aspect-square w-[40px] "
        />
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleMobileMenu} className="md:hidden">
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
                  className={pathname === link.href ? "text-[#4955FD]" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Image
            src="/images/profile.jpg"
            width={80}
            height={80}
            alt="Profile picture"
            className="rounded-full aspect-square w-[40px] mt-10"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
