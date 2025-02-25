import React from "react";
import "./PanelOne.css";
import CoinCard from "./CoinCard";

export default class PanelOne extends React.Component {
 

  render() {
    return (
      <div className="panel"> 
    <CoinCard imageName="1.png" coinText="ONE" onCoinClick={this.props.onCoinClick}/>
    <CoinCard imageName="2.png" coinText="TWO" onCoinClick={this.props.onCoinClick}/>
    <CoinCard  imageName="5.png" coinText="FIVE" onCoinClick={this.props.onCoinClick}/>
    <CoinCard  imageName="10.png" coinText="TEN" onCoinClick={this.props.onCoinClick}/>
    <CoinCard  imageName="20.png" coinText="TWENTY" onCoinClick={this.props.onCoinClick}/>
       
      </div>
    );
  }
}


// *********************



// import React from "react";
// import "./PanelOne.css";
// import CoinCard from "./CoinCard";

// export default class PanelOne extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       coinOneCounter: 0,
//       coinTwoCounter: 0,
//       coinFiveCounter: 0,
//       coinTenCounter: 0,
//       coinTwentyCounter: 0,
//     };
//   }
//   incrementCounter = (coin) => {
//     if (coin == "One") {
//       this.setState({ coinOneCounter: (this.state.coinOneCounter += 1) });
//     } else if (coin == "Two") {
//       this.setState({ coinTwoCounter: (this.state.coinTwoCounter += 1) });
//     } else if (coin == "Five") {
//       this.setState({ coinFiveCounter: (this.state.coinFiveCounter += 1) });
//     } else if (coin == "Ten") {
//       this.setState({ coinTenCounter: (this.state.coinTenCounter += 1) });
//     } else {
//       this.setState({ coinTwentyCounter: (this.state.coinTwentyCounter += 1) });
//     }
//   };

//   render() {
//     return (
//       <div className="panel">
//         <CoinCard
//           imageName="1new.png"
//           coinText="ONE"
//           onCoinClick={this.props.onCoinClick}
//           coinCounter={this.state.coinOneCounter}
//           incrementCounter={this.incrementCounter}
//         />
//         <CoinCard
//           imageName="2.png"
//           coinText="TWO"
//           onCoinClick={this.props.onCoinClick}
//           coinCounter={this.state.coinTwoCounter}
//           incrementCounter={this.incrementCounter}
//         />
//         <CoinCard
//           imageName="5.png"
//           coinText="FIVE"
//           coinCounter={this.state.coinFiveCounter}
//           onCoinClick={this.props.onCoinClick}
//           incrementCounter={this.incrementCounter}
//         />
//         <CoinCard
//           imageName="10.png"
//           coinText="TEN"
//           onCoinClick={this.props.onCoinClick}
//           coinCounter={this.state.coinTenCounter}
//           incrementCounter={this.incrementCounter}
//         />
//         <CoinCard
//           imageName="20.png"
//           coinText="TWENTY"
//           onCoinClick={this.props.onCoinClick}
//           coinCounter={this.state.coinTwentyCounter}
//           incrementCounter={this.incrementCounter}
//         />
//       </div>
//     );
//   }
// }