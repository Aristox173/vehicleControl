import React from "react";
import { Header } from "../../components";
import { useStateContext } from "../../../contexts/ContextProvider";

const Dashboard = () => {
  const { activeMenu } = useStateContext();

  return (
    <div
      className={`m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl ${
        activeMenu ? "w-1000" : ""
      }`}
    >
      <Header category="Dashboard" title="Datos" />
    </div>
  );
};

export default Dashboard;
