import React, { useState } from 'react'
import { useEffect } from 'react'
import FilmCards from './FilmCards'
function Film() 
{
  useState('day')
  const [movies,SetMovies]=useState([])
    
    const fetchData=async()=>
    {
      try
      {
        const res=await fetch('https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=490d0a44b6149367570c3931b409d681')
         const data = await res.json();
         console.log(data.results);
         SetMovies(data.results)

         
      }
      catch(error)
      {
         console.log(error)
      }
    }
    
    useEffect(function()
    {
      fetchData()  
    },[])
  return (
    <div className='movies'>
      {
        movies.map((v,i)=>
        (
          <FilmCards key={i} 
          title = {v.title}
           vote = {v.vote_average} 
           poster = {v.poster_path} />
        )

          )
      }
      
    </div>
  )
}

export default Film