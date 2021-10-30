import * as React from "react";
import { GlobalContext } from "store/context";

import { Card } from "components";
import { getRenderData } from "utils/getRenderData";

export const Main = () => {
  const { state } = React.useContext(GlobalContext);

  const { data: renderOrgs } = state;

  // 调用helper 将state.data 组织成为一个tree型待渲染数据。
  const readyRenderTree = renderOrgs ? getRenderData(renderOrgs, null) : null;

  console.log(readyRenderTree);

  return (
    <React.Fragment>
      {/* {renderOrgs.map((renderOrg) => {
        <div key={renderOrg.id} className="">
          <Card renderOrg={renderOrg} />
        </div>;
      })} */}
    </React.Fragment>
  );
};
