import { getCompositeData } from "utils/getCompositeData";
import { getRenderData } from "utils/getRenderData";
import { MemberModel, OrgModel } from "model";

describe("test several utilis", () => {
  const testOrg = [
    {
      name: "org-1",
      id: "org-1",
      type: "organization",
      parent: null,
      representation: "member-1",
      members: ["member-1", "member-2", "member-3"],
    },
    {
      name: "org-2",
      id: "org-2",
      type: "organization",
      parent: "org-1",
      representation: "member-5",
      members: ["member-4", "member-5", "member-6"],
    },
  ] as OrgModel[];

  const testMem = [
    { name: "member-1", id: "member-1", age: 29, status: "activated" },
    {
      name: "member-2",
      id: "member-2",
      age: 30,
      status: "inactivated",
    },
    { name: "member-3", id: "member-3", age: 31, status: "activated" },
    {
      name: "member-4",
      id: "member-4",
      age: 32,
      status: "inactivated",
    },
    { name: "member-5", id: "member-5", age: 33, status: "activated" },
    {
      name: "member-6",
      id: "member-6",
      age: 34,
      status: "inactivated",
    },
    { name: "member-7", id: "member-7", age: 35, status: "activated" },
  ] as MemberModel[];

  it("'getCompositeData()'return the right data structure of the composited data", () => {
    const res = getCompositeData(testOrg, testMem);

    expect(res).toEqual([
      {
        name: "org-1",
        id: "org-1",
        type: "organization",
        parent: null,
        representation: "member-1",
        members: [
          { name: "member-1", id: "member-1", age: 29, status: "activated" },
          {
            name: "member-2",
            id: "member-2",
            age: 30,
            status: "inactivated",
          },
          { name: "member-3", id: "member-3", age: 31, status: "activated" },
        ],
      },
      {
        name: "org-2",
        id: "org-2",
        type: "organization",
        parent: "org-1",
        representation: "member-5",
        members: [
          {
            name: "member-4",
            id: "member-4",
            age: 32,
            status: "inactivated",
          },
          { name: "member-5", id: "member-5", age: 33, status: "activated" },
          {
            name: "member-6",
            id: "member-6",
            age: 34,
            status: "inactivated",
          },
        ],
      },
    ]);
  });

  it("'getRenderData()' return the right data structure that ready for rendering", () => {
    const res = getRenderData(getCompositeData(testOrg, testMem));

    expect(res).toEqual([
      {
        name: "org-1",
        id: "org-1",
        type: "organization",
        parent: null,
        representation: "member-1",
        members: [
          { name: "member-1", id: "member-1", age: 29, status: "activated" },
          {
            name: "member-2",
            id: "member-2",
            age: 30,
            status: "inactivated",
          },
          { name: "member-3", id: "member-3", age: 31, status: "activated" },
        ],
        children: [
          {
            name: "org-2",
            id: "org-2",
            type: "organization",
            parent: "org-1",
            representation: "member-5",
            children: [],
            members: [
              {
                name: "member-4",
                id: "member-4",
                age: 32,
                status: "inactivated",
              },
              {
                name: "member-5",
                id: "member-5",
                age: 33,
                status: "activated",
              },
              {
                name: "member-6",
                id: "member-6",
                age: 34,
                status: "inactivated",
              },
            ],
          },
        ],
      },
    ]);
  });
});
