import React from 'react'
import { Rocket, ArrowUpRight } from "lucide-react";

const DashboardMetricCard = ({ value = 85 }) => {
  return (
    <div>
        <div className='bg-blue-50 w-1/3 p-5 rounded-2xl flex flex-col gap-2 mt-4 border-2 border-gray-100'>
            {/* icons */}
            <div className='flex justify-between items-center'>
                <div className='w-12 h-12 bg-blue-600 rounded-xl 
                    flex items-center justify-center'>
                <Rocket 
            size={20}
            className="text-white w-6 h-6"
            />
            </div>
            <div className='font-bold text-green-600 flex items-center gap-1'>
                <ArrowUpRight 
                size={20}/>
            <h1>+12</h1>
            </div>
            </div>

            {/* details */}
            <p className='font-bold text-gray-500'>Total Campaigns</p>
            <h1 className='text-3xl font-bold'>47</h1>
            <p className='text-sm text-gray-400 font-semibold'>Active & Completed</p>
            {/* Bar */}
            <div className="w-full">
      {/* Bar background */}
      <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
        {/* Filled bar */}
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${value}%` }}
        />
      </div>

      {/* Percentage text */}
      <p className="mt-2 text-sm text-gray-400 font-semibold">
        {value}% of target
      </p>
    </div>
        </div>
    </div>
  )
}

export default DashboardMetricCard