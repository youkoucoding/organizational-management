import * as React from "react";

export const Header: React.FC = () => {
  return (
    <nav className="md:flex hidden bg-gray-400 rounded-b-sm sticky top-0 w-full z-10 shadow md:flex-row md:flex-nowrap md:justify-start items-center p-2">
      <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap px-4">
        <div className="text-xl hidden lg:inline-block font-semibold">
          Organization DashBoard
        </div>
        <div className="md:flex hidden flex-row items-center lg:ml-auto mr-3">
          <div className="relative flex w-full flex-wrap items-stretch h-8" />
        </div>
      </div>
    </nav>
  );
};
