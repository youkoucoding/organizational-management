import * as React from "react";
import { RenderOrgModel } from "model";
import { CardTitle } from "components/cards/CardTitle";
import { Table } from "components";

export const Card = ({ renderOrg }: { renderOrg: RenderOrgModel }) => {
  return (
    <div className="mx-6 my-2 p-4 bg-gray-200 rounded-lg">
      <CardTitle title={"organization-1"} />
      <div className="pl-0 pr-0">
        <Table renderOrg={renderOrg} />
      </div>
    </div>
  );
};
