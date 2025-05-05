import {  } from 'react'


import './App.css'

function App() {
  
 

  return (
    <>
      <form  className='form'>
        <h1 className="login-title">Login</h1>

        <section className="input-box">
          <input type="text" name="username" placeholder='Usename' />
          <i className='bx bxs-user'></i>
       </section> <br/>

       <section className="input-box">
          <input type="password" name="password" placeholder='Password' />
          <i className='bx bxs-user'></i>
       </section>

       <section className='remember-forgot-box'>
        <div className='remember-me'>
          <input type="checkbox" name='remember-me' id='remember-me' />
          <label htmlFor="remember-me">
             <h5>Remember me</h5>
            </label>
            </div>
            <a className='forgot-password'href="#">
              <h5>Forget Password</h5>
            </a>
        </section>

        <button className='login-button' type='submit'>
          Login
        </button>

        <h5 className='dont-have-an-account'>
          Don't have an account?
          <a href="#"><b className='reg'>Register</b></a>
        </h5>
      
      </form>
      
      
        
      
      
    </>
  )
}

export default App
