import React from 'react';
import {FormattedMessage} from 'react-intl';

const LoginLink = () => (
    <span className="navbar-item is-secondary modal-trigger"
          style={{cursor: 'pointer'}}
          data-modal="auth-modal">
        <FormattedMessage id="loginLink.login"/>
    </span>
);

export default LoginLink;
