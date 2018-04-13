import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button } from 'antd-mobile';
const RadioItem = Radio.RadioItem;

class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            type: 'genius'  //或者boss
        }
    }
    render(){
        return  (
            <div>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem>用户名</InputItem>
                        <InputItem>密码</InputItem>
                        <InputItem>确认密码</InputItem>
                        <RadioItem checked={this.state.type=='genius'}>
                            牛人
                        </RadioItem>
                        <RadioItem checked={this.state.type=='boss'}>
                            Boss
                        </RadioItem>
                        <WhiteSpace />
                        <Button onClick={this.register} type="primary">注册</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default Register