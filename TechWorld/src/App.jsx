import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Recipes from './Pages/Recipes'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'

import NotFound from './Pages/NotFound'

function App() {
  return (
    <>
    <div>
      <Header/>
      <Routes >
        <Route path='/' Component={Home}/>
        <Route path='/home' Component={Home}/>
        <Route path='/about' Component={AboutUs}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='recipes' Component={Recipes}/>
        <Route path='/*' Component={NotFound}/>
      </Routes>
       
      <Footer/>

    </div>
    </>
  )
}

export default App