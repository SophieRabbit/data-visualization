import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import routeConfig from './routeConfig';
import rootReducer from './reducers';

let store = createStore(rootReducer);

render(
    <Provider store={store}>
        <Router routes={routeConfig} />
    </Provider>,
    document.getElementById('root')
)

