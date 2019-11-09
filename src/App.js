import React from 'react';
import './assets/scss/core.scss';
import Preloader from "./components/Preloader";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import HeroBody from "./components/HeroBody";
import Partners from "./components/Partners";

function App() {
    return (
        <div>
            <Preloader/>
            <section className="hero is-fullheight is-default is-bold">
                <Topbar/>
                <HeroBody/>
            </section>

            <section className="section section-feature-grey is-medium">
                <div className="container">
                    <div className="title-wrapper has-text-centered">
                        <h2 className="title is-2">Great Power Comes </h2>
                        <h3 className="subtitle is-5 is-muted">With great Responsability</h3>
                        <div className="divider is-centered"></div>
                    </div>

                    <div className="content-wrapper">
                        <div className="columns">
                            <div className="column is-one-third">
                                <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1"
                                     data-animation="fadeInLeft">
                                    <div className="card-title">
                                        <h4>Bestellung bei Amazon</h4>
                                    </div>
                                    <div className="card-icon">
                                        {/*<img src="./fresh_files/mouse-globe.svg">*/}
                                    </div>
                                    <div className="card-text">
                                        <p>This is some explanatory text that is on two rows</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://cssninjastudio.github.io/#"
                                           className="button btn-align-md accent-btn raised">Review Starten</a>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="feature-card is-bordered has-text-centered revealOnScroll delay-2"
                                     data-animation="fadeInLeft">
                                    <div className="card-title">
                                        <h4>Veröffentlichen die Bewertung</h4>
                                    </div>
                                    <div className="card-icon">
                                        {/*<img src="./fresh_files/laptop-cloud.svg">*/}
                                    </div>
                                    <div className="card-text">
                                        <p>This is some explanatory text that is on two rows</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://cssninjastudio.github.io/#"
                                           className="button btn-align-md secondary-btn raised">Review Starten</a>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="feature-card is-bordered has-text-centered revealOnScroll delay-3"
                                     data-animation="fadeInLeft">
                                    <div className="card-title">
                                        <h4>Geldrückgabe auf Paypal</h4>
                                    </div>
                                    <div className="card-icon">
                                        {/*<img src="./fresh_files/plug-cloud.svg">*/}
                                    </div>
                                    <div className="card-text">
                                        <p>This is some explanatory text that is on two rows</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://cssninjastudio.github.io/#"
                                           className="button btn-align-md primary-btn raised">Review Starten</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section is-medium">
                <div className="container">
                    <div className="columns">
                        <div className="column is-centered-tablet-portrait">
                            <h1 className="title section-title">You're here because you want the best</h1>
                            <h3 className="subtitle is-4 is-muted">And we Know it</h3>
                            <div className="divider"></div>
                        </div>
                        <div className="column is-8 mt-60">

                            <article className="media icon-box">
                                <figure className="media-left">
                                    <p className="image">
                                        {/*<img src="./fresh_files/laptop-globe.svg">*/}
                                    </p>
                                </figure>
                                <div className="media-content mt-50">
                                    <div className="content">
                                        <p>
                                            <span className="icon-box-title">Powerful and unified interface</span>
                                            <span className="icon-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor.</span>
                                        </p>
                                    </div>
                                </div>
                            </article>

                            <article className="media icon-box">
                                <figure className="media-left">
                                    <p className="image">
                                        {/*<img src="./fresh_files/doc-sync.svg">*/}
                                    </p>
                                </figure>
                                <div className="media-content mt-50">
                                    <div className="content">
                                        <p>
                                            <span className="icon-box-title">Cross device Synchronisation</span>
                                            <span className="icon-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor.</span>
                                        </p>
                                    </div>
                                </div>
                            </article>

                            <article className="media icon-box">
                                <figure className="media-left">
                                    <p className="image">
                                        {/*<img src="./fresh_files/mobile-feed.svg">*/}
                                    </p>
                                </figure>
                                <div className="media-content mt-50">
                                    <div className="content">
                                        <p>
                                            <span className="icon-box-title">Nomad System</span>
                                            <span className="icon-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor.</span>
                                        </p>
                                    </div>
                                </div>
                            </article>

                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-feature-grey is-medium">
                <div className="container">

                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="has-text-centered">
                                {/*<img className="pushed-image" src="./fresh_files/app-mockup.png">*/}
                            </div>
                        </div>
                    </div>

                    <div className="title-wrapper has-text-centered">
                        <h2 className="title is-2">One Platform</h2>
                        <h3 className="subtitle is-5 is-muted">To rule them All</h3>
                    </div>

                    <p className="has-text-centered mt-20">
                        <span className="button cta is-large rounded secondary-btn raised">
                            Get Started
                        </span>
                    </p>
                </div>
            </section>

            <section className="section is-medium section-secondary">
                <div className="container">

                    <div className="title-wrapper has-text-centered">
                        <h2 className="title is-2 light-text is-spaced">Our Clients love us !</h2>
                        <h3 className="subtitle is-5 light-text">Lorem ipsum sit dolor amet is a dummy text used by
                            typography industry </h3>
                    </div>

                    <div className="content-wrapper">
                        <div className="columns is-vcentered">
                            <div className="column is-4">
                                <figure className="testimonial">
                                    <blockquote>
                                        Lorem ipsum dolor sit amet, elit deleniti dissentias quo eu, hinc minim appetere
                                        te usu, ea case duis scribentur has. Duo te consequat elaboraret, has quando
                                        suavitate at.
                                    </blockquote>
                                    <div className="author">
                                        {/*<img src="./fresh_files/1.png" alt="">*/}
                                            <h5>Irma Walters</h5><span>Accountant</span>
                                    </div>
                                </figure>
                            </div>
                            <div className="column is-4">
                                <figure className="testimonial">
                                    <blockquote>
                                        Lorem ipsum dolor sit amet, elit deleniti dissentias quo eu, hinc minim appetere
                                        te usu, ea case duis scribentur has. Duo te consequat elaboraret, has quando
                                        suavitate at.
                                    </blockquote>
                                    <div className="author">
                                        {/*<img src="./fresh_files/2.png" alt="">*/}
                                            <h5>John Bradley</h5><span>Financial Analyst</span>
                                    </div>
                                </figure>
                            </div>
                            <div className="column is-4">
                                <figure className="testimonial">
                                    <blockquote>
                                        Lorem ipsum dolor sit amet, elit deleniti dissentias quo eu, hinc minim appetere
                                        te usu, ea case duis scribentur has. Duo te consequat elaboraret, has quando
                                        suavitate at.
                                    </blockquote>
                                    <div className="author">
                                        {/*<img src="./fresh_files/3.png" alt="">*/}
                                            <h5>Gary Blackman</h5><span>HR Manager</span>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-light-grey is-medium">
                <div className="container">
                    <div className="title-wrapper has-text-centered">
                        <h2 className="title is-2 is-spaced">Drop us a line or two </h2>
                        <h3 className="subtitle is-5 is-muted">We'd love to hear from You</h3>
                        <div className="divider is-centered"></div>
                    </div>

                    <div className="content-wrapper">
                        <div className="columns">
                            <div className="column is-6 is-offset-3">
                                <form>
                                    <div className="columns is-multiline">
                                        <div className="column is-6">
                                            <input className="input is-medium" type="text"
                                                   placeholder="Enter your Name"/>
                                        </div>
                                        <div className="column is-6">
                                            <input className="input is-medium" type="email"
                                                   placeholder="Enter your Email"/>
                                        </div>
                                        <div className="column is-12">
                                            <textarea className="textarea" rows="10"
                                                      placeholder="Write someting ..."></textarea>
                                        </div>
                                        <div className="form-footer has-text-centered mt-10">
                                            <button className="button cta is-large primary-btn raised is-clear">Send
                                                Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id="auth-modal" className="modal">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="flex-card auth-card">
                        <div className="tabs-wrapper">
                            <div className="tabs">
                                <ul>
                                    <li className="is-active" data-tab="login-tab"><span>Login</span></li>
                                    <li data-tab="register-tab"><span>Register</span></li>
                                </ul>
                            </div>
                            <div id="login-tab" className="tab-content is-active">
                                <div className="field">
                                    <label>Username</label>
                                    <div className="control">
                                        <input type="text" className="input is-medium" placeholder="Enter username"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Password</label>
                                    <div className="control">
                                        <input type="password" className="input is-medium" placeholder="Enter password"/>
                                    </div>
                                </div>

                                <span className="button is-fullwidth secondary-btn is-rounded raised">Log in</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close"></button>
            </div>

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
                                    <li><a href="https://cssninjastudio.github.io/#">Discover features</a></li>
                                    <li><a href="https://cssninjastudio.github.io/#">Why choose our Product ?</a></li>
                                    <li><a href="https://cssninjastudio.github.io/#">Compare features</a></li>
                                    <li><a href="https://cssninjastudio.github.io/#">Our Roadmap</a></li>
                                    <li><a href="https://cssninjastudio.github.io/#">Request features</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="column">
                            <div className="footer-column">
                                <div className="footer-header">
                                    <h3>Docs</h3>
                                </div>
                                <ul className="link-list">
                                    <li><a href="https://cssninjastudio.github.io/#">Get Started</a></li>
                                    <li><a href="https://cssninjastudio.github.io/#">User guides</a></li>
                                    <li><a href="https://cssninjastudio.github.io/#">Admin guide</a></li>
                                    <li><a href="https://cssninjastudio.github.io/#">Developers</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="column">
                            <div className="footer-column">
                                <div className="footer-header">
                                    <h3>Blogroll</h3>
                                </div>
                                <ul className="link-list">
                                    <li><a href="https://cssninjastudio.github.io/#">Latest News</a></li>
                                    <li><a href="https://cssninjastudio.github.io/#">Tech articles</a></li>
                                    <li><a href="https://cssninjastudio.github.io/#">Video Blog</a></li>
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
            <div id="backtotop">
                <a href="https://cssninjastudio.github.io/#"></a>
            </div>
            <Sidebar/>
        </div>
);
}

export default App;
