import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const sidebarItems = [
    {
      name: "Dashboard",
      imageURL: "/dashboardIcon.svg",
      navigateTo: "/dashboard",
    },
    {
      name: "Employess",
      imageURL: "/employeesIcon.svg",
      navigateTo: "/employees",
    },
    {
      name: "Payroll",
      imageURL: "/payrollIcon.svg",
      navigateTo: "/dashboard",
    },
    {
      name: "Holidays",
      imageURL: "/holidayIcon.svg",
      navigateTo: "/dashboard",
    },

    {
      name: "Advanced Payment",
      imageURL: "/walletIcon.svg",
      navigateTo: "/wallet",
    },
  ];
  return (
    <div className="flex-col items-center p-5 border-[#A2A1A833] border-[1px] rounded-2xl shadow-sm hidden md:block">
      <Image
        src="/cyparta-logo.svg"
        alt="logo"
        width={180}
        height={80}
        className="mb-12"
        priority
      />

      <div className="flex flex-col gap-10">
        {sidebarItems.map((item, index) => (
          <Link
            className="flex gap-3 items-center hover:opacity-70 cursor-pointer"
            href={item.navigateTo}
            key={index}
          >
            <Image
              src={item.imageURL}
              alt="dashboard"
              width={20}
              height={20}
              color="black"
            />
            <div className="font-medium">{item.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
