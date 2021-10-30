import { CompositedModel } from "model";

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
  // ADD_ORG,
  // ADD_MEMBER,
  // DELETE_ORG,
  // DELETE_MEMBER,
}

export type FetchSuccessAction = {
  type: ACTION.FetchDataSuccess;
  payload: CompositedModel[];
};

export type FetchFailureAction = {
  type: ACTION.FetchDataFailure;
  payload: string;
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

// type DeleteMember = {
//   type: ACTION.DELETE_MEMBER;
//   payload: { id: string };
// };

export type ActionTypes = FetchSuccessAction | FetchFailureAction;
// | AddOrgAction
// | AddMemberAction
// | DeleteOrg
// | DeleteMember;
