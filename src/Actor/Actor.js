import React, { Component } from "react";
import "./Actor.css";

const actors = [
  { name: "Aamir Khan", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf2NPYyv8kgwtyuD8K9UQc8H7o74FQB9mtIw&s",
     movies:["Tare Zameen Par","Rang De Basanti","Secret Superstar","Mangal Pandey","Dil Chahta Hai","3 Idiots","Lagaan", "Dangal","Ghajini", "PK"] },

  { name: "Salman Khan", image: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg", 
    movies: ["Bajrangi Bhaijaan","Ek Tha Tiger", "Bodyguard","Tere Naam","Tubelight","Dabangg", "Race 3","Sultan","Jai Ho","Kick"] },

  { name:   "Sidharth Malhotra", image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/685933_v9_ba.jpg", 
    movies: ["Student of the Year", "Hasee Toh Phasee","Baar Baar Dekho","Kapoor & Sons","Jabariya Jodi","Thank God","Shershaah","Ek Villain","Aiyaary","Yodha"] },

  { name:  "Amitabh Bachchan", image: "https://static.toiimg.com/thumb/msid-117285299,imgsize-23882,width-400,height-225,resizemode-72/117285299.jpg",
    movies:["Chupke Chupke","Shamitabh","Bhootnath","Agneepath","Deewaar","Zanjeer","Sholay", "Silsila", "Don","Paa"] },

  { name: "Akshay Kumar", image: "https://images.firstpost.com/wp-content/uploads/2017/04/Akshay-Kumar-Copy.jpg?im=FitAndFill=(596,336)", 
    movies: ["Toilet: Ek Prem Katha","Mission Mangal","Good Newwz","Housefull 4","Hera Pheri","Jolly LLB 2","Housefull","Khiladi","Kesari","Airlift"] },

    { name: "Sharukh Khan.", image: "https://m.media-amazon.com/images/M/MV5BODk3OWIyY2MtM2E0MS00OWYyLTlkNDktMzY4MTE1MDhiYzBiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
     movies:["Dilwale Dulhania Le Jayenge","My Name is Khan", "Jab Tak Hai Jaan","Chennai Express","Om Shanti Om","Karan Arjun","Devdas", "Raees","Don 2","Darr"] },

  { name:"Varun Dhawan", image:   "https://i.pinimg.com/736x/2c/3d/45/2c3d4523717057c5b63e596f32c869e7.jpg", 
    movies: ["Badrinath Ki Dulhania","Street Dancer 3D","Main Tera Hero","Sui Dhaaga","Badlapur", "Judwaa 2","Dishoom","ABCD 2","Dilwale","Kalank"] },

  { name:  "Ranbir Kapoor", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ranbir_Kapoor.jpg/170px-Ranbir_Kapoor.jpg", 
    movies: ["Ajab Prem Ki Ghazab Kahani", "Yeh Jawaani Hai Deewani","Jagga Jasoos","Wake Up Sid","Besharam","Raajneeti","Rockstar","Tamasha","Barfi!", "Sanju",] },

  { name:  "Kartik Aaryan", image:"https://media.themoviedb.org/t/p/w500/nHdQlBvORSKmH1F1kbyTFs0HLjU.jpg",
    movies:["Sonu Ke Titu Ki Sweety","Pyaar Ka Punchnama","Pati Patni Aur Woh","Bhool Bhulaiyaa 2","Guest in London","Luka Chuppi","Love Aaj Kal","Chhuriyaan","Dhamaka","Kaanchi"] },

  { name: "Ranveer Singh", image: "https://i.pinimg.com/originals/e7/d3/22/e7d3227bd9c5ebe40ac7dc47c81e2496.jpg", 
    movies: ["Goliyon Ki Raasleela Ram-Leela","Band Baaja Baaraat","Jayeshbhai Jordaar","Dil Dhadakne Do","Bajirao Mastani","Padmaavat","Gully Boy","Simmba","Lootera","Kill Dil"] },
];

class Actor extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedActor: null };
  }

  selectActor = (actor) => {
    this.setState({ selectedActor: actor });
  };

  render() {
    return (
      <div className="actor-container">
        <h1 style={{color:"white"}}>Top 10 Actors</h1>
        <div className="actor-list">
          {actors.map((actor, index) => (
            <div key={index} className="actor-card" onClick={() => this.selectActor(actor)}>
              <img src={actor.image} alt={actor.name} />
              <h3>{actor.name}</h3>
            </div>
          ))}
        </div>
        {this.state.selectedActor && (
          <div className="movies-list">
            <h2>Best 10 Movies</h2>
            <ul>
              {this.state.selectedActor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Actor;