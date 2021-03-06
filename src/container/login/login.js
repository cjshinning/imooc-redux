import React from 'react'
import { Redirect } from 'react-router'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'
import imoocForm from '../../component/imooc-form/imooc-form'

// 属性代理
// function WrapperHello(Comp){
//     class WrapComp extends Comp{
//         componentDidMount(){
//             console.log('高阶组件新增的声明周期，加载完成')
//         }
//         render(){
//             return <Comp></Comp>
//         }
//     }
    // class WrapComp extends React.Component{
    //     render(){
    //         return (
    //             <div>
    //                 <p>这是HOC高阶组件特有元素</p>
    //                 <Comp {...this.props}></Comp>
    //             </div>
    //         )
    //     }
    // }
//     return WrapComp
// }

// function hello(){
//     console.log('Hello imooc, I love React')
// }

// function wrapHello(fn){
//     return function(){
//         console.log('before say hello')
//         fn()
//         console.log('after say hello')
//     }
// }
// hello = wrapHello(hello)
// hello()

// @WrapperHello
// class Hello extends React.Component{
//     render(){
//         return <h2>Hello imooc, I love React&Redux</h2>
//     }
// }

@connect(
    state => state.user,
    {login}
)
@imoocForm

class Login extends React.Component{
    constructor(){
        super()
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleLogin(){
        this.props.login(this.props.state)
    }
    register(){
        this.props.history.push('/register')
    }
    render(){
        // console.log(this.props)
        return (
            <div>
                {/* <Hello></Hello> */}
                {this.props.redirectTo&&this.props.redirectTo!=='/login' ? <Redirect to={this.props.redirectTo} />:null}
                <Logo />
                <WingBlank>
                    <List>
                        {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
                        <InputItem onChange={v=>this.props.handleChange('user',v)}>用户</InputItem>
                        <InputItem type="password" onChange={v=>this.props.handleChange('pwd',v)}>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.handleLogin}>登录</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type="primary">注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login