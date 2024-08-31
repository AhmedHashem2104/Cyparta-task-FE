"use client";
import { useStore } from "@/utils/store";
import Image from "next/image";
import React from "react";

const ProfileHeader = ({
  isEditing,
  setIsEditing,
  editedProfile,
  setEditedProfile,
  handleSubmit,
  filteredProfile,
}: any) => {
  const { profile }: any = useStore();
  const initialEditedProfile = filteredProfile.reduce((acc: any, key: any) => {
    acc[key] = profile[key];
    return acc;
  }, {});
  return (
    <div className="flex justify-between items-center flex-wrap">
      <div className="flex gap-5">
        <Image
          src={profile?.cover || profile?.logo}
          className="rounded-lg"
          alt="profile picture"
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-1">
          <div className="font-bold text-xl mb-2">{`${
            profile.first_name || "None"
          } ${profile.last_name || "None"}`}</div>
          <div className="flex gap-2 items-center text-sm">
            <Image src="/jobIcon.svg" alt="job" width={24} height={24} />
            {profile.bio || "None"}
          </div>
          <div className="flex gap-2 items-center text-sm">
            <Image src="/emailIcon.svg" alt="email" width={24} height={24} />
            {profile.email}
          </div>
        </div>
      </div>
      <button
        className="flex gap-3 items-center ml-auto md:mr-40 bg-[#242223] px-3 md:px-10 py-3 text-white rounded-lg hover:opacity-85"
        style={
          isEditing
            ? {
                backgroundColor: `green`,
              }
            : {}
        }
        onClick={() => {
          if (isEditing) handleSubmit();
          else {
            setEditedProfile(initialEditedProfile);
            setIsEditing(true);
          }
        }}
      >
        <Image src="/editIcon.svg" width={18} height={18} alt="edit" />
        {isEditing ? "Save Changes" : "Edit Profile"}
      </button>
    </div>
  );
};

export default ProfileHeader;
