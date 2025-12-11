import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-gray-500 h-screen p-2 flex flex-col justify-between'>
        {/* LOGO */}
      <div>360Cario</div>
      
      {/* NAVIGATION BAR */}
      <nav>
        <ui>
          <li>Dashboard</li>
          <li>Email Lists</li>
          <li>Email Accounts</li>  
          <li>Email Compaign</li>  
          <li>Analytics</li>  
        </ui>
      </nav>

      {/* LOGIN iCON */}
      <div>Login Icon</div>
    </div>
  )
}

export default Sidebar