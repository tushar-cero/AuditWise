import React, { JSX } from "react";
import { useRoutes, Navigate } from "react-router-dom";

import { Layout } from '../pages/Layout';
import { Login } from '../pages/Login';
import { Dashboard } from "pages/Dashboard";

// Protect routes that require authentication
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = localStorage.getItem('access_token');
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export const AppRoutes = () => {
  const routes = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      // element: <ProtectedRoute><Layout /></ProtectedRoute>,
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/dashboard" replace />
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "sheet",
          element: <Dashboard />,
        },
      ],
    },
  ];

  return useRoutes(routes);
};