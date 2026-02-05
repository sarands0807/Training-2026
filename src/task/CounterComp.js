
import React, { Component } from 'react';

export default class CounterComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    decrement() {
        this.setState(prevState => ({ count: prevState.count - 1 }));
    }

    reset() {
        this.setState({ count: 0 });
    }

    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: 20 }}>
                <h1>This is Task 3 - Counter using class component</h1>
                <h2>Counter: {this.state.count}</h2>
                <div>
                    <button onClick={this.increment} style={{ marginRight: 8 }}>Increment</button>
                    <button onClick={this.decrement} style={{ marginRight: 8 }}>Decrement</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }
}