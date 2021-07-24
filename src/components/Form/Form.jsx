import React, { Component } from "react";
import Buttons from "../Buttons/Buttons";
import "./Form.css";
export default class Form extends Component {
  state = {
    value: "",
    value2: "",
    answer: "",
  };
  setInputText1 = (e) => {
    this.setState({ value: e.target.value });
  };
  setInputText2 = (e) => {
    this.setState({ value2: e.target.value });
  };
  handleBtns = (el) => {
    let value1 = +this.state.value;
    let value2 = +this.state.value2;
    let target = el.target.value;
    if (this.state.value == "" || this.state.value2 == "")
      alert("Ikkala inputga ham qiymat kiritng");
    else {
      let res = eval(value1 + target + value2);
      this.setState({ answer: res });
    }
  };
  handleReset = () => {
    this.setState({ ...this.state, value2: "", value: "", answer: "" });
  };
  render() {
    return (
      <div className='form-block'>
        <label htmlFor='fnumber'>First Number</label>
        <input
          value={this.state.value}
          onChange={this.setInputText1}
          id='fnumber'
          type='number'
        />
        <label htmlFor='snumber'>Second Number</label>
        <input
          value={this.state.value2}
          onChange={this.setInputText2}
          id='snumber'
          type='number'
        />
        <label htmlFor='answer'>Answer</label>
        <input
          value={this.state.answer}
          id='answer'
          disabled='true'
          type='number'
        />
        <Buttons onBtns={this.handleBtns} onReset={this.handleReset} />
      </div>
    );
  }
}
