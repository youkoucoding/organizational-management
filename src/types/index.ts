export type OrgsProps = {
  name: string;
  id: string;
  type: "organization";
  parent: null | string;
  representation: string;
  members: string[] | [];
};

export type MemProps = {
  name: string;
  id: string;
  age: number;
  status: "inactivated" | "activated";
  role: "member" | "representation";
};

export type EditableProps = {
  handleRowChange: () => void;
  uniqueRow: () => void;
  member: MemProps;
};
