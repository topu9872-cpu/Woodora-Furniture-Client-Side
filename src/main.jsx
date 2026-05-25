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
import MyProfile from "./componants/(auth)/my-profile/MyProfile";
import Login from "./componants/(auth)/login/Login";
import Registation from "./componants/(auth)/registation/Registation";
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
    Component:MyProfile
   },{
    path:'/login',
    element:<Login/>
   },
   {
    path:'/registation',
    element:<Registation/>
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
