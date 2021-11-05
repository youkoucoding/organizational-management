import { AiOutlineUsergroupAdd } from "react-icons/ai";

export const AddOrgButton = () => {
  return (
    <button className="relative group">
      <div className="transform duration-300 hover:scale-110 hover:text-gray-600 text-gray-700 pl-1">
        <AiOutlineUsergroupAdd size={36} />
      </div>
      <span
        className={`group-hover:visible w-56 mx-2 py-3 absolute text-center text-gray-700 bg-gray-200 ring-1 invisible transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 px-3 left-10 top-0 rounded-md`}
      >
        Add New Organization
      </span>
    </button>
  );
};
