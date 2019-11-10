import React from 'react';
import {FormattedMessage} from "react-intl";

const RegistrationLink = () => (
    <div
        className="navbar-item modal-trigger"
        data-modal="auth-modal">
        <span className="button signup-button rounded secondary-btn raised">
            <FormattedMessage id={'registrationLink.register'}/>
        </span>
    </div>
);

export default RegistrationLink;
