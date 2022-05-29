import logo from './logo.svg';
import './App.css';
import Login from './Login'
import Home from './Home'
import React from "react";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={ <Home/> } />
              <Route path="login" element={ <Login/> } />
          </Routes>
      </div>
  );
}

export default App;
