import React from 'react'
import ReactDom from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import App from './App';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {counter} from './index.redux';

const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDom.render(
    <Provider store={store}>
        <App store={store}/>
    </Provider>,
    document.getElementById('root')
)