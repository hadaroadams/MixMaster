import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading'

const CockTailDetail = () => {
  const [product,setProduct]=useState({})
  const [isLoaded,setIsLoaded]= useState(false)
  const {id}=(useParams())
  const {strDrink,strCategory,strGlass,strDrinkThumb,strIngredient1,strInstructions,strAlcoholic}=product
  useEffect(()=>{
    const url =`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${id}`
    const getProduct=async()=>{
      try{
        const data = await fetch(url)
        const {drinks}= await data.json()
        setProduct(drinks[0])
        setIsLoaded(true)
      }catch(error){
        console.log(error)
      }
    }
    getProduct()
  },[])
  console.log(product)
  if(!isLoaded){
    return(
      <>
        <Header/>
        <Loading/>
      </>
    ) 
  }else{
    return (
      <div className='pb-10'>
        <Header/>
        <div className='flex flex-col items-center mt-16 px-10 '>
          <Link to='/' className='bg-green-600 p-3 rounded-lg'>Back Home</Link>
          <h1 className='text-3xl font-bold mt-2'>{strDrink}</h1>
          <div className='flex flex-col md:flex-row w-full md:justify-between'>
            <div className=' md:flex-[0.47]'>
              <img className='h-[340px] w-full rounded-md' src={strDrinkThumb} alt="" />
            </div>
            <div className='text-xl space-y-6 mt-6 flex-[0.47]'>
              <p><span className='bg-green-600 rounded p-2 font-semibold '>Name:</span> {strDrink}</p>
              <p><span className='bg-green-600 rounded p-2 font-semibold '>category:</span> {strCategory}</p>
              <p><span className='bg-green-600 rounded p-2 font-semibold '>Info:</span>{strAlcoholic}</p>
              <p><span className='bg-green-600 rounded p-2 font-semibold '>Glass:</span> {strGlass}</p>
              <p><span className='bg-green-600 rounded p-2 font-semibold '>Ingredients:</span> {strIngredient1}</p>
              <p className=''><span className='bg-green-600 rounded p-2 font-semibold'>Instructions:</span> {strInstructions}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CockTailDetail
