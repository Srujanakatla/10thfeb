import { Component } from "react";

class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      name: "Srujana",
      isVisible: true,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible, 
    }));
  };

  render() {
    return (
      <>
        <h1>Toggle Task:</h1>
        {this.state.isVisible && <h3>{this.state.name}</h3>}
        <button onClick={this.handleToggle}>
          {this.state.isVisible ? "Hide" : "Show"}
        </button>
      </>
    );
  }
}

export default Toggle;
