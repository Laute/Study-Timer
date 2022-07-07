import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import LoginPage from 'pages/LoginPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="login" element={<LoginPage />} />
                    {/* <Route path="signup" element={<SignupPage />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
