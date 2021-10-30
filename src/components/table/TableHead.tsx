import React from "react";

export const TableHead = () => {
  return (
    <tr className="w-full flex">
      <th
        scope="col"
        className="w-2/9 px-3 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider"
      >
        <span className="flex items-center justify-center font-medium">
          name
        </span>
      </th>
      <th
        scope="col"
        className="w-1/9 px-3 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider"
      >
        <span className="flex items-center justify-center font-medium">
          age
        </span>
      </th>
      <th
        scope="col"
        className="w-2/9 px-3 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider"
      >
        <span className="flex items-center justify-start font-medium">
          actived
        </span>
      </th>
      <th
        scope="col"
        className="w-2/9 px-3 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider"
      >
        <span className="flex items-center justify-center font-medium">
          representation
        </span>
      </th>

      <th
        scope="col"
        className="w-2/9 px-3 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider"
      >
        <span className="flex items-center justify-center text-gray-500 font-medium">
          action
        </span>
      </th>
    </tr>
  );
};
