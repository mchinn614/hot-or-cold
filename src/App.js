import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./components/input-form";
import Navigation from "./components/navigation";
import Output from "./components/output";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: Math.floor(Math.random() * 100),
      currentGuess: 0,
      previousGuesses: [],
      feedback: null
    };
  }

  setFeedback(guess) {
    this.setState({ currentGuess: parseInt(guess) });
  }

  handleSubmit() {
    if (this.state.currentGuess === this.state.number) {
      this.setState({
        feedback: "Correct",
        previousGuesses: [
          ...this.state.previousGuesses,
          this.state.currentGuess
        ]
      });
    } else if (Math.abs(this.state.currentGuess - this.state.number) < 10) {
      this.setState({
        feedback: "Hot",
        previousGuesses: [
          ...this.state.previousGuesses,
          this.state.currentGuess
        ]
      });
    } else {
      this.setState({
        feedback: "Cold",
        previousGuesses: [
          ...this.state.previousGuesses,
          this.state.currentGuess
        ]
      });
    }
  }

  render() {
    console.log(this.state);
    console.log(typeof this.state.previousGuesses);
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <main>
          <Input
            onChange={value => this.setFeedback(value)}
            handleSubmit={() => this.handleSubmit()}
          />
          <Output outputType="feedback" value={this.state.feedback} />
          <Output
            outputType="guesses"
            value={this.state.previousGuesses.join(", ")}
          />
        </main>
      </div>
    );
  }
}
