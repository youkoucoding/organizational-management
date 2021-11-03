import { CompositedModel, MemberModel } from "model";

// global state
export type State = {
  status: "isLoading" | "success" | "failure";
  error?: string;
  data: CompositedModel[] | [];
};

// action types
export enum ACTION {
  FetchDataSuccess = "FETCH_DATA_SUCCESS",
  FetchDataFailure = "FETCH_DATA_FAILURE",
  EditMember = "EDIT_MEMBER",
  AddMember = "ADD_MEMBER",
  DeleteMember = "DELETE_MEMBER",
  // ADD_ORG,
  // DELETE_ORG,
}

export type FetchSuccessAction = {
  type: ACTION.FetchDataSuccess;
  payload: CompositedModel[];
};

export type FetchFailureAction = {
  type: ACTION.FetchDataFailure;
  payload: string;
};
export type EditMemberAction = {
  type: ACTION.EditMember;
  payload: MemberModel;
};

export type DeleteMemberAction = {
  type: ACTION.DeleteMember;
  payload: { id: string };
};

type AddMemberAction = {
  type: ACTION.AddMember;
  // 添加成员时，携带此时所在的 org 的 id
  payload: { data: MemberModel; org_id: string };
};

// type AddOrgAction = {
//   type: ACTION.ADD_ORG;
//   payload: OrgsProps;
// };

// type DeleteOrg = {
//   type: ACTION.DELETE_ORG;
//   payload: { id: string };
// };

export type ActionTypes =
  | FetchSuccessAction
  | FetchFailureAction
  | DeleteMemberAction
  | EditMemberAction
  | AddMemberAction;
// | AddOrgAction
// | DeleteOrg
