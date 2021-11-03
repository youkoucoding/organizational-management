import { overArgs } from "lodash";
import { CompositedModel, MemberModel } from "model";
import { clearConfigCache } from "prettier";
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
        // TODO: { members: (MemberModel[] | undefined)[]; how to omit the undefined?
        // FIXME: works but ugly
        data: state.data.map((org) => ({
          ...org,
          members: org.members?.map((member, index) =>
            member.id === action.payload.id
              ? (org.members[index] = action.payload)
              : org.members[index]
          ),
        })),
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

// org.members?.map((member, index) => {
//   if (member.id === action.payload.id) {
//     return org.members.splice(index, 1, action.payload);
//   }
// })
