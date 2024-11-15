"use client";
import Link from "next/link";
import { Fragment, useState, useEffect } from "react";
import { db } from "@/app/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import ProtectedRoute from "@/app/page";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

const ProfileCard = () => {
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

  const [data, setData] = useState(null);
  const { previewID: id } = useParams();

  useEffect(() => {
    if (id || data?.length === 0) {
      const fetchData = async () => {
        const collectionRef = collection(db, "profiles");

        // Fetch all documents and filter them by `userId`
        const querySnapshot = await getDocs(collectionRef);

        // Iterate over documents to find the one with the matching userId
        let userProfile = null;
        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          const userId = doc.id;

          // Check if the userId from the document matches the `id` from the URL
          if (userId === id) {
            userProfile = {
              id: doc.id,
              ...docData,
            };
          }
        });

        // Set data if a match is found
        setData(userProfile);
      };

      fetchData();
    }
  }, [id]);

  //react toast alert function
  const notify = ({ type, msg }) => {
    if (type === "Success") {
      toast.success(msg, {
        autoClose: 3000,
        theme: "dark",
      });
    }
    if (type === "Error") {
      toast.error(msg, {
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  const handleShareLink = async () => {
    try {
      const shareableURL = `${window.location.origin}/devlink/${id}`;
      await navigator.clipboard.writeText(shareableURL);
      notify({
        type: "Success",
        msg: "Profile link copied to clipboard!",
      });
    } catch (err) {
      notify({
        type: "Error",
        msg: `${e}: Failed to copy link to clipboard`,
      });
    }
  };

  return (
    <ProtectedRoute>
      <Fragment>
        <div className="h-96 md:rounded-b-[30px] md:bg-default-purple flex flex-col p-6">
          {/* Top Bar */}
          <div className="flex justify-between w-full max-w-full md:rounded-md mb-8 px-6 py-2 bg-white">
            <Link
              href={`/profile/${id}`}
              className="text-default-purple border border-default-purple px-4 py-2 rounded-md shadow hover:bg-gray-200"
            >
              Back to Editor
            </Link>
            <button
              onClick={handleShareLink}
              className="text-white bg-default-purple px-4 py-2 rounded-md shadow hover:bg-active-purple"
            >
              Share Link
            </button>
          </div>
        </div>
        {/* Profile Card */}
        {data ? (
          <div className="md:bg-white max-w-sm mx-auto w-full md:rounded-lg md:shadow-lg p-6 block justify-center relative -top-[24rem] md:-top-48 text-center">
            <div className="flex items-center justify-center ">
              <div className="relative w-[290px] h-[1200px] rounded-[30px] md:-mt-[25rem] xl:-mt-[1rem] overflow-hidden text-center pb-8 pt-6">
                {/* Profile Image */}
                <div className="w-24 h-24 mx-auto mt-6 rounded-full border-4 border-default-purple overflow-hidden">
                  <Image
                    src={data?.avatar}
                    alt="User Avatar"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>

                {/* User Information */}
                <h2 className="mt-4 text-xl font-semibold text-gray-800">
                  {`${data?.firstName || "Firstname"} ${
                    data?.lastName || "Lastname"
                  }`}
                </h2>
                <p className="text-gray-500">{data?.email || "Email"}</p>

                {/* Social Links */}
                <div className="mt-6 space-y-3">
                  {data?.links?.map((link, index) => {
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
                              width={200}
                              height={200}
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
          </div>
        ) : (
          <p className="text-center mt-6 text-default-purple text-lg font-semibold">
            Profile not found. Go back to editor to create your profile.
          </p>
        )}
        <ToastContainer />
      </Fragment>
    </ProtectedRoute>
  );
};

export default ProfileCard;
