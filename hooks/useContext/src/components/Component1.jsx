import React from 'react'
import { useContext } from 'react'
import { varcontext } from '../context/context';

const Component1 = () => {

  const value =useContext(varcontext);
  return (
    <>
    <div>{value.count}</div>
    </>
  )
}

export default Component1
