import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png'


function Header() {
  return (
    <header className="header">
      <img
        src={logo} 
        alt="Logo"
        className="logo"
      />
      <img
        src={logo2} 
        alt="Logo"
        className="logo"
      />
    </header>
  );
}

export default Header;
