import React from 'react'
import { Rocket, ArrowUpRight } from "lucide-react";

const DashboardMetricCard = ({
  title,
  value,
  subtitle,
  progress,
  trend,
  icon,
  bgColor,
  barColor,
}) => {
  return (
    <div>
        <div className={`${bgColor} p-5 rounded-2xl flex flex-col gap-2 mt-4 border-2 border-gray-100`}>
            
            {/* Top row */}
            <div className='flex justify-between items-center'>
                <div className={`w-12 h-12 rounded-xl 
                    flex items-center justify-center ${barColor}`}>
                {icon}
            </div>

            <div className='font-bold text-green-600 flex items-center gap-1'>
                <ArrowUpRight 
                size={18}/>
            <span>{trend}</span>
            </div>
            </div>

            {/* details */}
            <p className='font-bold text-gray-500'>{title}</p>
            <h2 className='text-3xl font-bold'>{value}</h2>
            <p className='text-sm text-gray-400 font-semibold'>{subtitle}</p>

            {/* Progress Bar */}
            <div className="w-full mt-2">
      <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
        {/* Filled bar */}
        <div
          className={`h-full rounded-full transition-all duration-300 ${barColor}`}
            style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage text */}
      <p className="mt-2 text-sm text-gray-400 font-semibold">
        {progress}% of target
      </p>
    </div>
        </div>
    </div>
  )
}

export default DashboardMetricCard