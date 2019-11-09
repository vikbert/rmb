import React from 'react';
import Logo from '../assets/images/logos/rmb1.png';

// eslint-disable-next-line
const TopbarContainer = () => (
    <div className="container">
        <div className="navbar-brand">
            <a className="navbar-item" href="http://google.de">
                <img src={Logo} alt="rmb" width='127px'/>
            </a>
            <a className="navbar-item is-hidden-desktop is-hidden-tablet" href='http://google.de'>
                <div id="menu-icon-wrapper" className="menu-icon-wrapper" style={{visibility: "visible"}}>
                    <svg width="1000px" height="1000px">
                        <path className="path1"
                              d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                        <path className="path2" d="M 300 500 L 700 500"></path>
                        <path className="path3"
                              d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
                    </svg>
                    <button id="menu-icon-trigger" className="menu-icon-trigger"></button>
                </div>
            </a>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
               data-target="navbar-menu" href='http://google.de'>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbar-menu" className="navbar-menu is-static">
            <div className="navbar-start">
                <a className="navbar-item is-hidden-mobile" href='http://google.de'>
                    <div id="menu-icon-wrapper" className="menu-icon-wrapper" style={{visibility: "visible"}}>
                        <svg width="1000px" height="1000px">
                            <path className="path1"
                                  d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                            <path className="path2" d="M 300 500 L 700 500"></path>
                            <path className="path3"
                                  d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
                        </svg>
                        <button id="menu-icon-trigger" className="menu-icon-trigger"></button>
                    </div>
                </a>
            </div>

            <div className="navbar-end">
                <a href="https://cssninjastudio.github.io/#" 
                   className="navbar-item is-secondary modal-trigger"
                   data-modal="auth-modal">
                    Log in
                </a>
                <a className="navbar-item" href='http://google.de'>
                    <span className="button signup-button rounded secondary-btn raised">
                        Sign up
                    </span>
                </a>
            </div>
        </div>
    </div>
);

export default TopbarContainer;
