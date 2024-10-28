import React from "react";
import Navbar from "../components/molecules/navbar";
import ProfileForm from "../components/molecules/profileForm";

export const metadata = {
  title: "DevLink | Profile",
};

const Profile = () => {
  return (
    <div>
      <ProfileForm />
    </div>
  );
};

export default Profile;
