import * as React from "react";

import { State, ActionTypes } from "store/types";
import { initialState } from "./reducer";

export type AppContext = {
  state: State;
  dispatch: React.Dispatch<ActionTypes>;
};

export const GlobalContext = React.createContext<AppContext>({
  state: initialState,
  dispatch: () => {},
});
