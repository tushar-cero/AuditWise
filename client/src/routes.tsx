import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import { Layout } from './pages/Layout';
import { Login } from './pages/Login';
import { Logout } from 'pages/Logout';
import { Dashboard } from 'pages/Dashboard';
import { Sheet } from 'pages/Sheet';
import { ACCESS_TOKEN } from 'common/constants';

export const AppRoutes = () => {
  const isAuthenticated = !!localStorage.getItem(ACCESS_TOKEN);

  const UnauthenticatedRoutes = [
    {
      path: '/',
      element: isAuthenticated ? <Navigate to="/" replace /> : <Navigate to="/login" replace />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/logout',
      element: <Logout />
    },
    {
      path: '*',
      element: <Navigate to="/login" replace />
    }
  ];
  const AuthenticatedRoutes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Navigate to="/dashboard" replace />
        },
        {
          path: 'dashboard',
          element: <Dashboard />
        },
        {
          path: 'sheet',
          element: <Sheet />
        }
      ]
    }
  ];

  return useRoutes(isAuthenticated ? UnauthenticatedRoutes.concat(AuthenticatedRoutes) : UnauthenticatedRoutes);
};
