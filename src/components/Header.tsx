import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex w-full h-14 items-center justify-end p-5 gap-8 mb-10">
      <div className="bg-[#A2A1A81A] p-2 rounded-lg cursor-pointer hover:opacity-50">
        <Image
          src="/notificationIcon.svg"
          alt="notification"
          width={24}
          height={24}
        />
      </div>
      <Image
        src="/avatar.svg"
        alt="avatar"
        className="rounded-full cursor-pointer hover:opacity-70"
        width={50}
        height={50}
      />
    </div>
  );
};

export default Header;
