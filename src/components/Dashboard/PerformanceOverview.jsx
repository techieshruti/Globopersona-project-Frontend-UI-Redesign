import React from 'react'
import { Rocket } from "lucide-react";

const PerformanceOverview = () => {
  return (
    <div className='bg-[#f2f6fc] ml-10'>
        {/* Performance Overview heading */}
        <div>
            <h1 className='text-2xl font-bold'>PerformanceOverview</h1>
            <p className='text-gray-400 font-normal'>Track you email marketing matrics in real time</p>
        </div>

        {/* Performance Overview Card */}
        <div className='bg-blue-100 w-60 p-4 rounded-2xl'>
            {/* icons */}
            <div className='w-12 h-12 bg-blue-600 rounded-xl 
                    flex items-center justify-center'>
                <Rocket 
            size={20}
            className="text-white w-6 h-6"
            />
            </div>
            {/* details */}
            <p className='font-bold text-gray-600'>Total Campaigns</p>
            <p>47</p>
            <p className='text-sm text-gray-500'>Active & Completed</p>
            <p>bar</p>
            <span className='text-sm text-gray-500'>percentage</span>
        </div>
    </div>
  )
}

export default PerformanceOverview