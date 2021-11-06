import * as React from "react";
import axios from "axios";
import { OrgModel, MemberModel } from "model";
import { GlobalContext } from "state/context";
import { reducer, initialState } from "state/reducer";
import { fetchDataDispatch } from "utils/dispatchHelpers";
import { getCompositeData } from "utils/getCompositeData";

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

        const payload = JSON.parse(JSON.stringify(result));

        // 将 useReducer 返回的 dispatch 和 组合好的数据 传入 下列工具函数，由工具函数 向reducer dispatch 相应的action和数据
        fetchDataDispatch(dispatch, payload, response[0].status);
      })
      .catch((error) => {
        fetchDataDispatch(dispatch, error);
      });
  };

  React.useEffect(() => {
    requestData();
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
