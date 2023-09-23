import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import {Context} from './utilities/Context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#F8FAFC] min-h-screen'>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} /> 
          </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App
