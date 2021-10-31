import { ReadyForRenderModel } from "model";
import { CardTitle } from "components/cards/CardTitle";
import { Table } from "components";

export const Card = ({ renderData }: { renderData: ReadyForRenderModel }) => {
  return (
    <div className="mx-3 my-2 p-4 mb-12 bg-gray-200 rounded-lg">
      <Table renderData={renderData} />
    </div>
  );
};
