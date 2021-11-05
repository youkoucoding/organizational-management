import { FaEdit } from "react-icons/fa";

export const EditOrgButton = () => {
  return (
    <button className="relative group">
      <div className="transform duration-300 hover:scale-110 hover:text-gray-700 text-gray-600 pl-1">
        <FaEdit size={30} />
      </div>
      <span
        className={`group-hover:visible w-56 mx-2 py-3 absolute text-center text-gray-700 bg-gray-200 ring-1 invisible transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 px-2 -left-60 top-0 rounded-md`}
      >
        Edit Organization Info
      </span>
    </button>
  );
};
