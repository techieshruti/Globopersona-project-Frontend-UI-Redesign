import React, { useEffect, useRef, useState } from "react";
import { House, Users, Mail, Send, ChartColumn, LogIn } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: House,
    path: "/dashboard",
    color: "#2563eb",
    bgColor: "#e3eefc",
  },
  {
    id: "email-list",
    label: "Email List",
    icon: Users,
    path: "/email-list",
    color: "#10b981",
    bgColor: "#dcfae0",
  },
  {
    id: "email-accounts",
    label: "Email Accounts",
    icon: Mail,
    path: "/email-accounts",
    color: "#f59e0b",
    bgColor: "#faf2d4",
  },
  {
    id: "campaigns",
    label: "Email Campaigns",
    icon: Send,
    path: "/campaigns",
    color: "#ef4444",
    bgColor: "#fae6e6",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: ChartColumn,
    path: "/analytics",
    color: "#6366f1",
    bgColor: "#e0e7ff",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // ✅ FIX: use CLICK instead of MOUSEDOWN
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      ref={sidebarRef}
      className={`fixed left-0 top-0 h-screen bg-[#f5f7fa] shadow-xl p-4 transition-all duration-300
        ${isOpen ? "w-60" : "w-20"}
        rounded-tr-3xl rounded-br-3xl`}
    >
      {/* Logo */}
      <div
        className="flex items-center justify-center gap-2 my-4 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="bg-[#202c40] rounded-2xl p-2 text-white">
          <Mail />
        </div>
        {isOpen && <h1 className="text-2xl font-bold">360ario</h1>}
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-6 mt-8">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={() => setIsOpen(true)}
              className={({ isActive }) =>
                `flex items-center rounded-xl transition-all duration-300
                ${isOpen ? "px-4 py-2 gap-3" : "p-2 justify-center"}
                ${isActive ? "font-semibold" : "text-gray-600 hover:bg-[#e6eef9]"}`
              }
              style={({ isActive }) => ({
                backgroundColor: isActive ? item.bgColor : "transparent",
                borderLeft: !isOpen && isActive
                  ? `4px solid ${item.color}`
                  : "none",
              })}
            >
              <Icon
                size={22}
                className="min-w-[22px]"
                style={{ color: item.color }}
              />

              <span
                className={`transition-all duration-300 whitespace-nowrap
                  ${
                    isOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-5 w-0"
                  }`}
              >
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* Login */}
      <div
        className={`absolute bottom-6 left-0 right-0 flex ${
          isOpen ? "justify-start pl-6" : "justify-center"
        }`}
      >
        <button
          onClick={() => setIsOpen(true)}
          className={`flex items-center gap-3 text-gray-600 hover:bg-[#e6eef9] rounded-xl transition-all
            ${isOpen ? "px-4 py-2" : "p-2"}
          `}
        >
          <LogIn size={22} />
          {isOpen && <span>Login</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
