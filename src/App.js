import React from 'react';

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
  }
  render(){
    return (
      <div>
        <h2>一营营长,{this.props.laoda}</h2>
        <ul>
          {this.state.solders.map(v=>{
            return <li key={v}>{v}</li>;
          })}
        </ul>
      </div>
    )
  }
}

export default App;