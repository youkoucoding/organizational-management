import * as React from "react";
import { GlobalContext } from "store/context";

import { Card } from "components";
import { getRenderData } from "utils/getRenderData";
import { ReadyForRenderModel } from "model";

export const Main = () => {
  const { state } = React.useContext(GlobalContext);

  const { data: renderOrgs } = state;

  // 调用utils/getRenderData 将state.data 组织成为一个tree型待渲染数据。
  const readyRenderDatas = getRenderData(renderOrgs) as ReadyForRenderModel[];

  return (
    <div>
      {readyRenderDatas.map((data) => (
        <div key={data.name}>
          {console.log(data.children)}
          <Card renderData={data} />
        </div>
      ))}
    </div>
  );
};
