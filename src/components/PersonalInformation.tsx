"use client";
import React from "react";

const PersonalInformation = ({
  profile,
  editedProfile,
  setEditedProfile,
  isEditing,
  filteredProfile,
}: any) => {
  const formatKey = (key: string) => {
    return key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleInputChange = (key: string, value: string) => {
    setEditedProfile({ ...editedProfile, [key]: value });
  };

  return (
    <div>
      <div className="flex flex-wrap gap-1">
        {filteredProfile.map((item: any, index: number) => (
          <div className="flex flex-col mb-3 w-1/3" key={index}>
            <div className="font-normal text-sm text-[#A2A1A8]">
              {formatKey(item)}
            </div>
            {isEditing && item !== "email" ? (
              <input
                className="border border-gray-300 p-2"
                value={editedProfile?.[item] || ""}
                onChange={(e) => handleInputChange(item, e.target.value)}
              />
            ) : (
              <div className="text-[#16151C] pt-2">{profile?.[item]}</div>
            )}
          </div>
        ))}
        {isEditing && (
          <div className="flex flex-col mb-3 w-1/3">
            <div className="font-normal text-sm text-[#A2A1A8]">Password</div>

            <input
              className="border border-gray-300 p-2"
              type="password"
              value={editedProfile?.password || ""}
              onChange={(e) => handleInputChange("password", e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInformation;
