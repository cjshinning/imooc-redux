import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// import axios from 'axios'
import { login, getUserData } from './Auth.redux'

// 合并reducer
@connect(
    state => state.auth,
    {login,getUserData}
)

class Auth extends React.Component{
    // 没有redux
    // constructor(){
    //     super()
    //     this.state={
    //         data: {}
    //     }
    // }
    componentDidMount(){
        // axios.get('/data')
        //     .then(res=>{
        //         this.setState({
        //             data: res.data
        //         })
        //     })
        this.props.getUserData()
    }
    render(){
        return (
            <div>
                {/* <h2>我的名字是：{this.state.data.user}</h2> */}
                <h2>我的名字是：{this.props.user}，年龄：{this.props.age}</h2>
                {this.props.isAuth ? <Redirect to="/dashboard" /> : null}
                <h2>你没有权限，需要登录才能看</h2>
                <button onClick={this.props.login}>登录</button>
            </div>    
        )
    }
}

export default Auth