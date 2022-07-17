// import logo from './logo.svg';
// import './App.css';
// import ReactDOM from "react-dom/client";
// import {
//    BrowserRouter as Router,
//    Routes,
//    Route,
// } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import ProfilePage from "./pages/ProflePage";

function App() {
    return (
        <div>
            <ProfilePage />
        </div>
//        <BrowserRouter>
//            <Routes>
//                <Route path="/" element={<App />}>
//                    <Route path="login" element={<LoginPage />} />
//                    <Route path="profile" element={<ProfilePage />} />
//                    {/* <Route path="signup" element={<SignupPage />} /> */}
//                </Route>
//            </Routes>``
//        </BrowserRouter>
    );
}

export default App;
