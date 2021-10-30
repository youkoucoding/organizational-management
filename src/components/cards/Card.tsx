import { ReadyForRenderModel } from "model";
import { CardTitle } from "components/cards/CardTitle";
import { Table } from "components";

export const Card = ({ renderData }: { renderData: ReadyForRenderModel }) => {
  return (
    <div className="mx-6 my-2 p-4 bg-gray-200 rounded-lg">
      <CardTitle title={"organization-1"} />
      <div className="pl-0 pr-0">
        <Table key={renderData.id} renderData={renderData} />
      </div>
    </div>
  );
};
