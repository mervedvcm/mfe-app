import React, { ReactNode } from "react";
import Cookies from 'js-cookie';
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ghrRoutingPrefix, gcrmRoutingPrefix } from "../routing/constants";

const CommonLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/");
  };
  return (
    <>
      <nav style={{ marginBottom: "3rem" }}>
        <Link
          to={`/${ghrRoutingPrefix}/landing`}
          style={{ marginRight: "1rem" }}
        >
          ghr Landing
        </Link>
        <Link
          to={`/${ghrRoutingPrefix}/pricing`}
          style={{ marginRight: "1rem" }}
        >
          ghr Pricing
        </Link>
        <Link
          to={`/${gcrmRoutingPrefix}/products`}
          style={{ marginRight: "1rem" }}
        >
          gcrm Products
        </Link>
        <Link to={`/${gcrmRoutingPrefix}/productDetail`}>
          Gcrm ProductDetail
        </Link>
      </nav>
      <Outlet />
      <div className="flex flex-row w-full ">
        <div className="w-1/6">
          <div>ANA SIDEBAR</div>
          <button className="block p-2" onClick={() => handleLogout()}>
            ÇIKIŞ YAP
          </button>
        </div>
        <div className="w-5/6 bg-blue-300 h-screen">{children}</div>
      </div>
    </>
  );
};
export default CommonLayout;
