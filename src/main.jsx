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
import Registation from "./componants/(auth)/registation/Registation";
import Profile from "./componants/profile/Profile";
import Dashboard from "./componants/dashboard/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Router,
    children: [
      {
        index: true,
        element:<FontPage/>,
      },
    {
      path:'/products',
          Component:Products
    },{
      path:'/products/:id',
      element:<ProductDetails/>
    },
   { 
    path:'/cart',
    Component:Cart
   },
   { 
    path:'/profile',
    Component:Profile
   },{
    path:'/login',
    element:<Login/>
   },
   {
    path:'/registation',
    element:<Registation/>
   },
   {
    path:'/dashboard',
    Component:Dashboard
   }
    ],
  },
]);






createRoot(document.getElementById("root")).render(
  <StrictMode >
    <Toaster />
   <RouterProvider router={router}/>
  </StrictMode>,
);
