import { FaUserPlus } from "react-icons/fa";

export const AddMemberButton = () => {
  return (
    <button className="transform duration-300 hover:scale-110 hover:text-green-500 text-green-600 ml-3 pl-1">
      <FaUserPlus size={32} />
    </button>
  );
};
