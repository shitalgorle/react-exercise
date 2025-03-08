

import React from "react";
import "./MoviesRating.css";
import { Rating } from "react-simple-star-rating";

export default class MoviesRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
  }

  handleRating = (rate) => {
    this.setState({ rating: rate });
  };

  render() {
    return (
      <div className="movie-container">
        <button className="add-button">Rate {this.state.rating}</button>
        
        <div className="rating">
          <Rating onClick={this.handleRating} ratingValue={this.state.rating} />
        </div>
      </div>
    );
  }
}



