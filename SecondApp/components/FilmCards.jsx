import React from 'react'


function FilmCards(title,vote)
 {
  return (
    <div className='Filcards'>
        <img src={'https://image.tmdb.org/t/p/w500/poster'} alt="" />
        <h2>{title}</h2>
        <p>{vote*10}%</p>

    </div>
  )
}

export default FilmCards