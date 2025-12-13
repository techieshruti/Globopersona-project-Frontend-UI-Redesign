import React from 'react'

const EmailHeader = () => {
  return (
    <div className='p-4 flex justify-between items-center border-b-2 border-gray-200'>
        {/*Left */}
        <div className='flex gap-4 items-center'>
            <h1>icon</h1>
            <div>
                <h1>Email List</h1>
                <span>Welcome back, Ravi! Manage your email compaigns</span>
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