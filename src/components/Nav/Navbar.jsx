import React from 'react'

function Navbar() {
  return (
    <>
      <div className='flex w-full h-[10%] justify-between bg-pink-300'>

        <div>iHaveSeen</div>
        <div className='flex '>

          <ul className='list-none flex space-x-2.5'>
            <li>All Movies</li>
            <li>Add Movies</li>
            <li>Add CSV</li>
            <li>Backup</li>
          </ul>

        </div>

      </div>
    </>
  )
}

export default Navbar