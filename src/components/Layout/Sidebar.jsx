import React from 'react'
import { House, Users, Mail, Send, ChartColumn, LogIn } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className='bg-[#e1eaf7] flex flex-col justify-between p-4 w-60 rounded-tr-3xl rounded-br-3xl'>
      {/* logo */}
      <div className="logo flex items-center gap-2">
        <div className='bg-[#202c40] rounded-2xl p-2 text-white'><Mail /></div>
        <h1 className='text-2xl font-bold'>360ario</h1>
      </div>

      {/* navbar list */}
      <div className="nav-list flex flex-col gap-4 mt-8">
        <a href="#dashboard" className="nav-item flex gap-3 hover:bg-red-400 px-4 py-2 rounded-2xl">
          <House /> Dashboard
        </a>
        <a href="#profile" className="nav-item">
          <Users /> Email List
        </a>
        <a href="#settings" className="nav-item">
          <Mail/> Email Accounts
        </a>
        <a href="#settings" className="nav-item">
          <Send /> Email Compaigns
        </a>
        <a href="#settings" className="nav-item">
          <ChartColumn /> Analytics
        </a>
      </div>

      {/* login icon */}
      <div className="login-icon">
        <LogIn />
      </div>
    </div>
  )
}

export default Sidebar