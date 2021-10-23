export type RowProps = {
  id: string;
  name: string;
  age: number;
  status: string;
  role: string;
  action?: () => void;
};

export const DisplayRow = ({ member }: { member: RowProps }) => {
  return (
    <tr className="w-full ">
      <td className="w-1/12 px-3 py-4 whitespace-nowrap bg-gray-50">
        <span className="flex items-center justify-center text-gray-500 font-medium">
          {member.id}
        </span>
      </td>
      <td className="w-3/12 px-3 py-4 whitespace-nowrap bg-gray-50">
        <span className="flex items-center justify-center text-gray-500 font-medium">
          {member.name}
        </span>
      </td>
      <td className="w-1/12 px-3 py-4 whitespace-nowrap bg-gray-50">
        <span className="flex items-center justify-center text-gray-500 font-medium">
          {member.age}
        </span>
      </td>
      <td className="w-1/6 px-3 py-4 whitespace-nowrap bg-gray-50">
        <span className="flex items-center justify-center text-gray-500 font-medium">
          {member.status}
        </span>
      </td>
      <td className="w-1/6 px-3 py-4 whitespace-nowrap bg-gray-50">
        <span className="flex items-center justify-center text-gray-500 font-medium">
          {member.role}
        </span>
      </td>
      <td className="w-3/12 px-3 py-4 whitespace-nowrap bg-gray-50">
        <span className="flex items-center justify-center text-gray-500 font-medium">
          {member.id}
        </span>
      </td>
    </tr>
  );
};
