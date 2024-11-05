
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">FNAXIOM</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#assessment">Full Internship Assessment</a>
      </nav>
      <div className="buttons">
        <button className="login">Login</button>
        <button className="get-started">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
