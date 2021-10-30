import * as React from "react";
import axios from "axios";
import { OrgModel, MemberModel } from "model";
import { GlobalContext } from "store/context";
import { reducer, initialState } from "store/reducer";
import { fetchDataDispatch } from "utils/dispatchHelpers";
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

        // console.log(orgs);
        const result = getCompositeData(orgs, members);
        // console.log(result);

        // 将 useReducer 返回的 dispatch 和 组合好的数据 传入 下列工具函数，有工具函数 向reducer dispatch 一个action和数据
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
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
