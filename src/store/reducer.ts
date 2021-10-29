import { State, ActionTypes, ACTION } from "store/types";

export const initialState: State = {
  status: "isLoading",
  error: undefined,
  data: [],
};

export const reducer = (state: State, action: ActionTypes): State => {
  switch (action.type) {
    case ACTION.FetchDataSuccess: {
      return {
        ...state,
        status: "success",
        error: "",
        data: action.payload,
      };
    }
    case ACTION.FetchDataFailure: {
      return {
        ...state,
        status: "failure",
        error: action.payload,
        data: [],
      };
    }
    default:
      return state;
  }
};
