import { CompositedModel, MemberModel } from "model";
import { State, ActionTypes, ACTION } from "state/types";

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
    case ACTION.EditMember: {
      return {
        ...state,
        data: [
          // ...state.data,
          // [
          //   ...state.data.filter((ele) =>
          //     ele.members.filter((member) => (member.id = action.payload.id))
          //   ),
          // ],
        ],
      };
    }

    case ACTION.DELETE_MEMBER: {
      return {
        ...state,
        // tricky place, but ok now
        data: state.data.map((org) => ({
          ...org,
          members: org.members?.filter(
            (member) => member.id !== action.payload.id
          ),
        })),
      };
    }
    default:
      return state;
  }
};
