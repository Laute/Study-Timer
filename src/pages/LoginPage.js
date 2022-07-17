import React, { useState, setState } from 'react';
import Header from '../components/Header.js'

function LoginPage() {
    return (
        <div class="login-page">
            <Header />
            <LoginBody />
            <LoginForm />
        </div>
    )
}


function LoginBody() {
    return (
        <div class="login-body">
            <div class="centred-body">
                <h2>Welcome Back!</h2>
            </div>
            <div class="body">
                <p>New to Pomodoro?</p>
                <button class="btn-small">Create an account</button>
            </div>
        </div>
    )
}

function LoginForm() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
    }
    const handleSubmit = () => {
        console.log(email, password);
    }
    return (
        <div class="form">
            <form class="form-fields">
                <label class="form-text">Email</label>
                <div />
                <input type="text" id="email" onChange={(e) => handleInputChange(e)} /><br />
                <div />
                <label class="form-text">Password</label>
                <div />
                <input type="text" id="password" onChange={(e) => handleInputChange(e)} />
            </form>
            <div class="footer">
                <button onClick={() => handleSubmit()} type="submit" class="btn-large">Login</button>
            </div>
        </div>
    )
}



export default LoginPage;