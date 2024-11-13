import Link from "next/link";
import ProfilePreview from "../components/molecules/profilePreview";
import { Fragment } from "react";

const ProfileCard = () => {
  return (
    <Fragment>
      <div className="h-96 rounded-b-[30px] bg-default-purple flex flex-col  p-6">
        {/* Top Bar */}
        <div className="flex justify-between w-full max-w-full rounded-md mb-8 px-6 py-2 bg-white">
          <Link
            href="/editor"
            className="text-default-purple border border-default-purple px-4 py-2 rounded-md shadow hover:bg-gray-200"
          >
            Back to Editor
          </Link>
          <button className="text-white bg-default-purple px-4 py-2 rounded-md shadow hover:bg-purple-700">
            Share Link
          </button>
        </div>
      </div>
      {/* Profile Card */}
      <div className="bg-white max-w-sm mx-auto w-full rounded-lg shadow-lg p-6 block justify-center relative -top-48 text-center">
        <ProfilePreview />
      </div>
    </Fragment>
  );
};

export default ProfileCard;
