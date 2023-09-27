import React, { createContext, useContext, useEffect, useState } from 'react'
import { apiFetch } from './Api'

const AppContext = createContext()

export const Context = ({children}) => {
    const [cockTails,setCocktails]= useState([])
    const [searchCockTails,setSearchCockTails]=useState('')
    const [isDone,setIsDone] = useState(false)
    const [isError,SetIsError] = useState(false)
    
    useEffect(()=>{
        const api =async()=>{
              console.log(searchCockTails)
            try{
                const data= await apiFetch(searchCockTails)
                setCocktails(data)
                setIsDone(true)
                SetIsError(false)
                console.log(data,cockTails)
            }catch(e){
              isDone(false)
               SetIsError(true)
                console.log(e)

            }
        }
        api()
    },[searchCockTails])
  return (
    <AppContext.Provider value={{cockTails,setSearchCockTails,searchCockTails,isDone,setIsDone,isError}}>
      {children}
    </AppContext.Provider>
  )
}

export const globalState=()=>{
    return useContext(AppContext)
}

