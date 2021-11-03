import * as React from "react";
import { CompositedModel } from "model";
import { ACTION, ActionTypes } from "state/types";

// 通过 从 AppContextProvider中  判断 传入的状态码， 执行不同的dispatch（以及相应数据）
export const fetchDataDispatch = (
  dispatch: React.Dispatch<ActionTypes>,
  data: CompositedModel[] | string,
  status?: number
) => {
  // when after dispatch, the parent propertity turned to null.  why??
  // I find the bug is in the getRenderData() func
  if (Number(status) >= 200 && Number(status) < 400) {
    return dispatch({
      type: ACTION.FetchDataSuccess,
      payload: data as CompositedModel[],
    });
  } else {
    return dispatch({
      type: ACTION.FetchDataFailure,
      payload: data as string,
    });
  }
};
