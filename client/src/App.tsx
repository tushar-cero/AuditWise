import React, { FC } from "react";
import { RouterProvider } from "react-router-dom";
// import { router } from './utils/routes';

export const App: FC = () => {
  return <RouterProvider router={router} />;
};
