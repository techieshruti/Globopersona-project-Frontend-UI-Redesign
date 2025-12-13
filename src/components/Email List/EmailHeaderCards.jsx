import { Database } from 'lucide-react'
import React from 'react'

const EmailHeaderCards = ({title, value, icon,
    subtitle, bgColor}) => {
  return (
    <div className={`${bgColor} w-20 p-4 rounded-2xl flex flex-col gap-2 border-gray-200`}>
        <div >
            <h2>{title}</h2>
            <div className='flex justify-between'>
                <p>{value}</p>
                <span>{icon}</span>
            </div> 
            <p>{subtitle}</p>
        </div>
    </div>
  )
}

export default EmailHeaderCards