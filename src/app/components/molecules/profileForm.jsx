"use client";
import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import { useForm, useFieldArray } from "react-hook-form";
import { linksInit } from "@/app/utils/schema";
import CustomSelect from "../atom/customselect";
import Link from "next/link";
import LinkPurple from "../icons/linkpurple";
import Profile from "../icons/profile";
import Eye from "../icons/eye";
import { useSignOut } from "react-firebase-hooks/auth";
import ProtectedRoute from "@/app/page";
import ProfilePreview from "./profilePreview";
import { storage, db, auth } from "@/app/firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

const ProfileForm = () => {
  const {
    register,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: { profile: {}, links: [] },
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "links",
  });

  const links = watch("links");

  const [activeSection, setActiveSection] = useState("links");
  //Logic to handle form input on preview
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to check if all links are valid
  const areLinksValid = () => {
    return links.every((link) => {
      const platformSelected = link.platformName;
      const pattern = link.pattern || /^https?:\/\/.+\..+/;
      return platformSelected && link.weblink && pattern.test(link.weblink);
    });
  };

  const validLinks = areLinksValid();

  // Append form
  const addLink = () => {
    append({ ...linksInit.links[0] });
  };

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

  //Form Functions start here
  //handle image upload to firebase storage
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const avatarRef = ref(storage, "images/");
      uploadBytes(avatarRef, e.target.files[0])
        .then(() => {
          getDownloadURL(avatarRef).then((avatar) => {
            setAvatar(avatar);
            setValue("avatar", avatar);
            notify({
              type: "Success",
              msg: "Image uploaded successfully",
            });
          });
          setAvatar(null);
        })
        .catch((err) => {
          notify({
            type: "Error",
            msg: `${err}: Error uploading image`,
          });
        });
    }
  };

  //get uid from url
  const { profileID: id } = useParams();
  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      if (id) {
        const userProfileRef = doc(db, "profiles", id);
        const userProfileSnap = await getDoc(userProfileRef);

        if (userProfileSnap.exists()) {
          const data = userProfileSnap.data();
          setValue("firstName", data?.firstName || "");
          setValue("lastName", data?.lastName || "");
          setValue("email", data?.email || "");
          setValue("avatar", data?.avatar || "");
          setAvatar(data?.avatar);
          setValue("links", data?.links);
        }
      }
    };

    fetchProfile();
  }, [id]);

  //Form Saving Logic
  const onSaveClick = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    if (!validLinks) {
      setActiveSection("links");
      return;
    }

    if (
      Object.keys(errors).length > 0 ||
      !firstName ||
      !lastName ||
      !email ||
      !avatar
    ) {
      setActiveSection("profile");
      return;
    }

    const profileData = {
      firstName,
      lastName,
      email,
      avatar,
      links: links?.map((link) => {
        return { platformName: link?.platformName, weblink: link?.weblink };
      }),
    };

    try {
      // Save data to Firestore with a unique document ID
      const user = auth.currentUser;
      if (user) {
        const userProfileRef = doc(db, "profiles", user.uid);
        await setDoc(userProfileRef, profileData);
        notify({
          type: "Success",
          msg: "Profile saved successfully!",
        });
      }
    } catch (error) {
      notify({
        type: "Error",
        msg: `${error}: Unable to save profile information`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Watch fields to update state as they change
  useEffect(() => {
    setFirstName(watch("firstName"));
    setLastName(watch("lastName"));
    setEmail(watch("email"));
  }, [watch("firstName"), watch("lastName"), watch("email")]);

  //handle sign out
  const [signOut] = useSignOut(auth);
  const handleLogout = async () => {
    await signOut();
    sessionStorage.removeItem("user");
  };

  return (
    <ProtectedRoute>
      <Fragment>
        {/* Navbar */}
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
              <div
                className={`flex items-center space-x-2 cursor-pointer ${
                  activeSection === "links"
                    ? "bg-active-purple text-default-purple rounded-lg py-2 px-2 md:px-3 lg:px-6"
                    : "hover:bg-disabled-purple text-default-purple"
                } hover:rounded-lg hover:py-2 hover:px-6`}
                onClick={() => setActiveSection("links")}
              >
                <LinkPurple />
                <span className="hidden md:block font-medium">Links</span>
              </div>
              <div
                className={`flex items-center space-x-2 cursor-pointer ${
                  activeSection === "profile"
                    ? "bg-active-purple text-default-purple rounded-lg py-2 px-2  md:px-3 lg:px-6"
                    : "hover:bg-disabled-purple text-default-purple"
                } hover:rounded-lg hover:py-2 hover:px-6`}
                onClick={() => setActiveSection("profile")}
              >
                <Profile />
                <span className="hidden md:block font-medium">
                  Profile Details
                </span>
              </div>
            </div>

            <div className="flex space-x-3">
              {/* Preview Button */}
              <div className="flex items-center border border-default-purple py-1 px-2  md:px-3 lg:px-6 rounded-lg hover:bg-disabled-purple">
                <Link href={`/preview/${id}`}>
                  <span className="hidden md:block text-lg text-default-purple font-medium">
                    Preview
                  </span>
                  <div className="block md:hidden">
                    <Eye />
                  </div>
                </Link>
              </div>

              {/* Logout Button */}
              <div className="flex items-center border border-default-purple py-1 px-3 md:px-4 rounded-lg bg-default-purple hover:bg-disabled-purple">
                <button
                  onClick={handleLogout}
                  className="block text-lg text-default-white hover:text-default-purple font-medium"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Pages */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-4 lg:p-6 lg:max-w-[90%] lg:m-auto mt-0">
          <div className="hidden lg:block lg:w-[35%]">
            <div className="shadow-xl p-6">
              <div className=" justify-center">
                <ProfilePreview
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  avatar={avatar}
                  links={links}
                />
              </div>
            </div>
          </div>

          {/* Conditional rendering based on active section */}
          <div className="w-full lg:w-[65%] px-6 shadow-lg lg:m-0 m-auto lg:mt-0 mt-8">
            {/* Links Form Section */}
            {activeSection === "links" && (
              <>
                <h1 className="text-2xl font-bold md:px-8 lg:px-2 text-center md:text-left">
                  Customize your links
                </h1>
                <p className="text-gray-500 md:px-8 lg:px-2 text-center md:text-left">
                  Add/edit/remove links below and then share all your profiles
                  with the world!
                </p>

                <div className="flex justify-center">
                  <button
                    className="w-[90%] lg:w-[95%] mt-6 px-4 py-2 border-2 border-default-purple text-default-purple rounded-md hover:bg-disabled-purple"
                    type="button"
                    onClick={addLink}
                  >
                    + Add new link
                  </button>
                </div>

                {/* Empty State */}
                {links.length === 0 && (
                  <div className="mt-10 bg-transparent p-10 rounded-md text-center">
                    <div className="flex flex-col items-center">
                      <Image
                        src="/images/getstarted.png"
                        alt="Illustration"
                        width={250}
                        height={161}
                      />
                      <h2 className="mt-6 text-xl font-bold">
                        Let&apos;s get you started
                      </h2>
                      <p className="text-gray-500 text-center mt-2">
                        Use the “Add new link” button to get started. Once you
                        have more than one link, you can reorder and edit them.
                        We&apos;re here to help you share your profiles with
                        everyone!
                      </p>
                    </div>
                  </div>
                )}

                {/* Form State */}
                {links.length > 0 &&
                  fields.map((field, index) => (
                    <div
                      className="mt-10 bg-disabled-white p-6 rounded-md"
                      key={field.id}
                    >
                      <div className="flex justify-between">
                        <h2 className="text-lg font-semibold">
                          Link #{index + 1}
                        </h2>
                        <button
                          onClick={() => remove(index)}
                          type="button"
                          className="text-default-purple hover:bg-disabled-purple hover:text-app-dark rounded-lg text-sm p-1.5 ml-auto inline-flex items-center my-2"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="mt-4">
                        <label
                          htmlFor={`links[${index}].platformName`}
                          className="block text-gray-600"
                        >
                          Platform
                        </label>
                        <CustomSelect
                          value={watch(`links[${index}].platformName`)}
                          onChange={(selected) => {
                            setValue(
                              `links[${index}].platformName`,
                              selected.platformName
                            );
                            setValue(
                              `links[${index}].pattern`,
                              selected.pattern
                            );
                          }}
                          name={`links[${index}].platformName`}
                          register={register}
                        />
                      </div>
                      <div className="mt-4">
                        <label
                          htmlFor={`links[${index}].weblink`}
                          className="block text-default-gray"
                        >
                          Link
                        </label>
                        <input
                          type="text"
                          {...register(`links[${index}].weblink`, {
                            required: "Link is required",
                            validate: (value) => {
                              const pattern =
                                watch(`links[${index}].pattern`) ||
                                /^https?:\/\/.+\..+/;
                              return (
                                pattern.test(value) ||
                                "Invalid URL format for Platform selected"
                              );
                            },
                          })}
                          className={`w-full border rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 ${
                            errors?.links?.[index]?.weblink
                              ? "focus:ring-default-red border-default-red"
                              : "focus:ring-active-purple"
                          }`}
                          placeholder="Enter your URL Link"
                        />
                        {errors?.links?.[index]?.weblink && (
                          <p className="text-default-red text-sm mt-1 text-right">
                            {errors.links[index].weblink.message}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
              </>
            )}

            {/* Profile Form Section */}
            {activeSection === "profile" && (
              <>
                <h1 className="text-2xl font-bold text-center md:text-left">
                  Profile Details
                </h1>
                <p className="text-gray-500 text-center md:text-left">
                  Add your details to create a personal touch to your profile.
                </p>

                {/* Profile Picture Upload */}
                <div className="bg-gray-100 p-6 rounded-lg my-6">
                  <div className="md:flex justify-between items-center">
                    <div className="flex flex-col items-center">
                      <input type="file" onChange={handleImageChange} />
                    </div>
                  </div>
                </div>

                {/* Name and Email Fields */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-600">
                      First name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      defaultValue={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="e.g. John"
                      {...register("firstName", {
                        required: "Can't be empty",
                      })}
                      className={`w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 ${
                        errors?.firstName || (isSubmitting && !firstName)
                          ? "focus:ring-red-500 border-red-500"
                          : "focus:ring-purple-500"
                      }`}
                    />
                    {errors?.firstName || (isSubmitting && !firstName) ? (
                      <p className="text-red-500 text-sm text-right mt-1">
                        {errors?.firstName?.message}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-gray-700">
                      Last name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      defaultValue={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="e.g. Briggs"
                      {...register("lastName", {
                        required: "Can't be empty",
                      })}
                      className={`w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 ${
                        errors?.lastName || (isSubmitting && !lastName)
                          ? "focus:ring-red-500 border-red-500"
                          : "focus:ring-purple-500"
                      }`}
                    />
                    {errors?.lastName || (isSubmitting && !lastName) ? (
                      <p className="text-red-500 text-sm text-right mt-1">
                        {errors?.lastName?.message}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      defaultValue={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. email@example.com"
                      {...register("email", {
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: "Invalid email format",
                        },
                      })}
                      className={`w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 ${
                        errors?.email || (isSubmitting && !email)
                          ? "focus:ring-red-500 border-red-500"
                          : "focus:ring-purple-500"
                      }`}
                    />
                    {errors?.email || (isSubmitting && !email) ? (
                      <p className="text-red-500 text-sm text-right mt-1">
                        {errors?.email?.message}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </>
            )}

            {/* Save Button */}
            {links.length > 0 && (
              <>
                <hr className="border-t border-gray-300 my-4" />
                <div className="mt-4 md:mt-8 mb-6 flex justify-end">
                  <button
                    className={`px-6 py-2 text-white rounded-md ${
                      validLinks
                        ? "bg-default-purple hover:bg-disabled-purple"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                    onClick={onSaveClick}
                    disabled={!validLinks}
                  >
                    Save
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <ToastContainer />
      </Fragment>
    </ProtectedRoute>
  );
};

export default ProfileForm;
