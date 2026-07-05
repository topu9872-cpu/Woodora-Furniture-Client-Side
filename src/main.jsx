import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";

import { RouterProvider } from "react-router";
import Router from "./componants/router/Router";
import FontPage from "./componants/FontPage/FontPage";
import Products from "./componants/products/Products";
import Cart from "./componants/cart/Cart";

import ProductDetails from "./componants/products/productDetails";
import { Toaster } from "react-hot-toast";

import Login from "./componants/(auth)/login/Login";

import Profile from "./componants/profile/Profile";
import Dashboard from "./componants/dashboard/Dashboard";


import Customers from "./componants/dashboard/customers";
import DashboardLayout from "./componants/dashboard/DashboardLayout";
import ControlProducts from "./componants/dashboard/control-products";
import Orders from "./componants/dashboard/orders";
import Registation from "./componants/(auth)/registration/Registation";
import Unauthorized from "./componants/unauthorized/Unauthorized";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Router,
    children: [
      {
        index: true,
        element: <FontPage />,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registation/>,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "control-products",
        element: <ControlProducts/>,
      },
      {
        path: "orders",
        element: <Orders/>,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "unauthorized",
        element: < Unauthorized />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </StrictMode>,
);
