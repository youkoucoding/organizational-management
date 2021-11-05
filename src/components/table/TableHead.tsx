import React from "react";

export const TableHead = () => {
  return (
    <tr className="w-full grid grid-cols-9 gap-12  uppercase tracking-wider text-gray-50">
      <th scope="col" className="col-span-2 px-3 py-3 text-xs font-medium">
        name
      </th>
      <th scope="col" className="col-span-1 px-3 py-3 text-xs font-semibold">
        age
      </th>
      <th scope="col" className="col-span-2 px-3 py-3 text-xs font-semibold">
        actived
      </th>
      <th scope="col" className="col-span-2 px-3 py-3 text-xs font-semibold">
        representation
      </th>

      <th scope="col" className="col-span-2 px-3 py-3 text-xs font-semibold">
        action
      </th>
    </tr>
  );
};
