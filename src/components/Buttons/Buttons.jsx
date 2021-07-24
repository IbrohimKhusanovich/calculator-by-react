import React, { Component } from "react";
import "./Buttons.css";
export default class Buttons extends Component {
  render() {
    return (
      <div className='btn-grid'>
        <button value='+' onClick={this.props.onBtns}>
          Add
        </button>
        <button value='-' onClick={this.props.onBtns}>
          Substract
        </button>
        <button value='/' onClick={this.props.onBtns}>
          Divide
        </button>
        <button value='*' onClick={this.props.onBtns}>
          Multiply
        </button>
        <button value='%' onClick={this.props.onBtns}>
          Modulus
        </button>
        <button value='* Math.PI *' onClick={this.props.onBtns}>
          PI
        </button>
        <button onClick={this.props.onReset}>Reset</button>
      </div>
    );
  }
}
