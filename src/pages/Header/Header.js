import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';
import logo from './logo.svg';
import pfp from './profile.svg'
const Header = () => (  
  <div className="header">
    <div><Link to="/timer"><img src={logo} alt="Logo" /></Link></div>
    <div id="logo_text"><p>POMODORO</p></div>
    <div id="pfp"> <Link to="/profile"><img src={pfp} /></Link></div>
  </div>
)
export default Header;

