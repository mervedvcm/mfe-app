import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { ghrRoutingPrefix, gcrmRoutingPrefix } from '../routing/constants';

export function Layout() {
  return (
    <>
      <nav style={{ marginBottom: "3rem" }}>
        <Link to={`/${ghrRoutingPrefix}/landing`} style={{ marginRight: "1rem" }}>
          ghr Landing
        </Link>
        <Link to={`/${ghrRoutingPrefix}/pricing`} style={{ marginRight: "1rem" }}>
          ghr Pricing
        </Link>
        <Link to={`/${gcrmRoutingPrefix}/products`} style={{ marginRight: "1rem" }}>
          gcrm Products
        </Link>
        <Link to={`/${gcrmRoutingPrefix}/productDetail`}>Gcrm ProductDetail</Link>
      </nav>
      <Outlet />
    </>
  );
}
