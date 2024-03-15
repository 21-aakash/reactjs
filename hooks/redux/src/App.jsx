import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement , mul} from './redux/counter/counter'
import Navbar from './components/Navbar'

import './App.css'


function App() {
 
const count =useSelector((state)=>state.counter.value)
const dispatch= useDispatch();

  return (
    <>
    <Navbar/>
    <button onClick={()=>{dispatch(decrement())}}>-</button>
     <p>This is {count}</p>
     <button onClick={()=>{dispatch(increment())}}>+</button>
     <button onClick={()=>{dispatch(mul())}}>*</button>
    </>
  )
}

export default App
