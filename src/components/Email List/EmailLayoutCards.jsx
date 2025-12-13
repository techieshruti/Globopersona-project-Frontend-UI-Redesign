import React from 'react'

const EmailLayoutCards = () => {
  return (
    <div className='ml-5 bg-slate-700 flex gap-2 justify-between'>
        <div className=''>
            <input 
            className='pt-2'
            type="text"
            placeholder='Search lists by name, description, or tags...'/>
        <select name="">
            <option value="All Status">All Status</option>
        </select>
        <button>icon Filters</button>
        </div>

        <div className='flex justify-center items-center gap-4'>
            <button>icon Grid</button>
            <h1>icon Lists</h1>
        </div>
    </div>
  )
}

export default EmailLayoutCards