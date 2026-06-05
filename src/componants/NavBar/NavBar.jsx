import React from "react";
import RouterNavLink from "./RouterNavLink";

import { useNavigate } from "react-router";
import { Link } from "react-router";
import { authClient } from "../lib/auth-client";

const NavBar = () => {
  const NavData = (
    <>
      <li>
        <RouterNavLink to="/">Home</RouterNavLink>
      </li>
      <li>
        <RouterNavLink to="/products">Products</RouterNavLink>
      </li>
      <li>
        <RouterNavLink to="/cart">Cart</RouterNavLink>
      </li>
      <li>
        <RouterNavLink to="/profile">Profile</RouterNavLink>
      </li>
    </>
  );

  const router = useNavigate();

  const { data: session ,isPending } = authClient.useSession();

  const user = session?.user;

  const handleLogout = async () => {

    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router("/login");
        },
      },
    });
  };

  return (
    <div className="mx-auto flex justify-center">
      <div className="navbar w-11/12 mx-auto z-50 top-0 fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <div className="dropdown lg:hidden">
              {/* hamburger button */}
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              {/* dropdown menu */}
              <ul
                tabIndex={0}
                className="dropdown-content menu  lg:hidden bg-base-100 rounded-box mt-3 w-52 p-2 shadow flex flex-col gap-2"
              >
                {NavData}
              </ul>
            </div>
          </div>
          <Link to={'/dashboard'} className="btn ">Admin</Link>
          <a className="btn hidden md:flex btn-ghost font-bold text-3xl">Woodora</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" p-2 menu-horizontal gap-4 border-2   border-gray-300 bg-white rounded-full  ">
            {NavData}
          </ul>
        </div>
        
        <div className="navbar-end">
          
          {user ? (
            <div className="space-x-5 flex items-center">
              <h1 className="text-[#b6845c] truncate max-w-28  ml-6 sm:flex hidden font-bold">
                {user?.name} !
              </h1>
              <img
                src={
                  user?.image ||
                  "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                }
                className="w-12 h-12 border-4 border-white shadow-2xl rounded-full sm:flex hidden"
              />
              <button onClick={handleLogout} className="btn text-white font-bold btn-error">
                Logout
              </button>
            </div>
          ) : (
            
            <div className="space-x-5">
              <Link
                to={"/login"}
                className="btn bg-[#b6845c] text-white font-bold "
              >
                Login
              </Link>
              
              <Link
                to={"/registation"}
                className="btn bg-[#b6845c] text-white font-bold "
              >
                Registration
              </Link>
            </div>
          )}
        </div>
       
      </div>
    </div>
  );
};

export default NavBar;
