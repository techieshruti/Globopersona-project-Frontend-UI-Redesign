import React from 'react'
import { Database } from 'lucide-react'

const EmailHeader = () => {
  return (
    <div className='p-4 flex justify-between items-center border-b-2 border-gray-200'>
        {/*Left */}
        <div className='flex gap-3 items-center'>
            <Database
            size={40}
            className='bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white p-2 rounded-2xl'
            />
            <div>
                <h1 className="text-2xl font-bold">Email Lists</h1>
                <span className='text-gray-400 font-semibold'>Welcome back, Ravi! Manage your email compaigns</span>
            </div>
        </div>
        {/* Right */}
        <div className='flex gap-4 items-center'> 
            <div className='flex gap-2 items-center border-2 border-gray-300 px-3 py-1 rounded-lg'>
                <h1>icon</h1>
                <h1>Refresh</h1>
            </div>
            <button>
                <span>icon</span>
                Upload Email List</button>
        </div>
    </div>
  )
}

export default EmailHeader