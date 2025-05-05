import React from 'react'

function Footer() 
{
  const dt=new Date()
  const year =dt.getFullYear()
  return (
    <footer className='bg-gray-400 text-2xl text-center text-black py-4'>
     This site belongs to xyz &copy; {year}
    </footer>
  )
}

export default Footer