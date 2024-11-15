"use client";
import Link from "next/link";
import { Fragment, useState, useEffect } from "react";
import { db } from "@/app/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { useParams } from "next/navigation";

const PublicProfileCard = () => {
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { devlinkID: id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      try {
        const docRef = doc(db, "profiles", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          setError("Profile not found");
        }
      } catch (error) {
        setError("Error fetching profile.");
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Fragment>
      <div className="h-72 md:rounded-b-[30px] md:bg-default-purple flex flex-col p-6"></div>
      {/* Profile Card */}

      {loading ? (
        <p className="text-center mt-6 text-default-purple text-lg font-semibold">
          Loading...
        </p>
      ) : error ? (
        <p className="text-center mt-6 text-default-red text-lg font-semibold">
          {error}
        </p>
      ) : data ? (
        <div className="md:bg-white max-w-sm mx-auto w-full md:rounded-lg md:shadow-lg p-6 block justify-center relative -top-[24rem] md:-top-48 text-center">
          <div className="flex items-center justify-center">
            <div className="relative w-[290px] h-auto rounded-[30px] overflow-hidden text-center pb-8 pt-6">
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
                        target="_blank"
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
          Profile not found.
        </p>
      )}
    </Fragment>
  );
};

export default PublicProfileCard;
