import React, { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
function Allpokemons() 
{

    const[pokemons,setPokemons] = useState([])
    const[loading,setLoading] = useState(true)
    const fetchData = async (url) =>
    {
        try
        {
            const res= await fetch(url);
        const data =  await  res.json();
        setPokemons(data.results);
        setLoading(false)
        }
        catch(error)
        {
            console.log(error)
        }
       
    }
    useEffect( () =>
    {
       setTimeout(()=>fetchData(' https://pokeapi.co/api/v2/pokemon?limit=50'),2000)
    },[]
                                                                                                                                                                                                                              
    )
  return (
    <div>
       <p> {loading && 
         
         <DotLottieReact
      src="https://lottie.host/cb869d59-4343-4244-9c12-102262a951a2/V46nai8t3q.lottie"
      loop
      autoplay
    />
        
        } </p>
       <div className='pokemons grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
         {
            pokemons.map((v,i)=>(
            <p key={i} className='p-5 rounded-2xl shadow shadow-blue-400'>{v.name}</p>
           ))
         }
       </div>

    </div>
  )
}

export default Allpokemons