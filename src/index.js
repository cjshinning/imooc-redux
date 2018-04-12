import React from 'react'
import ReactDom from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import {counter,addGUN, removeGUN, addGUNAsync} from './index.redux';

const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

function render(){
    ReactDom.render(<App store={store} addGUN={addGUN} removeGUN={removeGUN} addGUNAsync={addGUNAsync}/>, document.getElementById('root'))
}

render()

store.subscribe(render);