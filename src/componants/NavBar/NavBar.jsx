import React, { useEffect, useState } from "react";
import RouterNavLink from "./RouterNavLink";
import { Link, useNavigate } from "react-router";
import { authClient } from "../lib/auth-client";
import { getUsers } from "../../../public/ServerData/ServerData";

const NavBar = () => {
  const navigate = useNavigate();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [dbUser, setDbUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      if (!user?.email) return;

      try {
        const data = await getUsers(user?.email);
        setDbUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [user]);

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate("/login");
        },
      },
    });
  };

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

      {user && (
        <li>
          <RouterNavLink to="/profile">Profile</RouterNavLink>
        </li>
      )}

      {dbUser?.role === "admin" && (
        <li>
          <RouterNavLink to="/dashboard">Dashboard</RouterNavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="mx-auto flex justify-center">
      <div className="navbar w-11/12 mx-auto fixed top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
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

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {NavData}
            </ul>
          </div>

    

          <a className="btn hidden md:flex btn-ghost text-3xl font-bold">
            Woodora
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal gap-4 rounded-full border-2 border-gray-300 bg-white p-2">
            {NavData}
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="flex items-center space-x-5">
              <h1 className="ml-6 hidden max-w-28 truncate font-bold text-[#b6845c] sm:flex">
                {user.name}!
              </h1>

              <img
                src={
                  user?.image
                }
                alt="User"
                className="hidden h-12 w-12 rounded-full border-4 border-white shadow-2xl sm:flex"
              />

              <button
                onClick={handleLogout}
                className="btn btn-error font-bold text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-x-5">
              <Link
                to="/login"
                className="btn bg-[#b6845c] font-bold text-white"
              >
                Login
              </Link>

              <Link
                to="/registration"
                className="btn bg-[#b6845c] font-bold text-white"
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