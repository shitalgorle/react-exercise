

import React from "react";
import "./CoinCard.css";

export default class CoinCard extends React.Component {
  render() {
    return (
      <div 
        className="coin"
        onClick={() => {
          this.props.onCoinClick(this.props.coinText);
        }}
      > 
        <text className="coin-text">{this.props.coinText}</text>
        {/* <img className="coin-image" src="20.png" alt="Coin"/> */}
      </div>
    );
  }
}




