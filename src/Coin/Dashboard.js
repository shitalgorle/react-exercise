import React from "react";
import "./Dashboard.css";
import PanelOne from "./PanelOne";



export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        total:0,
    }

  };

  onCoinClick = (coin) => {
    if (coin === "ONE") {
        this.setState({ total: this.state.total + 1 });
    } 
    else if (coin === "TWO") {
        this.setState({ total: this.state.total + 2 });
    } 
    else if (coin === "FIVE") {
        this.setState({ total: this.state.total + 5 });
    } 
    else if (coin === "TEN") {
        this.setState({ total: this.state.total + 10 });
    } 
    else if (coin === "TWENTY") {
        this.setState({ total: this.state.total + 20 });
    }
  };

  render() {
    return (
      <div className="app"> 
     <div className="counter-text">{this.state.total}</div>
      <PanelOne onCoinClick={this.onCoinClick}/>
      </div>
    );
  }
}


// ********************



// import React from "react";
// import "./Dashboard.css";
// import PanelOne from "./PanelOne";



// export default class Dashboard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//         total:0,
//     }

//   };

//   onCoinClick = (coin) => {
//     if (coin === "ONE") {
//         this.setState({ total: this.state.total += 1 });
//     } 
//     else if (coin === "TWO") {
//         this.setState({ total: this.state.total += 2 });
//     } 
//     else if (coin === "FIVE") {
//         this.setState({ total: this.state.total += 5 });
//     } 
//     else if (coin === "TEN") {
//         this.setState({ total: this.state.total += 10 });
//     } 
//     else  {
//         this.setState({ total: this.state.total += 20 });
//     }
//   };

//   render() {
//     return (
//       <div className="app"> 
//      <div className="counter-text">{this.state.total}</div>
//       <PanelOne onCoinClick={this.onCoinClick}/>
//       </div>
//     );
//   }
// }
