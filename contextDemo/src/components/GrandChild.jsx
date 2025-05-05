import React, { useContext } from 'react'
import { myContext } from '../main'
function GrandChild() 
{
    const  c = useContext(myContext)
  return (
    <div style={{height:'100px', width:'100px',border:'2px solid red', padding:'50px'}}>
      {c}
    </div>
  )
}

export default GrandChild