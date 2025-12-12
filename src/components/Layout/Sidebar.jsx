import React, { useEffect, useRef, useState } from 'react'
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
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // close on clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={sidebarRef}
      className={`h-screen bg-[#f1f5fa] fixed p-4 transition-all duration-300 rounded-tr-3xl rounded-br-3xl
        ${isOpen ? "w-60" : "w-20"}
      `}
    >
      
      {/* Logo */}
      <div className="flex items-center justify-center gap-2 m-4 cursor-pointer">
        <div className='bg-[#202c40] rounded-2xl p-2 text-white'>
          <Mail />
        </div>
        {isOpen && <h1 className='text-2xl font-bold'>360ario</h1>}
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col gap-6 mt-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <button
  key={item.id}
  onClick={() => {
    setActiveItem(item.id);
    setIsOpen(true);
  }}
  style={{ backgroundColor: isActive ? item.bgColor : "transparent",
    borderColor: isActive ? item.color : "transparent",
   }}
  className={`flex items-center gap-3 rounded-xl transition-all duration-300
    ${isOpen ? "px-4 py-2 justify-start" : "p-2 justify-center"}
    ${isActive ? "font-semibold text-gray-900" : "text-gray-600 hover:bg-[#d9e4f2]"}
    ${!isOpen && isActive ? "border-l-4" : "border-l-0"}
  `}>
    
  <Icon
    size={22}
    className="min-w-[22px] transition-colors"
    style={{ color: isActive ? item.color : "#6b7280" }}
  />

  {/* Smooth animated text */}
  <span
    className={`
      overflow-hidden whitespace-nowrap transition-all duration-300
      ${isOpen ? "opacity-100 translate-x-0 ml-2" : "opacity-0 -translate-x-5 w-0"}
    `}
  >
    {item.label}
  </span>
</button>

          );
        })}
      </nav>

      <div
  className={`absolute bottom-6 left-0 right-0 flex ${isOpen ? "justify-start pl-6" : "justify-center"}`}
>
  <button
    onClick={() => setIsOpen(true)}
    className={`flex items-center gap-3 text-gray-600 hover:bg-[#e6eef9] rounded-xl transition-all
      ${isOpen ? "px-4 py-2" : "p-2"}
    `}
  >
    <LogIn size={22} className="min-w-[22px]" />

    {isOpen && (
      <span className="opacity-100 transition-all">Login</span>
    )}
  </button>
</div>

      
    </div>
  );
};


export default Sidebar;
