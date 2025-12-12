import React, { useState } from 'react'
import { House, Users, Mail, Send, ChartColumn, LogIn } from 'lucide-react';

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: House, color: "#2563eb" },
  { id: "emailList", label: "Email List", icon: Users, color: "#10b981" },
  { id: "emailAccounts", label: "Email Accounts", icon: Mail, color: "#f59e0b" },
  { id: "campaigns", label: "Email Campaigns", icon: Send, color: "#ef4444" },
  { id: "analytics", label: "Analytics", icon: ChartColumn, color: "#6366f1" },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <div className='bg-[#e1e9f2] h-screen flex flex-col justify-between fixed p-4 w-60 rounded-tr-3xl rounded-br-3xl'>

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
                className={`flex items-center gap-3 px-6 py-2 rounded-2xl transition-all
                  ${isActive ? "bg-[#ceddf1] font-semibold text-gray-800" : "text-gray-600 hover:bg-[#d9e4f2]"}
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
