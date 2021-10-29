import * as React from "react";
import { AppContext } from "store/context";
import { AppContextProvider } from "container/main/AppContextProvider";

export const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return <AppContextProvider>{children}</AppContextProvider>;
};
