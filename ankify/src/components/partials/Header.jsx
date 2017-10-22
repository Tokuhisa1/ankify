import React from 'react';
import logo from '../../anki-logo.png';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="header">
      <a href="https://apps.ankiweb.net/">
        <img src={logo}></img>
      </a>-fy
      <Nav />
    </header>
  );
};

export default Header;
