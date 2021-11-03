import { State, ActionTypes, ACTION } from "state/types";
import { getLastMemberId } from "utils/getLastMemberId";
import { CompositedModel, MemberModel } from "model";

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

    case ACTION.DeleteMember: {
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

    case ACTION.AddMember: {
      const lastMemberId = getLastMemberId(state) as string;
      const res = lastMemberId.match(/\d+.?\d+?$/);
      const lastMemberIdNum = res ? res[0] : res;

      const newId = "member-" + lastMemberIdNum;

      return {
        ...state,
        // 通过 payload 中的 org-id, 确定需要加入的位置 not push, concat it!
        data: state.data.map((org) => ({
          ...org,
          members:
            org.id === action.payload.org_id
              ? org.members.concat([{ ...action.payload.data, id: newId }])
              : org.members,
        })),
      };
    }
    default:
      return state;
  }
};
