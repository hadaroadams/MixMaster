import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Form from '../components/Form'
import Product from '../components/Product'

const Home = () => {
  return (
    <>
      <Header/>
      <Form/>
      <div className=' mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full '>
        <Product/>
        <Product/>
      </div>
    </>
  )
}

export default Home
