import React from 'react';
import LogoSquare from '../assets/images/logos/fresh-square.svg';

const Sidebar = () => (
    <>
        <div className="sidebar">
            <div className="sidebar-header">
                <img src={LogoSquare} alt={'RMB'}/>
                <a className="sidebar-close" href="/#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round" className="feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </a>
            </div>
            <div className="inner">
                <ul className="sidebar-menu">
                    <li>
                        <span className="nav-section-title"></span>
                    </li>
                    <li className="have-children">
                        <a href="https://cssninjastudio.github.io/#">
                            <span className="fa fa-user"></span>User</a>
                        <ul>
                            <li><a href="https://cssninjastudio.github.io/#">Profile</a></li>
                            <li><a href="https://cssninjastudio.github.io/#">Account</a></li>
                            <li><a href="https://cssninjastudio.github.io/#">Settings</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </>
);

export default Sidebar;
