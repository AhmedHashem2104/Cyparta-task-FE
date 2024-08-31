"use client";
import { baseURL } from "@/utils/baseURL";
import { useStore } from "@/utils/store";
import axios from "axios";
import React, { useEffect } from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const actions: any = useStore();
  useEffect(() => {
    const handleCheckVerified = async () => {
      await axios
        .get(`${baseURL}/profile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          actions.updateProfile(res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    };
    handleCheckVerified();
  }, []);

  return <div>{children}</div>;
};

export default layout;
