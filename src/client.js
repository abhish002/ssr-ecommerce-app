import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import App from './components/app/app.component';

const state = window.__STATE__;
delete window.__STATE__;
const store = configureStore(state);
hydrate(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
);