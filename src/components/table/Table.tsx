import * as React from "react";

import { CardTitle } from "components/cards/CardTitle";
import { TableHead } from "components/table/TableHead";
import { DisplayRow } from "components/table/DisplayRow";

import { RowProps } from "components/table/DisplayRow";

export const Table = ({ members }: { members: RowProps[] }) => {
  return (
    <div className="flex flex-col">
      <div className="mt-3 mb-2 overflow-x-auto mx-4 sm:mx-6 lg:mx-1">
        <div className="align-middle inline-block min-w-full sm:px-6 lg:px-2">
          <div className="shadow overflow-hidden border border-gray-300 sm:rounded-lg">
            <form>
              <CardTitle title="Organization-2" />
              <table className="table-fixed min-w-full divide-y divide-gray-300 border-collapse">
                <thead className="bg-gray-200">
                  <TableHead />
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {members.map((member) => (
                    <React.Fragment key={member.name}>
                      <DisplayRow member={member} />
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
