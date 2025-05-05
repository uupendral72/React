import React, { useState } from 'react'

function FunComp()
 {
    const [count,setCount]=useState(0)
  return (
    <div>
        <h2>I'm Function component </h2>
        <p>{count}</p>
        <button onClick={()=> setCount(count+1 )}>-</button>
        <button onClick={()=>setCount(0)}> Reset </button>
        <button onClick={()=> setCount(count+1)}> + </button>
        <button onClick={()=>setCount("prasad")}> Click Me</button>

    </div>
  )
}

export default FunComp