import logo from './logo.svg';
import './App.css';
import Login from './Login'
import Home from './Home'
import React from "react";
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';

function App() {
    if(localStorage.getItem("userid") === null || localStorage.getItem("userid") === '0') {
        return (
            <div className="LoginPage">
                <Login />

            </div>
        )
    }

    return (
        <div className="App">
            <Home />
        </div>

    );
}

export default App;
