import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./componants/NavBar/NavBar";
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
import Registration from "./componants/(auth)/registration/Registration";

import Customers from "./componants/dashboard/customers";
import DashboardLayout from "./componants/dashboard/DashboardLayout";
import ControlProducts from "./componants/dashboard/control-products";
import Orders from "./componants/dashboard/orders";

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
        element: <Registration />,
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </StrictMode>,
);
