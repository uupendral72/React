import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Recipes() 
{
    const [recipe,setrecipe] = useState([])
    useEffect(()=>
    {
        fetch('https://api.sampleapis.com/recipes/recipes')
        .then((res)=> res.json())
        .then((data)=> setrecipe(data))
    },[])
  return (
    <div className=' max-w-5xl m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            recipe.map((v,)=>
            (
                <div key={v.id} className='shadow shadow-emerald-500 p-5 rounded-2xl flex flex-col justify-center items-center gap-5'>
                    <img src={v.photoUrl} alt={v.title} height='200'/>
                    <Link to={'/Recipe/${v.id}'}> <h3>{v.title}</h3> </Link>
                    <p>{v.mainIngredient}</p>
                </div>  
            ))
        }

    </div>
  )
}

export default Recipes