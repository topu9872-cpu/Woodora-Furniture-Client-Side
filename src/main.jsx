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
import Profile from "./componants/profile/Profile";
import ProductDetails from "./componants/products/productDetails";
import { Toaster } from "react-hot-toast";
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
