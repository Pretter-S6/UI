import { useState } from "react";
import axios from 'axios';

const Login = () => {
    const [UnameOrEmail, setUnameOrEmail] = useState("");
    const [password, setpassword] = useState("");
    const [persons] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();

        axios.get(`https://localhost:44371/login`, {params : {username: UnameOrEmail, password: password}})
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            });
        console.log(persons.toString())
    };

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div className="form-group">
                    <label htmlFor="Email or UserName">Email or username</label>
                    <input
                        type="text"
                        placeholder="email or username"
                        required
                        value={UnameOrEmail}
                        onChange={(e) => setUnameOrEmail(e.target.value)}
                        className="Input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input
                        type="Password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        className="Input"
                    />
                </div>
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};
export default Login;
