import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {FaUserCircle} from "react-icons/fa";
// import firebase, { auth } from '../firebase'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from '../firebase';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const [mail,setMail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    console.log(mail,password)
    try{
      await firebase.auth().createUserWithEmailAndPassword(mail,password);
      toast.success('User registered successfully!');
      navigate("/login");
    }
    catch(err){
      toast.error("Register Failed",err)
    }
  }
  return (
    <div className='login_logout'>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <h1>Register</h1>
            <FaUserCircle />

            <input type='email' placeholder='Enter Your Email' onChange={(x)=>setMail(x.target.value)} /> <br />
            <input type='password' placeholder='Enter Your Password' onChange={(x)=>setPassword(x.target.value)} /> <br />
            <button type='submit' className='btns'>Register</button>
        </form>
        <br />
        <em>Already Have Account?</em>
        <Link to='/login'>Log In</Link>
        <ToastContainer />
    </div>
  )
}
