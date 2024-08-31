import Image from "next/image";
import React from "react";

interface RoutePathProps {
  from: string;
  to: string;
}

const RoutePath = ({
  routePath: { from, to },
}: {
  routePath: RoutePathProps;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3 text-lg font-medium">
        {from}
        <Image src="/arrow.svg" width={10} height={5} alt="arrow" /> {to}
      </div>
    </div>
  );
};

export default RoutePath;
