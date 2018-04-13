import React from 'react'
import ReactDom from 'react-dom';
import {
    BrowserRouter, 
    Route, 
    Redirect,
    Switch
} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
// import {counter} from './index.redux';
import reducers from './reducer'
import Auth from './Auth'
import Dashboard from './Dashboard'
import './config'

const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
console.log(store.getState())

// 登录
//     没有登录，统一跳转到login
// 页面    导航+显示+注销
//     一营
//     二营
//     骑兵连

// class Test extends React.Component{
//     render(){
//         return(
//             <div>
//                 {console.log(this.props)}
//                 <h2>测试组件{this.props.match.params.location}</h2>
//             </div>
//         )
//     }
// }

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Auth}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Redirect to="/dashboard"></Redirect>
                {/* <Route path="/qibinglian" component={Qibinglian}/>
                <Route path="/:location" component={Test}/> */}
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)