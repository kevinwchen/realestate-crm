import React from "react";
import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";

const Header = () => {
  const { userId } = auth();
  return (
    <header className="h-10">
      <nav className="bg-blue-700 py-4 px-6 flex items-center justify-between mb-5">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-lg uppercase font-bold text-white">
              Real Estate CRM
            </div>
          </Link>
        </div>
        <div className="text-white flex items-center">
          {!userId && (
            <>
              <Link
                href="sign-in"
                className="text-gray-300 hover:text-white mr-4"
              >
                Sign In
              </Link>
              <Link
                href="sign-up"
                className="text-gray-300 hover:text-white mr-4"
              >
                Sign Up
              </Link>
              <Link
                href="register"
                className="text-gray-300 hover:text-white mr-4"
              >
                Register
              </Link>
            </>
          )}
          {userId && (
            <Link
              href="profile"
              className="text-gray-300 hover:text-white mr-4"
            >
              Profile
            </Link>
          )}
          <div className="ml-auto">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
