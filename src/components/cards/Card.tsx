import { ReadyForRenderModel } from "model";
import { Table } from "components";

export const Card = ({ renderData }: { renderData: ReadyForRenderModel }) => {
  return (
    <div className="flex flex-row mx-6 mt-8 px-3 py-4 pb-6 bg-gray-200 rounded-lg shadow-md border-1 border-gray-200">
      <Table renderData={renderData} />
    </div>
  );
};
