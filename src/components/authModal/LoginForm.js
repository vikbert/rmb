import React from 'react';
import {useIntl} from 'react-intl';

const LoginForm = () => {
    const intl = useIntl();
    const transUserName = intl.formatMessage({id: 'loginForm.username'});
    const transEnterUsername = intl.formatMessage({id: 'loginForm.enterUsername'});
    const transPassword = intl.formatMessage({id: 'loginForm.password'});
    const transEnterPassword = intl.formatMessage({id: 'loginForm.enterPassword'});
    const transLoginButton = intl.formatMessage({id: 'loginForm.login'});

    return (
        <>
            <div className="field">
                <label>{transUserName}</label>
                <div className="control">
                    <input type="text" className="input is-medium" placeholder={transEnterUsername}/>
                </div>
            </div>
            <div className="field">
                <label>{transPassword}</label>
                <div className="control">
                    <input type="password" className="input is-medium" placeholder={transEnterPassword}/>
                </div>
            </div>

            <span className="button is-fullwidth secondary-btn is-rounded raised">
                {transLoginButton}
            </span>
        </>
    );
};

export default LoginForm;
