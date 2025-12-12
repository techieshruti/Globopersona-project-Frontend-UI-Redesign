import React from 'react'
import { House, Users, Mail, Send, ChartColumn, LogIn } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className='bg-blue-200 h-screen flex flex-col justify-between p-4 w-60'>
      {/* logo */}
      <div className="logo">360ario</div>

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