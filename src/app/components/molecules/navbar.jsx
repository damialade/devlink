import React from "react";
import Image from "next/image";
import Link from "next/link";
import LinkPurple from "../icons/linkpurple";
import Profile from "../icons/profile";
import Eye from "../icons/eye";

const Navbar = () => {
  return (
    <div className="max-w-[90%] m-auto">
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 my-6">
          <Image
            src="/images/logo.png"
            alt="Devlink Logo"
            width={64}
            height={64}
            priority
          />
          <h2 className="font-bold text-app-dark text-4xl hidden md:block">
            DevLinkShare
          </h2>
        </div>

        {/* Center Links */}
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2 hover:bg-disabled-purple text-default-purple hover:rounded-lg hover:py-2 hover:px-6 cursor-pointer">
            <LinkPurple />
            <span className="hidden md:block font-medium">Links</span>
          </div>
          <div className="flex items-center space-x-2 hover:bg-disabled-purple text-default-purple hover:rounded-lg hover:py-2 hover:px-6 cursor-pointer">
            <Profile />
            <span className="hidden md:block font-medium">Profile Details</span>
          </div>
        </div>

        {/* Preview Button */}
        <div className="flex items-center border border-default-purple py-1 px-6 rounded-lg hover:bg-disabled-purple">
          <Link
            href="/preview"
            className="text-app-dark text-lg hover:text-default-purple"
          >
            <span className="hidden md:block text-default-purple font-medium">
              Preview
            </span>
            <div className="block md:hidden">
              <Eye />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
