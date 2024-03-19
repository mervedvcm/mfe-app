import React, { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { ghrRoutingPrefix, gcrmRoutingPrefix } from "./constants";
import CommonLayout from "../commonComponents/Layout";
import Dashboard from "../pages/Dashboard";
import Landing from "../pages/Landing";
import Login from "../pages/Login";

const path = localStorage.getItem('companyName');

const GhrLazy = lazy(() => import("../commonComponents/Ghr"));
const GcrmLazy = lazy(() => import("../commonComponents/Gcrm"));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/:companyName/dashboard',
    element: (
      <CommonLayout>
        <Dashboard />
      </CommonLayout>
    ),
  },
  {
    path: '/:companyName', // Yeni eklenen yol örneği
    element: <Navigate to={`/${path}/dashboard`} />, // Yeni eklenen Navigate bileşeni
  },
  {
    path: `/${path}/${gcrmRoutingPrefix}/*`,
    element: (
      <Suspense fallback="Loading Gcrm...">
        <GcrmLazy />
      </Suspense>
    ),
  },
  {
    path: `/${path}/${ghrRoutingPrefix}/*`,
    element: (
      <Suspense fallback="Loading Ghr...">
        <GhrLazy />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
  // {
  //   path: '/',
  //   element: <Layout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Navigate to={`/${ghrRoutingPrefix}`} />,
  //     },
  //     {
  //       path: `/${ghrRoutingPrefix}/*`,
  //       element: <Suspense fallback="Loading Ghr..."><GhrLazy /></Suspense>,
  //     },
  //     {
  //       path: `/${ghrRoutingPrefix}/*`,
  //       element: <Suspense fallback="Loading Ghr..."><GhrLazy /></Suspense>,
  //     },
  //     {
  //       path: `/${gcrmRoutingPrefix}/*`,
  //       element: <Suspense fallback="Loading Gcrm..."><GcrmLazy /></Suspense>,
  //     },
  //   ],
  // }

];