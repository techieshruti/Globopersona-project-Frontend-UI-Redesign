import React, { useState } from 'react'
import { House, Users, Mail, Send, ChartColumn, LogIn } from 'lucide-react';

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: House, color: "#2563eb", bgColor: "#e3eefc" },
  { id: "emailList", label: "Email List", icon: Users, color: "#10b981", bgColor: "#dcfae0" },
  { id: "emailAccounts", label: "Email Accounts", icon: Mail, color: "#f59e0b", bgColor: "#faf2d4" },
  { id: "campaigns", label: "Email Campaigns", icon: Send, color: "#ef4444", bgColor: "#fae6e6" },
  { id: "analytics", label: "Analytics", icon: ChartColumn, color: "#6366f1", bgColor: "#e0e7ff" },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <div className='bg-[#f1f5fa] h-screen flex flex-col justify-between fixed p-4 w-60 rounded-tr-3xl rounded-br-3xl'>

      {/* Logo */}
      <div className='flex flex-col gap-3'>
        <div className="logo flex items-center gap-2 m-4">
          <div className='bg-[#202c40] rounded-2xl p-2 text-white'><Mail /></div>
          <h1 className='text-2xl font-bold'>360ario</h1>
        </div>

        {/* Dynamic Nav */}
        <nav className="flex flex-col gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                style={{
                  background: isActive ? item.bgColor : "transparent"
                }}
                className={`flex items-center gap-3 px-6 py-2 rounded-2xl transition-all
                  ${isActive ? "font-semibold text-gray-800" : "text-gray-600 hover:bg-[#d9e4f2]"}
                `}
              >
                <Icon
                  size={20}
                  className="transition-colors"
                  style={{ color: isActive ? item.color : "#6b7280" }}
                />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Login Icon */}
      <div className="login-icon flex mt-8 p-2 ml-5 text-gray-600 hover:bg-[#ceddf1] cursor-pointer rounded-xl">
        <LogIn />
      </div>

    </div>
  );
};

export default Sidebar;
