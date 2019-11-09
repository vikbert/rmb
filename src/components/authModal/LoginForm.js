import React from 'react';

const LoginForm = () => (
    <div>
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
);

export default LoginForm;
