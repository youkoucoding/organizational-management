import { CompositedModel, MemberModel, OrgModel } from "model";

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
  AddOrg = "ADD_ORGANIZATION",
  EditOrg = "EDIT_ORGANIZATION",
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

type AddOrgAction = {
  type: ACTION.AddOrg;
};

type EditOrgAction = {
  type: ACTION.EditOrg;
  payload: OrgModel;
};

export type ActionTypes =
  | FetchSuccessAction
  | FetchFailureAction
  | DeleteMemberAction
  | EditMemberAction
  | AddMemberAction
  | AddOrgAction
  | EditOrgAction;
