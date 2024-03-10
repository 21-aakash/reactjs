import React from 'react'
import { useEffect } from 'react'
const navbar = (props) => {

    //case01: runs on every render 
  useEffect(() => {
    
  alert("hey , i will run on every render ")
   
  })
//case02: runs on 1  st  render 
  useEffect(() => {
    
  alert("hey , i will run on 1st  render ")
   
  }, [])

//case 03: runs when a certain value is changed 
useEffect(() => {
    
  alert("hey , i will run when a valur is changed ")
   
  }, [props.color])


    useEffect(()=>
    {
        alert("color changed!!!!!!!!!!!!");

    }, [props.color])
  return (
    <div>
        This is Navbar of color {props.color}
    </div>
  )
}

export default navbar
