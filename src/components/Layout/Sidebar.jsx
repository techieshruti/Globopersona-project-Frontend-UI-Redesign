import React from 'react'
import { House, Users, Mail, Send, ChartColumn, LogIn } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className='bg-[#e1e9f2] h-screen flex flex-col justify-between p-4 w-60 rounded-tr-3xl rounded-br-3xl'>
     
      <div className='flex flex-col gap-3'>
         {/* logo */}
        <div className="logo flex items-center gap-2 m-4">
        <div className='bg-[#202c40] rounded-2xl p-2 text-white'><Mail /></div>
        <h1 className='text-2xl font-bold'>360ario</h1>
      </div>

      {/* navbar list */}
      <div className="nav-list text-lg flex flex-col gap-4 mt-8">
        <a href="#dashboard" className="nav-item flex gap-3 focus:bg-[#ceddf1] text-gray-600 focus:font-semibold px-6 py-2 rounded-2xl">
          <House className='focus:text-blue-600'/> Dashboard
        </a>
        <a href="#profile" className="nav-item flex gap-3 focus:bg-[#ceddf1] text-gray-600 focus:font-semibold px-6 py-2 rounded-2xl">
          <Users /> Email List
        </a>
        <a href="#settings" className="nav-item flex gap-3 focus:bg-[#ceddf1] text-gray-600 focus:font-semibold px-6 py-2 rounded-2xl">
          <Mail/> Email Accounts
        </a>
        <a href="#settings" className="nav-item flex gap-3 focus:bg-[#ceddf1] text-gray-600 focus:font-semibold px-6 py-2 rounded-2xl">
          <Send /> Email Compaigns
        </a>
        <a href="#settings" className="nav-item flex gap-3 focus:bg-[#ceddf1] text-gray-600 focus:font-semibold px-6 py-2 rounded-2xl">
          <ChartColumn /> Analytics
        </a>
      </div>
      </div>
      


      {/* login icon */}
      <div className="login-icon flex mt-8 p-2 text-gray-600 hover:bg-[#ceddf1] cursor-pointer">
        <LogIn />
      </div>
    </div>
  )
}

export default Sidebar