import * as React from "react";

import { CardTitle } from "components/cards/CardTitle";
import { TableHead } from "components/table/TableHead";
import { DisplayRow } from "components/table/DisplayRow";

import { RenderOrgModel } from "model";

export const Table = ({ renderOrg }: { renderOrg: RenderOrgModel }) => {
  return (
    <div className="w-full -my-2 py-2">
      <div className="mx-2 sm:mx-6 lg:mx-1">
        <div className="min-w-full sm:px-6 lg:px-2">
          <div className="relative shadow border border-gray-300 sm:rounded-lg overflow-y-scroll">
            <form className="h-80">
              <table className="table-fixed h-64 min-w-full divide-y divide-gray-300 border-collapse ">
                <thead className="sticky top-0 bg-gray-200 flex-col min-w-full w-full">
                  <CardTitle title="Organization-1" />
                  <TableHead />
                </thead>
                <tbody className="flex flex-col bg-white divide-y divide-gray-200">
                  {/* {JSON.stringify(renderOrgs)} */}
                  {renderOrg.members.map((member) => (
                    <React.Fragment key={member.name}>
                      <DisplayRow
                        member={member}
                        // handleToEdit={handleToEdit}
                      />
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
              <div className="sticky bottom-0 py-3 rounded-b-lg bg-gray-300" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
