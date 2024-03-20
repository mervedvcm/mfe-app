import React from 'react';
import { Outlet } from "react-router-dom";
import { NavigationManager } from "../components/NavigationManager";
import  Landing  from "../pages/Landing";
import  Pricing  from "../pages/Pricing";

export const routes = [
  {
    path: "/",
    element: (
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    ),
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "landing",
        element: <Landing />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
    ],
  },
];
