




import React from "react";
import "./Counter.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  Counter = () => {
    this.setState((State) => ({
      count: State.count + 1,
    }));
  };

  render() {
    return (
         
        <div className="counter-button" 
        onClick={this.counter}>
        <button className="counter-button"style={this.props.buttonColor} onClick={this.Counter}>
          My Button: {this.state.count}
        </button>
      </div>
    );
  }
}

export default Counter;






