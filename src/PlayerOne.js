

import React from "react";
import "./PlayerOne.css";

class PlayerOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  button = (playerImage, playerName) => {
    return (
      <div className="player-card">
        <div>
        <img src={playerImage} alt={playerName} style={{  width: 110, height: 110, borderRadius: '50%',  objectFit: 'cover' }} />   
          <p>{playerName}</p>
        </div>
        <button
          className="player-button"
          style={this.props.style}
          onClick={() => console.log(`${playerName} button clicked`)}
        >
          
        </button>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>India vs Australia</h1>
      
        {/* {/ India Team /} */}
        <div className="team">
          {/* <h2>India</h2> */}
         
          <div className="playersOne">
          
                  {this.button(
                    "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png", 
                    "Virat Kohli"
                  )}
                  {this.button(
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5IMvU5mzUNUAVtUPVexkzgt3cDPUE6113Q&s", 
                    "Rohit Sharma"
                  )}
                  {this.button(
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTOrxNuvbfIegOS-NrnhAEyFrP_oLB2UrOg&s", 
                    "Jasprit Bumrah"
                  )}
                    {this.button(
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrOFpzjaKeirBaa3SDBNf5T-mA1wii5c1Ejg&s", 
                    "K L Rahul"
                  )}
                    {this.button(
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGl9Jw5PJiIdgKtGk0g-UaEvDCkoAxWf9kA&s", 
                    "Ruturaj Gaikwad"
                  )}
                    {this.button(
                    "https://upload.wikimedia.org/wikipedia/commons/6/67/Rishabh_Pant_in_PMO_New_Delhi.jpg", 
                    "Rishbh Pant"
                  )}
                    {this.button(
                    "https://static.india.com/wp-content/uploads/2024/01/siraj1.jpg?impolicy=Medium_Widthonly&w=400&h=800", 
                    "Mohammad Siraj"
                  )}
                      {this.button(
                    "https://images-cricketcom.imgix.net/news-1692799700748?auto=compress,format&dpr=1&w=976&h400&q=80", 
                    "Shreyas Iyer"
                  )}
                    {this.button(
                    "https://upload.wikimedia.org/wikipedia/commons/9/91/Kuldeep_Yadav_in_PMO_New_Delhi.jpg", 
                    "Kuldeep Yadav"
                  )}
                    {this.button(
                    "https://www.mumbaiindians.com/static-assets/images/players/large/action-shots/63751.png?v=4.45&w=400", 
                    "Hardik Pandya"
                  )}
                    {this.button(
                    "https://upload.wikimedia.org/wikipedia/commons/2/2c/PM_Shri_Narendra_Modi_with_Ravindra_Jadeja_%28Cropped%29.jpg", 
                    "Ravindra Jadeja"
                  )}
          </div>
       

        {/* {/ Australia Team /} */}
       
          {/* <h2>Australia</h2> */}
        
          <div className="playersTwo">
            {this.button(
              "https://opt.toiimg.com/recuperator/img/toi/m-69415515/69415515.jpg", 
              "Steve Smith"
            )}
            {this.button(
              "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/travis-head.png", 
              "Travis Head"
            )}
            {this.button(
              "https://sportsmatik.com/uploads/world-events/players/pat-cummins_1580467882.jpg", 
              "Pat Cummins"
            )}
            {this.button(
              "https://static-files.cricket-australia.pulselive.com/headshots/288/3531-camedia.png", 
              "Nathan Ellis"
            )}
            {this.button(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMRLwwq4wM5Rrd1nyszAT5SRyKQAYbfMlCn4-PBqVmy67VVhooaFg0xc2zYKiP9gwc9c&usqp=CAU", 
              "Glenn Maxwell"
            )}
            {this.button(
              "https://static-files.cricket-australia.pulselive.com/headshots/440/852-camedia.png", 
              "Adam Zampa"
            )}
             {this.button(
              "https://crictoday.com/wp-content/uploads/2023/11/warner_player_of_the_tournamen_0_1200x768-1-NOW.webp", 
              "David Warner"
            )}
            {this.button(
              "https://static.toiimg.com/thumb/msid-105312151,width-1280,height-720,imgsize-55324,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg", 
              "Pat Cummins"
            )}
            {this.button(
              "https://static-files.cricket-australia.pulselive.com/headshots/288/3531-camedia.png", 
              "Nathan Ellis"
            )}
             {this.button(
              "https://m.media-amazon.com/images/M/MV5BYzVlYTU0OGQtZGFlMi00NjNiLWExNjctNjU1OTUzMTAxMGY5XkEyXkFqcGc@._V1_.jpg", 
              "Alex Carey"
            )}
             {this.button(
              "https://www.iplbetonline.in/wp-content/uploads/2023/04/857.png", 
              "Josh Hazlewood"
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PlayerOne;