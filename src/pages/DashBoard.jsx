import React from 'react'
import Sidebar from '../components/layout/Sidebar'

const DashBoard = () => {
  return (
    <div>
        <Sidebar/>
        <div className='ml-20'>
            {/* Dashboard Content */}
            <div className='p-6'>
                <h1 className='text-3xl font-bold p-6'>Dashboard Overview</h1>
            <p>Welcome back, ravi!
                <span>All System Operationals</span>
            </p>
            </div>

            {/* matrics */}
            <div className='flex gap-4 mt-6'>
                <div>Compaign</div>
                <div>Subscriber</div>
                <div>Open Rating</div>
            </div>
        </div>
    </div>
  )
}

export default DashBoard