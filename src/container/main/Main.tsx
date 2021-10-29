import * as React from "react";
import { GlobalContext } from "store/context";

import { Card, Table } from "components";

export const Main = () => {
  const { state, dispatch } = React.useContext(GlobalContext);

  const { data: renderOrgs } = state;

  // console.log(renderOrgs);

  return (
    <Card>
      <Table renderOrgs={renderOrgs} />
      {/* <Card>
          <Table renderOrgs={renderOrgs} />
        </Card> */}
    </Card>
  );
};
