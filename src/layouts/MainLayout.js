import React from "react";
import { Navbar, Sidebar } from "../views/components";
import { useStateContext } from "../contexts/ContextProvider";

const MainLayout = ({ children }) => {
  const { activeMenu } = useStateContext();

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div
        className={`fixed sidebar dark:bg-secondary-dark-bg bg-white ${
          activeMenu ? "w-72" : "w-0"
        }`}
      >
        <Sidebar />
      </div>
      <div
        className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
          activeMenu ? "md:ml-72" : "flex-2"
        }`}
      >
        <div className="static md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          <Navbar />
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
