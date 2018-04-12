import React from 'react';
import {connect} from 'react-redux';
import {addGUN,removeGUN,addGUNAsync} from './index.redux';

class App extends React.Component{
    render(){
        return (
            <div>
                <h1>现在有机枪{this.props.num}把</h1>
                <button onClick={this.props.addGUN}>申请武器</button>
                <button onClick={this.props.removeGUN}>上交武器</button>
                <button onClick={this.props.addGUNAsync}>拖两天再给</button>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {num: state}
}
const actionCreators = {addGUN,removeGUN,addGUNAsync};

App = connect(mapStatetoProps, actionCreators)(App);
export default App;