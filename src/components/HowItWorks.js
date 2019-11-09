import React from 'react';

const HowItWorks = () => (
    <>
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
    </>
);

export default HowItWorks;
