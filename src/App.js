import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import React, { useState, setState } from 'react';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
    const [authDetails, setAuthDetails] = useState(
        localStorage.getItem('email')
    );

    function setAuth(email, password) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        setAuthDetails(email);
    }

    return (
        <div>
            {authDetails}
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/login" element={<LoginPage setAuth={setAuth} />} />
                    <Route path="/signup" element={<SignupPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
