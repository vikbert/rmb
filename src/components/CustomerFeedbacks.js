import React from 'react';

const CustomerFeedbacks = () => (
    <>
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
    </>
);

export default CustomerFeedbacks;
