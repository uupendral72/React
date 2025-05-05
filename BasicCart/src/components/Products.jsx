import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
function Products()
 {
   const [products,setProducts] =useState([])
   async function fetchData()
   {
     try 
     {
      const res =await  axios.get("https://fakestoreapi.com/products")
      setProducts(res.data)
     }
     catch(error)
     {
       console.log(error)
     }
   }
  useEffect(()=>
    {
      fetchData();
    },[])
  return (
    <div className='m-auto max-w-5xl'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
        products.map((v,i) => (
          <ProductCard key={i} title={v.title} image={v.image} cat={v.category} description={v.description} price={v.price}/>
        )
        )
      }
      </div>
     
    </div>
  )
}

export default Products