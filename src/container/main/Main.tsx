import * as React from "react";
import { GlobalContext } from "state/context";

import { Card } from "components";
import { getRenderData } from "utils/getRenderData";
import { ReadyForRenderModel } from "model";

export const Main = () => {
  const { state } = React.useContext(GlobalContext);
  const { data: renderOrgs } = state;

  const [readyRenderDatas, setReadyRenderDatas] = React.useState<
    ReadyForRenderModel[]
  >([]);

  // 调用utils/getRenderData 将state.data 组织成为一个tree型待渲染数据。
  React.useEffect(() => {
    setReadyRenderDatas(getRenderData(renderOrgs));
  }, [renderOrgs]);

  return (
    <React.Fragment>
      {readyRenderDatas.length !== 0 &&
        readyRenderDatas.map((data) => (
          <React.Fragment key={data.id + data.name}>
            <Card renderData={data} />
          </React.Fragment>
        ))}
    </React.Fragment>
  );
};
