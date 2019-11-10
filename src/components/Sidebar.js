import React from 'react';
import LogoSquare from '../assets/images/logos/fresh-square.svg';

const Sidebar = () => (
    <div className="sidebar">
        <div className="sidebar-header">
            <img src={LogoSquare} alt={'RMB'}/>
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
);

export default Sidebar;
