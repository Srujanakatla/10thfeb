import React, { Component } from "react";
import "./App.css";
import Toggle from "./Task/Toggle";
import Counter from "./Task/Counter";
import Typed from "./Task/Typed";
import Additems from "./Task/Additems"

export default class App extends Component {
  render() {
    return (
      <>
        <h1>Welcome to the Toggle Task</h1>
        <Toggle />
        <h1>Welcome to counter:</h1>
        <Counter/>
        <h1>Typing skills:</h1>
        <Typed/>
        <h1>Additems task:</h1>
        <Additems/>
      </>
    );
  }
}
