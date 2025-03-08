// import React from "react";
// import "./Header.css";
// import AddMovies from "./AddMovies"

// export class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <div className="nav-bar">
//         <div className="header">IMDB</div>
//          <button style={{ width: "400px", height: "40px", backgroundColor: "#FBFFE4", marginLeft:"300px"}}>
//             <span style={{ color: "black" ,fontSize:"large"}}>Search</span>
//           </button>
        
//         <AddMovies openForm={this.props.openForm}/>
//         </div>
//       </header>
//     );
//   }
// }




import React from "react";
import "./Header.css";
import AddMovies from "./AddMovies"

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="nav-bar">
          <div className="header-logo">IMDB</div>
          <button style={{ width: "400px", height: "50px", backgroundColor: "#febd69" }}>
            <span style={{ color: "black" }}>Search</span>
          </button>
          {/* <button style={{ width: "100px", height: "50px", backgroundColor: "#FBFFE4", marginLeft:"300px"}}>
            <span style={{ color: "black" ,fontSize:"large"}}>Add-Movies</span>
         </button> */}

         <AddMovies openForm={this.props.openForm}/>
        </div>
      </header>
    );
  }
}

export default Header;

