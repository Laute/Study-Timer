import React from 'react';
import './Header.css';
import logo from './logo.svg';
import pfp from './profile.svg'
const Header = () => (  



  <div className="header">
    <div><img src={logo} alt="Logo" /></div>
    <div id="logo_text"><p>POMODORO</p></div>
    <div id="pfp"> <img src={pfp} /></div>
  </div>
)
export default Header;

