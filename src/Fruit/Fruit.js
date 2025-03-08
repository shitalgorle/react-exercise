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
        <div className="fruit-container">
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
