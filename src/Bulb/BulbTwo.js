import React, {useState} from "react";
import "./BulbTwo.css";


export default function BulbTwo(){
 const [ bulbreaction, setBulbReaction] = useState ("BulbOf");

 const image ={
    Bulbyellow: "./yellow.png",
    Bulbgreen: "./green.png",
    Bulbred: "./red2.png",
 };

 const onChangeColor = (event)=>{
    setBulbReaction(event.target.value);
  };
  return(
   <div className="Main-container">
    <div className="Container">
      <img 
      src={image[bulbreaction]} height={390} width={400}/>
      <div className="btn">
        <div className="button-one">
             <button onClick={()=> setBulbReaction("Bulbyellow")} style={{backgroundColor:"yellow"}}>Yellow</button>
             
        </div>
        <div className="button-two">
            <button onClick={()=> setBulbReaction("Bulbgreen")} style={{backgroundColor:"green"}}>Green</button>
         </div>
         <div className="button-three">
            <button onClick={()=> setBulbReaction("Bulbred")} style={{backgroundColor:"red"}}>Red</button>
         </div>
         </div>
     </div>
     </div>
  )
}