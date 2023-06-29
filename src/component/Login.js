import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  const [mail,setMail]=useState('');
  const [password,setPassword]=useState('');
  function handleEmail(e){
    setMail(e.target.value);
    console.log(mail);
  }

  function handlePassword(e){
    setPassword(e.target.value);
    console.log(password);
  }

  return (
    <div className='login_logout'>
        <from>
            <h1>Log In</h1>
            <input onChange={handleEmail} type='email' placeholder='Enter Your Username' /> <br />
            <input onChange={handlePassword} type='password' placeholder='Enter Your Password' /> <br />
            <button className='btns'>Log In</button>
        </from>
        <br />
        <em>New to This Website?</em>
        <Link to='/register'>Register</Link>
    </div>
  )
}
