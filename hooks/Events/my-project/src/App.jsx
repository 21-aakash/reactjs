import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
// const [name, setname] = useState("Harry")

const [form, setform] = useState({email: "", phone: ""})

  const hoverbtn=()=>
  {
    alert("btn is clikced ")
  }

  const hoverdiv=()=>
  {
            alert("div is hovered")
  }

  const handlechange = (e)=>{

    setform({...form, [e.target.name]: e.target.value});
console.log(form)
  }
  return (
    <>
      <div className='main'>
        <button onClick={hoverbtn}> Click Me </button>
<div className='red' onMouseOver={hoverdiv} >
      
</div>

{/* <input type="text" value={name} onChange={handlechange} /> */}

<input type="text" name='email' value={form.email} onChange={handlechange} />
<input type="text" name='phone' value={form.phone} onChange={handlechange} />

      </div>
     
    </>
  )
}

export default App
