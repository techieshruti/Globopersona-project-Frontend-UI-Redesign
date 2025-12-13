import React from 'react'
import EmailHeader from './EmailHeader'
import Sidebar from '../layout/Sidebar'
import EmailHeaderCards from './EmailHeaderCards'
import { Database } from 'lucide-react'

const cardData=[
  {
    title: "Total lists",
    value: "7",
    icon: <Database size={20} className="text-white" />,
    subtitle: "Active campaigns",
    bgColor: "bg-blue-50",
}
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