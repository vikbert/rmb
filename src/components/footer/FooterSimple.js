import React from 'react';
import blooming from '../../assets/images/illustrations/blooming.svg';

const FooterSimple = () => (
    <footer className="footer footer-dark">
        <div className="container">
            <div className="columns is-vcentered has-text-centered">
                <div className="column">
                    <img src={blooming} alt="blooming" width="240"/>
                </div>
                <div className="column">
                    <h3 className="title is-4 is-bold light-text">
                        R<span className="has-text-grey">eview</span>
                        M<span className="has-text-grey">oney</span>
                        B<span className="has-text-grey">ack</span>
                    </h3>
                    <p>CopyRight ©️ 2019, with <span role="img" aria-label="heart">❤️</span> in Berlin</p>
                </div>
            </div>
        </div>
    </footer>
);

export default FooterSimple;
