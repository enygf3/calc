import React, { Component } from 'react';
import "./sass/app.css"
import Keyboard from "./components/keyboard";

export default class App extends Component {

  oldNumber = 0;
  newNumber = 0;
  operator = '';

  onButtonClick = (e) => {
    console.log(e.target.value)
    let num = e.target.value;
    if(this.state.newNumber == 0 && this.state.operator == "" && num != "*" && num != "/" && num != "-" && num != "+" && num != "=") {
      this.setState({
        oldNumber: Number(this.state.oldNumber + num)
      })
    } else if(this.state.oldNumber != 0 && num != "*" && num != "/" && num != "-" && num != "+" && num != "=") {
        this.setState({
          newNumber: Number(this.state.newNumber + num)
        })
    } else if(this.state.oldNumber != 0) {
      this.setState({
        operator: num
      })
    }

    if(num == "=" && this.state.newNumber != 0 && this.state.oldNumber != 0) {
      switch(this.state.operator) {
        case "+":
          this.setState({
            newNumber: 0,
            oldNumber: this.state.oldNumber + this.state.newNumber,
            operator: ""
          })
          break;

        case "-":
          this.setState({
            newNumber: 0,
            oldNumber: this.state.oldNumber - this.state.newNumber,
            operator: ""
          })
          break;

        case "*":
          this.setState({
            newNumber: 0,
            oldNumber: this.state.oldNumber * this.state.newNumber,
            operator: ""
          })
          break;

        case "/":
          this.setState({
            newNumber: 0,
            oldNumber: this.state.oldNumber / this.state.newNumber,
            operator: ""
          })
          break;
      }
    } else if(num == "=" && (this.state.newNumber == 0 || this.state.oldNumber == 0)) {
      this.setState({
        newNumber: 0,
        oldNumber: 0,
        operator: ''
      })
    } else if(num == "C") {
      this.setState({
        newNumber: 0,
        oldNumber: 0,
        operator: ''
      })
    }
}

  state = {
    oldNumber: 0,
    newNumber: 0,
    operator: ''
  }

  render() {
    console.log(this.oldNumber)
    return (
      <div className="app">
        <div className = "app-block">
        <Keyboard onButtonClick = {this.onButtonClick } operator = { this.state.operator } oldNumber = { this.state.oldNumber } newNumber = { this.state.newNumber }></Keyboard>
        </div>
      </div>
    );
  }
  }