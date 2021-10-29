import * as React from "react";
import axios from "axios";
import { OrgModel, MemberModel, CardModel } from "model";
import { GlobalContext } from "store/context";
import { reducer, initialState } from "store/reducer";
import { fetchDataDispatch } from "utils/helpers";
import getCompositeData from "utils/getCompositeData";

const BASE_URL = process.env.REACT_APP_API;

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const requestData = () => {
    const getOrgs = () => axios.get(`${BASE_URL}/organizations`);
    const getMembers = () => axios.get(`${BASE_URL}/members`);

    Promise.all([getOrgs(), getMembers()])
      .then((response) => {
        const orgs = response[0].data as OrgModel[];
        const members = response[1].data as MemberModel[];

        const result = getCompositeData(orgs, members);

        fetchDataDispatch(dispatch, result, response[0].status);
      })
      .catch((error) => {
        fetchDataDispatch(dispatch, error);
      });
  };

  React.useEffect(() => {
    requestData();
  }, []);

  return (
    // <GlobalContext.Provider value={{ state, dispatch }}>
    <div className="">
      <div className="">{JSON.stringify(state)}</div>
      {children}
    </div>
    // </GlobalContext.Provider>
  );
};
