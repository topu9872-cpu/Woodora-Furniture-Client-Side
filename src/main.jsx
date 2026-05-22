import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./componants/NavBar/NavBar";
import { createBrowserRouter } from "react-router";

import { RouterProvider } from "react-router";
import Router from "./componants/router/Router";
import FontPage from "./componants/FontPage/FontPage";
import Projucts from "./componants/projucts/Projucts";
import Cart from "./componants/cart/Cart";
import Profile from "./componants/profile/Profile";
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
          Component:Projucts
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
  
   <RouterProvider router={router}/>
  </StrictMode>,
);
