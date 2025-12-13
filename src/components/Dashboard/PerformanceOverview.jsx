import React from 'react'
import { Rocket } from "lucide-react";

const PerformanceOverview = () => {
  return (
    <div className='bg-[#f2f6fc] ml-10'>
        {/* Performance Overview heading */}
        <div>
            <h1 className='text-2xl font-bold'>PerformanceOverview</h1>
            <p className='text-gray-400 font-semibold'>Track you email marketing matrics in real time</p>
        </div>

        {/* Performance Overview Card */}
        <div className='bg-blue-200 w-40'>
            <Rocket />
            <div>icon</div>
            <p>Total Campaigns</p>
            <p>47</p>
            <p>Active & Completed</p>
            <p>bar</p>
            <span>percentage</span>
        </div>
    </div>
  )
}

export default PerformanceOverview