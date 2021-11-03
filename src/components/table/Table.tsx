import * as React from "react";
import { ReadyForRenderModel } from "model";

import { CardTitle } from "components/cards/CardTitle";
import { TableHead } from "components/table/TableHead";
import { DisplayRow } from "components/table/DisplayRow";
import { ToggleButton, AddMemberButton } from "components/buttons";

export const Table = ({ renderData }: { renderData: ReadyForRenderModel }) => {
  // control the children orgs's expand and collapse
  const [showChildren, setShowChildren] = React.useState(false);
  // the AddMemberModal is on the each Orgs Card
  const [showAddMemberModal, setShowAddMemberModal] = React.useState(false);

  const handleChildrenShow = React.useCallback(() => {
    setShowChildren(!showChildren);
  }, [showChildren, setShowChildren]);

  const handleAddMemberModalShow = React.useCallback(() => {
    setShowAddMemberModal(!showAddMemberModal);
  }, [showAddMemberModal, setShowAddMemberModal]);

  // nested component
  const nestedTable = renderData.children.map((child) => {
    return (
      <div
        key={child.id + child.parent}
        className="relative flex flex-col border-l-4"
      >
        <div className="ml-12">
          <Table renderData={child as ReadyForRenderModel} />
        </div>
      </div>
    );
  });

  return (
    <div className="w-full pt-3 pb-1">
      <div className="mx-4 sm:mx-6 lg:mx-1">
        <div className="min-w-full sm:px-6 lg:px-2">
          <div className="shadow border border-gray-300 sm:rounded-lg">
            <div className="flex flex-row gap-3 items-center justify-start bg-gray-300">
              <div onClick={handleChildrenShow}>
                {renderData.children.length !== 0 ? (
                  <ToggleButton showChildren={showChildren} />
                ) : null}
              </div>
              <CardTitle title={renderData.name} />
              <div onClick={handleAddMemberModalShow}>
                <AddMemberButton />
              </div>
            </div>
            <table className="h-56 rounded-t-xl min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-200 flex-col min-w-full">
                <TableHead />
              </thead>
              <tbody className="flex flex-col bg-white divide-y divide-gray-200">
                {renderData.members?.map((member) => (
                  <React.Fragment key={member.id + member.age}>
                    <DisplayRow
                      member={member}
                      // handleToEdit={handleToEdit}
                    />
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            <div className="sticky bottom-0 py-1 rounded-b-lg bg-gray-300" />
          </div>
          {/* <MemberModal
            showMemberModal={showAddMemberModal}
            setShowMemberModal={setShowAddMemberModal}
          /> */}
        </div>
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
