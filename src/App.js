import React from 'react'

class App extends React.Component{
    render(){
        let store = this.props.store;
        let num = store.getState();
        let addGUN = this.props.addGUN;
        let removeGUN = this.props.removeGUN;
        return (
            <div>
                <h1>现在有机枪{num}把</h1>
                <button onClick={()=>store.dispatch(addGUN())}>申请武器</button>
                <button onClick={()=>store.dispatch(removeGUN())}>上交武器</button>
            </div>
        )
    }
}

export default App;