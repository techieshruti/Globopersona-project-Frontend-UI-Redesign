import React from 'react'

const EmailHeader = () => {
  return (
    <div className='bg-[#f2f6fc] ml-20'>
        {/*Left */}
        <div>
            <h1>icon</h1>
            <div>
                <h1>Email List</h1>
                <span>Welcome back, Ravi! Manage your email compaigns</span>
            </div>
        </div>
        {/* Right */}
        <div>
            <div>
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