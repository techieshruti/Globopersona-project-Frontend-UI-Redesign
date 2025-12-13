import React from 'react'
import EmailHeader from './EmailHeader'
import Sidebar from '../layout/Sidebar'

const EmailList = () => {
  return (
    <div>
      <Sidebar/>
      <div className='bg-[#f2f6fc] ml-20'>
        <EmailHeader/>
     </div>
    </div>
  )
}

export default EmailList