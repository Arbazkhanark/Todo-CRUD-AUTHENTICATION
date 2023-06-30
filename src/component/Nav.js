import { Link } from "react-router-dom";
import "../App.css"
import { FaClipboardCheck,FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import firebase from "../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Nav({user}){
    const navigate=useNavigate();
    return(
        <>
            <div className="navbar">
                <div className="logo">
                    <FaClipboardCheck />
                    <Link  to="/">
                        <h3>ToDo List</h3>
                    </Link>
                </div>
                    
                <div className="btn-group custom" role="group" aria-label="Basic example">


                    {user?<div>
                        <button type="button" className="btn btn-danger" onClick={()=>{
                            firebase.auth().signOut();
                            toast.warn("Logged Out");
                            navigate("/login");
                        }}>Log out</button>
                    </div>:
                    <>
                        <Link to="/login">
                            <button type="button" className="btn btn-secondary">Log In</button>
                        </Link>
                        <Link to="register">
                            <button type="button" className="btn btn-secondary">Register</button>
                        </Link>
                    </>}
                </div>
                    {/* <button className="auth"> <FaUser /> </button> */}

            </div>
            <ToastContainer />
        </>
    )
}

export default Nav;