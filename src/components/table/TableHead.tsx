import React from "react";

export const TableHead = () => {
  return (
    <tr className="w-full grid grid-cols-9 gap-12">
      <th
        scope="col"
        className="col-span-2 px-3 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider"
      >
        name
      </th>
      <th
        scope="col"
        className="col-span-1 px-3 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider"
      >
        age
      </th>
      <th
        scope="col"
        className="col-span-2 px-3 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider"
      >
        actived
      </th>
      <th
        scope="col"
        className="col-span-2 px-3 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider"
      >
        representation
      </th>

      <th
        scope="col"
        className="col-span-2 px-3 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider"
      >
        action
      </th>
    </tr>
  );
};
