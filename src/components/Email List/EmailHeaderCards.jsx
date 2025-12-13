import { Database } from 'lucide-react'
import React from 'react'

const EmailHeaderCards = ({title, value, icon:Icon,
    subtitle, bgColor, textColor, iconBg, valueColor}) => {
  return (
    <div className={`${bgColor} ${textColor} p-3 rounded-xl flex flex-col gap-2 border-2 border-gray-200 shadow-sm`}>
        <div>
            <h2 className='text-sm font-semibold'>{title}</h2>
            <div className='flex justify-between'>
                <p className={`text-2xl font-bold ${valueColor}`}>{value}</p>
                 <div className={`${iconBg} p-2 rounded-xl`}>
          <Icon size={20} className="text-white" />
        </div>
            </div> 
      <p className="text-sm">{subtitle}</p>
        </div>
    </div>
  )
}

export default EmailHeaderCards