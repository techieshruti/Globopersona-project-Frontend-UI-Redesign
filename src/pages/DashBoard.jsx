import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import { Bell, Search, ChevronDown } from 'lucide-react';

const DashBoard = () => {
  return (
    <div>
        <Sidebar/>
        <div className='ml-20 flex justify-between items-center'>
            {/* Dashboard Content */}
            <div className='bg-gray-400'>
                <h1 className='text-3xl font-bold p-2'>Dashboard Overview</h1>
            <p>Welcome back, ravi!
                <span>All System Operationals</span>
            </p>
            </div>

            {/* Top Right Icons */}
            <div className='flex'>
                {/* matrics */}
            <div className='flex gap-4 mt-6'>
                <div>Compaign</div>
                <div>Subscriber</div>
                <div>Open Rating</div>
            </div>

            {/* Performance Overview */}
            <div className='flex items-center justify-center'>
                <Bell />
                <Search />
            </div>

            {/* admin login */}
            <div className='flex items-center gap-2 border p-2 rounded-lg mr-4'>
                <h1>R</h1>
                <div>
                    <h2>Ravi</h2>
                <p>Admin</p>
                </div>
                <ChevronDown />
            </div>
        </div>
            </div>
    </div>
  )
}

export default DashBoard