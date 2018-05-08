import React from 'react'
import {connect} from 'react-redux'
import { NavBar } from 'antd-mobile'
import {Route} from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'
import Boss from '../boss/boss'
import Genius from '../genius/genius'
import User from '../user/user'
import Msg from '../msg/msg'
import {getMsgList,recvMsg} from '../../redux/chat.redux'
import QueueAnim from 'rc-queue-anim'

// function Boss(){
//     return <h2>Boss首页</h2> 
// }

// function Genius(){
//     return <h2>牛人首页</h2> 
// }

// function Msg(){
//     return <h2>消息列表页面</h2> 
// }

// function User(){
//     return <h2>个人中心</h2> 
// }

// @withRouter
@connect(
	state=>state,
	{getMsgList,recvMsg}
)

class Dashboard extends React.Component{
    componentDidMount(){   
        if(!this.props.chat.chatmsg.length){
            this.props.getMsgList()
            this.props.recvMsg()
        }
    }
    render(){
        const {pathname} = this.props.location
        const user = this.props.user
        const navList = [
            {
                path:'/boss',
                text:'牛人',
                icon:'boss',
                title:'牛人列表',
                component:Boss,
                hide:user.type==='genius'
            },
            {
                path:'/genius',
                text:'boss',
                icon:'job',
                title:'Boss列表',
                component:Genius,
                hide:user.type==='boss'
            },
            {
                path:'/msg',
                text:'消息',
                icon:'msg',
                title:'消息列表',
                component:Msg
            },
            {
                path:'/me',
                text:'我',
                icon:'user',
                title:'个人中心',
                component:User
            }
        ]
        const page = navList.find(v=>v.path==pathname)
        console.log(page)
        // 让动画生效，只渲染一个router，根据当前的path决定组件
        return (
            <div>
                <NavBar className='fixd-header' mode='dard'>{navList.find(v=>v.path==pathname).title}</NavBar>
                <div style={{marginTop:45}}>
                    {/* <QueueAnim type='scaleX' duration={800}>
                        <Switch>
                            {navList.map(v=>(
                                <Route key={v.path} path={v.path} component={v.component}></Route>
                            ))}
                        </Switch>
                    </QueueAnim> */}
                    <QueueAnim type='scaleX' duration={800}>
                        <Route key={page.path} path={page.path} component={page.component}></Route>
                    </QueueAnim>
                </div>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )
    }
}

export default Dashboard