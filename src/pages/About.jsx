import React from 'react'
import Header from '../components/Header'
import Loading from '../components/Loading'
import Error from '../components/Error'

const About = () => {
  return (
    <div>
        <Header/>
        <div className='mx-8 mt-20'>
            <h1 className='text-slate-800 text-4xl'>About Us</h1>
            <p className=' text-slate-600'>
                Introducing "MixMaster," the ultimate party sidekick
                app that fetches cocktails from the hilarious Cocktails 
                DB API. With a flick of your finger, you'll unlock a treasure 
                trove of enchanting drink recipes that'll make your taste buds 
                dance and your friends jump with joy. Get ready to shake up 
                your mixology game, one fantastical mocktail at a time, and 
                let the laughter and giggles flow!
            </p>
        </div>
      
    </div>
  )
}

export default About
