import React from 'react'
import { memo } from 'react'
const Navbar = (props) => {
    console.log("Navbar is rendered")
  return (
    <div>
      I am {props.adjective} navbar
    </div>
  )
}

export default memo(Navbar)
