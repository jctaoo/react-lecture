import React from "react";
import "./TempInput.css";

export default class TempInput extends React.Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    const value = e.target.value;
    this.props.onTempChange(value);
  }

  render() {
    return (
      <div className="temp-input">
        <p>Enter temperature in {this.props.unit}:</p>
        <input value={this.props.temp} onChange={this.handleInput} />
      </div>
    );
  }
}
