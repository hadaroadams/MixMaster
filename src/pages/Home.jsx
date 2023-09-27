import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Form from '../components/Form'
import Product from '../components/Product'
import { globalState } from '../utilities/Context'
import Loading from '../components/Loading'
import Error from '../components/Error'

const Home = () => {
    const {cockTails,isDone,isError}= globalState()
    console.log(cockTails)


  if(!isDone){
    return(
      <>
        <Header/>
        <Form/>
        <Loading/>
      </>
    )
  }else{
    return (
      <>
        <Header/>
        <Form/>
        <div className=' mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full '>
        {
          cockTails==null?
                <div className='absolute w-full  text-center'>
                  <h1 className='text-red-400 text-4xl'>Could not find Any</h1>
                </div>
                :
                cockTails.slice(0,20).map((item)=>{
                  const {idDrink,strDrink,strDrinkThumb,strGlass,strCategory}=item

                  return (
                  <Product id={idDrink} category={strCategory} image={strDrinkThumb} name={strDrink} title={strGlass} key={idDrink}/>
                  )
               })
          }
        </div>
      </>
    )
  }
}

export default Home
