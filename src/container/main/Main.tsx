import { useContext } from "react";
import { GlobalContext, AppContext } from "store/context";

import { Card, Table } from "components";
import { OrgModel, MemberModel, CardModel } from "model";
import { ACTION, State } from "store/types";
import { AppContextProvider } from "./AppContextProvider";

export const Main = () => {
  const { state, dispatch } = useContext<AppContext>(GlobalContext);

  return (
    <AppContextProvider>
      {/* <Card>
        <Table members={state.data} />
        <Card>
          <Table members={state.data} />
        </Card>
      </Card> */}
      {/* <div className="p-12">{JSON.stringify(state)}</div> */}
    </AppContextProvider>
  );
};
