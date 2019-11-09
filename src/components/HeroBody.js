import React from 'react';
import worker from '../assets/images/illustrations/worker.svg';


const HeroBody = () => (
    <>
        <div className="hero-body">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column is-5 is-offset-1 landing-caption">
                        <h1 className="title is-1 is-bold is-spaced">
                            测试，点评，返金
                        </h1>
                        <h2 className="subtitle is-5 is-muted">
                            您先在amazon订购货物，当货物收到后测试使用，然后请您在amazon上点评。好评上线后，立刻返还商品购买费用。测试产品作为答谢，您可以继续使用。
                        </h2>
                        <p>
                            <span className="button cta rounded primary-btn raised">
                                开始测试
                            </span>
                        </p>
                    </div>
                    <div className="column is-5 is-offset-1">
                        <figure className="image is-4by3">
                            <img src={worker} alt="Description" />
                        </figure>
                    </div>

                </div>
            </div>
        </div>
    </>
);

export default HeroBody;
