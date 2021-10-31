import * as React from "react";

import { CardTitle } from "components/cards/CardTitle";
import { TableHead } from "components/table/TableHead";
import { DisplayRow } from "components/table/DisplayRow";

import { ReadyForRenderModel } from "model";

export const Table = ({ renderData }: { renderData: ReadyForRenderModel }) => {
  // nested component
  const nestedTable = renderData.children.map((child) => {
    return (
      <div className="relative flex flex-col border-l-4">
        <div className="ml-8">
          <Table key={child.id} renderData={child as ReadyForRenderModel} />
        </div>
      </div>
    );
  });

  return (
    <div className="w-full mt-2 pt-3 pb-1">
      <div className="mx-4 sm:mx-6 lg:mx-1">
        <div className="min-w-full sm:px-6 lg:px-2">
          <div className="relative shadow border border-gray-300 sm:rounded-lg">
            <form>
              <table className="h-64 rounded-t-xl min-w-full divide-y divide-gray-300">
                <thead className="sticky z-0 bg-gray-200 flex-col min-w-full">
                  <CardTitle title={renderData.name} />
                  <TableHead />
                </thead>
                <tbody className="flex flex-col bg-white divide-y divide-gray-200">
                  {/* {JSON.stringify(renderData)} */}
                  {renderData.members?.map((member) => (
                    <div key={member.name}>
                      <DisplayRow
                        member={member}
                        // handleToEdit={handleToEdit}
                      />
                    </div>
                  ))}
                </tbody>
              </table>
              <div className="sticky bottom-0 py-1 rounded-b-lg bg-gray-300" />
            </form>
          </div>
        </div>
        {nestedTable}
      </div>
    </div>
  );
};
