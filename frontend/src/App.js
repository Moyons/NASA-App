import React from "react";
import "./App.css";
import Pod from "./Pod";
import { Route, Routes, Link } from 'react-router-dom';
import Sidebar from "./components/SideBar/Sidebar";
import Navbar from "./components/NavBar/Navbar";

function App() {

  return (
    <div className="app">
      <Navbar />
      <Sidebar />
    </div>
    
  )
}

export default App;
