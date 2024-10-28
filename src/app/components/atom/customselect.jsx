import React, { useState } from "react";
import Image from "next/image";
import Open from "../icons/open";
import Close from "../icons/close";

const platforms = [
  {
    name: "GitHub",
    value: "github",
    icon: "images/github.svg",
    pattern: /^https:\/\/(www\.)?github\.com\/[a-zA-Z0-9_-]+$/,
  },
  {
    name: "DevTo",
    value: "devto",
    icon: "/images/devto.svg",
    pattern: /^https:\/\/(www\.)?dev\.to\/[a-zA-Z0-9_-]+$/,
  },
  {
    name: "Facebook",
    value: "facebook",
    icon: "images/facebook.svg",
    pattern: /^https:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9_-]+$/,
  },
  {
    name: "LinkedIn",
    value: "linkedin",
    icon: "images/linkedin.svg",
    pattern: /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+$/,
  },
  {
    name: "FreeCodeCamp",
    value: "freecodecamp",
    icon: "images/freecodecamp.svg",
    pattern: /^https:\/\/(www\.)?freecodecamp\.org\/[a-zA-Z0-9_-]+$/,
  },
  {
    name: "Frontend Mentor",
    value: "frontendmentor",
    icon: "images/frontendmentor.svg",
    pattern: /^https:\/\/(www\.)?frontendmentor\.io\/profile\/[a-zA-Z0-9_-]+$/,
  },
  {
    name: "GitLab",
    value: "gitlab",
    icon: "images/gitlab.svg",
    pattern: /^https:\/\/(www\.)?gitlab\.com\/[a-zA-Z0-9_-]+$/,
  },
  {
    name: "Hashnode",
    value: "hashnode",
    icon: "images/hashnode.svg",
    pattern: /^https:\/\/(www\.)?hashnode\.com\/[a-zA-Z0-9_-]+$/,
  },
  {
    name: "Twitter",
    value: "twitter",
    icon: "images/twitter.svg",
    pattern: /^https:\/\/(www\.)?twitter\.com\/[a-zA-Z0-9_-]+$/,
  },
  {
    name: "StackOverflow",
    value: "stackoverflow",
    icon: "images/stackoverflow.svg",
    pattern: /^https:\/\/(www\.)?stackoverflow\.com\/users\/[a-zA-Z0-9_-]+$/,
  },
  {
    name: "YouTube",
    value: "youtube",
    icon: "images/youtube.svg",
    pattern:
      /^https:\/\/(www\.)?youtube\.com\/(c|channel|user)\/[a-zA-Z0-9_-]+$/,
  },
];

const CustomSelect = ({ value, onChange, name, register }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedPlatform = platforms.find((p) => p.value === value);

  const handleSelect = (platform) => {
    onChange({ platformName: platform.value, pattern: platform.pattern });
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full">
      <input
        type="hidden"
        {...register(name, { required: true })}
        value={value}
      />

      <div
        className="flex justify-between items-center border p-3 rounded-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedPlatform ? (
          <>
            <div className="flex items-center space-x-2">
              <Image
                src={selectedPlatform.icon}
                alt={`${selectedPlatform.name} icon`}
                width={20}
                height={20}
              />
              <span>{selectedPlatform.name}</span>
            </div>
            {isOpen ? <Close /> : <Open />}
          </>
        ) : (
          <span>Select Platform</span>
        )}
      </div>

      {/* Dropdown options */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border rounded-lg mt-1 shadow-lg z-10">
          <ul className="max-h-60 overflow-auto">
            {platforms.map((platform) => (
              <li
                key={platform.value}
                onClick={() => handleSelect(platform)}
                className="flex items-center space-x-2 p-3 cursor-pointer hover:bg-gray-100"
              >
                <Image
                  src={platform.icon}
                  alt={`${platform.name} icon`}
                  width={20}
                  height={20}
                />
                <span>{platform.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
