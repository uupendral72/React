import React, {  useState } from 'react'

function Movie(props) 
{
  console.log(props.title)
  console.log(props.span)
  console.log(props.hero)
  console.log(props.id)
  
  const [value,setValue]=useState(0)
  const [color,setColor]=useState('#ffffff')
  
  function changeColor(e)
  {
    setColor(e.target.value)
  }

  

  return (
    <div>
      <h1 style={{textAlign:'center'}}> HIT Verse Movies</h1>
     <div className='body'>
      <div className='card' id={props.id}>
        <a href={props.trailer} target='blank'>
        <img src={props.url} alt={props.span} />
        </a>
        
        
        <span className='title'> {props.span}</span>
        
      </div>

      <div className='card' id={props.id}>
       <a href={props.trailer} target='blank'>
        <img src={props.url} alt={props.span} />
        </a>
        
        <span className='title'> {props.span}</span>
        
        
      </div>
      
      <div className='card' id={props.id}>
      <a href={props.trailer} target='blank'>
        <img src={props.url} alt={props.span} />
      </a>
        <span className='title'> {props.span}</span>
      </div>
    </div>
    <div>
    

       <div className='details' style={{backgroundColor:color}}>
         <h2 style={{textAlign:'center'}}> {props.title}</h2>
         <h3 style={{textAlign:'center', fontFamily:'sans-serif'}}>{props.hero}</h3>
         <h2 style={{textAlign:'center'}}> Tickets Quantity</h2>
         <h2 style={{textAlign:'center'}}>{value}</h2>
          < div className='container'>
           <button onClick={()=>setValue(value-1)}>-</button> 
           <button onClick={()=>setValue(0)}>reset</button> 
           <button onClick={()=>setValue(value+1)}>+</button> 
           <p>
               <input type="text" placeholder='Enter Color' onChange={changeColor} />
            </p>
           <br/>
          

           
      
           
          </div>
       </div>
    </div>
    <br />
    </div>
      
  )
}

export default Movie