import Image from "next/image";
// import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex border-b sticky top-0 right-0 z-[99] bg-white py-2 px-4">
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
