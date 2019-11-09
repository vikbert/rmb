import React from 'react';

const ShowCases = () => (
    <>
        <div className="container">
            <div className="title-wrapper has-text-centered">
                <h2 className="title is-2">Beliebste Produkte </h2>
                <h3 className="subtitle is-5 is-muted">review & money back</h3>
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
                                <a href="/#"
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
                                <a href="/#"
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
                                <a href="/#"
                                   className="button btn-align-md primary-btn raised">Review Starten</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
);

export default ShowCases;
