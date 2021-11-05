import * as React from "react";
import { ReadyForRenderModel } from "model";

import { AddMemberModal } from "components/modal/AddMemberModal";
import { CardTitle } from "components/cards/CardTitle";
import { TableHead } from "components/table/TableHead";
import { DisplayRow } from "components/table/DisplayRow";
import { ToggleButton, AddMemberButton } from "components/buttons";
import { EditOrgButton } from "components/buttons/EditOrgButton";
import { EditOrgModal } from "components/modal/EditOrgModal";

export const Table = ({ renderData }: { renderData: ReadyForRenderModel }) => {
  // control the children orgs's expand and collapse
  const [showChildren, setShowChildren] = React.useState(false);
  // the AddMemberModal is on the each Orgs Card
  const [showAddMemberModal, setShowAddMemberModal] = React.useState(false);
  // the edit organization name modal
  const [showEditOrgModal, setShowEditOrgModal] = React.useState(false);

  const handleChildrenShow = React.useCallback(() => {
    setShowChildren(!showChildren);
  }, [showChildren, setShowChildren]);

  const handleAddMemberModalShow = React.useCallback(() => {
    setShowAddMemberModal(!showAddMemberModal);
  }, [showAddMemberModal, setShowAddMemberModal]);

  const handleEditOrgModalShow = React.useCallback(() => {
    setShowEditOrgModal(!showEditOrgModal);
  }, [showEditOrgModal, setShowEditOrgModal]);

  // nested component
  const nestedTable = renderData.children.map((child) => {
    return (
      <div
        key={child.id + child.parent}
        className="relative flex flex-col border-l-4"
      >
        <div className="ml-14 mt-2">
          <Table renderData={child as ReadyForRenderModel} />
        </div>
      </div>
    );
  });

  return (
    <div className="w-full pt-1">
      <div className="mx-4 sm:mx-6 lg:mx-1">
        <div className="min-w-full sm:px-6 lg:px-2">
          <div className="shadow border border-gray-300 sm:rounded-lg">
            <div className="flex items-center justify-between bg-gray-300">
              <div className="flex flex-row gap-3 item-center justify-center py-3">
                {/* show the child table of orgs */}
                <div onClick={handleChildrenShow}>
                  {renderData.children.length !== 0 ? (
                    <ToggleButton showChildren={showChildren} />
                  ) : null}
                </div>
                {/* display each org's name */}
                <CardTitle title={renderData.name} />
                <div onClick={handleAddMemberModalShow}>
                  <AddMemberButton />
                </div>
              </div>
              {/* edit org button to show the editablt modal */}
              <div
                onClick={handleEditOrgModalShow}
                className="flex flex-row px-6"
              >
                <EditOrgButton />
              </div>
            </div>

            {/* main table display the whole org and children */}
            <table className="h-56 rounded-t-xl min-w-full divide-y divide-gray-500 bg-white">
              <thead className="bg-gray-400 flex-col min-w-full">
                <TableHead />
              </thead>
              <tbody className="flex flex-col divide-y divide-gray-200">
                {renderData.members?.map((member) => (
                  <React.Fragment key={member.id + member.age}>
                    <DisplayRow
                      member={member}
                      representation={renderData.representation}
                    />
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            <div className="sticky bottom-0 py-2 rounded-b-lg bg-gray-300" />
          </div>

          {/* modals on each org-table */}
          <AddMemberModal
            showMemberModal={showAddMemberModal}
            setShowMemberModal={setShowAddMemberModal}
            // because of the null value so I use to 'name' field
            org_id={renderData.name}
          />
          <EditOrgModal
            showEditOrgModal={showEditOrgModal}
            setShowEditOrgModal={setShowEditOrgModal}
            // pass the org's specific information for editing
            editable_org={{
              name: renderData.name,
              id: renderData.id,
              representation: renderData.representation,
              members: renderData.members,
            }}
          />
        </div>

        {/* children org-table */}
        <div
          className={`${
            showChildren ? "block" : "hidden"
          } transition-all duration-1000`}
        >
          {nestedTable}
        </div>
      </div>
    </div>
  );
};
