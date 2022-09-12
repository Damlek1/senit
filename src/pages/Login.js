import React from 'react'
import '../style.scss'

const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>SenitChat</span>
        <span className='register'>Login</span>
        <form action="">
          <input type="email" name="" id="" placeholder='email' required/>
          <input type="password" name="" id="" placeholder='password' required/>

          <button>Sign In</button>
        </form>
        <p>Don't have an account? Register</p>

      </div>
    </div>
  )
}

export default Login