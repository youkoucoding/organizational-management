import * as React from "react";
import { RenderOrgModel } from "model";
import { ACTION, ActionTypes } from "store/types";

// 通过 从 AppContextProvider中  判断 传入的状态码， 执行不同的dispatch（以及相应数据）
export const fetchDataDispatch = (
  dispatch: React.Dispatch<ActionTypes>,
  data: RenderOrgModel[] | string,
  status?: number
) => {
  // when after dispatch, the parent propertity turned to null.  why??
  // I find the bug is in the getRenderData() func
  if (Number(status) >= 200 && Number(status) < 400) {
    return dispatch({
      type: ACTION.FetchDataSuccess,
      payload: data as RenderOrgModel[],
    });
  } else {
    return dispatch({
      type: ACTION.FetchDataFailure,
      payload: data as string,
    });
  }
};
