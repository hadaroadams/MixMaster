import React, { createContext, useContext, useEffect, useState } from 'react'
import { apiFetch } from './Api'

const AppContext = createContext()

export const Context = ({children}) => {
    const [cockTails,setCocktails]= useState([])
    useEffect(()=>{
        apiFetch()
    },[])
  return (
    <AppContext.Provider>
      {children}
    </AppContext.Provider>
  )
}

export const globalState=()=>{
    return useContext(AppContext)
}

