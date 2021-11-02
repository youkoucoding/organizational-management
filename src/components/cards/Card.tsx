import { ReadyForRenderModel } from "model";
import { CardTitle } from "components/cards/CardTitle";
import { Table } from "components";
import { AddOrgButton } from "components/buttons";

export const Card = ({ renderData }: { renderData: ReadyForRenderModel }) => {
  return (
    <div className="flex flex-row mx-3 my-2 mt-6 p-4 mb-12 bg-gray-200 rounded-lg">
      <div className="mt-6">
        <AddOrgButton />
      </div>
      <Table renderData={renderData} />
    </div>
  );
};
