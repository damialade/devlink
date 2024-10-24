"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm, useFieldArray } from "react-hook-form";
import { linksInit } from "@/app/utils/schema";
import CustomSelect from "../atom/customselect";

const ProfileForm = () => {
  const {
    register,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: linksInit,
    mode: "onBlur",
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "links",
  });

  const links = watch("links");

  // Function to check if all links are valid
  const areLinksValid = () => {
    return links.every((link) => {
      const platformSelected = link.platformName;
      const pattern = link.pattern || /^https?:\/\/.+\..+/;
      return platformSelected && link.weblink && pattern.test(link.weblink);
    });
  };

  const validLinks = areLinksValid();

  //append form

  const addLink = () => {
    if (links.length === 0) setShowForm(true);
    append({ ...linksInit.links[0] });
  };
  const [showForm, setShowForm] = useState(links.length > 0);

  const onSaveClick = () => {
    // Form saving logic here
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-4 lg:p-6 lg:max-w-[90%] lg:m-auto mt-0">
      <div className="hidden lg:block lg:w-[35%]">
        <div className="shadow-lg p-6">
          <div className="flex items-center justify-center">
            <Image
              src="/images/preview-section.png"
              alt="Illustration"
              width={308}
              height={632}
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[65%] px-6 shadow-lg lg:m-0 m-auto lg:mt-0 mt-8">
        <>
          <h1 className="text-2xl font-bold md:px-8 lg:px-2 text-center md:text-left">
            Customize your links
          </h1>
          <p className="text-gray-500 md:px-8 lg:px-2 text-center md:text-left">
            Add/edit/remove links below and then share all your profiles with
            the world!
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
          {links?.length === 0 && !showForm && (
            <div className="mt-10 bg-disabled-gray p-10 rounded-md text-center">
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
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We&apos;re
                  here to help you share your profiles with everyone!
                </p>
              </div>
            </div>
          )}

          {/* Form State */}
          {showForm &&
            fields.map((field, index) => (
              <div
                className="mt-10 bg-disabled-white p-6 rounded-md"
                key={field.id}
              >
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">Link #{index + 1}</h2>
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
                      setValue(`links[${index}].pattern`, selected.pattern);
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
                    className="w-full border rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-active-purple"
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

        {/* Save Button */}
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
      </div>
    </div>
  );
};

export default ProfileForm;
