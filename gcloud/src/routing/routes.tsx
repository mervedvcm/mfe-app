import React, { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { Layout } from "../components/Layout";
import { ghrRoutingPrefix, gcrmRoutingPrefix } from "./constants";

const GhrLazy = lazy(() => import("../components/Ghr"));
const GcrmLazy = lazy(() => import("../components/Gcrm"));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={`/${ghrRoutingPrefix}`} />,
      },
      {
        path: `/${ghrRoutingPrefix}/*`,
        element: <Suspense fallback="Loading Ghr..."><GhrLazy /></Suspense>,
      },
      {
        path: `/${gcrmRoutingPrefix}/*`,
        element: <Suspense fallback="Loading App2..."><GcrmLazy /></Suspense>,
      },
    ],
  }
];