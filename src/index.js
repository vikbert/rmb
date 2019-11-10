import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';
import App from './App';
import messages_de from './translations/de';
import messages_zh from './translations/zh';
import * as serviceWorker from './serviceWorker';

const messages = {
    'de': messages_de,
    'zh': messages_zh,
};

const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
    <IntlProvider locale={language} messages={messages[language] || messages['de']}>
        <App/>
    </IntlProvider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
