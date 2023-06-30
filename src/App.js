import {BrowserRouter, Route, Routes} from "react-router-dom";
import List from "./component/List";
import Nav from "./component/Nav";
import { Login } from "./component/Login";
import { Register } from "./component/Register";
import { Home } from "./component/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import firebase from "./firebase";


function App(){

  const [user,setUser]=useState(null);

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        setUser(user);
      }else{
        setUser(null);
      }
    })
  },[])

  return(
    <BrowserRouter>
    <Nav user={user} />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/todo" element={<List user={user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;