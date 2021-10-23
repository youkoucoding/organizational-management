import { RowProps } from "types";

export const DisplayRow = ({ member }: { member: RowProps }) => {
  return (
    <tr className="w-full ">
      <td className="w-1/12 px-3 py-4 whitespace-nowrap bg-gray-50">
        <p className="flex items-center justify-center text-gray-500 font-medium">
          {member.id}
        </p>
      </td>
      <td className="w-3/12 px-3 py-4 whitespace-nowrap bg-gray-50">
        <p className="flex items-center justify-center text-gray-500 font-medium">
          {member.name}
        </p>
      </td>
      <td className="w-1/12 px-3 py-4 whitespace-nowrap bg-gray-50">
        <p className="flex items-center justify-start text-gray-500 font-medium">
          {member.age}
        </p>
      </td>
      <td className="w-1/6 px-3 py-4 whitespace-nowrap bg-gray-50">
        <p className="flex items-center justify-center text-gray-500 font-medium text-sm uppercase tracking-wide">
          {member.status.toLocaleLowerCase() === "activated" ? (
            <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full">
              activated
            </span>
          ) : (
            <span className="bg-red-100 text-red-500 px-4 py-1 rounded-full">
              inactivated
            </span>
          )}
        </p>
      </td>
      <td className="w-1/6 px-3 py-4 whitespace-nowrap bg-gray-50">
        <p className="flex items-center justify-center text-gray-500 font-medium">
          {member.role}
        </p>
      </td>
      <td className="w-3/12 px-3 py-4 whitespace-nowrap bg-gray-50">
        <div className="flex flex-row space-x-6 items-center justify-center">
          <button
            className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm uppercase tracking-wide font-medium"
            type="button"
            onClick={() => window.open("https://google.com")}
          >
            edit
          </button>
          <button
            className="bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm uppercase tracking-wide font-medium"
            type="button"
            onClick={() => window.open("https://google.com")}
          >
            delete
          </button>
        </div>
      </td>
    </tr>
  );
};
