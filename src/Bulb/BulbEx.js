import React, {useState} from "react";
import "./BulbEx.css";


export default function BulbEx(){
 const [ bulbreaction, setBulbReaction] = useState ("BulbOf");

 const image ={
    BulbOn: "./Bulbon1.png ",
    BulbOf: "./bulboff.png",
 };

 const onChangeColor = (event)=>{
    setBulbReaction(event.target.value);
  };
  return(
    <div className="main-container">
    <div className="container">
      <img 
      src={image[bulbreaction]} height={250} width={250}/>
      <div className="btn">
        <div className="button-one">
             <button onClick={()=> setBulbReaction("BulbOn")}>On</button>
             
        </div>
        <div className="button-two">
            <button onClick={()=> setBulbReaction("BulbOf")}>Off</button>
         </div>
         </div>
     </div>
     </div>
  )
}