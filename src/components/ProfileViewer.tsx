"use client";
import React, { useEffect, useState } from "react";
import PersonalIcon from "../../public/personalIcon.svg";
import JobIcon from "../../public/jobIcon.svg";
import DocumentIcon from "../../public/documentIcon.svg";
import AccessIcon from "../../public/accessIcon.svg";
import PersonalInformation from "./PersonalInformation";

const ProfileViewer = ({
  profile,
  editedProfile,
  setEditedProfile,
  isEditing,
  setIsEditing,
  filteredProfile,
}: any) => {
  const [index, setIndex] = useState(0);
  const tabs = [
    {
      index: 0,
      title: "Personal Information",
      icon: <PersonalIcon style={{ color: index === 0 ? "red" : "#16151C" }} />,
      component: (
        <PersonalInformation
          profile={profile}
          editedProfile={editedProfile}
          setEditedProfile={setEditedProfile}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          filteredProfile={filteredProfile}
        />
      ),
    },
    {
      index: 1,
      title: "Professional Information",
      icon: <JobIcon style={{ color: index === 1 ? "red" : "#16151C" }} />,
      component: <div>Ahmed Hashem 02</div>,
    },
    {
      index: 2,
      title: "Documents",
      icon: <DocumentIcon style={{ color: index === 2 ? "red" : "#16151C" }} />,
      component: <div>Ahmed Hashem 03</div>,
    },
    {
      index: 3,
      title: "Account Access",
      icon: <AccessIcon style={{ color: index === 3 ? "red" : "#16151C" }} />,
      component: <div>Ahmed Hashem 04</div>,
    },
  ];

  useEffect(() => {
    if (index !== 0 && isEditing) setIsEditing(false);
  }, [index]);

  return (
    <div className="flex flex-col gap-5 mt-5">
      <div className="flex flex-wrap">
        {tabs.map((tab, key) => (
          <div
            className={`font-semibold border-b-[3px] pr-2 pb-2 cursor-pointer hover:opacity-80`}
            style={{
              borderBottomColor: index === tab.index ? "red" : "#A2A1A833",
            }}
            key={key}
            onClick={() => setIndex(tab.index)}
          >
            <div
              className={`flex gap-3 pl-2 items-center text-${
                index === tab.index ? `[#EC232B]` : `[#16151C]`
              }`}
            >
              {tab.icon}
              <div
                style={{
                  color: index === tab.index ? `#EC232B` : `#16151C`,
                }}
              >
                {tab.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      {tabs.filter((tab) => tab.index === index)[0].component}
    </div>
  );
};

export default ProfileViewer;
