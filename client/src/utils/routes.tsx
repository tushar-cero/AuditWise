import React from "react";
import { createBrowserRouter } from "react-router-dom";

// import { ProductPage } from '../pages/ProductPage';
// import { Cart } from '../pages/Cart';
// import { Layout } from '../pages/Layout';
// import { Favorite } from '../pages/Favorites';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div />
    // element: <Layout />,
    // children: [
    //   {
    //     path: "/",
    //     element: <ProductPage />,
    //   },
    //   {
    //     path: "cart",
    //     element: <Cart />,
    //   },
    //   {
    //     path: "favorite",
    //     element: <Favorite />,
    //   },
    // ],
  },
]);
