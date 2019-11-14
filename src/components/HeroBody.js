import React from 'react';
import feedback from '../assets/images/illustrations/feedback.svg';
import {useIntl} from 'react-intl';

const HeroBody = () => {
    const intl = useIntl();
    const transTitle = intl.formatMessage({id: 'heroBody.title'});
    const transSubTitle = intl.formatMessage({id: 'heroBody.subTitle'});
    const transStartButton = intl.formatMessage({id: 'heroBody.startButton'});
    return (
        <>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-6 landing-caption">
                            <h1 className="title is-1 is-bold is-spaced">
                                {transTitle}
                            </h1>
                            <h2 className="subtitle is-5 is-muted">
                                {transSubTitle}
                            </h2>
                            <p>
                            <span className="button cta rounded primary-btn raised">
                                {transStartButton}
                            </span>
                            </p>
                        </div>
                        <div className="column is-5 is-offset-1">
                            <figure className="image is-4by3">
                                <img src={feedback} alt="Description"/>
                            </figure>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroBody;
