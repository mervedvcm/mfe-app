import React, { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { ghrRoutingPrefix, gcrmRoutingPrefix } from "./constants";
import Layout from "../commonComponents/Layout";
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
    element: <Landing />,
  },
  {
    path: '/:companyName/login',
    element: <Login />,
  },
  {
    path: '/:companyName/dashboard',
    element: (
      <Layout>
        <Dashboard />
      </Layout>
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
];