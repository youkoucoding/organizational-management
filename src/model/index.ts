export type MemberModel = {
  name: string;
  id: string;
  age: number;
  status: "inactivated" | "activated";
};

export type OrgModel = {
  name: string;
  id: string;
  type: "organization";
  parent: string | null;
  representation: string;
  members: string[] | MemberModel[] | null | [];
  children?: [];
};

// custom  utility type to compose orgs and member types together.
type MyComposite<O extends object, K extends keyof O, M extends object> = {
  [key in keyof O]: key extends K ? M[] : O[key];
};

// global state type
export type CompositedModel = MyComposite<OrgModel, "members", MemberModel>;

// ready for rendering data type
export type ReadyForRenderModel = {
  name: string;
  id: string;
  type: "organization";
  parent: null | string;
  representation: string;
  members: MemberModel[] | [];
  children: OrgModel[];
};
