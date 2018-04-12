import React from 'react'
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import App from './App';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {counter} from './index.redux';

const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

function Erying(){
    return <h2>二营</h2>
}
function Qibinglian(){
    return <h2>骑兵连</h2>
}

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">一营</Link></li>
                    <li><Link to="/erying">二营</Link></li>
                    <li><Link to="/qibinglian">骑兵连</Link></li>
                </ul>

                <Route exact path="/" component={App}/>
                <Route path="/erying" component={Erying}/>
                <Route path="/qibinglian" component={Qibinglian}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)