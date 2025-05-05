import React, { useState } from 'react'
import Child from './Child'
import { createContext } from 'react'
function Parent() 
{
 const themeContext= createContext();
   const[theme,setTheme] = useState('light')
  return (
    <div style={{height:'300px', width:'300px',border:'2px solid red', padding:'50px'}}>
     <Child/>
     <button onClick={(e)=>setTheme(e.target.textContext)}>{theme== 'light' ? 'dark' : 'light'}</button>
     {theme}
    </div>
  )
}

export default Parent