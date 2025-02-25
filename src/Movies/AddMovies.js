import React from "react";
import "./AddMovies.css";

export default class AddMovies extends React.Component {
    render(){
    return(
    <div className="add-container">
        <button className="add-button" onClick={()=>this.props.openForm()}>Add Movies</button>
                 
    </div>
    )
  }
} 
