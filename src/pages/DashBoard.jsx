import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import { Bell, Search, ChevronDown, Dot } from 'lucide-react';

const DashBoard = () => {
  return (
    <div>
        <Sidebar/>
        <div className='ml-20 pl-8 h-20 bg-amber-200 flex justify-between items-center'>
            {/* Dashboard Content */}
            <div className=''>
                <h1 className='text-3xl bg-red-500 font-bold '>Dashboard Overview</h1>
            <div className='flex flex-auto'>
                <p className='text-gray-600 text-sm flex items-center font-semibold'>Welcome back, Ravi!
                <Dot size={50}
                className='text-green-600'
                />
                    <span className=' text-green-600'>All System Operationals</span>
            </p>
            </div>
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