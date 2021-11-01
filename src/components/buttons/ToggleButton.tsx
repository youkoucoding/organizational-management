import { FaArrowCircleRight } from "react-icons/fa";

export const ToggleButton = ({ showChildren }: { showChildren: boolean }) => {
  return (
    <div
      className={`${
        showChildren ? "rotate-90" : null
      } transform duration-300 hover:scale-110 hover:text-gray-500 text-gray-600 ml-3 pl-1`}
    >
      <FaArrowCircleRight size={32} />
    </div>
  );
};
