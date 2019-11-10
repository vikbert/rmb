import React from 'react';
import TopbarContainer from "./TopbarContainer";

const Topbar = () => (
    <>
        <nav className="navbar is-fresh is-transparent" role="navigation" aria-label="main navigation">
            <TopbarContainer/>
        </nav>
        <nav id="navbar-clone" className="navbar is-fresh is-transparent" role="navigation"
             aria-label="main navigation">
            <TopbarContainer/>
        </nav>
    </>
);

export default Topbar;
