import React from 'react';
import { Button, List } from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css';

class App extends React.Component{
  render(){
    const boss = '李云龙';
    return (
      <div>
        <h2>独立团,团长{boss}</h2>
        <Yiying laoda='张大喵'></Yiying>
        <Qilianbing laoda='孙德胜'></Qilianbing>
      </div>
    )
  }
}

function Qilianbing(props){
  return <h2>骑练兵连长{props.laoda}，冲啊!</h2>
}

class Yiying extends React.Component{
  constructor(){
    super();

    this.state = {
      solders: ['虎子', '柱子', '王根生']
    }

    // this.addSolder = this.addSolder.bind(this)
  }
  addSolder(){
    console.log('新加入的小兵。。。')
    this.setState({
      solders: [...this.state.solders,'新兵'+Math.random()]
    })
  }
  componentWillMount(){
    console.log('组件就要加载了。。')
  }
  componentDidMount(){
    console.log('组件加载完毕。。')
  }
  render(){
    console.log('组件就正在加载。。')
    return (
      <div>
        <h2>一营营长,{this.props.laoda}</h2>
        <Button type="primary" onClick={()=>this.addSolder()}>新兵入伍</Button>
        <List renderHeader="士兵列表">
          {this.state.solders.map(v=>{
            return(
              <List.Item key={v}>
                {v}
              </List.Item>
            )
          })}
          
        </List>
        {/* <ul>
          {this.state.solders.map(v=>{
            return <li key={v}>{v}</li>;
          })}
        </ul> */}
      </div>
    )
  }
}

export default App;