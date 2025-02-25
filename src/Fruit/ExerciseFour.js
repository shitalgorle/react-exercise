// hooks

import React, {useState} from "react";
import "./ExerciseFour.css"


export default function ExerciseFour (){
    const [chooseFruit, setSelectedFruit] = useState ("Apple");

    const photos = {
        apple: "./apple.png",
        banana: "./banana.webp",
        orange: "./orange.png",
    };

    const onSelectChange = (event) => {
        console.log("onSelectChange")
        setSelectedFruit(event.target.value);
    };

    return(
        <div className="main-container">
        <div className="container">
            <h1>Select a Fruit</h1>

            <select className="fruit-list" onChange={onSelectChange}>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            </select>

            <h2>You selected Fruit: {chooseFruit}</h2>

            <img 
            style={{ width: "12vw", height:"20vh",marginLeft:"120px" }}
            src={photos[chooseFruit]}/>
            
        </div>
        </div>
    )
}


// *********


// import React, {useState} from "react";
// import "./ExerciseFour.css"


// export default  class  ExerciseFour  extends React.Component(){
//    constructor(props){
//     super(props);
//    }
//    this.state = {
//     selectedFruit:"apple"
//    }

//    setSelectedFruit = (value) =>{
//     this.setState{{selectedFruit: value}};
//    }
//     const photos = {
//         apple: "./apple.jpg",
//         banana: "./banana.webp",
//         orange: "./orange.avif",
//     };

//     const onSelectChange = (event) => {
//         console.log("onSelectChange")
//         setSelectedFruit(event.target.value);
//     };

//     render(){
//     return(
//         <div className="container">
//             <h1>Select a Fruit</h1>

//             <select className="fruit-list" onChange={onSelectChange}>
//             <option value="apple">Apple</option>
//             <option value="banana">Banana</option>
//             <option value="orange">Orange</option>
//             </select>

//             <h2>You selected Fruit: {chooseFruit}</h2>

//             <img 
//             style={{ width: "12vw", height:"20vh",marginLeft:"120px" }}
//             src={photos[chooseFruit]}/>
            
//         </div>
//     )
// }



