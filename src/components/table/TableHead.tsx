import React from "react";

export const TableHead = () => {
  return (
    <React.Fragment>
      <tr className="w-full">
        <th
          scope="col"
          className="w-1/12 px-3 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider"
        >
          id
        </th>
        <th
          scope="col"
          className="w-3/12 px-3 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider"
        >
          name
        </th>
        <th
          scope="col"
          className="w-1/12 px-3 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider"
        >
          age
        </th>
        <th
          scope="col"
          className="w-1/6 px-3 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider"
        >
          status
        </th>
        <th
          scope="col"
          className="w-1/6 px-3 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider"
        >
          role
        </th>
        <th
          scope="col"
          className="w-3/12 px-3 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider"
        >
          action
        </th>
      </tr>
    </React.Fragment>
  );
};
