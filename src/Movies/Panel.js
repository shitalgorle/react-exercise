// import React from "react";
// import "./Panel.css";
// import MoviesRating from "./MoviesRating";

// export default class Panel extends React.Component {

//   render() {
//     return (
//       <div className="panel-container">
//         <h2>Movie List</h2>
        
//         {this.props.movieArray.length === 0 ? (
//           <p>No movies added yet.</p>
//         ) : (
//           <ul className="movie-list">
//             {this.props.movieArray.map((movie, index) => (
//               <li key={index} className="movie-item">
//                 <img src={movie.moviePoster} alt={movie.movieName} className="movie-poster" />
//                 <div className="movie-info">
//                   Name-<strong>{movie.movieName}</strong> <br/>Duration- <strong>{movie.Duration}</strong> <br/> Directed by- <strong>{movie.movieDirector}</strong>
//                   <MoviesRating/>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   }
// }



import React from "react";
import "./Panel.css";
import MoviesRating from "./MoviesRating";


export default class Panel extends React.Component {
  
  
  render() {
    return (
      <div className="panel-container">
        <h1>Movies List</h1>
        
        {this.props.movieArray.length === 0 ? (
          <p>No movies added yet.</p>
        ) : (
          <ul className="movie-list">
            {this.props.movieArray.map((movie, index) => (
              <li key={index} className="movie-item">
                <img src={movie.moviePoster} alt={movie.movieName} className="movie-poster" />
                <div className="movie-info">
                  Name-<strong>{movie.movieName}</strong> <br/>Duration- <strong>{movie.Duration}</strong> <br/> Directed by- <strong>{movie.movieDirector}</strong>
                  <MoviesRating  />
                  <hr />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
