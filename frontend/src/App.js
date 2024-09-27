import React from "react";
import "./App.css";
import Pod from "./Pod";
import { Route, Routes, Link } from 'react-router-dom';
import Sidebar from "./components/SideBar/Sidebar";
import Navbar from "./components/NavBar/Navbar";

function App() {

  return (
    /*<>
    <div>
      <li><Link to='/Pod'>Pod</Link></li>
    </div>

    <Routes>
      <Route path='/Pod' element={ <Pod />}></Route>
    </Routes> 
    </>*/

    <div>
      <Navbar>

      </Navbar>
      <Sidebar>

      </Sidebar>
    </div>
    
  )
}

export default App;
