import React, { Component } from "react";
import "./MintCounter.css";

class MinterCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    this.props.getValue((this.state.count + 1) * 0.12);
    this.props.getNumber(this.state.count + 1);
  }

  decrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
    this.props.getValue((this.state.count - 1) * 0.12);
    this.props.getNumber(this.state.count - 1);
  }
  render() {
    return (
      <div>
        <div className="mint-counter-row">
          <button
            className="decrement"
            onClick={() => {
              this.decrement();
            }}
            value="Enabled"
            disabled={this.state.count === 0}
          >
            -
          </button>
          <div className="result">
            <h1>{this.state.count}</h1>
          </div>

          <button
            className="increment"
            onClick={() => {
              this.increment();
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default MinterCounter;
