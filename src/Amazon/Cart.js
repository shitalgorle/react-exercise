

import React from "react";
import "./Amazon.css";

export default class Cart extends React.Component {
  render() {
    return (
      <header>
        <div className="nav-bar">
        <p>
          <img src="./remove.png" alt="Cart" width={"50px"}/>
            {this.props.counter}
          </p>
        </div>
      </header>
    );
  }
}
