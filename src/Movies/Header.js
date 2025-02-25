import React from "react";
import "./Header.css";
import AddMovies from "./AddMovies"

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="nav-bar">
        <div className="header">IMDB</div>
         <button style={{ width: "400px", height: "40px", backgroundColor: "#FBFFE4", marginLeft:"300px"}}>
            <span style={{ color: "black" ,fontSize:"large"}}>Search</span>
          </button>
        
        <AddMovies openForm={this.props.openForm}/>
        </div>
      </header>
    );
  }
}


