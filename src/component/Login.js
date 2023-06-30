import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [mail,setMail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    console.log(mail,password);
    try{
      await firebase.auth().signInWithEmailAndPassword(mail,password);
      toast.success("LogIn Successfully");
      navigate("/todo");
    }catch(err){
      toast.error("Failed to Login",(err));
    }
  }

  return (
    <div className='login_logout'>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <h1>Log In</h1>
            <input onChange={(e)=>setMail(e.target.value)} type='email' placeholder='Enter Your Username' value={mail} /> <br />
            <input onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter Your Password' value={password
            } /> <br />
            <button className='btns'>Log In</button>
        </form>
        <br />
        <em>New to This Website?</em>
        <Link to='/register'>Register</Link>
        <ToastContainer />
    </div>
  )
}
