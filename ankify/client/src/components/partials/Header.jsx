import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="header">
      <a href="https://apps.ankiweb.net/">
        {/* How do I get the logo to show? */}
        <img src="../../anki-logo.png"></img>
      </a>
      <Nav />
    </header>
  );
};

export default Header;
