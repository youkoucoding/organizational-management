import * as React from "react";

import { Card, Table } from "components";
import useMember from "hooks/useMember";
import { MemProps } from "types";

const getData = (): MemProps[] => {
  const data = [
    {
      name: "member-1",
      id: "member-1",
      age: 29,
      status: "inactivated",
      role: "representation",
    },
    {
      name: "member-2",
      id: "member-2",
      age: 30,
      status: "inactivated",
      role: "member",
    },
    {
      name: "member-3",
      id: "member-3",
      age: 31,
      status: "activated",
      role: "member",
    },
  ];
  return [...data] as MemProps[];
};

export const Main: React.FC = () => {
  // const data = React.useMemo(() => getData(), []);

  const { data, loading, error } = useMember();

  const handleToEdit = (event: React.MouseEvent) => {
    event.preventDefault();
    alert({ ...event });
  };

  return (
    <Card>
      <Table members={data} handleToEdit={handleToEdit} />
      <Card>
        <Table members={data} handleToEdit={handleToEdit} />
      </Card>
    </Card>
  );
};
