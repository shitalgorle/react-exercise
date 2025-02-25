import React, {useState} from "react";
import "./BulbNew.css";


export default function BulbEx(){
 const [ bulbreaction, setBulbReaction] = useState ("BulbOf");

 const image ={
    BulbOn: "./Bulbon.jpeg ",
    BulbOf: "./bulboff.webp",
 };

 const onChangeColor = (event)=>{
    setBulbReaction(event.target.value);
  };
  return(
    <div className="container">
      <img 
      src={image[bulbreaction]} height={200} width={200}/>
      <div className="btn">
        <div className="button-one">
             <button onClick={()=> setBulbReaction("BulbOn")}>On</button>
             
        </div>
        <div className="button-two">
            <button onClick={()=> setBulbReaction("BulbOf")}>Off</button>
         </div>
         </div>
     </div>
  )
}