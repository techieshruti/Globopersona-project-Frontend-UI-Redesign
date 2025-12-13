import React from 'react'
import EmailHeader from './EmailHeader'
import Sidebar from '../layout/Sidebar'
import EmailHeaderCards from './EmailHeaderCards'
import { Database, Mail, Star, Target, TrendingUp, Users } from 'lucide-react'

const cardData=[
  {
    title: "Total lists",
    value: "7",
    icon: Database,
    subtitle: "Active campaigns",
    bgColor: "bg-[#edf4fc]",
    valueColor: "text-blue-800",
    textColor: "text-blue-500",
    iconBg: "bg-blue-500",
},
{
    title: "Total Contacts",
    value: "74",
    icon: Users,
    subtitle: "Valid contacts",
    bgColor: "bg-green-50",
    valueColor: "text-green-800",
    textColor: "text-green-500",
    iconBg: "bg-green-500",
},
{
    title: "This Month",
    value: "+55",
    icon: TrendingUp,
    subtitle: "New additions",
    bgColor: "bg-purple-50",
    valueColor: "text-purple-800",
    textColor: "text-purple-500",
    iconBg: "bg-purple-500",
},
{
    title: "Avg. Quality",
    value: "40%",
    icon: Star,
    subtitle: "Data quality score",
    bgColor: "bg-yellow-50",
    valueColor: "text-yellow-800",
    textColor: "text-yellow-500",
    iconBg: "bg-yellow-500",
},
{
    title: "Open Rate",
    value: "0%",
    icon: Mail,
    subtitle: "Average Opens",
    bgColor: "bg-pink-50",
    valueColor: "text-pink-800",
    textColor: "text-pink-500",
    iconBg: "bg-pink-500",
},
{
    title: "Click Rate",
    value: "0%",
    icon: Target,
    subtitle: "Average Clicks",
    bgColor: "bg-teal-50",
    valueColor: "text-teal-800",
    textColor: "text-teal-500",
    iconBg: "bg-teal-500",
},

]

const EmailList = () => {
  return (
    <div>
      <Sidebar/>
      <div className='bg-[#f5f7f9] ml-20'>
        <EmailHeader/>
        <div className="grid grid-cols-6 gap-4 mt-6 px-6">
        {cardData.map((item) => (
          <EmailHeaderCards key={item.title} {...item} />
        ))}
      </div>
     </div>
    </div>
  )
}

export default EmailList