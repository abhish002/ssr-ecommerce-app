import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import App from './components/app/app.component';

const store = configureStore();
render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.querySelector('#app')
);