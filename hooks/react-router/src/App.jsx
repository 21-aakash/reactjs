import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from './components/User'
import Home from'./components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import About from './components/About'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
const router= createBrowserRouter([

  {
    path: '/',
    element: <><Navbar/> <Home/></>
  },
  {
    path: '/login',
    element: <><Navbar/> <Login/></>
  },
  {
    path: '/about',
    element: <><Navbar/> <About/></>
  },
  {
    path: '/user/:username',
    element: <><Navbar/> <User/></>
  },

 
])


  return (
    <>
    
    <RouterProvider router={router} />
      
    </>
  )
}

export default App
