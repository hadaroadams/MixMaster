import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  console.log('did i')
  return (
    <>
      <ul className='flex flex-col md:flex-row tracking-[4px] md:space-x-5'>
        <Link to='/' className='hover:text-green-500 duration-150'>Home</Link>
        <Link to='/about' className='hover:text-green-500 duration-150'>About</Link>
        <Link to='/login' className='hover:text-green-500 duration-150'>Newsletters</Link>
      </ul>
    </>
  )
}

export default memo(Nav)
