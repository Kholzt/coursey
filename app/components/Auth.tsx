import { useClerk, SignedIn, SignedOut } from "@clerk/clerk-react";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { useEffect, useState } from "react";

function SignInPopupButton() {
  const { openSignIn, user, openSignUp } = useClerk();

  const handleSignIn = async () => {
    openSignIn({
      afterSignInUrl:
        typeof window !== "undefined" ? window.location.href : "/",
      afterSignUpUrl:
        typeof window !== "undefined" ? window.location.href : "/",
    });
  };
  const handleSignUp = async () => {
    openSignUp({
      afterSignInUrl:
        typeof window !== "undefined" ? window.location.href : "/",
      afterSignUpUrl:
        typeof window !== "undefined" ? window.location.href : "/",
    });
  };

  const assignUserRole = async () => {
    // Set default role metadata for new users
    const metadata = {
      role: "user", // You can set this to any role, e.g., "admin", "editor", etc.
    };

    try {
      //   await user.update({ publicMetadata: metadata });
    } catch (error) {
      console.error("Error assigning role: ", error);
    }
  };

  return (
    <>
      <button
        onClick={handleSignIn}
        className="py-2 px-4 text-[#4955FD] rounded-md border focus:outline-none border-[#4955FD]"
      >
        Sign In
      </button>
      <button
        onClick={handleSignUp}
        className="ms-2 py-2 px-4 text-white rounded-md  focus:outline-none bg-[#4955FD]"
      >
        Sign Up
      </button>
    </>
  );
}

export default function AuthButtons({
  link = "/instructor/courses",
}: {
  link?: string;
}) {
  return (
    <>
      <SignedOut>
        <SignInPopupButton />
      </SignedOut>
      <SignedIn>
        <div className="flex md:flex-row flex-col md:mt-0 mt-8 gap-8 items-center md:gap-4">
          <Link title="Learning" href={"/student/courses"} className="text-sm">
            {/* <Home className="text-[#4955FD]" /> */}
            Learning
          </Link>
          <Link title="Dashboard" href={"/admin/dashboard"} className="text-sm">
            {/* <Home className="text-[#4955FD]" /> */}
            Dashboard
          </Link>
          <Link
            title="Create Course"
            href={link}
            className="text-sm border px-2 py-2 rounded-md border-[#4955FD] text-[#4955FD]"
          >
            {/* <Home className="text-[#4955FD]" /> */}
            Create Course
          </Link>

          <UserButton
            // showName
            afterSignOutUrl={
              typeof window !== "undefined" ? window.location.href : "/"
            }
          />
        </div>
      </SignedIn>
    </>
  );
}
