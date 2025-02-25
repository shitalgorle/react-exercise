
// src path

// import React from "react";
// import "./ImageO.css";
// import ground from "./assets/ground.jpg"

// export class ImageO extends React.Component{
//     render(){
//         return(
//             <div className="profile-div-gray">
//             <img src={ground} className="profile-image"/>
//         </div>
//         );
//     }
// }
// export default ImageO;


// ***************************************

// PUBLIC PATH


import React from "react";
import "./ImageO.css";

export class ImageO extends React.Component{
    render(){
        return(
            <div className="profile-div-gray">
            <img src={"back.jpg"} className="profile-image"/>
        </div>
        );
    }
}
export default ImageO;