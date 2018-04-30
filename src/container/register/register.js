import React from 'react'
import { Redirect } from 'react-router'
import Logo from '../../component/logo/logo'
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'
import imoocForm from '../../component/imooc-form/imooc-form'

@connect(
    state=>state.user,
    {register}
)

class Register extends React.Component{
    constructor(){
        super();
        this.handleRegister = this.handleRegister.bind(this)
    }
    componentDidMount(){
        this.props.handleChange('type','genius')
    }
    handleChange(key,val){
        this.setState({
            [key]: val
        })
    }
    handleRegister(){
        this.props.register(this.props.state)
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return  (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} />:null}
                <Logo />
                <WingBlank>
                    <List>
                        {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
                        <InputItem onChange={v=>this.props.handleChange('user',v)}>用户名</InputItem>
                        <InputItem type="password" onChange={v=>this.props.handleChange('pwd',v)}>密码</InputItem>
                        <InputItem type="password" onChange={v=>this.props.handleChange('repeatPwd',v)}>确认密码</InputItem>
                        <RadioItem checked={this.props.state.type==='genius'} onChange={()=>this.props.handleChange('type','genius')}>
                            牛人
                        </RadioItem>
                        <RadioItem checked={this.props.state.type==='boss'} onChange={()=>this.props.handleChange('type','boss')}>
                        Boss
                        </RadioItem>
                        <WhiteSpace />
                        <Button onClick={this.handleRegister} type="primary">注册</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default Register