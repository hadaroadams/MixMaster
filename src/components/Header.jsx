import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='flex flex-col pt-3 p-7  md:flex-row md:justify-between md:items-center bg-white'>
        <h1 className='text-4xl text-green-600 mb-5'>MixMaster</h1>
        <Nav/>
    </div>
  )
}

export default Header
