import React from 'react'
import {useSelector, useDispatch} from 'react-redux'


const Navbar = () => {
    const count =useSelector((state)=>state.counter.value)
  return (
    <div>
      <p>This is navbar {count} </p>
    </div>
  )
}

export default Navbar
