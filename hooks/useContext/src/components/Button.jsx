import React from 'react'
import Component1 from './Component1'
import { useContext } from 'react'
import { varcontext } from '../context/context';
const Button = () => {

  const value =useContext(varcontext);
  return (

    <>
    <div>
    <button onClick={() => value.setCount((count) => count + 1)}>
      <span><Component1/></span>
     </button>


    </div>
    </>
    
  )
}

export default Button
