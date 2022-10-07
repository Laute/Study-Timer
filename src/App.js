import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import Timer from "./components/Timer";

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
            {/* {authDetails} */}
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/login" element={<LoginPage setAuth={setAuth} />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/timer" element={<Timer />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
