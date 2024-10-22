import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">
          Page Not Found
        </p>
        <p className="md:text-lg lg:text-xl text-gray-600 mt-8">
          Sorry, the page you are looking for could not be found.
        </p>
        <Link
          href="/"
          className="flex items-center space-x-2 bg-default-purple hover:bg-disabled-purple text-gray-100 hover:text-gray-700 px-4 py-2 mt-12 rounded transition duration-150"
        >
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
