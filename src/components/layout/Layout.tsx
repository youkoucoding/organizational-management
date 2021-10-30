import * as React from "react";
import { Header } from "components";
import { SideBar } from "components";
import { Footer } from "components";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <SideBar />
      <div className="md:ml-12 bg-light-500 dark:bg-dark-500 h-screen overflow-auto">
        <Header />
        <div className="w-full min-h-full space-y-4 bg-gray-50">{children}</div>
        <Footer />
      </div>
    </React.Fragment>
  );
};
