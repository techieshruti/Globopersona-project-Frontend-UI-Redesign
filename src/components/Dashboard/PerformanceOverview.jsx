import React from 'react'
import DashboardMetricCard from './DashboardMetricCard';
import { Rocket, ArrowUpRight, UsersRound, Eye,Shell, TrendingDown, DollarSign, Target} from "lucide-react";

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
    progress: 78,
    trend: "-0.3%",
    icon: <Target size={20} className="text-white" />,
    bgColor: "bg-amber-50",
    barColor: "bg-amber-600",
  },
];

const PerformanceOverview = () => {
  return (
    <div className='bg-[#f8fafa] px-8 pb-8'>

        {/* Heading */}
        <div>
            <h1 className='text-2xl font-bold'>PerformanceOverview</h1>
            <p className='text-gray-400'>Track you email marketing matrics in real time</p>
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