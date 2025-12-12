import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-screen bg-gray-100 flex flex-col w-64 justify-between'>
        {/* LOGO */}
        
      <div className='bg-red-200'>360Cario</div>
      {/* NAVIGATION BAR */}
      <nav>
        <ul className='bg-blue-500 flex flex-col gap-4 p-4'>
          <li>Dashboard</li>
          <li>Email Lists</li>
          <li>Email Accounts</li>  
          <li>Email Compaign</li>  
          <li>Analytics</li>  
        </ul>
      </nav>

      {/* LOGIN iCON */}
      <div>Login Icon</div>
    </div>
  )
}

export default Sidebar