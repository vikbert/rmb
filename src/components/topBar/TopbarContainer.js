import React from 'react';
import RmbLogo from '../../assets/images/logos/rmb0.png';
import LoginLink from "./LoginLink";
import RegistrationLink from "./RegistrationLink";

// eslint-disable-next-line
const TopbarContainer = () => (
    <div className="container">
        <div className="navbar-brand">
            <a className="navbar-item" href="/">
                <img src={RmbLogo} alt="rmb" width="127px"/>
            </a>
            <a className="navbar-item is-hidden-desktop is-hidden-tablet" href="/#">
                {/*<SidebarToggleIcon/>*/}
            </a>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
               data-target="navbar-menu" href="/#">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbar-menu" className="navbar-menu is-static">
            <div className="navbar-start">
                <a className="navbar-item is-hidden-mobile" href="/#">
                    {/*<SidebarToggleIcon/>*/}
                </a>
            </div>

            <div className="navbar-end">
                <LoginLink/>
                <RegistrationLink/>
            </div>
        </div>
    </div>
);

export default TopbarContainer;
