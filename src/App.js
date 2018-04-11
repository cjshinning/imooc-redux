import React from 'react';

class App extends React.Component{
  render(){
    const boss = '李云龙';
    return (
      <div>
        <h2>独立团,团长{boss}</h2>
        <Yiying 老大='张大喵'></Yiying>
        <Qilianbing 老大='孙德胜'></Qilianbing>
      </div>
    )
  }
}

function Qilianbing(props){
  return <h2>骑练兵连长{props.老大}，冲啊!</h2>
}

class Yiying extends React.Component{
  render(){
    return <h2>一营营长,{this.props.老大}</h2>
  }
}

export default App;