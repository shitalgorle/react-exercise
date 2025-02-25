
import React from "react";
import "./ActorB.css";

class ActorB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovies: [], 
    };
  }

  
  handleButtonClick = (playerName) => {
    const moviesData = {
      "Aamir Khan": [ "Tare Zameen Par","Rang De Basanti","Secret Superstar","Mangal Pandey","Dil Chahta Hai","3 Idiots","Lagaan", "Dangal","Ghajini", "PK"],
      "Salman Khan": ["Bajrangi Bhaijaan","Ek Tha Tiger", "Bodyguard","Tere Naam","Tubelight","Dabangg", "Race 3","Sultan","Jai Ho","Kick"],
      "Sidharth Malhotra": ["Student of the Year", "Hasee Toh Phasee","Baar Baar Dekho","Kapoor & Sons","Jabariya Jodi","Thank God","Shershaah","Ek Villain","Aiyaary","Yodha"],
      "Amitabh Bachchan": ["Chupke Chupke","Shamitabh","Bhootnath","Agneepath","Deewaar","Zanjeer","Sholay", "Silsila", "Don","Paa"],
      "Akshay Kumar": ["Toilet: Ek Prem Katha","Mission Mangal","Good Newwz","Housefull 4","Hera Pheri","Jolly LLB 2","Housefull","Khiladi","Kesari","Airlift"],
      "Shah Rukh Khan": ["Dilwale Dulhania Le Jayenge","My Name is Khan", "Jab Tak Hai Jaan","Chennai Express","Om Shanti Om","Karan Arjun","Devdas", "Raees","Don 2","Darr"],
      "Ranbir Kapoor": ["Ajab Prem Ki Ghazab Kahani", "Yeh Jawaani Hai Deewani","Jagga Jasoos","Wake Up Sid","Besharam","Raajneeti","Rockstar","Tamasha","Barfi!", "Sanju",],
      "Varun Dhawan": ["Badrinath Ki Dulhania","Street Dancer 3D","Main Tera Hero","Sui Dhaaga","Badlapur", "Judwaa 2","Dishoom","ABCD 2","Dilwale","Kalank"],
      "Kartik Aaryan": ["Sonu Ke Titu Ki Sweety","Pyaar Ka Punchnama","Pati Patni Aur Woh","Bhool Bhulaiyaa 2","Guest in London","Luka Chuppi","Love Aaj Kal","Chhuriyaan","Dhamaka","Kaanchi"],
      "Ranveer Singh": ["Goliyon Ki Raasleela Ram-Leela","Band Baaja Baaraat","Jayeshbhai Jordaar","Dil Dhadakne Do","Bajirao Mastani","Padmaavat","Gully Boy","Simmba","Lootera","Kill Dil"],
    };

    this.setState({
    //   selectedMovies: moviesData[playerName] || [],
      selectedMovies: moviesData[playerName],
    });
  };


  button = (playerImage, playerName) => {
    return (
      <div className="player-card">
        <div>
          <img src={playerImage}alt={playerName}style={{ width: 120, height: 120,borderRadius: "50%",objectFit: "cover",
            }}
          />
          <p>{playerName}</p>
        </div>
        <button
          className="player-button"
          style={this.props.style}
          onClick={() => this.handleButtonClick(playerName)}
        >
          Show Movies
        </button>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>Top 10 Bollywood Actors</h1>

        <div className="team">
          <div className="playersOne">
            {this.button(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf2NPYyv8kgwtyuD8K9UQc8H7o74FQB9mtIw&s",
              "Aamir Khan"
            )}
            {this.button(
              "https://in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg",
              "Salman Khan"
            )}
            {this.button(
              "https://images.javatpoint.com/biography/images/sidharth-malhotra.png",
              "Sidharth Malhotra"
            )}
            {this.button(
              "https://static.toiimg.com/thumb/msid-117285299,imgsize-23882,width-400,height-225,resizemode-72/117285299.jpg",
              "Amitabh Bachchan"
            )}
            {this.button(
              "https://images.firstpost.com/wp-content/uploads/2017/04/Akshay-Kumar-Copy.jpg?im=FitAndFill=(596,336)",
              "Akshay Kumar"
            )}
            {this.button(
              "https://m.media-amazon.com/images/M/MV5BODk3OWIyY2MtM2E0MS00OWYyLTlkNDktMzY4MTE1MDhiYzBiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
              "Shah Rukh Khan"
            )}
            {this.button(
              "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ranbir_Kapoor.jpg/170px-Ranbir_Kapoor.jpg",
              "Ranbir Kapoor"
            )}
            {this.button(
              "https://i.pinimg.com/736x/2c/3d/45/2c3d4523717057c5b63e596f32c869e7.jpg",
              "Varun Dhawan"
            )}
            {this.button(
              "https://media.themoviedb.org/t/p/w500/nHdQlBvORSKmH1F1kbyTFs0HLjU.jpg",
              "Kartik Aaryan"
            )}
            {this.button(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2V_QZx1NRqm-EjdteF8-xsGgHPx7tYTToTQ&s",
              "Ranveer Singh"
            )}
          </div>
        </div>

      
        {this.state.selectedMovies.length > 0 && (
          <div className="movies-list">
            <h2>Top Movies:</h2>
              {this.state.selectedMovies.map((movie, index) => (
                <p key={index}>{movie}</p>
              ))}
          </div>
        )}
      </div>
    );
  }
}

export default ActorB;





