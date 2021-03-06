import * as React from "react";
import { FaDev, FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

export const SideBar = () => {
  return (
    <aside className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto shadow-2xl flex flex-col items-center justify-between w-12 z-40 bg-gray-400">
      <div className="md:flex-col md:items-stretch md:min-h-full px-0 flex items-center justify-center w-full mx-auto">
        {/* LOGO */}
        <a
          href="/"
          className="flex item-center justify-center py-2 cursor-pointer"
        >
          <FaDev size={32} />
        </a>
        {/* Decorative Buttons */}
        <div className="md:flex md:flex-col md:items-stretch md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded">
          <SideIcon icon={<FaReact size={24} />} />
          <SideIcon icon={<SiTypescript size={24} />} />
          <SideIcon icon={<SiTailwindcss size={24} />} />
        </div>
      </div>
    </aside>
  );
};

interface SideIconProps {
  icon: React.ReactNode;
}

const SideIcon = ({ icon }: SideIconProps) => (
  <div className="sidebar-icon">{icon}</div>
);
