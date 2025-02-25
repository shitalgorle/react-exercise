// import React from "react";
// import "./MyComponent.css";
// // import { Button } from "@coreui/coreui";


// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counterone: 0,
//       countertwo: 0,
//     };
//   }
//   showalert = () => {
//   if (this.state.alert == 0){
//        this.setState({ alert: 1 });
//       }else if (this.state.alert == 1){
//           this.setState({ alert: 2})
//   } else{
//           this.setState({alert :0})
  
//   };

//   counterIncr = () => {
//     this.setState({ counter: ++this.state.counterone });
//   };

//   renderScore = () => {
//     return this.state.counterone > 0 ? (
//       <text>{this.state.counterone}</text>
//     ) : null;
//   };

//   renderButton = (playerName, passedStyle) => {
//     return (
//       <button
//         className="button"
//         onClick={this.counterIncr}
//         style={passedStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };
//   render() {
//     const styleOne = { backgroundColor: "yellow", fontSize: "14px" };
//     const styleTwo = { backgroundColor: "green", fontSize: "14px" };
//     const styleThree = { backgroundColor: "purple", fontSize: "14px" };
//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.renderButton("player One", styleOne)}
//         {this.renderButton("player two", styleTwo)}
//         {this.renderButton("player three", styleThree)}
//       </div>
//     );
//   }
// }
// export default MyComponent;



// ***************************************************************************

// import React from "react";
// import "./MyComponent.css";
// import { Button } from "@coreui/coreui";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counterone: 0,
//       countertwo: 0,
//       alert: 0, 
//     };
//   }

 
//   showAlert = () => {
//     this.setState((prevState) => {
//       if (prevState.alert === 0) {
//         return { alert: 1 };
//       } else if (prevState.alert === 1) {
//         return { alert: 2 };
//       } else {
//         return { alert: 0 };
//       }
//     });
//   };


//   counterIncr = (player) => {
//     this.setState((prevState) => {
//       if (player === "playerOne") {
//         return { counterone: prevState.counterone + 1 };
//       } else if (player === "playerTwo") {
//         return { countertwo: prevState.countertwo + 1 };
//       }
//     });
//   };

//   renderScore = () => {
//     return (
//       <div>
//         <p>Player One: {this.state.counterone}</p>
//         <p>Player Two: {this.state.countertwo}</p>
//       </div>
//     );
//   };

//   renderButton = (playerName, passedStyle) => {
//     return (
//       <button
//         className="button"
//         onClick={() => this.counterIncr(playerName)}
//         style={passedStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };

//   render() {
//     const styleOne = { backgroundColor: "yellow", fontSize: "14px" };
//     const styleTwo = { backgroundColor: "green", fontSize: "14px" };
//     const styleThree = { backgroundColor: "purple", fontSize: "14px" };

//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.renderButton("playerOne", styleOne)}
//         {this.renderButton("playerTwo", styleTwo)}
//         {this.renderButton("playerThree", styleThree)}

//         <Button onClick={this.showAlert}>
//           Show Alert (Current State: {this.state.alert})
//         </Button>
//       </div>
//     );
//   }
// }

// export default MyComponent;



// ************************************************************************



// import React from "react";
// import "./MyComponent.css";

// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             alert: false,
//         };
//     }
//     showalert = () => {
//     if (this.state.alert == 0){
//          this.setState({ alert: 1 });
//         }else if (this.state.alert == 1){
//             this.setState({ alert: 2})

//     }
//     else{
//             this.setState({alert :0})
//         }

//     };

//       showalert = () => {
//     if (this.state.alert == 0){
//          this.setState({ alert: 1 });
//         }else if (this.state.alert == 1){
//             this.setState({ alert: 2})

//     }
//     else{
//             this.setState({alert :0})
//         }

//     };

//     render(){
//         return(
//             <div>
//                 {this.state.alert == 0? null : this.state.alert == 1?(
//                 <text>HELLO</text>
//                  ): (
//                     <text>Bye</text>
//                  )}
//                 <button className="button" onClick={this.showalert}>
//                   click me
//                 </button>
//             </div>
//         );
//     }
// }
// export default MyComponent;


// ********************************************************************************



// import React from "react";
// import "./MyComponent.css";


// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counterOne: 0,
//       counterTwo: 0,
//       lastClicked: "",
//     };
//   }

//   counterIncr = (buttonClicked) => {
//     console.log(buttonClicked);
//     this.setState({ lastClicked: buttonClicked });

//     if (buttonClicked === "Player One") {
//       this.setState((prevState) => ({ counterOne: prevState.counterOne + 1 }));
//     } else if (buttonClicked === "Player Two") {
//       this.setState((prevState) => ({ counterTwo: prevState.counterTwo + 1 }));
//     }
//   };

//   renderScore = () => {
//     let textStyle = { color: "black", fontSize: "14px" };

//     if (this.state.lastClicked === "Player One") {
//       textStyle = { color: "yellow", fontSize: "14px" };
//     } else if (this.state.lastClicked === "Player Two") {
//       textStyle = { color: "green", fontSize: "14px" };
//     } else if (this.state.lastClicked === "Player Three") {
//       textStyle = { color: "purple", fontSize: "14px" }; 
//     }

//     return <text style ={textStyle}>{this.state.counterOne}</text>;
    
//   };

//   renderButton = (playerName, passedStyle) => {
//     return (
//       <button
//         className="button"
//         onClick={() => this.counterIncr(playerName)} 
//         style={passedStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };

//   render() {
//     const styleOne = { backgroundColor: "lightcoral", fontSize: "14px" };
//     const styleTwo = { backgroundColor: "lightblue", fontSize: "14px" };
//     const styleThree = { backgroundColor: "lightgreen", fontSize: "14px" };

//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.renderButton("Player One", styleOne)}
//         {this.renderButton("Player Two", styleTwo)}
//         {this.renderButton("Player Three", styleThree)} 
//       </div>
//     );
//   }
// }

// export default MyComponent;


// ***************************************************************************


// import React from "react";
// import "./MyComponent.css";


// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counterOne: 0,
//       counterTwo: 0,
//       lastClicked: "",
//     };
//   }

//   counterIncr = (buttonClicked) => {
//     console.log(buttonClicked);
//     this.setState({ lastClicked: buttonClicked });

//     if (buttonClicked === "Player One") {
//       this.setState((prevState) => ({ counterOne: prevState.counterOne + 1 }));
//     } else if (buttonClicked === "Player Two") {
//       this.setState((prevState) => ({ counterTwo: prevState.counterTwo + 1 }));
//     }
//   };

//   renderScore = () => {
//     let textStyle = { color: "black", fontSize: "14px" };

//     if (this.state.lastClicked === "Player One") {
//       textStyle = { color: "yellow", fontSize: "14px" };
//     } else if (this.state.lastClicked === "Player Two") {
//       textStyle = { color: "green", fontSize: "14px" };
//     } else if (this.state.lastClicked === "Player Three") {
//       textStyle = { color: "purple", fontSize: "14px" }; 
//     }

//     return <text style ={textStyle}>{this.state.counterOne}</text>;
    
//   };

//   renderButton = (playerName, passedStyle) => {
//     return (
//       <button
//         className="button"
//         onClick={() => this.counterIncr(playerName)} 
//         style={passedStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };

//   render() {
//     const styleOne = { backgroundColor: "lightcoral", fontSize: "14px" };
//     const styleTwo = { backgroundColor: "lightblue", fontSize: "14px" };
//     const styleThree = { backgroundColor: "lightgreen", fontSize: "14px" };

//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.renderButton("Player One", styleOne)}
//         {this.renderButton("Player Two", styleTwo)}
//         {this.renderButton("Player Three", styleThree)} 
//       </div>
//     );
//   }
// }

// export default MyComponent;

// ******************************************************************



// import React from "react";
// import "./MyComponent.css";


// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counterOne: 0,
//       counterTwo: 0,
//       lastClicked: "",
//     };
//   }

//   counterIncr = (buttonClicked) => {
//     console.log(buttonClicked);
//     this.setState({lastClicked: buttonClicked});
//     this.setState({ counter: ++this.state.counterOne });

//     if (buttonClicked === "Player One") {
//       this.setState((prevState) => ({ counterOne: prevState.counterOne + 1 }));
//     } else if (buttonClicked === "Player Two") {
//       this.setState((prevState) => ({ counterTwo: prevState.counterTwo + 1 }));
//     }
//   };

//   renderScore = () => {
//     let textStyle = { color: "black", fontSize: "14px" };

//     if (this.state.lastClicked === "Player One") {
//       textStyle = { color: "yellow", fontSize: "14px" };
//     } else if (this.state.lastClicked === "Player Two") {
//       textStyle = { color: "green", fontSize: "14px" };
//     } else if (this.state.lastClicked === "Player Three") {
//       textStyle = { color: "purple", fontSize: "14px" }; 
//     }

//     return <text style ={textStyle}>{this.state.counterOne}</text>;
    
//   };

//   renderButton = (playerName, passedStyle) => {
//     return (
//       <button
//         className="button"
//         onClick={() => this.counterIncr(playerName)} 
//         style={passedStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };

//   render() {
//     const styleOne = { backgroundColor: "lightblue", fontSize: "14px" };
//     const styleTwo = { backgroundColor: "lightgreen", fontSize: "14px" };
//     const styleThree = { backgroundColor: "lightcoral", fontSize: "14px" };

//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.renderButton("Player One", styleOne)}
//         {this.renderButton("Player Two", styleTwo)}
//         {this.renderButton("Player Three", styleThree)} 
//       </div>
//     );
//   }
// }

// export default MyComponent;


// ***************************************************************************



// FIRST EXERCISE (  LIGHTCORAL TO GREEN)

// import React from "react";
// import "./MyComponent.css";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//         lastClicked: null,
//       counterone: 0,
//       countertwo: 0,
//     };
//   }
//   counterIncr = (buttonClicked) => {
//     console.log(buttonClicked);
//     this.setState({lastClicked: buttonClicked});
//     this.setState({ counter: ++this.state.counterone });
//   };

//   renderScore = () => {
//     let textStyle ={color:"black",fontSize:"14px"}
//     if(this.state.lastClicked =="player one"){
//         textStyle={color:"yellow",fontSize:"14px"}
//     } else if(this.state.lastClicked =="player two"){
//         textStyle={color:"green",fontSize:"14px"}
//     } else if(this.state.lastClicked =="player three"){
//         textStyle={color:"purple",fontSize:"14px"}
//     }
//     return  <text style={textStyle}>{this.state.counterone}</text>
    
//   };

//   renderButton = (playerName) => {
// let buttonStyle={background:"green",fontSize:"20px"}
// if(this.state.lastClicked===playerName){
//     buttonStyle = { background: "lightcoral", fontSize: "20px" }
// }
//     return (
//       <button
//         className="button"
//         onClick={()=>this.counterIncr(playerName)  }
//         style={buttonStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };
//   render() {
    
//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.renderButton("player one" )}
//         {this.renderButton("player two" )}
//         {this.renderButton("player three")}
//       </div>
//     );
//   }
// }
// export default MyComponent;


// ****************************************************************************


// SECOND EXERCISE IF WE CLICKED ON BUTTON SHOWS YOUR NAME

// import React from "react";
// import "./MyComponent.css";
// // import { Button } from "@coreui/coreui";
// // import { CAlert } from '@coreui/react'

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//         lastClicked: null,
//       counterone: 0,

//       players: {
//         "player one": "player one",
//         "player two": "player two",
//         "player three": "player three",
//       },
//     };
//   }
//   counterIncr = (buttonClicked) => {
//     this.setState((prevState) => ({
//       lastClicked: buttonClicked,
//       counterone: prevState.counterone + 1,
//       players: { ...prevState.players,
//         [buttonClicked]: "Shital", 
//       },
//     }));
//   };


//   renderScore = () => {
//     let textStyle ={color:"black",fontSize:"14px"}
//     if(this.state.lastClicked ==="player one"){
//         textStyle={color:"yellow",fontSize:"14px"}
//     } else if(this.state.lastClicked ==="player two"){
//         textStyle={color:"green",fontSize:"14px"}
//     } else if(this.state.lastClicked ==="player three"){
//         textStyle={color:"purple",fontSize:"14px"}
//     }
//     return  <text style={textStyle}>{this.state.counterone}</text>
    
//   };

//   renderButton = (playerName) => {
// let buttonStyle={background:"green",fontSize:"20px"}
// if(this.state.lastClicked===playerName){
//     buttonStyle = { background: "lightcoral", fontSize: "20px" }
// }
//     return (
//       <button
//         className="button"
//         onClick={()=>this.counterIncr(playerName)  }
//         style={buttonStyle}
//       >
//         {this.state.players[playerName]}
//       </button>
//     );
//   };
//   render() {
    
//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.renderButton("player one" )}
//         {this.renderButton("player two" )}
//         {this.renderButton("player three")}
//       </div>
//     );
//   }
// }
// export default MyComponent;

// ******************************************************************

// THIRD EXERCISE ( GREEN TO LIGHTCORAL)

// import React from "react";
// import "./MyComponent.css";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//         lastClicked: null,
//       counterone: 0,
//       countertwo: 0,
//     };
//   }
//   counterIncr = (buttonClicked) => {
//     console.log(buttonClicked);
//     this.setState({lastClicked: buttonClicked});
//     this.setState({ counter: ++this.state.counterone });
//   };

//   renderScore = () => {
//     let textStyle ={color:"black",fontSize:"14px"}
//     if(this.state.lastClicked =="player one"){
//         textStyle={color:"yellow",fontSize:"14px"}
//     } else if(this.state.lastClicked =="player two"){
//         textStyle={color:"green",fontSize:"14px"}
//     } else if(this.state.lastClicked =="player three"){
//         textStyle={color:"purple",fontSize:"14px"}
//     }
//     return  <text style={textStyle}>{this.state.counterone}</text>
    
//   };

//   renderButton = (playerName) => {
// let buttonStyle={background:"green",fontSize:"20px"}
// if(this.state.lastClicked===playerName){
//     buttonStyle = { background: "lightcoral", fontSize: "20px" }
// }
//     return (
//       <button
//         className="button"
//         onClick={()=>this.counterIncr(playerName)  }
//         style={buttonStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };
//   render() {
    
//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.renderButton("player one" )}
//         {this.renderButton("player two" )}
//         {this.renderButton("player three")}
//       </div>
//     );
//   }
// }
// export default MyComponent;


// ***********************************************************************

// FORTH EXERCISE AFTER CLICKING BUTTON BUTTON ARE REMOVE

// import React from "react";
// import "./MyComponent.css";
// // import { Button } from "@coreui/coreui";
// // import { CAlert } from '@coreui/react'

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//         lastClicked: null,
//       counterone: 0,
//        players:["player one","player two","player three"]
//     };
//   }
//   counterIncr = (buttonClicked) => {
//     console.log(buttonClicked);
//     this.setState({lastClicked: buttonClicked});
//     this.setState({ counter: ++this.state.counterone });
//     this.setState((prevState)=>({
//         players: prevState.players.filter((player)=> player !== buttonClicked)
//     }));
//   };

//   renderScore = () => {
//     let textStyle ={color:"black",fontSize:"14px"}
//     if(this.state.lastClicked ==="player one"){
//         textStyle={color:"yellow",fontSize:"14px"}
//     } else if(this.state.lastClicked ==="player two"){
//         textStyle={color:"green",fontSize:"14px"}
//     } else if(this.state.lastClicked ==="player three"){
//         textStyle={color:"purple",fontSize:"14px"}
//     }
//     return  <text style={textStyle}>{this.state.counterone}</text>
    
//   };

//   renderButton = (playerName) => {
// let buttonStyle={background:"green",fontSize:"20px"}
// if(this.state.lastClicked===playerName){
//     buttonStyle = { background: "lightcoral", fontSize: "20px" }
// }
//     return (
//       <button
//         className="button"
//         onClick={()=>this.counterIncr(playerName)  }
//         style={buttonStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };
//   render() {
    
//     return (
//         <div className="team">
//           {this.renderScore()}
//           {this.state.players.map((player) => this.renderButton(player))} {/ Render buttons dynamically /}
//         </div>
//       );
//   }
// }
// export default MyComponent;



// ***********************************************************************


// FORTH EXERCISE


// import React from "react";
// import "./MyComponent.css";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//       lastClicked: null,
//       counterone: 0,
//       countertwo: 0,
//       buttonA : true,
//       buttonB : true,
//       buttonC : true,
//     };
//   }
//   counterIncr = (buttonClicked) => {
//     console.log(buttonClicked);
//     if (buttonClicked == "player one")
//     this.setState({ buttonA: false});
//     else if (buttonClicked == "player two")
//     this.setState({ buttonB: false});
//     else if(buttonClicked == "player three")
//     this.setState({ buttonC: false});
//     this.setState({lastClicked: buttonClicked});
//     this.setState({ counter: ++this.state.counterone });
//   };

//   renderScore = () => {
//     let textStyle ={color:"black",fontSize:"18px"}

//     if(this.state.lastClicked =="player one"){
//         textStyle={color:"yellow",fontSize:"18px"}
//     } else if(this.state.lastClicked =="player two"){
//         textStyle={color:"green",fontSize:"18px"}
//     } else if(this.state.lastClicked =="player three"){
//         textStyle={color:"purple",fontSize:"18px"}
//     }
//     return  <text style={textStyle}>{this.state.counterone}</text>
    
//   };

//   renderButton = (playerName) => {
//      let buttonStyle={background:"lightblue",fontSize:"18px"}

//     return (
//       <button
//         className="button"
//         onClick={()=>this.counterIncr(playerName)  }
//         style={buttonStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };

//   render() {
//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.state.buttonA ? this.renderButton("player one" ):null}
//         {this.state.buttonB ? this.renderButton("player two" ):null}
//         {this.state.buttonC ? this.renderButton("player three" ):null}
//       </div>
//     );
//   }
// }
// export default MyComponent;

// *******************************************************************

// 11 PLAYER


// import React from "react";
// import "./MyComponent.css";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//       lastClicked: null,
//       counterone: 0,
//       countertwo: 0,
//       buttonA : true,
//       buttonB : true,
//       buttonC : true,
//       buttonD : true,
//       buttonE : true,
//       buttonF : true,
//       buttonG : true,
//       buttonH : true,
//       buttonI : true,
//       buttonJ : true,
//       buttonK : true,
     
//     };
//   }
//   counterIncr = (buttonClicked) => {
//     console.log(buttonClicked);
//     if (buttonClicked == "player one")
//     this.setState({ buttonA: false});
//     else if (buttonClicked == "player two")
//     this.setState({ buttonB: false});
//     else if(buttonClicked == "player three")
//     this.setState({ buttonC: false});
//     else if (buttonClicked == "player four")
//     this.setState({ buttonD: false});
//     else if(buttonClicked == "player five")
//     this.setState({ buttonE: false});
//     else if (buttonClicked == "player six")
//     this.setState({ buttonF: false});
//     else if(buttonClicked == "player seven")
//     this.setState({ buttonG: false});
//     else if (buttonClicked == "player eight")
//     this.setState({ buttonH: false});
//     else if(buttonClicked == "player nine")
//     this.setState({ buttonI: false});
//     else if (buttonClicked == "player ten")
//     this.setState({ buttonJ: false});
//     else if(buttonClicked == "player eleven")
//     this.setState({ buttonK: false});
//     this.setState({lastClicked: buttonClicked});
//     this.setState({ counter: ++this.state.counterone });
//   };

//   renderScore = () => {
//     let textStyle ={color:"black",fontSize:"18px"} 

//     if(this.state.lastClicked =="player one"){
//         textStyle={color:"yellow",fontSize:"18px"}
//     } else if(this.state.lastClicked =="player two"){
//         textStyle={color:"green",fontSize:"18px"}
//     } else if(this.state.lastClicked =="player three"){
//         textStyle={color:"purple",fontSize:"18px"}
//     } 
        
//     return  <text style={textStyle}>{this.state.counterone}</text> 
    

//   };

//   renderButton = (playerName) => {
//      let buttonStyle={background:"lightblue",fontSize:"18px"}

   
//     return (
//       <button
//         className="button"
//         onClick={()=>this.counterIncr(playerName)  }
//         style={buttonStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };

//   render() {
//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.state.buttonA ? this.renderButton("player one" ):null}
//         {this.state.buttonB ? this.renderButton("player two" ):null}
//         {this.state.buttonC ? this.renderButton("player three" ):null}
//         {this.state.buttonD ? this.renderButton("player four" ):null}
//         {this.state.buttonE ? this.renderButton("player five" ):null}
//         {this.state.buttonF ? this.renderButton("player six" ):null}
//         {this.state.buttonG ? this.renderButton("player seven" ):null}
//         {this.state.buttonH ? this.renderButton("player eight" ):null}
//         {this.state.buttonI ? this.renderButton("player nine" ):null}
//         {this.state.buttonJ ? this.renderButton("player ten" ):null}
//         {this.state.buttonK ? this.renderButton("player eleven" ):null}
      
//       </div>
//     );
//   }
// }
// export default MyComponent;


// ****************************************************************


// 11 PLAYERS WITH DIFFRENT COLOR


// import React from "react";
// import "./MyComponent.css";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//       lastClicked: null,
//       counterone: 0,
//       countertwo: 0,
//       buttonA : true,
//       buttonB : true,
//       buttonC : true,
//       buttonD : true,
//       buttonE : true,
//       buttonF : true,
//       buttonG : true,
//       buttonH : true,
//       buttonI : true,
//       buttonJ : true,
//       buttonK : true,
     
//     };
//   }
//   counterIncr = (buttonClicked) => {
//     console.log(buttonClicked);
//     if (buttonClicked == "player one")
//     this.setState({ buttonA: false});
//     else if (buttonClicked == "player two")
//     this.setState({ buttonB: false});
//     else if(buttonClicked == "player three")
//     this.setState({ buttonC: false});
//     else if (buttonClicked == "player four")
//     this.setState({ buttonD: false});
//     else if(buttonClicked == "player five")
//     this.setState({ buttonE: false});
//     else if (buttonClicked == "player six")
//     this.setState({ buttonF: false});
//     else if(buttonClicked == "player seven")
//     this.setState({ buttonG: false});
//     else if (buttonClicked == "player eight")
//     this.setState({ buttonH: false});
//     else if(buttonClicked == "player nine")
//     this.setState({ buttonI: false});
//     else if (buttonClicked == "player ten")
//     this.setState({ buttonJ: false});
//     else if(buttonClicked == "player eleven")
//     this.setState({ buttonK: false});
//     this.setState({lastClicked: buttonClicked});
//     this.setState({ counter: ++this.state.counterone });
//   };

//   renderScore = () => {
   
//     return  <text>{this.props.teamName}</text>;
//   };

//   renderButton = (playerName) => {
   
//     //   let buttonStyle=this.props.teamName == ? {background:"lightblue",fontSize:"18px", width : "30px"}:{background:"yellow",fontSize:"18px"} ***
// // or
//     let buttonStyle=this.props.buttonStyle;

//     return (
//       <button
//         className="button"
//         onClick={()=>this.counterIncr(playerName)  }
//         style={buttonStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };

//   render() {
//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.state.buttonA ? this.renderButton("player one" ):null}
//         {this.state.buttonB ? this.renderButton("player two" ):null}
//         {this.state.buttonC ? this.renderButton("player three" ):null}
//         {this.state.buttonD ? this.renderButton("player four" ):null}
//         {this.state.buttonE ? this.renderButton("player five" ):null}
//         {this.state.buttonF ? this.renderButton("player six" ):null}
//         {this.state.buttonG ? this.renderButton("player seven" ):null}
//         {this.state.buttonH ? this.renderButton("player eight" ):null}
//         {this.state.buttonI ? this.renderButton("player nine" ):null}
//         {this.state.buttonJ ? this.renderButton("player ten" ):null}
//         {this.state.buttonK ? this.renderButton("player eleven" ):null}
      
//       </div>
//     );
//   }
// }
// export default MyComponent;




// *******************************************************************************



// import React from "react";
// import "./MyComponent.css";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//       lastClicked: null,
//       counterone: 0,
//       countertwo: 0,
//       buttonArray :[
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//       ],
//     };
//   }
//   counterIncr = (index) => {
//     console.log(index);
//     let copiedArray = [...this.state.buttonArray];
//     copiedArray[index] = false;
//     this.setState({buttonArray : copiedArray});
//   };

//   renderScore = () => {
   
//     return  <text>{this.props.teamName}</text>;
//   };

//   renderButton = (index,playerName) => {
   
//     let buttonStyle=this.props.buttonStyle;

//     return (
//       <button
//         className="button"
//         onClick={()=>this.counterIncr(index,playerName)  }
//         style={buttonStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };

//   render() {
//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.state.buttonArray[0] ? this.renderButton(0,"player one"):null}
//         {this.state.buttonArray[1] ? this.renderButton(1,"player two"):null}
//         {this.state.buttonArray[2] ? this.renderButton(2,"player three"):null}
//         {this.state.buttonArray[3] ? this.renderButton(3,"player four"):null}
//         {this.state.buttonArray[4] ? this.renderButton(4,"player five"):null}
//         {this.state.buttonArray[5] ? this.renderButton(5,"player six"):null}
//         {this.state.buttonArray[6] ? this.renderButton(6,"player seven"):null}
//         {this.state.buttonArray[7] ? this.renderButton(7,"player eight"):null}
//         {this.state.buttonArray[8] ? this.renderButton(8,"player nine"):null}
//         {this.state.buttonArray[9] ? this.renderButton(9,"player ten"):null}
//         {this.state.buttonArray[10]? this.renderButton(10,"player eleven"):null}
      
//       </div>
//     );
//   }
// }
// export default MyComponent;



// ********************************************************************************

