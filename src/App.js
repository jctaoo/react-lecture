import React from "react";
import "./styles.css";
import TempChecker from "./TempChecker";
import TempInput from "./TempInput";

class Calculator extends React.Component {
  constructor() {
    super()
    this.handleTempChange = this.handleTempChange.bind(this);
    this.state = { temp: 11 }
  }

  handleTempChange(temp) {
    this.setState({
      temp: temp
    })
  }

  render() {
    return (
      <div className="calculator">
        <TempInput 
          temp={this.state.temp} 
          onTempChange={this.handleTempChange} 
          unit="Celsius"
        />
        <TempInput 
          temp={this.state.temp} 
          onTempChange={this.handleTempChange} 
          unit="Fahrenheit"
        />
        <TempChecker temp={this.state.temp} />
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
