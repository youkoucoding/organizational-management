import React from "react";

export const TableHead = () => {
  return (
    <React.Fragment>
      <tr className="w-full">
        <th
          scope="col"
          className="w-1/12 px-3 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider"
        >
          <span className="flex items-center justify-center font-medium">
            id
          </span>
        </th>
        <th
          scope="col"
          className="w-3/12 px-3 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider"
        >
          <span className="flex items-center justify-center font-medium">
            name
          </span>
        </th>
        <th
          scope="col"
          className="w-1/12 px-3 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider"
        >
          <span className="flex items-center justify-start font-medium">
            age
          </span>
        </th>
        <th
          scope="col"
          className="w-1/6 px-3 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider"
        >
          <span className="flex items-center justify-center font-medium">
            status
          </span>
        </th>
        <th
          scope="col"
          className="w-1/6 px-3 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider"
        >
          <span className="flex items-center justify-center font-medium">
            role
          </span>
        </th>
        <th
          scope="col"
          className="w-3/12 px-3 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider"
        >
          <span className="flex items-center justify-center text-gray-500 font-medium">
            action
          </span>
        </th>
      </tr>
    </React.Fragment>
  );
};
