
import React from "react";
import "./CoinCard.css";

export default class CoinCard extends React.Component {
  render() {
    return (
      <div 
        className="coin"
        onClick={() => {
          this.props.onCoinClick(this.props.coinText);
          this.props.incrementCounter(this.props.coinText);
        }}
      > 
        <img src={this.props.imageName} alt="coin" className="coin-image" />
        
        <div className="coin-label">{this.props.coinText}</div>

        {this.props.coinCounter ? (
          <div className="coin-badge">Total Count: {this.props.coinCounter}</div>
        ) : null}
        
      </div>
    );
  }
}
