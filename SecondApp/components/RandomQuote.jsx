import React, { useEffect, useState } from 'react'
function RandomQuote() {
    const [Quote,setQuote]=useState({})
    useEffect(()=>
    {
       fetch("https://dummyjson.com/quotes")
       .then((res)=>res.json())
       .then((data)=> setQuote(data))
       .catch((err)=> console.log(err))
    },[])
  return (
    <div>
        <h2 className=' h-screen flex flex-col justify-center items-center gap-2'>{Quote.quote}</h2>
        <p className=' text-3xl'>{Quote.author}</p>
    </div>
  )
}

export default  RandomQuote