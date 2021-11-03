import { AiOutlineUsergroupAdd } from "react-icons/ai";

export const AddOrgButton = () => {
  return (
    <div className="relative group">
      <div className="transform duration-300 hover:scale-110 hover:text-green-500 text-green-600 pl-1">
        <AiOutlineUsergroupAdd size={42} />
      </div>
      <span
        className={`group-hover:visible w-56 mx-2 py-3 absolute text-center text-gray-700 bg-gray-200 ring-2 invisible transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 px-6  left-0 -top-14 rounded-md`}
      >
        Add New Sub Org
      </span>
    </div>
  );
};
