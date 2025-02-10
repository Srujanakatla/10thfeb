import React, { Component } from "react";

class Typed extends Component {
  constructor() {
    super();
    this.state = {
      show: "srujana", 
    };
  }

  handletype = (event) => {
    this.setState({ show: event.target.value });
  };

  render() {
    return (
      <>
        <h1>Typed Value: {this.state.show}</h1>
        <input
          type="text"
          placeholder="Type something"
          onChange={this.handletype}
        />
      </>
    );
  }
}

export default Typed;
