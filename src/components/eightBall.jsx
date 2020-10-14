import React, { Component } from "react";
import { loadData } from "../utils";

class EightBall extends Component {
  state = {
    question: "",
    answer: "",
  };

  _handleChange = (question) => {
    this.setState({
      question,
    });
  };

  _handleSubmit = async (e) => {
    e.preventDefault();
    const { question } = this.state;
    const url = `https://8ball.delegator.com/magic/JSON/${question}`;
    const answer = await loadData(url);

    this.setState({
      answer: answer.magic.answer,
    });
  };

  render() {
    const { question, answer } = this.state;
    return (
      <div>
        <h1>Ask the Magic Eight Ball</h1>
        <form onSubmit={(e) => this._handleSubmit(e)}>
          <input
            type="text"
            onChange={(event) => this._handleChange(event.target.value)}
            value={question}
          />
          <button type="submit">Ask Magic 8 Ball</button>
        </form>
        <p>{answer}</p>
      </div>
    );
  }
}

export default EightBall;
