import React from "react";
import "./styles.css";
import TempChecker from "./TempChecker";

class Calculator extends React.Component {
  constructor() {
    super();
    // this.handleInput = this.handleInput.bind(this);
    this.state = { temp: 10 };
  }

  handleInput(e) {
    this.setState({
      temp: e.target.value
    });
  }

  render() {
    return (
      <div className="calculator">
        <h1>{this.state.temp}</h1>
        <input value={this.state.temp} onChange={this.handleInput} />
      </div>
    );
  }
}

export default function App() {
  const temp = 20;
  const name = "jctaoo";

  return (
    <div className="App">
      <Calculator />
    </div>
  );
}
