import { Link } from "react-router-dom";
import "../App.css"
import { FaClipboardCheck,FaUser } from "react-icons/fa";

function Nav(){
    return(
        <>
            <div className="navbar">
                <div className="logo">
                    <FaClipboardCheck />
                    <Link  to="/">
                        <h3>ToDo List</h3>
                    </Link>
                </div>
                    
                <div class="btn-group custom" role="group" aria-label="Basic example">

                    <Link to="/login">
                        <button type="button" class="btn btn-secondary">Log In</button>
                    </Link>
                    <Link to="register">
                        <button type="button" class="btn btn-secondary">Register</button>
                    </Link>
                    <Link to="logout">
                        <button type="button" class="btn btn-danger">Log out</button>
                    </Link>
                </div>
                    {/* <button className="auth"> <FaUser /> </button> */}

            </div>

        </>
    )
}

export default Nav;