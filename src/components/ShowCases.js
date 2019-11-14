import React from 'react';
import {useIntl} from 'react-intl';

const data = [
    {
        title: 'Rosenquarz Roller ',
        description: 'Rosenquarz Roller und Gua Sha Jade Roller natürlicher Jade für Gesichtsmassagegerät Roller Massage',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61MGYpqrnaL._SL1000_.jpg',
    },
    {
        title: 'GoZheec Handyhalterung',
        description: '360°Drehbarer Handy Ständer Verstellbarer Handy Stativadapter mit Schraubenloch Faltbarer Smartphone Halterung für iPhone 11, 11 Pro, X, XS Max, Huawei (Schwarz)',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61oWqhxsalL._AC_SL1000_.jpg',
    },
    {
        title: 'Eiswürfelformen Silikon XXL',
        description: 'Eiswürfelformen Silikon XXL Eiswürfel Form Eiswürfelbehälter 2er Pack Eiswürfelbereiter 5 cm Große Eiskugeln Runde Eiskugelformer Ice Tray Ice Cube für Bier Cocktails Whisky',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61haVwIl8wL._AC_SL1000_.jpg',
    },
];

const ShowCases = () => {
    const intl = useIntl();
    const transReview = intl.formatMessage({id: 'showCases.startReview'});
    const transTitle = intl.formatMessage({id: 'showCases.title'});
    const transSubtitle = intl.formatMessage({id: 'showCases.subtitle'});

    const ProductCard = ({product}) => {
        const {title, image} = product;

        return (
            <div className="card is-bordered has-text-centered">
                <div className="card-image">
                    <img src={image} style={{height: "200px", marginTop: "2rem"}} alt="card foto"/>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content has-text-centered">
                            <p className="title is-6">{title}</p>
                        </div>
                    </div>
                    <div className="card-action">
                        <span className="button secondary-btn">{transReview}</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="container">
                <div className="title-wrapper has-text-centered">
                    <h2 className="title is-2">{transTitle}</h2>
                    <h3 className="subtitle is-5">{transSubtitle}</h3>
                    <div className="divider is-centered"></div>
                </div>

                <div className="content-wrapper">
                    <div className="columns">
                        {data.map((item, index) => (
                            <div className="column" key={index}>
                                <ProductCard product={item}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
};

export default ShowCases;
