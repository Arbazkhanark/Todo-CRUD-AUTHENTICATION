import {BrowserRouter, Route, Routes} from "react-router-dom";
import List from "./component/List";
import Nav from "./component/Nav";
import { Login } from "./component/Login";
import { Register } from "./component/Register";
import { Home } from "./component/Home";

function App(){
  return(
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/todo" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;