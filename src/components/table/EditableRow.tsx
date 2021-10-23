import { EditableProps } from "types";

export const EditableRow = ({
  handleRowChange,
  uniqueRow,
  member,
}: EditableProps) => {
  return (
    <tr className="w-full ">
      <td className="w-1/12 px-3 py-4 whitespace-nowrap bg-gray-50">
        <p className="flex items-center justify-center text-gray-500 font-medium">
          {member.id}
        </p>
      </td>
      <td className="w-3/12 px-3 py-4 whitespace-nowrap bg-gray-50">
        <div className="flex items-center justify-start text-gray-500 font-medium">
          <input
            className="bg-green-50 text-gray-600 text-center rounded-full"
            type="text"
            required={true}
            placeholder="please input the age..."
            value={member.name}
            onChange={() => console.log(member.name)}
          />
        </div>
      </td>
      <td className="w-1/12 px-3 py-4 whitespace-nowrap bg-gray-50">
        <div className="flex items-center justify-start text-gray-500 font-medium">
          <input
            className="bg-green-50 text-gray-600 text-center rounded-full"
            type="number"
            required={true}
            placeholder="please input the age..."
            value={member.age}
            onChange={() => console.log(member.age)}
          />
        </div>
      </td>
      <td className="w-1/6 px-3 py-4 whitespace-nowrap bg-gray-50">
        <div className="flex items-center justify-center text-gray-500 font-medium text-sm uppercase leading-wide cursor-pointer">
          {member.status.toLocaleLowerCase() === "activated" ? (
            <input
              className="bg-green-100 text-green-600 px-4 py-1 rounded-xl"
              type="button"
              name="status"
              value={member.status}
              onClick={handleRowChange}
            />
          ) : (
            <input
              className="bg-yellow-100 text-yellow-600 px-4 py-1 rounded-xl"
              type="button"
              name="status"
              value={member.status}
              onClick={handleRowChange}
            />
          )}
        </div>
      </td>
      <td className="w-1/6 px-3 py-4 whitespace-nowrap bg-gray-50">
        <div className="flex items-center justify-center">
          <select
            className="text-gray-500 font-medium rounded-full"
            name="role"
            value={member.role}
            onChange={handleRowChange}
          >
            <option value="role">representation</option>
            <option value="role">member-1</option>
            <option value="role">member-2</option>
          </select>
        </div>
      </td>
      <td className="w-3/12 px-3 py-4 whitespace-nowrap bg-gray-50">
        <div className="flex flex-row space-x-6 items-center justify-center">
          <button
            className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm uppercase tracking-wide font-medium"
            type="submit"
            onClick={() => window.open("https://google.com")}
          >
            save
          </button>
          <button
            className="bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm uppercase tracking-wide font-medium"
            type="submit"
            onClick={() => window.open("https://google.com")}
          >
            delete
          </button>
        </div>
      </td>
    </tr>
  );
};
