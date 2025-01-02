import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from './components/Add'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
    <Routes>
      <Route path='/add' element={<Add/>} />
      <Route path='/home' element={<Home/>} />
      </Routes> 
    </>
  )
}

export default App
