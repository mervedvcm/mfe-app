import React, { ReactNode } from "react";
import Cookies from "js-cookie";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ghrRoutingPrefix, gcrmRoutingPrefix } from "../routing/constants";
import AppAppBar from "./AppAppBar";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   Cookies.remove("token");
  //   navigate("/");
  // };
  return (
    <main className="background-app">
      <AppAppBar></AppAppBar>
      <Outlet />
      <div className="flex flex-row w-full">
        <div className="w-full h-full">{children}</div>
      </div>
    </main>
  );
};
export default Layout;
