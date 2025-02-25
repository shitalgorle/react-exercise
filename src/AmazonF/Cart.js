// import React from "react";
// import "./Cart.css";

// export default class Cart extends React.Component {
//   render() {
//     return (
//       <header>
//         <div className="nav-bar">
//         <p>
//           <img src="./remove.png" alt="Cart" width={"50px"}/>
//           {this.props.counter}
//           </p>
//         </div>
//       </header>
//     );
//   }
// }



import React from "react";
import "./Cart.css";

export default class Cart extends React.Component {
  render() {
    return (
      <div className="cart-container">
        <p>
          <img src="/remove.png" alt="Cart" width="50px" />
          {this.props.counter} {/* Fixed prop reference */}
        </p>
      </div>
    );
  }
}
