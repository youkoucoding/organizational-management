import { FaUserPlus } from "react-icons/fa";

export const AddMemberButton = () => {
  return (
    <div className="relative group">
      <div className="transform duration-300 hover:scale-110 hover:text-green-500 text-green-600 ml-3 pl-1">
        <FaUserPlus size={32} />
        <span
          className={`group-hover:visible w-48 mx-6 py-3 absolute text-center text-gray-700 bg-gray-200 ring-2 invisible transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 px-6  left-6 -top-8 rounded-md`}
        >
          Add New Member
        </span>
      </div>
    </div>
  );
};
