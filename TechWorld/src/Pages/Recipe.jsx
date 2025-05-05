import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
function Recipe() 
{
    const [recipe,setRecipe]=useState({})
    const {id} =useParams()
    const navigate= useNavigate()

    const handleRoute = () =>{
     
        if(id > 59 )
            {
              navigate('/*')
            }
            console.log(id)

    }
    
     useEffect(()=>
    {

        handleRoute()

       fetch('https://api.sampleapis.com/recipes/recipes')
       .then((res)=>res.json())
       .then((data)=>setRecipe(data))
       .catch((error)=> console.log(error))
    },[])
  return (
    <div>
       <img src={recipe.photoUrl} alt={recipe.title} />
       <p>{recipe.title}</p>
    </div>
  )
}

export default Recipe