
import React from "react";
import "./HomePage.css";


export default class ProfileImage extends React.Component{
    render(){

        return(
            <div className="header" id="Contact-Us">
                <div className="header-one">
                   <a href="https://github.com/shitalgorle/shitalFullStackDeveloper" style={{color:"pink"}}>Github</a>
                   </div>
                   <div className="header-one">
                   <a href="https://www.linkedin.com/login" style={{color:"pink"}}>LinkedIn</a>
                   </div>
                   <div className="header-one">
                   <a href="https://www.facebook.com/login/" style={{color:"pink"}}>Facebook</a>
                   </div>
                   <div className="header-one">
                 <a href="https://join.skype.com/invite/vjNof6Ekgo61" style={{color:"pink"}}>Skype</a>
                </div>
                
           </div>
                );
    }
}

export  class ProfileImageFive extends React.Component{
    render(){
       
        return(
        <div className="header" id="Contact-Us">
           <a href="https://github.com/shitalgorle/shitalFullStackDeveloper">Github</a>
           <a href="https://www.linkedin.com/login" style={{color:"white"}}>LinkedIn</a>
           <a href="https://www.facebook.com/login/">Facebook</a>
           <a href="https://join.skype.com/invite/vjNof6Ekgo61">Skype</a>
       </div>
            );
        }
    }

export  class ProfileImageOne extends React.Component{
    render(){
       
        return(
            <div className="container">
                <div className="container-one" id="Projects">
                    <h1 style={{ color: "white" }}> PROJECTS:-</h1>
        
                </div>
                <div className="container-two">
                    <div className="two" style={{color:"white"}}>
                    <a href=""><img src={"https://t4.ftcdn.net/jpg/10/98/46/01/360_F_1098460137_YK82EQ9toZUHVB7JtBJAdFKDxzFMctZF.jpg"} height={150} width={200}/></a>
                    </div>

                    <div className="two" style={{color:"white"}}>
                    <a href=""><img src={"https://cdn.pixabay.com/photo/2024/02/23/17/26/clock-8592484_1280.jpg"} height={150} width={200}/></a>
                    </div>

                    <div className="two" style={{color:"white"}}>
                    <img src={"https://media.istockphoto.com/id/165807215/vector/red-carpet-stage.jpg?s=612x612&w=0&k=20&c=rWJuCxhx3Dyqi_WeUO2FFEInkxYkY1pT2Db5rg2CGEM="} height={150} width={200}/>
                    </div>

                    <div className="two" style={{color:"white"}}>
                    <img src={"https://static.vecteezy.com/system/resources/previews/030/521/087/non_2x/color-square-multiplication-table-from-1-to-100-for-the-education-of-children-isolated-on-a-white-background-with-a-cute-cartoon-character-illustration-vector.jpg"} height={150} width={200}/>
                    </div>

                    <div className="two" style={{color:"white"}}>
                    <img src={"https://st3.depositphotos.com/2751237/15141/v/450/depositphotos_151419934-stock-illustration-player-in-cricket-championship-background.jpg"} height={150} width={200}/>
                    </div>
                </div>
               
            </div>
            );
    }
}


export  class ProfileImageTwo extends React.Component{
    render(){
       
        return(
            <div className="box-two" id="About">
               <h1 style={{ color: "white" }}>ABOUT ME:-</h1>
                  <p style={{ color: "white" }}>
                    Creative and analytical developer with strong academic and professional experience. Seeking to leverage
                    skills to help a company grow its brand and reach its target audience.</p>
               <h2>Full Stack Developer (HTML, CSS, JavaScript)</h2>
                  <p>Experience with HTML, CSS, JavaScript, Node.js, and Express.js for full-stack development. Skilled in
                    building responsive websites and web applications.</p>
                  <p>
                     Node javascript(js),Express javascript
                     API testing
                  </p>
                 <p>
                   I know these language C++,Java,Python,javascript including skills HTML,CSS,javascript,Mobile
                   Development,Android Development.
                 </p>
  
              </div>
          );
    }
}
export  class ProfileImageThree extends React.Component{
    render(){
       

        return(
            <div className="box-three" id="Home">
           <div className="home-one">
           <img src={"https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-download-in-svg-png-gif-file-formats--person-girl-business-pack-illustrations-6515859.png?f=webp"} className="profile-image"/>

           </div>
           <div className="home-two">
             {/* <marquee behavior=" loop" direction="right" scrollamount="5"> */}
               <h2 style={{ color: "white" }}>SHITAL GORLE</h2>
                {/* </marquee> */}
               <h1 style={{ color: "white" }}>Full Stack Developer</h1>
            
               <p style={{ color: "white" }}> Passionate about crafting beautiful, high-performance websites and web apps with a sharp focus on design and user experience.</p>
           </div>
          

          </div>

       );
    }
}

export class ProfileImageFour extends React.Component{
    render(){
        return(
             
    <header>
        <div className="nav-bar">
            <div className="header-logo">Shital</div>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact-Us">Contact-Us</a></li>
            </ul>
        </div>
    </header>
          
       
        );
    }
}

