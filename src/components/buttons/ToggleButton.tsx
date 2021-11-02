import { FaArrowCircleRight } from "react-icons/fa";

export const ToggleButton = ({ showChildren }: { showChildren: boolean }) => {
  return (
    <div className="relative group">
      <div
        className={`${
          showChildren ? "rotate-90" : null
        } cursor-pointer transform duration-300 hover:scale-110 hover:text-gray-500 text-gray-600 ml-3 pl-1`}
      >
        <FaArrowCircleRight size={32} />
      </div>
      <span
        className={`${
          showChildren ? null : "group-hover:visible"
        } absolute text-gray-700 bg-gray-200 ring-2 invisible transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 px-6  left-9 -top-14 rounded-md`}
      >
        Show Sub Organization
      </span>
    </div>
  );
};
