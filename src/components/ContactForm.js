import React from 'react';

const ContactForm = () => (
    <>
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
    </>
);

export default ContactForm;
