import * as React from "react";
import { useTable } from "react-table";

import { CardTitle } from "components/cards/CardTitle";

interface column {
  Header: string;
  accessor: string;
}

interface TableProps {
  columns: column[];
  data: {
    name: string;
    id: string;
    age: number;
    status: string;
  }[];
}

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      // @ts-ignore
      columns,
      data,
    });

  return (
    <div className="flex flex-col">
      <div className="mt-3 mb-2 overflow-x-auto mx-4 sm:mx-6 lg:mx-1">
        <div className="align-middle inline-block min-w-full sm:px-6 lg:px-2">
          <div className="shadow overflow-hidden border border-gray-300 sm:rounded-lg">
            <CardTitle title="Organization-2" />
            <table
              {...getTableProps()}
              className="min-w-full divide-y divide-gray-300 border-collapse"
            >
              <thead className="bg-gray-200">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        scope="col"
                        className="group px-3 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                        {...column.getHeaderProps()}
                      >
                        <div className="flex items-center justify-between">
                          {column.render("Header")}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody
                {...getTableBodyProps()}
                className="bg-white divide-y divide-gray-200"
              >
                {rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            className="px-3 py-4 whitespace-nowrap"
                            role="cell"
                          >
                            <div className="text-sm text-gray-600">
                              {cell.render("Cell")}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
