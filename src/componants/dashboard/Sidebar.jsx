import React, { useState } from "react";
import { useNavigate, NavLink, Link } from "react-router";
import {
  FiGrid,
  FiBox,
  FiShoppingBag,
  FiUsers,
  FiUser,
  FiLogOut,
  FiMenu,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { GiWoodPile } from "react-icons/gi";
import { authClient } from "../lib/auth-client";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: FiGrid },
  { name: "Products", path: "/dashboard/control-products", icon: FiBox },
  { name: "Orders", path: "/dashboard/orders", icon: FiShoppingBag },
  { name: "Customers", path: "/dashboard/customers", icon: FiUsers },
  { name: "Profile", path: "/profile", icon: FiUser },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate("/login");
        },
      },
    });
  };

  const toggleDesktopCollapse = () => setIsCollapsed(!isCollapsed);
  const toggleMobileDrawer = () => setIsMobileOpen(!isMobileOpen);

  return (
    <>
      {/* Mobile Top Navigation Sticky Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full h-16 bg-white border-b border-[#e5e7eb] px-4 flex items-center justify-between z-40 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-[#faf8f6] rounded-xl text-[#b6845c]">
            <GiWoodPile className="w-5 h-5" />
          </div>
          <span className="text-lg font-bold tracking-tight text-[#1f2937]">
            Woodora
          </span>
        </div>
        <button
          onClick={toggleMobileDrawer}
          className="p-2 rounded-xl bg-[#faf8f6] border border-[#e5e7eb] text-[#1f2937]"
        >
          {isMobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Desktop & Tablet Persistent Layout Sidebar */}
      <aside
        className={`hidden md:block fixed top-0 left-0 h-screen border-r border-[#e5e7eb] rounded-r-3xl shadow-sm transition-all duration-300 ease-in-out z-30 ${
          isCollapsed ? "w-14" : "w-48"
        }`}
      >
        <div className="h-full flex flex-col justify-between bg-white text-[#1f2937] p-2.5 select-none">
          <div>
            <div
              className={`flex items-center justify-between pb-3 mb-3 border-b border-[#e5e7eb] ${
                isCollapsed ? "justify-center" : "px-1"
              }`}
            >
              <div className="flex items-center space-x-2 overflow-hidden">
                <div className="p-1.5 bg-[#faf8f6] rounded-xl text-[#b6845c] shrink-0 shadow-sm">
                  <GiWoodPile className="w-5 h-5" />
                </div>
                {!isCollapsed && (
                  <div className="flex flex-col min-w-0 transition-opacity duration-300">
                    <span className="text-sm font-bold tracking-tight text-[#1f2937]">
                     <Link to='/'> Woodora</Link>
                    </span>
                    <span className="text-[9px] font-medium text-[#6b7280] tracking-wider uppercase">
                      Admin Panel
                    </span>
                  </div>
                )}
              </div>

              <button
                onClick={toggleDesktopCollapse}
                className="hidden md:flex p-1 rounded-lg bg-[#faf8f6] hover:bg-[#e5e7eb] border border-[#e5e7eb] text-[#6b7280] hover:text-[#1f2937] transition-colors duration-200"
              >
                {isCollapsed ? (
                  <FiChevronRight size={12} />
                ) : (
                  <FiChevronLeft size={12} />
                )}
              </button>
            </div>

            <nav className="space-y-0.5 overflow-y-auto max-h-[calc(100vh-160px)] custom-sidebar-scroll">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    end={item.path === "/dashboard"}
                    onClick={() => setIsMobileOpen(false)}
                    className={({ isActive }) =>
                      `group relative flex items-center px-2.5 py-2 rounded-xl font-medium text-xs transition-all duration-200 ${
                        isActive
                          ? "bg-[#b6845c] text-white shadow-sm"
                          : "text-[#6b7280] hover:bg-[#faf8f6]"
                      } ${isCollapsed ? "justify-center" : "space-x-2.5"}`
                    }
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {!isCollapsed && <span className="truncate">{item.name}</span>}
                  </NavLink>
                );
              })}
            </nav>
          </div>

          <div
            className={`mt-auto pt-2.5 border-t border-[#e5e7eb] ${
              isCollapsed
                ? "flex flex-col items-center space-y-2.5"
                : "flex items-center justify-between px-1"
            }`}
          >
            <div className="flex items-center space-x-2 min-w-0">
              <div className="relative shrink-0">
                <div className="avatar">
                  <div className="w-7 h-7 rounded-xl ring-2 ring-[#b6845c]/10 overflow-hidden">
                    <img
                      src={user?.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"}
                      alt="Admin Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="absolute bottom-0 right-0 block h-1.5 w-1.5 rounded-full bg-emerald-500 ring-1 ring-white" />
              </div>

              {!isCollapsed && (
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-semibold text-[#1f2937] truncate">
                    {user?.name || "Admin"}
                  </span>
                  <span className="text-[9px] text-[#6b7280] truncate">
                    Admin
                  </span>
                </div>
              )}
            </div>

            {isCollapsed ? (
              <button
                onClick={handleLogout}
                className="group relative p-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors duration-200"
              >
                <FiLogOut className="w-3.5 h-3.5" />
                <div className="absolute left-full ml-2 px-2 py-0.5 bg-[#1f2937] text-white text-[10px] font-medium rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-50 shadow-md whitespace-nowrap">
                  Logout
                </div>
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="p-1.5 rounded-xl text-[#6b7280] hover:text-rose-600 hover:bg-rose-50 transition-all duration-200"
                title="Logout"
              >
                <FiLogOut className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Fully Responsive Mobile Slide-out Overlay Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-visibility duration-300 ${
          isMobileOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isMobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileOpen(false)}
        />
        <aside
          className={`absolute top-0 left-0 h-full w-48 bg-white shadow-2xl transition-transform duration-300 ease-in-out transform ${
            isMobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col justify-between bg-white text-[#1f2937] p-2.5 select-none">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#e5e7eb] px-1">
                <div className="flex items-center space-x-2 overflow-hidden">
                  <div className="p-1.5 bg-[#faf8f6] rounded-xl text-[#b6845c] shrink-0 shadow-sm">
                    <GiWoodPile className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-bold tracking-tight text-[#1f2937]">
                      Woodora
                    </span>
                    <span className="text-[9px] font-medium text-[#6b7280] tracking-wider uppercase">
                      Admin Panel
                    </span>
                  </div>
                </div>
              </div>

              <nav className="space-y-0.5 overflow-y-auto max-h-[calc(100vh-160px)] custom-sidebar-scroll">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      end={item.path === "/dashboard"}
                      onClick={() => setIsMobileOpen(false)}
                      className={({ isActive }) =>
                        `group relative flex items-center px-2.5 py-2 rounded-xl font-medium text-xs transition-all duration-200 ${
                          isActive
                            ? "bg-[#b6845c] text-white shadow-sm"
                            : "text-[#6b7280] hover:bg-[#faf8f6]"
                        } space-x-2.5`
                      }
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{item.name}</span>
                    </NavLink>
                  );
                })}
              </nav>
            </div>

            <div className="mt-auto pt-2.5 border-t border-[#e5e7eb] flex items-center justify-between px-1">
              <div className="flex items-center space-x-2 min-w-0">
                <div className="relative shrink-0">
                  <div className="avatar">
                    <div className="w-7 h-7 rounded-xl ring-2 ring-[#b6845c]/10 overflow-hidden">
                      <img
                        src={user?.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"}
                        alt="Admin Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <span className="absolute bottom-0 right-0 block h-1.5 w-1.5 rounded-full bg-emerald-500 ring-1 ring-white" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-semibold text-[#1f2937] truncate">
                    {user?.name || "Admin"}
                  </span>
                  <span className="text-[9px] text-[#6b7280] truncate">
                    Admin
                  </span>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="p-1.5 rounded-xl text-[#6b7280] hover:text-rose-600 hover:bg-rose-50 transition-all duration-200"
                title="Logout"
              >
                <FiLogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Synchronized Content Spacer Layout to reduce absolute gap from main element */}
      <div
        className={`hidden md:block transition-all duration-300 ease-in-out shrink-0 ${
          isCollapsed ? "w-14" : "w-48"
        }`}
      />
      <div className="md:hidden h-16 w-full" />

      {/* Native Webkit Scrollbar Controls */}
      <style>{`
        .custom-sidebar-scroll::-webkit-scrollbar { width: 3px; }
        .custom-sidebar-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-sidebar-scroll::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
        .custom-sidebar-scroll::-webkit-scrollbar-thumb:hover { background: #b6845c; }
      `}</style>
    </>
  );
}