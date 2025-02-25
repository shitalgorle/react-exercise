
import React from "react";
import "./Amazon.css";
import Cart from "./Cart";


export class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="nav-bar">
          <div className="header-logo">Amazon</div>
          <button style={{ width: "350px", height: "50px", backgroundColor: ":#febd69"}}>
            <a style={{ color: "black" }}>Search</a>
          </button>
          <Cart counter={this.props.counter} />
        
        </div>
      </header>
    );
  }
}

export default Header;
