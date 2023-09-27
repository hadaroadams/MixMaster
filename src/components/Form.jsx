import React from 'react'
import { globalState } from '../utilities/Context'

const Form = () => {
    const {setSearchCockTails,searchCockTails,setIsDone} = globalState()
    const submit =(e)=>{
      e.preventDefault()
      setSearchCockTails(e.target.textArea.value)
      e.target.textArea.value=''
      setIsDone(false)
    }
    console.log(searchCockTails)
    return (
    <form action='#' onSubmit={submit} className=' mx-auto w-10/12 flex bg-slate-100 mt-16 py-10 px-6 shadow-md text-lg md:w-[600px]'>
      <input type="text" name='textArea' className='flex-[1] rounded-l-lg' />
      <button className='py-2 px-6 bg-green-500 rounded-r-lg duration-150 hover:bg-green-600 text-white'>Submit</button>
    </form>
  )
}

export default Form
