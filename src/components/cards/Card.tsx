import { ReadyForRenderModel } from "model";
import { Table } from "components";

export const Card = ({ renderData }: { renderData: ReadyForRenderModel }) => {
  return (
    <div className="flex flex-row mx-6 mt-7 p-4 bg-gray-200 rounded-lg">
      <Table renderData={renderData} />
    </div>
  );
};
