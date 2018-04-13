import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button } from 'antd-mobile';
const RadioItem = Radio.RadioItem;

class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            user: '',
            pwd: '',
            repeatPwd: '',
            type: ''
        },
        this.handleRegister = this.handleRegister.bind(this)
    }
    handleChange(key,val){
        this.setState({
            [key]: val
        })
    }
    handleRegister(){
        console.log(this.state)
    }
    render(){
        return  (
            <div>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem onChange={v=>this.handleChange('user',v)}>用户名</InputItem>
                        <InputItem onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
                        <InputItem onChange={v=>this.handleChange('repeatPwd',v)}>确认密码</InputItem>
                        <RadioItem checked={this.state.type==='genius'} onChange={()=>this.handleChange('type','genius')}>
                            牛人
                        </RadioItem>
                        <RadioItem checked={this.state.type==='boss'} onChange={()=>this.handleChange('type','boss')}>
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