import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import { Bell, Search, ChevronDown, Dot } from 'lucide-react';

const DashBoard = () => {
  return (
    <div>
        <Sidebar/>
        <div className='ml-20 pl-8 h-20 bg-amber-200 flex justify-between items-center'>
            {/* Dashboard Content */}
            <div>
                <h1 className='text-3xl font-bold '>Dashboard Overview</h1>
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
            <div className='flex gap-20 items-center '>
                {/* matrics */}
            <div className='flex gap-6 text-gray-600 semibold text-lg bg-[#f2f6fc] py-2 px-6 rounded-2xl'>
                <div className='border-gray-200 border-r-2 pr-4 flex-col justify-center items-center'>
                    <p className='text-black font-semibold'>47</p>
                    <p>Compaign</p>
                </div>
                <div className='border-gray-200 flex-col justify-center items-center border-r-2 pr-4'>
                    <p className='text-black font-semibold'>12.8k</p>
                    <p>Subscriber</p>
                </div>
                <div className='text-green-600'>
                    <p className='font-semibold'>28.4%</p>
                    <p>Open Rating</p>
                </div>
            </div>

            {/* Performance Overview */}
            <div className='flex items-center justify-center gap-6'>
                {/* Notification */}
                <Bell /> 
                <Search />
            </div>

            {/* admin login */}
            <div className='flex items-center gap-2 p-2 rounded-lg bg-green-200 mr-4'>
                <h1 className='px-4 py-2 bg-[#2563eb] rounded-xl text-white font-semibold'>R</h1>
                <div className='text-sm'>
                    <h2 className='font-semibold'>Ravi</h2>
                <p className='text-gray-500'>Admin</p>
                </div>
                <ChevronDown 
                className='text-gray-500'/>
            </div>
        </div>
            </div>
    </div>
  )
}

export default DashBoard