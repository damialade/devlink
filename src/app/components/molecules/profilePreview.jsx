import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProfilePreview = ({ firstName, lastName, email, avatar, links }) => {
  const platformIcons = {
    github: "/images/github.png",
    devto: "/images/devto.png",
    facebook: "/images/facebook.png",
    linkedin: "/images/linkedin.png",
    freecodecamp: "/images/freecodecamp.png",
    frontendmentor: "/images/frontendmentor.png",
    gitlab: "/images/gitlab.png",
    hashnode: "/images/hashnode.png",
    twitter: "/images/twitter.png",
    stackoverflow: "/images/stackoverflow.png",
    youtube: "/images/youtube.png",
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="relative w-[290px] h-[1200px] rounded-[30px] overflow-hidden text-center pb-8 pt-6">
        {/* Profile Image */}

        <div className="w-24 h-24 mx-auto mt-6 rounded-full border-4 border-default-purple overflow-hidden">
          {avatar?.length > 0 && (
            <Image
              src={avatar}
              alt="User Avatar"
              width={200}
              height={200}
              className="object-cover"
            />
          )}
        </div>

        {/* User Information */}
        <h2 className="mt-4 text-xl font-semibold text-gray-800">{`${
          firstName || "Firstname"
        } ${lastName || "Lastname"}`}</h2>
        <p className="text-gray-500">{email || "Email"}</p>

        {/* Social Links */}
        <div className="mt-6 space-y-3">
          {links?.length > 0 &&
            links[0].platformName &&
            links.map((link, index) => {
              const { platformName, weblink } = link;
              const iconSrc = platformIcons[platformName];

              return (
                <div key={index} className="w-full mx-auto">
                  <Link
                    href={weblink}
                    className="flex items-center justify-center gap-2 px-4 py-2"
                  >
                    {iconSrc && (
                      <Image
                        src={iconSrc}
                        alt={`${platformName} link`}
                        width={500}
                        height={44}
                        className="object-contain"
                      />
                    )}
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;
