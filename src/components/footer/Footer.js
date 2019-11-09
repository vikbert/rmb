import React from 'react';

const Footer = () => (
    <>
        <footer className="footer footer-dark">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <div className="footer-logo">
                            {/*<img src="./fresh_files/fresh-white-alt.svg">*/}
                        </div>
                    </div>
                    <div className="column">
                        <div className="footer-column">
                            <div className="footer-header">
                                <h3>Product</h3>
                            </div>
                            <ul className="link-list">
                                <li><a href="/#">Discover features</a></li>
                                <li><a href="/#">Why choose our Product ?</a></li>
                                <li><a href="/#">Compare features</a></li>
                                <li><a href="/#">Our Roadmap</a></li>
                                <li><a href="/#">Request features</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="column">
                        <div className="footer-column">
                            <div className="footer-header">
                                <h3>Docs</h3>
                            </div>
                            <ul className="link-list">
                                <li><a href="/#">Get Started</a></li>
                                <li><a href="/#">User guides</a></li>
                                <li><a href="/#">Admin guide</a></li>
                                <li><a href="/#">Developers</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="column">
                        <div className="footer-column">
                            <div className="footer-header">
                                <h3>Blogroll</h3>
                            </div>
                            <ul className="link-list">
                                <li><a href="/#">Latest News</a></li>
                                <li><a href="/#">Tech articles</a></li>
                                <li><a href="/#">Video Blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="column">
                        <div className="footer-column">
                            <div className="footer-header">
                                <h3>Follow Us</h3>
                                <nav className="level is-mobile">
                                    <div className="level-left">
                                            <span className="level-item">
                                                <span className="icon"><i className="fa fa-github"></i></span>
                                            </span>
                                        <span className="level-item">
                                                <span className="icon"><i className="fa fa-dribbble"></i></span>
                                            </span>
                                        <span className="level-item">
                                                <span className="icon"><i className="fa fa-facebook"></i></span>
                                            </span>
                                        <span className="level-item">
                                                <span className="icon"><i className="fa fa-twitter"></i></span>
                                            </span>
                                        <span className="level-item">
                                                <span className="icon"><i className="fa fa-bitbucket"></i></span>
                                            </span>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
);

export default Footer;
