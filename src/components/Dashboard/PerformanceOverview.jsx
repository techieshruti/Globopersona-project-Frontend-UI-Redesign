import React from 'react'
import DashboardMetricCard from './DashboardMetricCard';

const PerformanceOverview = () => {
  return (
    <div className='bg-[#f8fafa]'>
        <div className='ml-8'>
        {/* Performance Overview heading */}
        <div>
            <h1 className='text-2xl font-bold pt-8'>PerformanceOverview</h1>
            <p className='text-gray-400 font-normal'>Track you email marketing matrics in real time</p>
        </div>

        {/* Performance Overview Card */}
        <DashboardMetricCard/>
    </div>
    </div>
  )
}

export default PerformanceOverview