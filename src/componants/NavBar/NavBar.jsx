import React from "react";
import RouterNavLink from "./RouterNavLink";

const NavBar = () => {
  const NavData = (
    <ul className="flex gap-8 text-[15px] items-center font-bold">
      <RouterNavLink to="/">Home</RouterNavLink>
      <RouterNavLink to="/products">Products</RouterNavLink>
      <RouterNavLink to="/cart">Cart</RouterNavLink>
      <RouterNavLink to="/profile">Profile</RouterNavLink>
    </ul>
  );

  return (
    <div className="mx-auto flex justify-center">
      <div className="navbar w-11/12 mx-auto z-50 top-0 fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {NavData}
            </ul>
          </div>
          <a className="btn btn-ghost font-bold text-3xl">Woodora</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal border-2 border-gray-300 bg-white rounded-full ">{NavData}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
