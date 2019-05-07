import React, { Component } from 'react';

class Counter extends Component {
    state = {
        counter: 0
    }

    handleClick = (e) => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div className="App">
                <p>{this.state.counter}</p>
                <button type="button" onClick={this.handleClick}>Click</button>
            </div>
            
        )
    }
}



export default Counter;