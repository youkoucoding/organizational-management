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
  DELETE_MEMBER = "DELETE_MEMBER",
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
  type: ACTION.DELETE_MEMBER;
  payload: { id: string };
};
// type AddOrgAction = {
//   type: ACTION.ADD_ORG;
//   payload: OrgsProps;
// };

// type AddMemberAction = {
//   type: ACTION.ADD_MEMBER;
//   payload: MemProps;
// };

// type DeleteOrg = {
//   type: ACTION.DELETE_ORG;
//   payload: { id: string };
// };

export type ActionTypes =
  | FetchSuccessAction
  | FetchFailureAction
  | EditMemberAction
  | DeleteMemberAction;
// | AddOrgAction
// | AddMemberAction
// | DeleteOrg
