import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 100,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  reset = () => {
    this.setState({
      count: 0, // Reset count to 0
    });
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button disabled = {this.state.count >= 100}onClick={this.increment}>Increment +</button>
        <button  onClick={this.reset}>Reset</button>
        <button  disabled={this.state.count <= 0}onClick={this.decrement}>Decrement -</button>
      </div>
    );
  }
}

export default Counter;
