import React from 'react';
import './header.scss';

const Header = () => (
  <>
    <header>
      <div className="app-logo">
        <img src="assets/app-logo.png" alt="Logo Dipa" />
      </div>

      <nav>
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#team">The Team</a>
          </li>
          <li>
            <a href="#insights">Insights</a>
          </li>
        </ul>
        <button type="button">Hire Us</button>
      </nav>
    </header>
  </>
);
export default Header;
