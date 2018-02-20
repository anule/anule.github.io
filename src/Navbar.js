import React from 'react';
import './Navbar.css';
import Contact from './Contact';

const Navbar = () => (
  <header>
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div id="nav-items">
        <h1 className="navbar-item">Anule Ndukwu</h1>

        <div className="navbar-menu">
          <span className="navbar-item">
            <a href="#about">About Me</a>
          </span>
          <span className="navbar-item">
            <a href="#projects">Projects</a>
          </span>
          <span className="navbar-item">
            <a href="#contact">Contact</a>
          </span>
        </div>
      </div>
    </nav>
    <Contact />
  </header>
);

export default Navbar;
