import React from 'react';
import Contact from './Contact';

const Navbar = () => (
    <header>
        <nav
            className="navbar is-fixed-top"
            role="navigation"
            aria-label="main navigation"
        >
            <div id="nav-items">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://anule.github.com">
                        <h1>Anule Ndukwu</h1>
                    </a>
                    <div>
                        <span>
                            <a href="#about">About Me</a>
                        </span>
                        <span>
                            <a href="#projects">Projects</a>
                        </span>
                        <span>
                            <a href="#contact">Contact</a>
                        </span>
                    </div>
                </div>

                {/*<div className="navbar-menu">
          <span className="navbar-item">
            <a href="#about">About Me</a>
          </span>
          <span className="navbar-item">
            <a href="#projects">Projects</a>
          </span>
          <span className="navbar-item">
            <a href="#contact">Contact</a>
          </span>
</div>*/}
            </div>
        </nav>
        <Contact />
    </header>
);

export default Navbar;
