import React from 'react'
import MovieLine from '../components/movieLine'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RandomQuote from'../components/RandomQuote'
import Film from '../components/Film'
import './App.css'
function App() {
  return (
    <div className='app'>
      <Header/>
     <MovieLine/>
     <Film/>
    
     <Footer/>
    
     
     
    </div>
  )
}

export default App