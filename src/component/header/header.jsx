/* Header.js */
import React, { useState } from 'react';
import './header.scss';
import Logo from '../../image/Pool_Logo.png';
import Phoneno from '../../image/phoneno.png';

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="" />
        <button onClick={toggleMobileMenu}>☰</button>{' '}
        {/* Use any icon or text for the button */}
      </div>

      <div className="phoneno">
        <img src={Phoneno} alt="" />
      </div>
      <nav className={`header-nav ${showMobileMenu ? 'show-mobile-menu' : ''}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/driver">Drive</a>
          </li>
          <li>
            <a href="/ride">Ride</a>
          </li>
          {/* <li>
            <a href="/login">Login</a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
