import React from 'react'
import { Link } from 'react-router-dom'
import image from './../assets/download (1).jpeg'

const Product = ({image,title,category,id,name}) => {
  return (
    <article className='bg-white w-10/12 shadow-md hover:shadow-lg justify-self-center mb-10 rounded-lg  h-fit pb-5'>
        <img src={image} alt="" className='w-full h-[250px] rounded-t-lg'/>
        <div className='m-5  mb-0space-y-1'>
            <h3 className='text-xl font-semibold'>{title}</h3>
            <p>{name}</p>
            <p>{category}</p>
        </div>
        <Link className='bg-green-400 rounded px-4 py-2 m-6'>Details</Link>
    </article>
  )
}

export default Product
