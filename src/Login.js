import { useState } from "react";
import axios from 'axios';
import './App.css';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import LoginButton from './components/login-button';

const Login = () => {
    const [UnameOrEmail, setUnameOrEmail] = useState("");
    const [password, setpassword] = useState("");
    let [person] = useState("");
    const [cookies, setCookie] = useCookies(["name"]);
    const navigate = useNavigate();

    const sendGet = async (e) => {
        e.preventDefault();


        const headers = {
            "Content-Type": "application/json"
        };
        try {
            var text = process.env.REACT_APP_API_GATEWAY + 'api/login';
            const resp = await axios.get(text, {params : {username: UnameOrEmail, password: password}, headers: headers});
            person = resp.data;

        } catch (err) {
            // Handle Error Here
            alert(err);
        }
        if(person.userID > 0){
            localStorage.setItem('userid', person.userID);
            window.location.reload();
        }
        else{
            alert('Onjuiste combinatie')
        }
    };

    return (
        <div id="loginFrame">
            <form id="loginText" onSubmit={sendGet}>
                <div className="form-group">
                    <label htmlFor="Email or UserName">Email or username</label>
                    <p></p>
                    <input
                        type="text"
                        placeholder="Email or username"
                        required
                        value={UnameOrEmail}
                        onChange={(e) => setUnameOrEmail(e.target.value)}
                        className="Input"
                    />
                </div>
                <div className="form-group">
                    <p></p>
                    <label htmlFor="Password">Password</label>
                    <p></p>
                    <input
                        type="Password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        className="Input"
                    />
                </div>
                <p></p>
                <button type="submit">Log in</button>
            </form>
            <LoginButton/>
        </div>
    );
};


export default Login;

