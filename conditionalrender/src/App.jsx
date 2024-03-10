import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const [showbtn,setshowbtn] = useState(true)

const [todos, setodos] = useState(
  [
    {title:"Todo1",
  desc: "This is shopping list"},
    {title:"Todo2",
  desc: "This is grocery list"},
    {title:"Todo3",
  desc: "This is textile list"},
  ]
);




const Todo= ({todo})=>
{
  return (

    <>
    <div className="m-4 border border-1 border-purple-400">
    <div className='todo'>{todo.title}</div>
    <div className='todo'>{todo.desc}</div>

    </div>
    
    
    </>
  )
}
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={()=>{setshowbtn(!showbtn); }}>Switch off</button>
    {/* {showbtn?<button> This is secondi button  </button>: "thenga" }   ---one way for conditional events */}
    {showbtn && <button> This is second button  , close me !!! </button>}
      <div>

        {todos.map(todo=>{

          // return <Todo key={todo.title} todo={todo}/>
          return (
            <div key={todo.title} className="m-4 border border-1 border-purple-400">
    <div className='todo'>{todo.title}</div>
    <div className='todo'>{todo.desc}</div>

    </div>
          )
        })}


      </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
