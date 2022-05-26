import { useState } from "react";
import axios from 'axios';
import './App.css';



const Login = () => {
    const [UnameOrEmail, setUnameOrEmail] = useState("");
    const [password, setpassword] = useState("");
    let [person] = useState("");


    const sendGet = async (e) => {
        e.preventDefault();

        const headers = {
            "Content-Type": "application/json"
        };
        try {
            var text = process.env.REACT_APP_API_GATEWAY + 'api/login';
            alert(text);
            const resp = await axios.get(text, {params : {username: UnameOrEmail, password: password}, headers: headers});
            person = resp.data;

        } catch (err) {
            // Handle Error Here
            alert(err);
        }
        if(person.userID > 0){
            alert('Ingelogd');
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
        </div>
    );
};


export default Login;

