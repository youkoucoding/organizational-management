import * as React from "react";
import { Header } from "components/header/Header";
import { SideBar } from "components/sidebar/SideBar";
import { Footer } from "components/footer/Footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <SideBar />
      <div className="md:ml-14 bg-light-500 dark:bg-dark-500 h-screen overflow-auto">
        <Header />
        <div className="p-4 w-full min-h-full space-y-4">{children}</div>
        <Footer />
      </div>
    </>
  );
};
