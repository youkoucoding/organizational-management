import * as React from "react";
import { DeleteConfirmModal } from "components/modal/DeleteConfirmModal";
import { EditMemberModal } from "components/modal/EditMemberModal";
import { MemberModel } from "model";

export const DisplayRow = ({ member }: { member: MemberModel }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = React.useState(false);
  const [showEditMemberModal, setShowEditMemberModal] = React.useState(false);

  return (
    <tr className="w-full grid grid-cols-9 gap-12 bg-gray-50">
      <td className="col-span-2 px-3 py-4 whitespace-nowrap ">
        <p className="flex items-center justify-center text-gray-500 font-medium">
          {member.name}
        </p>
      </td>
      <td className="col-span-1 px-3 py-4 whitespace-nowrap bg-gray-50">
        <p className="flex items-center justify-center text-gray-500 font-medium">
          {member.age}
        </p>
      </td>
      <td className="col-span-2 px-3 py-4 whitespace-nowrap bg-gray-50">
        <p className="flex items-center justify-center text-gray-500 font-medium">
          {member.status?.toLowerCase() === "activated" ? (
            <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm uppercase tracking-wide font-medium">
              activated
            </span>
          ) : (
            <span className="bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm uppercase tracking-wide font-medium">
              inactivated
            </span>
          )}
        </p>
      </td>
      <td className="col-span-2 px-3 py-4 whitespace-nowrap bg-gray-50">
        <p className="flex items-center justify-center text-gray-500 font-medium">
          member
        </p>
      </td>
      <td className="col-span-2 px-3 py-4 whitespace-nowrap bg-gray-50">
        <div className="flex flex-row space-x-6 items-center justify-center">
          <button
            className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm uppercase tracking-wide font-medium"
            type="button"
            onClick={() => setShowEditMemberModal(true)}
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
          <EditMemberModal
            showMemberModal={showEditMemberModal}
            setShowMemberModal={setShowEditMemberModal}
            member={member}
          />
          <DeleteConfirmModal
            showDeleteConfirm={showDeleteConfirm}
            setShowDeleteConfirm={setShowDeleteConfirm}
            id={member.id}
          />
        </div>
      </td>
    </tr>
  );
};
