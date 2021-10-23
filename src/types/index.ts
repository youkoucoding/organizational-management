export type RowProps = {
  id: string;
  name: string;
  age: number;
  status: string;
  role: string;
  action?: () => void;
};

export type EditableProps = {
  handleRowChange: () => void;
  uniqueRow: () => void;
  member: RowProps;
};
