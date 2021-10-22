import * as React from "react";

import { Card, Table, StatusPill } from "components";

const getData = () => {
  const data = [
    {
      name: "member-1",
      id: "member-1",
      age: 29,
      status: "activated",
    },
    {
      name: "member-2",
      id: "member-2",
      age: 30,
      status: "inactivated",
    },
    {
      name: "member-3",
      id: "member-3",
      age: 31,
      status: "activated",
    },
  ];
  return [...data];
};

export const Main: React.FC = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
      },
      {
        Header: "Edit",
        accessor: "edit",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <Card>
      <Table columns={columns} data={data} />
      <Card>
        <Table columns={columns} data={data} />
      </Card>
    </Card>
  );
};
