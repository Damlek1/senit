import React from 'react'
import Add from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>SenitChat</span>
        <span className='register'>Register</span>
        <form action="">
          <input type="text" name="" id="" placeholder='name' required/>
          <input type="email" name="" id="" placeholder='email' required/>
          <input type="password" name="" id="" placeholder='password' required/>
          <input style={{display: 'none'}} type="file" name="" id="file" />
          <label htmlFor='file'>
            <img src={Add} alt='' />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Already have an account? Login</p>

      </div>
    </div>
  )
}

export default Register