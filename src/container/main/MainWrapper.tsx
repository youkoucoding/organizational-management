import * as React from "react";
import { GlobalContext } from "store/context";

export const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  const { state } = React.useContext(GlobalContext);

  if (state.status === "isLoading" || state.status === "failure") {
    return null;
  } else {
    return <React.Fragment>{children}</React.Fragment>;
  }
};
