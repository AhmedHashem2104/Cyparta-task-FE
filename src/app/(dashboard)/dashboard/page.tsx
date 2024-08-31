"use client";
import Header from "@/components/Header";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileViewer from "@/components/ProfileViewer";
import RoutePath from "@/components/RoutePath";
import Sidebar from "@/components/Sidebar";
import { baseURL } from "@/utils/baseURL";
import { useStore } from "@/utils/store";
import axios from "axios";
import React, { useState } from "react";

function Dashboard() {
  const { profile, updateProfile }: any = useStore();
  const filterList = [
    "first_name",
    "last_name",
    "email",
    "phone",
    "contract_email",
    "contract_number",
    "date_joined",
  ];

  const filteredProfile = Object.keys(profile).filter((key) =>
    filterList.includes(key)
  );

  const [editedProfile, setEditedProfile] = useState(profile);
  const [isEditing, setIsEditing] = useState(false);
  const handleSubmit = async () => {
    await axios
      .put(`${baseURL}/profile`, editedProfile, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => updateProfile(res.data))
      .catch((err) => console.log(err.response.data))
      .finally(() => setIsEditing(false));
  };
  const routePath = {
    from: "Employees",
    to: "Profile",
  };
  return (
    <div className="flex w-screen h-screen p-5 gap-14">
      <Sidebar />
      <div className="flex flex-col w-screen gap-5">
        <Header />
        <RoutePath routePath={routePath} />
        <ProfileHeader
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editedProfile={editedProfile}
          setEditedProfile={setEditedProfile}
          handleSubmit={handleSubmit}
          filteredProfile={filteredProfile}
        />
        <hr className="mr-5" />
        <ProfileViewer
          profile={profile}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editedProfile={editedProfile}
          setEditedProfile={setEditedProfile}
          filteredProfile={filteredProfile}
        />
      </div>
    </div>
  );
}

export default Dashboard;
