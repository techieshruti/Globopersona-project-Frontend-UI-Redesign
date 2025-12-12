import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-blue-200 h-screen flex flex-col justify-between p-4 w-60'>
      {/* logo */}
      <div className="logo">360Cario</div>

      {/* navbar list */}
      <div className="nav-list flex flex-col gap-4 mt-8">
        <a href="#dashboard" className="nav-item">
          <i className="icon-dashboard"></i> Dashboard
        </a>
        <a href="#profile" className="nav-item">
          <i className="icon-user"></i> Email List
        </a>
        <a href="#settings" className="nav-item">
          <i className="icon-settings"></i> Email Accounts
        </a>
        <a href="#settings" className="nav-item">
          <i className="icon-settings"></i> Email Compaigns
        </a>
        <a href="#settings" className="nav-item">
          <i className="icon-settings"></i> Analytics
        </a>
      </div>

      {/* login icon */}
      <div className="login-icon">
        <i className="icon-login">login</i>
      </div>
    </div>
  )
}

export default Sidebar