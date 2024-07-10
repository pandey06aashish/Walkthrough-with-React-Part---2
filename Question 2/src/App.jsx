import React from 'react'
import "./App.css"
import { useState } from 'react'


const App = () => {
  const [ count,setcount]=useState(0)

  return (
    <div className='container'>
      <h1>{count}</h1>
    <div className='buttons'>
      <button onClick={()=>setcount(count+1)}>Increment</button>
      <button onClick={()=>setcount(count-1)}>Decrement</button>
    </div>  
    </div>
  )
}

export default App