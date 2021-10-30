import * as React from "react";
import { DeleteConfirmModal } from "components/modal/DeleteConfirmModal";
import { MemberModal } from "components/modal/MemberModal";
import { MemberModel } from "model";

export const DisplayRow = ({ member }: { member: MemberModel }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = React.useState(false);
  const [showMemberModal, setShowMemberModal] = React.useState(false);

  return (
    <tr className="w-full flex items-center">
      <td className="w-2/9 px-3 py-4 whitespace-nowrap bg-gray-50">
        <p className="flex items-center justify-center text-gray-500 font-medium">
          {member.name}
        </p>
      </td>
      <td className="w-1/9 px-3 py-4 whitespace-nowrap bg-gray-50">
        <p className="flex items-center justify-center text-gray-500 font-medium">
          {member.age}
        </p>
      </td>
      <td className="w-2/9 px-3 py-4 whitespace-nowrap bg-gray-50">
        <p className="flex items-center justify-start text-gray-500 font-medium">
          {member.status}
        </p>
      </td>
      {/* <td className="w-2/9 px-3 py-4 whitespace-nowrap bg-gray-50">
        <p className="flex items-center justify-center text-gray-500 font-medium text-sm uppercase tracking-wide">
          {/* {member.status.toLocaleLowerCase() === "activated" ? (
            <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full">
              activated
            </span>
          ) : (
            <span className="bg-red-100 text-red-500 px-4 py-1 rounded-full">
              inactivated
            </span>
          )} 
        </p>
      </td> */}
      <td className="w-2/9 px-3 py-4 whitespace-nowrap bg-gray-50">
        <p className="flex items-center justify-center text-gray-500 font-medium">
          {member.status}
          {""}
          {"representation"}
        </p>
      </td>
      <td className="w-2/9 px-3 py-4 whitespace-nowrap bg-gray-50">
        <div className="flex flex-row space-x-6 items-center justify-center">
          <button
            className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm uppercase tracking-wide font-medium"
            type="button"
            onClick={() => setShowMemberModal(true)}
          >
            edit
          </button>
          <button
            className="bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm uppercase tracking-wide font-medium"
            type="button"
            onClick={() => setShowDeleteConfirm(true)}
          >
            delete
          </button>
          <MemberModal
            showMemberModal={showMemberModal}
            setShowMemberModal={setShowMemberModal}
          />
          <DeleteConfirmModal
            showDeleteConfirm={showDeleteConfirm}
            setShowDeleteConfirm={setShowDeleteConfirm}
          />
        </div>
      </td>
    </tr>
  );
};
