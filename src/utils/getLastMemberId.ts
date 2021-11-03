import { State } from "state/types";
import _ from "lodash";

// Another ugly method, in order to get the last member_id
export const getLastMemberId = (state: State) => {
  const data = [...state.data];
  // the last object than contains a members array
  const lastMembers = _.findLast(data, (org) => org.members?.length > 0);

  // the last member in the last members array
  const lastMember = _.last(lastMembers?.members);

  return lastMember?.id ? lastMember.id : lastMember;
};
