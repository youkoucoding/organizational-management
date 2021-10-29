import * as React from "react";
import { CardModel } from "model";
import { ACTION, ActionTypes } from "store/types";

import getCompositeData from "utils/getCompositeData";

export const fetchDataDispatch = (
  dispatch: React.Dispatch<ActionTypes>,
  data: CardModel[] | string,
  status?: number
) => {
  if (Number(status) >= 200 && Number(status) < 400) {
    return dispatch({
      type: ACTION.FetchDataSuccess,
      payload: data as CardModel[],
    });
  }
  return dispatch({
    type: ACTION.FetchDataFailure,
    payload: data as string,
  });
};
