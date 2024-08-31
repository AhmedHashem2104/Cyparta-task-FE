import Login from "@/components/Login";
import React from "react";

const Page: React.FC = (): React.ReactNode => {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <Login />
    </div>
  );
};

export default Page;
