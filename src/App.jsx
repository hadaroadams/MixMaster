import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import {Context} from './utilities/Context'
import About from './pages/About'
import Newsletter from './pages/Newsletter'
import CockTailDetail from './pages/CockTailDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#F8FAFC] min-h-screen'>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/about" element={<About/>} /> 
            <Route path="/login" element={<Newsletter/>} /> 
            <Route path='/product/:id' element={<CockTailDetail/>}/>
          </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App
