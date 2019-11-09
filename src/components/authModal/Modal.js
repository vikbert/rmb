import React from 'react';
import LoginForm from "./LoginForm";

const Modal = () => (
    <>
        <div id="auth-modal" className="modal">
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="flex-card auth-card">
                    <div className="tabs-wrapper">
                        <div className="tabs">
                            <ul>
                                <li className="is-active" data-tab="login-tab"><a>Login</a></li>
                                <li data-tab="register-tab"><a>Register</a></li>
                            </ul>
                        </div>
                        <div id="login-tab" className="tab-content is-active">
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close"></button>
        </div>
    </>
);

export default Modal;
