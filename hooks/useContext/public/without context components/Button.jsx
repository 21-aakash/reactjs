import React from 'react'
import Component1 from './Component1'
const Button = (props) => {
  return (

    <>
    <div>
     <button><Component1 count={props.count}/></button>
    </div>
    </>
    
  )
}

export default Button
