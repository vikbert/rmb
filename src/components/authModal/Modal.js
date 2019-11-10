import React from 'react';
import LoginForm from "./LoginForm";
import {useIntl} from 'react-intl';

const Modal = () => {
    const intl = useIntl();
    const transLogin = intl.formatMessage({id: "modal.login"});
    const transRegister = intl.formatMessage({id: "modal.register"});

    return (
        <>
            <div id="auth-modal" className="modal">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="flex-card auth-card">
                        <div className="tabs-wrapper">
                            <div className="tabs">
                                <ul>
                                    <li data-tab="login-tab" className="is-active">
                                        <a href={'/#'}>{transLogin}</a>
                                    </li>
                                    <li data-tab="register-tab">
                                        <a href={'/#'}>{transRegister}</a>
                                    </li>
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
};

export default Modal;
