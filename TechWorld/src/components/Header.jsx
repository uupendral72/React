import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    
    <header className='bg-blue-600 text-slate-50 text-2xl flex flex-col lg:flex-row  justify-center   lg:justify-between 
      item-center px-10 py-4'>
      <h1><span className='text-2xl text-slate-50'>Home-Food</span></h1>
     <nav className='flex flex-col text-xl lg:text-2xl lg:flex-row  gap-2 lg:gap-4'>
      
      <Link to ="/home" className='hover:text-red-500'> Home </Link>
      <Link to ="/recipes" className='hover:text-red-500'> Recipes </Link>
      <Link to ="/about"  className='hover:text-red-500'> About Us</Link>
      <Link to ="/contact"  className='hover:text-red-500'> Contact Us</Link>
      
      
     </nav>
    </header>
    
  )
}

export default Header