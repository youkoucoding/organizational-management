import { State } from "state/types";
import _ from "lodash";

// Another ugly method, in order to get the last organization_id
export const getLastOrgId = (state: State) => {
  const data = [...state.data];

  const lastOrg = _.last(data);

  return lastOrg?.id;
};
