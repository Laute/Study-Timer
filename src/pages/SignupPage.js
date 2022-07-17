import React, { useState, setState } from 'react';
import Header from '../components/Header.js'

function SignupPage() {
    return (
        <div>
            <Header />
            <SignupForm />
        </div>
    )
}

function SignupForm() {
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
    }
    const handleSubmit = () => {
        console.log(firstName, lastName, email, password);
    }
    return (
        <div class="form">
            <form class="form-fields">
                <label class="form-text">First Name</label>
                <div />
                <input type="text" id="firstName" onChange={(e) => handleInputChange(e)} /><br />
                <div />
                <label class="form-text">Last Name</label>
                <div />
                <input type="text" id="lastName" onChange={(e) => handleInputChange(e)} /><br />
                <div />
                <label class="form-text">Email</label>
                <div />
                <input type="text" id="email" onChange={(e) => handleInputChange(e)} /><br />
                <div />
                <label class="form-text">Password</label>
                <div />
                <input type="text" id="password" onChange={(e) => handleInputChange(e)} />
            </form>
            <div class="footer">
                <button onClick={() => handleSubmit()} type="submit" class="btn-large">Register</button>
            </div>
        </div>
    )
}

export default SignupPage;