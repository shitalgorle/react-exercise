// import React from "react";
// import "./Header.css";
// import Cart from "../AmazonTwo/Cart";


// export class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <div className="nav-bar">
//           <div className="header-logo">Amazon</div>
//           <button style={{ width: "350px", height: "50px", backgroundColor: ":#febd69"}}>
//             <a style={{ color: "black" }}>Search</a>
//           </button>
//         <Cart/>
        
//         </div>
//       </header>
//     );
//   }
// }

// export default Header;





import React from "react";
import "./Header.css";
import Cart from "../AmazonTwo/Cart";

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="nav-bar">
          <div className="header-logo">Amazon</div>
          <button style={{ width: "350px", height: "50px", backgroundColor: "#febd69" }}>
            <span style={{ color: "black" }}>Search</span>
          </button>
          <Cart counter={this.props.cartCount} /> {/* Fixed cart counter prop */}
        </div>
      </header>
    );
  }
}

export default Header;
