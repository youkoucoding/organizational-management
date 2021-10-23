import * as React from "react";

import { Card, Table, StatusPill } from "components";

import { RowProps } from "components/table/DisplayRow";

const getData = (): RowProps[] => {
  const data = [
    {
      name: "member-1",
      id: "member-1",
      age: 29,
      status: "activated",
      role: "representation",
    },
    {
      name: "member-2",
      id: "member-2",
      age: 30,
      status: "inactivated",
      role: " ",
    },
    {
      name: "member-3",
      id: "member-3",
      age: 31,
      status: "activated",
      role: " ",
    },
  ];
  return [...data];
};

export const Main: React.FC = () => {
  const data = React.useMemo(() => getData(), []);

  return (
    <Card>
      <Table members={data} />
      <Card>
        <Table members={data} />
      </Card>
    </Card>
  );
};
