// import React from "react";
// import "./Panel.css";
// import Cards from "./Card";

// class Panel extends React.Component {
//   render() {
//     return (
//       <div className="main-container">
//         <Cards products={this.props.data} addToCart={this.props.addToCart} />
        
        
//       </div>
//     );
//   }
// }

// export default Panel;






import React from "react";
import "./Panel.css";
import Card from "./Card"; // Fixed import name

class Panel extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Card products={this.props.data} addToCart={this.props.addToCart} />
      </div>
    );
  }
}

export default Panel;
