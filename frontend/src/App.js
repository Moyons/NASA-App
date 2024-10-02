import React from "react";
import "./styles/App.css";
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
