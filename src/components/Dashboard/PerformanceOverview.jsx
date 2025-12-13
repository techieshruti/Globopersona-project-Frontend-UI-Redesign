import React from 'react'
import DashboardMetricCard from './DashboardMetricCard';
import { Rocket,UsersRound, Eye, TrendingDown, DollarSign, RefreshCcw, Target} from "lucide-react";

const metrics = [
  {
    title: "Total Campaigns",
    value: "47",
    subtitle: "Active & Completed",
    progress: 85,
    trend: "+12",
    icon: <Rocket size={20} className="text-white" />,
    bgColor: "bg-blue-50",
    barColor: "bg-blue-600",
  },
  {
    title: "Active Subscribers",
    value: "12,847",
    subtitle: "Engaged users",
    progress: 92,
    trend: "+234",
    icon: <UsersRound size={20} className="text-white" />,
    bgColor: "bg-purple-50",
    barColor: "bg-purple-600",
  },
  {
    title: "Avg Open Rate",
    value: "28.4%",
    subtitle: "Last 30 days",
    progress: 78,
    trend: "+2.1%",
    icon: <Eye size={20} className="text-white" />,
    bgColor: "bg-green-50",
    barColor: "bg-green-600",
  },
  {
    title: "Avg Click Rate",
    value: "4.7%",
    subtitle: "Engagement metric",
    progress: 65,
    trend: "-0.3%",
    icon: <Target size={20} className="text-white" />,
    bgColor: "bg-amber-50",
    barColor: "bg-amber-600",
  },
  {
    title: "Revenue Generated",
    value: "$24,847",
    subtitle: "From Campaigns",
    progress: 88,
    trend: "+$1,247",
    icon: <DollarSign size={20} className="text-white" />,
    bgColor: "bg-green-50",
    barColor: "bg-green-600",
  },
  {
    title: "Bounce Rate",
    value: "2.3%",
    subtitle: "Quality metric",
    progress: 88,
    trend: "-0.5%",
    icon: <TrendingDown size={20} className="text-white" />,
    bgColor: "bg-red-50",
    barColor: "bg-red-600",
  },
];

const PerformanceOverview = () => {
  return (
    <div className='bg-[#f8fafa] px-8 pt-8'>

        {/* Heading */}
        <div className='flex justify-between'>
        <div>
            <h1 className='text-xl font-bold'>PerformanceOverview</h1>
            <p className='text-gray-400'>Track you email marketing matrics in real time</p>
        </div>
        <div className='flex items-center gap-2 font-semibold text-gray-600'>
            <select name="" className='px-6 py-2 rounded-xl'>
                <option value="Last 7 days">Last 7 days</option>
            </select>
            <RefreshCcw />
        </div>
        </div>

        {/* Performance Overview Card */}
         <div className="grid grid-cols-3 gap-6 mt-6">
        {metrics.map((item) => (
          <DashboardMetricCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  )
}

export default PerformanceOverview