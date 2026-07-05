import { NavLink } from "react-router";

const RouterNavLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          ` ${isActive && "text-white bg-[#b6845c]"} rounded-full ease-in-out px-2 py-1 items-center font-bold  `
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default RouterNavLink;
