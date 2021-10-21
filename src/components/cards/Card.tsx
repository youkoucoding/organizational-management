import * as React from "react";

import { CardTitle } from "components/cards/CardTitle";

export const Card: React.FC = ({ children }) => {
  return (
    <div className="m-4 bg-gray-100 rounded-md">
      <CardTitle title={"organization-1"} />
      <div className="">{children}</div>
    </div>
  );
};
