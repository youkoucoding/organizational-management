import * as React from "react";

import { CardTitle } from "components/cards/CardTitle";

export const Card: React.FC = ({ children }) => {
  return (
    <div className="mx-6 my-2 p-4 bg-gray-200 rounded-lg">
      {/* <CardTitle title={"organization-1"} /> */}
      <div className="pl-0 pr-0">{children}</div>
    </div>
  );
};
