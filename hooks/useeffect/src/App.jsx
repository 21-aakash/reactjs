import { useState , useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


const[color,setColor] = useState(0);



  useEffect(()=>{

    alert("count change hua hai .....!!!")
setColor(color+1);

  } , [count])  //depends ki count change ho then fun will execute 






  
  return (
    <>
    <Navbar  color= {"navy"+ "blue" + color} />
      <button onClick={()=>{setCount(count+1)}}>Click Me{count}</button>
   </>
  )
}

export default App
