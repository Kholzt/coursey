import Image from "next/image";
// import Link from "next/link";
import React from "react";
interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="flex border-b  py-2 px-4">
      <div className="ms-auto">
        <Image
          src={"/images/profile.jpg"}
          width={40}
          height={40}
          objectFit="cover"
          alt="Profile picture"
          className="rounded-full aspect-square object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
