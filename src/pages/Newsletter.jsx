import React from 'react'
import Header from '../components/Header'

const Newsletter = () => {
  return (
    <div>
        <Header/>
        <div className='flex justify-center w-full items-center text-xl mt-10 '>
            <div className='flex flex-col bg-white p-8 w-10/12 md:w-[600px] rounded-lg shadow-lg border'>
                <h2 className='text-center mb-5'>Our Newsletter</h2>
                <form action="" className='flex flex-col space-y-4 w-full'>
                    <label htmlFor="input" className='w-full '>
                        <p>First Name</p>
                        <input type="text" className='w-full rounded-sm border bg-[#F8FAFC] px-1' required/>
                    </label>
                    <label htmlFor="input" className='w-full'>
                        <p>Last Name</p>
                        <input type="text" className='w-full rounded-sm border bg-[#F8FAFC] px-1' required/>
                    </label>
                    <label htmlFor="email" className='w-full'>
                        <p>
                            Email
                        </p>
                        <input type="email" className='w-full rounded-sm border bg-[#F8FAFC] px-1' required/>
                    </label>
                    <button className='bg-green-500 rounded-md'>Submit</button>
                </form>
            </div>


        </div>
    </div>
  )
}

export default Newsletter
