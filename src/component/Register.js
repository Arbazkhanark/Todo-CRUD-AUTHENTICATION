import React from 'react';
import {Link} from "react-router-dom";
import {FaUserCircle} from "react-icons/fa"

export const Register = () => {
  return (
    <div className='login_logout'>
        <from>
            <h1>Register</h1>
            <FaUserCircle />
            <input type='text' placeholder='Enter Your Name' /> <br/>
            <input type='email' placeholder='Enter Your Email' /> <br />
            <input type='password' placeholder='Enter Your Password' /> <br />
            <input type='password' placeholder='Confirm Your Password' /> <br />
            <button className='btns'>Log In</button>
        </from>
        <br />
        <em>Already Have Account?</em>
        <Link to='/login'>Log In</Link>
    </div>
  )
}
