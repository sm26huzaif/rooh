// import logo from './logo.svg';
import "./App.css";
import Navbar from "./compnent/Navbar";
import Home from "./compnent/Home";
import About from "./compnent/About";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
      
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
