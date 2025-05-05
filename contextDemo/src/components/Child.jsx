import React from 'react'
import GrandChild from './GrandChild'
function Child() {
  return (
    <div style={{height:'200px', width:'200px',border:'2px solid red', padding:'50px'}}>
     <GrandChild/>
    </div>
  )
}

export default Child