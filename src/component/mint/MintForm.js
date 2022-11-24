import React, { Component } from "react";

class MinterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }
  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  decrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }
  render() {
    return (
      <div>
        <div className="row">
          <button
            className="decrement"
            onClick={() => {
              this.decrement();
            }}
            value="Enabled"
            disabled={this.state.count === 1}
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

export default MinterForm;
